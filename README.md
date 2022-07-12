# Lamda_Image_Upload

Step to run:

0) Install serverless: (npm install -g serverless) config serverless: (serverless config credentials --provider aws --key <your_access_key_id> --secret <your_access_key_secret>).
1) Do npm install (For package install)
2) Update the s3 bucket credentials.
3) Run cmd for deploy: serverless deploy
4) Get the URL and test with postman. (body required photoUrl)
