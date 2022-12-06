# aws-cdk-localstack-practice
## Usage

1. LocalStackを起動する。

    ```bash
    docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
    ```

2. Dev Containerを起動する。

3. スタックをデプロイする。

    ```bash
    cd hello-world
    npm install
    cdklocal bootstrap aws://000000000000/us-east-1
    cdklocal deploy
    ```

4. デプロイしたLambda関数および関数URLを取得する。

    ```bash
    # Lambda関数の名前を取得
    awslocal lambda list-functions --query 'Functions[].[FunctionName,Runtime]' --output text
    # 関数URLを取得
    # <name>はLambda関数の名前を指定する
    awslocal lambda get-function-url-config --function-name <name>
    ```

5. Lambda関数を実行する。もしくは関数URLにアクセスする。

    ```bash
    # <name>はLambda関数の名前を指定する
    awslocal lambda invoke --function-name <name> /dev/stdout
    ```

6. アプリのリソースを破棄する。

    ```bash
    cdklocal destroy
    ```