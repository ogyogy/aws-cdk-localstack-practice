# aws-cdk-localstack-practice

AWS CDKの練習用リポジトリ。

## Usage

1. LocalStackを起動する。

    ```bash
    # LocalStackを起動
    docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
    ```

2. 各プロジェクトフォルダの`README.md`に従いスタックをデプロイする。
