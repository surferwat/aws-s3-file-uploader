## Description

A program to upload a file to AWS S3 directly from a web or mobile application

## Usage

```
import { AwsFileUploader } from './AwsFileUploader'


// Initialize variables
const url = 'https://my-s3-signed-or-unsigned-url.com/'
const headers = {
    'Content-Type':'text/plain',
    'Access-Control-Allow-Origin': '*'
}
const file = new File(['foo'], 'foo.text', { type: 'text/plain'})

// Initialize new AwsFileUploader object
const awsFileUploader = new AwsFileUploader(url, headers, file)

// Upload file to AWS S3
awsFileUploader
    .uploadFile()
    .then(data => console.log(data))
    .catch(e => console.error(e))
```

## References

https://aws.amazon.com/blogs/compute/uploading-to-amazon-s3-directly-from-a-web-or-mobile-application/


