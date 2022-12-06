# aws-cdk-localstack-practice

AWS CDKの練習用リポジトリ。

## Usage

1. LocalStackを起動する。

    ```bash
    docker run --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
    ```

2. VSCodeから開発用コンテナにアクセスする。 _cf._ [Developing inside a Container using Visual Studio Code Remote Development](https://code.visualstudio.com/docs/devcontainers/containers)
3. 各プロジェクトフォルダの`README.md`に従いスタックをデプロイする。
