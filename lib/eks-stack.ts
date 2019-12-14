import cdk = require("@aws-cdk/core");
import * as ec2 from "@aws-cdk/aws-ec2";
import * as iam from "@aws-cdk/aws-iam";

import * as eks from "@aws-cdk/aws-eks";
import * as eksg from "./eks.generated";
const YAML = require("yamljs");
import { MyEksCluster } from "./my-eks";
import { MyInstance } from "./instance";
import { Tag } from "@aws-cdk/core";
import { MyEndpoints } from "./my-endponts";
import { SubnetType, VpcProps } from "@aws-cdk/aws-ec2";

export class EksStack extends cdk.Stack {
  get availabilityZones() {
    return ["ap-northeast-1b", "ap-northeast-1c", "ap-northeast-1d" /**/];
  }

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    Tag.add(this, "Owner", "takeshi");

    const subnetType: SubnetType = ec2.SubnetType.PRIVATE;

    const vpcProps = {
      cidr: "10.0.0.0/16",
      enableDnsHostnames: true,
      enableDnsSupport: true,
      maxAzs: 2
    } as any;
    ((type: SubnetType) => {
      if (type === ec2.SubnetType.ISOLATED) {
        vpcProps["subnetConfiguration"] = [
          {
            cidrMask: 24,
            name: "MySubnet",
            subnetType: subnetType
          }
        ];
      }
    })(subnetType);

    const vpc = new ec2.Vpc(this, "VPC", vpcProps);

    const myEndpoints = new MyEndpoints(this,"Endpoints",{
      vpc:vpc,
      subnetType:subnetType
    });

    const myCluster = new MyEksCluster(this, "MyCluster", {
      vpc: vpc,
      subnetType:subnetType
    });

    const myInstance = new MyInstance(this,"MyInstance",{
      vpc:vpc,
      subnetType:subnetType,
      myCluster:myCluster
    });
  }
}
