import { Resource, Construct, ResourceProps } from "@aws-cdk/core";
import { Vpc, SubnetType } from "@aws-cdk/aws-ec2";
import * as ec2 from "@aws-cdk/aws-ec2";

interface MyVpcProps extends ResourceProps{
  vpc:Vpc;
  subnetType:SubnetType;
}


export class MyEndpoints extends Resource{

  vpc:Vpc;

  constructor(scope:Construct,id:string,props:MyVpcProps){
    super(scope,id,props);
    const vpc = props.vpc;
    
    const sg = new ec2.SecurityGroup(this, "SG", {
      vpc: vpc
    });
    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.allTcp());

    vpc.addS3Endpoint("s3-endpont", [
      vpc.selectSubnets({
        subnetType: props.subnetType
      })
    ]);

    const ifs = [
      ec2.InterfaceVpcEndpointAwsService.SSM,
      ec2.InterfaceVpcEndpointAwsService.SSM_MESSAGES,
      ec2.InterfaceVpcEndpointAwsService.EC2,
      ec2.InterfaceVpcEndpointAwsService.EC2_MESSAGES,
      ec2.InterfaceVpcEndpointAwsService.CLOUDWATCH_LOGS
    ];

    let count = 0;
    for (let endponit of ifs) {
      count++;
      const ssm = vpc.addInterfaceEndpoint("endpoint" + count, {
        service: endponit,
        securityGroups:[sg]
      });
    }

  }
}