import cdk = require("@aws-cdk/core");
import * as ec2 from "@aws-cdk/aws-ec2";
import * as iam from "@aws-cdk/aws-iam";

import * as eks from "@aws-cdk/aws-eks";

import * as lambda from "@aws-cdk/aws-lambda";
import * as kl from "@aws-cdk/aws-eks/lib/kubectl-layer";
const path = require("path");

import * as eksg from "./eks.generated";
import { SubnetType } from "@aws-cdk/aws-ec2";
const YAML = require("yamljs");

interface MyEksClusterProps extends cdk.ResourceProps {
  vpc: ec2.Vpc;
  subnetType: SubnetType;
}

export class MyEksCluster extends cdk.Resource {
  clusterName: string;
  role:iam.CfnRole;

  constructor(scope: cdk.Construct, id: string, props: MyEksClusterProps) {
    super(scope, id, props);
    cdk.Tag.add(this, "Onwer", "takeshi");

    const vpc = props.vpc;
    const securityGroup = new ec2.SecurityGroup(
      this,
      "ControlPlaneSecurityGroup",
      {
        vpc: vpc,
        description: "EKS Control Plane Security Group"
      }
    );
    const connections = new ec2.Connections({
      securityGroups: [securityGroup],
      defaultPort: ec2.Port.tcp(443)
    });

    const eksRole = this.role =new iam.CfnRole(this, "eksRole", {
      assumeRolePolicyDocument: YAML.parse(`
Statement:
- Action:
  - sts:AssumeRole
  Effect: Allow
  Principal:
    Service:
    - eks.amazonaws.com
    - eks-fargate-pods.amazonaws.com
Version: '2012-10-17'
      `),
      managedPolicyArns: [
        "arn:aws:iam::aws:policy/AmazonEKSServicePolicy",
        "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
      ]
    });

    const cluster = new eksg.CfnCluster(this, "EKS", {
      resourcesVpcConfig: {
        securityGroupIds: [securityGroup.securityGroupId],
        subnetIds: vpc.selectSubnets({
          subnetType: props.subnetType
        }).subnetIds
      },
      roleArn: eksRole.attrArn
    });

    const workerIam = new iam.CfnRole(this, "worker", {
      assumeRolePolicyDocument: YAML.parse(`
Statement:
- Action:
  - sts:AssumeRole
  Effect: Allow
  Principal:
    Service:
    - ec2.amazonaws.com
Version: '2012-10-17'
`),
      managedPolicyArns: [
        "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
        "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
        "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
      ],
      path: "/"
    });

    const managedNode = new eksg.CfnNodegroup(this, "group", {
      nodeRole: workerIam.attrArn,
      subnets: vpc.selectSubnets({
        subnetType: props.subnetType
      }).subnetIds,
      clusterName: cluster.ref,
      scalingConfig: {
        desiredSize: 2,
        maxSize: 2,
        minSize: 2
      }
    });

    const clusterName = (this.clusterName = this.getResourceNameAttribute(
      cluster.ref
    ));
    const updateConfigCommandPrefix = `aws eks update-kubeconfig --name ${clusterName}`;
    new cdk.CfnOutput(this, "ConfigCommand", {
      value: `${updateConfigCommandPrefix}`
    });

    new cdk.CfnOutput(this, "ToPrivateCommand", {
      value: `aws eks --region ${this.stack.region} update-cluster-config --name ${clusterName} --resources-vpc-config endpointPublicAccess=false,endpointPrivateAccess=true`
    });

  }

}
