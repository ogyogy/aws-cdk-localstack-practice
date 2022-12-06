import json
import os
import re

import boto3

dynamodb = boto3.resource('dynamodb', endpoint_url='http://localhost:4566')


def lambda_handler(event, context):
    try:
        # 環境変数からテーブル名を取得
        table_name = os.getenv('TABLE_NAME')

        table = dynamodb.Table(table_name)
        http_method = event['requestContext']['http']['method']

        if http_method != 'GET':
            # GETリクエスト以外はエラー
            return {
                'statusCode': 400,
                'message': 'Bad Request'
            }

        # パスパラメータを取得
        http_path = event['requestContext']['http']['path']

        # パスの文字列が先頭で/items/<id>にマッチするか取得
        pattern = r'/items/(?P<id>[^/]+)[/]?'
        m = re.match(pattern, http_path)

        if m:
            # パスパラメータからidを文字列で取得
            d = m.groupdict()
            item_id = d['id']

            # テーブル内にidと一致するアイテムがあるか検索
            response = table.get_item(Key={'id': item_id})

            print('response:', response)

            if 'Item' in response:
                # テーブル内にアイテムが存在する場合はJSONに変換して返却
                item = response['Item']
                return {
                    'statusCode': 200,
                    'item': json.dumps(item)
                }
            else:
                # テーブル内にアイテムが存在しない場合は404エラー
                return {
                    'statusCode': 404,
                    'message': 'Not found'
                }
        else:
            raise ValueError('Unsupported route')
    except Exception as e:
        return {
            'statusCode': 400,
            'message': str(e)
        }
