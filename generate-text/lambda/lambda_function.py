import json
import os
from datetime import datetime

import boto3

s3 = boto3.resource(
    service_name='s3',
    endpoint_url='http://localhost:4566',
    region_name='us-east-1'
)


def lambda_handler(event, context):
    bucket_name = os.getenv('BUCKET_NAME')
    key = f'{datetime.now().strftime("%Y%m%d%H%M%S")}.txt'
    body = 'generate file'

    s3.Bucket(bucket_name).put_object(Key=key, Body=body)

    return {
        'statusCode': 200,
        'body': json.dumps({
            'message': f'{key} generated.'
        })
    }
