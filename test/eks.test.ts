import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Eks = require('../lib/eks-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Eks.EksStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});