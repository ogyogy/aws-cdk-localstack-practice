import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class HttpApiDynamoDbStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HttpApiDynamoDbQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // DynamoDBのテーブルを作成
    const db = new dynamodb.Table(this, 'TodoItems', {
      // テーブル名
      tableName: 'TodoItems',
      // パーティションキー
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING,
      },
      // 本番環境では非推奨
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // Lambda関数を作成
    const todoLambda = new lambda.Function(this, 'TodoHandler', {
      // 関数名
      functionName: 'TodoHandler',
      // ランタイム
      runtime: lambda.Runtime.PYTHON_3_9,
      // ハンドラー関数の名前
      handler: 'lambda_function.lambda_handler',
      // ソースコードのディレクトリ
      code: lambda.Code.fromAsset('lambda'),
      // 環境変数
      environment: {
        TABLE_NAME: db.tableName,
      },
    });

    // 関数URLを追加
    todoLambda.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    // Lambda関数にDynamoDBの読み取り権限を追加
    db.grantReadData(todoLambda);
  }
}
