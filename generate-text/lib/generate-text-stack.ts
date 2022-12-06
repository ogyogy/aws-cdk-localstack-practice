import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class GenerateTextStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // S3の定義
    const bucket = new s3.Bucket(this, "GenerateTextBucket");

    // Lambda関数の定義
    const hello = new lambda.Function(this, "GenerateTextHandler", {
      // ランタイム
      runtime: lambda.Runtime.PYTHON_3_9,
      // ハンドラー関数の名前
      handler: "lambda_function.lambda_handler",
      // ソースコードのディレクトリ
      code: lambda.Code.fromAsset("lambda"),
      // 環境変数
      environment: {
        BUCKET_NAME: bucket.bucketName
      }
    });

    // LambdaにS3に対する権限を追加
    bucket.grantPut(hello)
  }
}
