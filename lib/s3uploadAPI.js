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
    const fileType = mime.lookup(fileName)
    const typeOfContent = mime.contentType(fileType)
    const readStream = fs.createReadStream(req.file.path)

    const uploadParams = {
      ACL: 'public-read',
      Bucket: 'kumo-cloud',
      Key: `${fileDate}/${fileName}`,
      Body: readStream,
      ContentType: typeOfContent
    }

    // fs.readFile(process.argv[2], (err, data) => {
    //   if (err) {
    //     console.log(err)
    //   }
    //   console.log(data)
    // })

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
