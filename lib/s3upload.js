'use-strict'
require('dotenv').config()

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk')
const mime = require('mime-types')
const fs = require('fs')

// Create S3 service object
const s3 = new AWS.S3()

const fileType = mime.lookup(process.argv[2])
const typeOfContent = mime.contentType(fileType)

const filePath = process.argv[2]
const stringArray = filePath.split('/')

const filename = stringArray[stringArray.length - 1]
const fileDate = new Date().toISOString().split('T')[0]

const name = filename.split('.')[0]

console.log(name, fileDate, filePath)
const readStream = fs.createReadStream(process.argv[2])

const uploadParams = {
  ACL: 'public-read',
  Bucket: 'kumo-cloud',
  Key: `${fileDate}/${name}`,
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
    console.log(err)
    return
  }
  console.log(data)
})

// console.log(s3)
