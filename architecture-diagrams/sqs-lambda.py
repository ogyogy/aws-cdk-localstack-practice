
from diagrams import Diagram
from diagrams.aws.compute import Lambda
from diagrams.aws.integration import SQS

with Diagram("sqs-lambda", show=False):
    SQS("SQS") >> Lambda("Lambda")
