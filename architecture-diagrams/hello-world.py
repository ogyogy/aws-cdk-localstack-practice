
from diagrams import Diagram
from diagrams.aws.compute import Lambda

with Diagram("hello-world", show=False):
    Lambda("Lambda")
