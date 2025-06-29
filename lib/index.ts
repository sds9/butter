// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface ButterProps {
  // Define construct properties here
}

export class Butter extends Construct {
  constructor(scope: Construct, id: string, _props: ButterProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'ButterQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
