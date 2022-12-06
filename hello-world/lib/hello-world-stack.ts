import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from "aws-cdk-lib/aws-lambda";

export class HelloWorldStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HelloWorldQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // Lambda関数の定義
    const hello = new lambda.Function(this, "HelloWorldHandler", {
      // ランタイム
      runtime: lambda.Runtime.PYTHON_3_9,
      // ハンドラー関数の名前
      handler: "lambda_function.lambda_handler",
      // ソースコードのディレクトリ
      code: lambda.Code.fromAsset("lambda"),
    });

    // 関数URLを追加
    const helloUrl = hello.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });
  }
}
