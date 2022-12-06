# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Usage

```bash
# LocalStackを起動
docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
# スタックをデプロイ
npm install
cdklocal bootstrap aws://000000000000/us-east-1
cdklocal deploy
# デプロイしたLambda関数および関数URLを取得
# Lambda関数の名前を取得
awslocal lambda list-functions --query 'Functions[].[FunctionName,Runtime]' --output text
# 関数URLを取得
# FunctionNameはLambda関数の名前を指定する
awslocal lambda get-function-url-config --function-name FunctionName
5. Lambda関数を実行する。もしくは関数URLにアクセスする。
# FunctionName>はLambda関数の名前を指定する
awslocal lambda invoke --function-name FunctionName /dev/stdout
# アプリのリソースを破棄
cdklocal destroy
```
