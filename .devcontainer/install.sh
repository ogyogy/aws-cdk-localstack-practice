#!/bin/sh
sudo apt update && sudo apt -y install graphviz 
pip3 install --user awscli-local diagrams
npm install -g npm install -g aws-cdk-local aws-cdk