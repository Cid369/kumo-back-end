'use-strict'
require('dotenv').config()

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk')
const mime = require('mime-types')
const fs = require('fs')

// Create S3 service object
const s3 = new AWS.S3()

const s3Upload = function (req) {
  return new Promise((resolve, reject) => {
    const fileDate = new Date().toISOString().split('T')[0]

    const fileName = req.file.originalname
    const givenFileName = req.body.image.title
    const givenFileType = fileName.split('.')[1]
    const fileType = mime.lookup(fileName)
    const typeOfContent = mime.contentType(fileType)
    const readStream = fs.createReadStream(req.file.path)

    console.log(`${givenFileName}.${givenFileType}`)
    const uploadParams = {
      ACL: 'public-read',
      Bucket: 'kumo-cloud',
      Key: `${fileDate}/${givenFileName}.${givenFileType}`,
      Body: readStream,
      ContentType: typeOfContent
    }

    s3.upload(uploadParams, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
// console.log(s3)

module.exports = s3Upload
