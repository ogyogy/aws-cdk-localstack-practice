
from diagrams import Diagram
from diagrams.aws.compute import Lambda
from diagrams.aws.database import Dynamodb

with Diagram("http-api-dynamo-db", show=False):
    Lambda("Lambda") >> Dynamodb("DynamoDB")
