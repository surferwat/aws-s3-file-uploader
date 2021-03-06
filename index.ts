import axios from 'axios'


//  AwsS3FileUploader()
//  A JavaScript library for file upload to AWS S3 bucket from the client side.

const AwsS3FileUploader = class {
    private url: string // unsigned or signed upload url
    private headers: object // headers to be included in request
    private data: object // file object to be included in request and uploaded to the S3 bucket

    constructor(initUrl: string, initHeaders: object, initData: object) {
        this.url = initUrl
        this.headers = initHeaders
        this.data = initData
    }

    async uploadFile(): Promise<object> {
        const res = await axios({
            url: this.url,
            method: 'PUT',
            headers: this.headers,
            data: this.data
        })
        if (res.status !== 200) return Promise.reject(res)
        return Promise.resolve({
            data: res.data,
            status: res.status,
            statusText: res.statusText
        })
    }
}


export = AwsS3FileUploader
