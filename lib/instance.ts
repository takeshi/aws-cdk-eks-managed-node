import * as cdk from "@aws-cdk/core";
import { Vpc, SubnetType } from "@aws-cdk/aws-ec2";
import * as ec2 from "@aws-cdk/aws-ec2";
import * as iam from "@aws-cdk/aws-iam";
import { CfnOutput } from "@aws-cdk/core";

import * as k8s from "@aws-cdk/aws-eks/lib/k8s-resource";
import { MyEksCluster } from "./my-eks";

interface MyInstanceProps extends cdk.ResourceProps{
  vpc:Vpc,
  subnetType?:SubnetType,
  myCluster:MyEksCluster
}


export class MyInstance extends cdk.Resource{

  instanceRole:iam.Role;

  constructor(scope:cdk.Construct,id:string,props:MyInstanceProps){
    super(scope,id,props);
    const vpc = props.vpc;

    const image = new ec2.AmazonLinuxImage({
      generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2
    });

    const sg = new ec2.SecurityGroup(this, "InstanceSg", {
      vpc: vpc
    });
    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.allTcp());

    const instanceRole =  this.instanceRole = new iam.Role(this, "IamRole", {
      assumedBy: new iam.ServicePrincipal("ec2.amazonaws.com"),
      roleName: `vm`,
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          "service-role/AmazonEC2RoleforSSM"
        ),
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          "AdministratorAccess"
        ),
      ]
    });

    const vm = new ec2.Instance(this, "ec2", {
      vpc: vpc,
      vpcSubnets:vpc.selectSubnets({
        subnetType:props.subnetType
      }),
      securityGroup: sg,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3,
        ec2.InstanceSize.MICRO
      ),
      machineImage: image,
      role: instanceRole
    });

    const instanceName = this.getResourceNameAttribute(vm.instance.ref);

    new CfnOutput(this,"VM",{
      value:`aws ssm start-session --target ${instanceName}`
    })

    new CfnOutput(this,"AWS-Auth",{
      value:`
apiVersion: v1
kind: ConfigMap
metadata:
  name: aws-auth
  namespace: kube-system
data:
  mapRoles: |
    - rolearn: ${props.myCluster.role.attrArn}
      username: system:node:{{EC2PrivateDNSName}}
      groups:
        - system:bootstrappers
        - system:nodes
  mapUsers: |
    - userarn: ${instanceRole.roleArn}
      username: admin
      groups:
        - system:masters
      `
    })
    

  }

}