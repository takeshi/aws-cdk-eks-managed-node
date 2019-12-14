#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { EksStack } from '../lib/eks-stack';

const app = new cdk.App();
new EksStack(app, 'EksStack',{
  env:{
    region:"ap-northeast-1"
  }
});
