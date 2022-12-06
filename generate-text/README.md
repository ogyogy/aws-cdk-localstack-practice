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
# スタックをデプロイ
npm install
cdklocal bootstrap aws://000000000000/us-east-1
cdklocal deploy
# デプロイしたLambda関数および関数URLを取得
# Lambda関数の名前を取得
awslocal lambda list-functions --query 'Functions[].[FunctionName,Runtime]' --output text
# FunctionNameはLambda関数の名前を指定する
awslocal lambda invoke --function-name FunctionName /dev/stdout
# S3のバケット名を確認
awslocal s3 ls
# S3のバケットの中身を確認
# BucketNameは確認したバケット名を指定する
# Lambdaの実行日時.txtが表示されたら成功
awslocal s3 ls s3://BucketName
# アプリのリソースを破棄
cdklocal destroy
```
