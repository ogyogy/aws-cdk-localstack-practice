import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export class SqsLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const queue = new sqs.Queue(this, 'LambdaSqsQueue', {
      visibilityTimeout: cdk.Duration.seconds(300),
    });

    // Lambda関数の定義
    const fn = new lambda.Function(this, 'SqsTriggerLambdaFunction', {
      // ランタイム
      runtime: lambda.Runtime.PYTHON_3_9,
      // ハンドラー関数の名前
      handler: 'lambda_function.lambda_handler',
      // ソースコードのディレクトリ
      code: lambda.Code.fromAsset('lambda'),
    });

    // Lambda関数にSQSの読み取り権限を付与
    queue.grantConsumeMessages(fn);

    // SQSをトリガーにLambda関数を起動する
    fn.addEventSource(new SqsEventSource(queue));
  }
}
