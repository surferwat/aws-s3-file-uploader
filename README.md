## Description

A program to upload a file to AWS S3 directly from a web or mobile application.

## Installation

Step 1 Clone the repo 

```
git clone https://github.com/surferwat/aws-s3-file-uploader.git
```

Step 2 Install the module

```
npm install /file/path/to/module
```

## Usage

```javascript
import { AwsS3FileUploader } from 'aws-s3-file-uploader'

// Initialize variables
const url = 'https://my-s3-signed-or-unsigned-url.com/'
const headers = {
    'Content-Type':'text/plain',
    'Access-Control-Allow-Origin': '*'
}

// Initialize new AwsS3FileUploader object
const awsS3FileUploader = new AwsS3FileUploader(url, headers, file)

// Upload file to AWS S3
awsS3FileUploader
    .uploadFile()
    .then(data => console.log(data))
    .catch(e => console.error(e))
```

## References

https://aws.amazon.com/blogs/compute/uploading-to-amazon-s3-directly-from-a-web-or-mobile-application/


