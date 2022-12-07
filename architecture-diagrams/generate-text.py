from diagrams import Diagram
from diagrams.aws.compute import Lambda
from diagrams.aws.storage import S3

with Diagram("generate-text", show=False):
    Lambda("Lambda") >> S3("S3")
