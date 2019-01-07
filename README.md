# Kumo-Back-End-Client
Kumo (cloud in Japanese) is a secure cloud services platform that offers database
storage, content delivery and other functionality to help users maintain files or collections online.

## Links

* [Front-end repo]()
* [Kumo Application Deployed]()
* [Back-end repo]()
* [Heroku Server]()

## Technologies Used

* HTML
* CSS/SASS
* Javascript
* JQuery
* Handlebars
* AJAX
* Bootstrap
* Express API
* Amazon Web Services
* MongoDB

## Thought Process & Execution
* For the back-end of the application there were 3 main objectives;
- 1. Utilizing Kumo, upload file(s) from a local device and send it to Amazon Web Services.
- 2. Once hosted in AWS, users would be able to download the file(s), update the , and delete the file(s). 
- 3. View metadata (date created/uploaded,
date modified, owner, tag) for each file rendered on Kumo.

## User Stories

* As an unregistered user, I would like to sign up with email and password.

* As a registered user, I would like to sign in with email and password.

* As a signed in user, I would like to change password.

* As a signed in user, I would like to sign out.

* As a signed in user, I would like to upload a file to AWS.

* As a signed in user, I would like to update my file on AWS.

* As a signed in user, I would like to delete my file on AWS.

* As a signed in user, I would like to download files from AWS.

* As a signed in user, I would like to see the name of all files on AWS.

* As a signed in user, I would like to see the following meta-data for any file:

- date created/uploaded
- date modified
- owner (user who uploaded the file)
- tag

## ERD (entity relationship diagram)

![ERD Image](https://i.imgur.com/JvuQpBN.png)

## Unsolved Problems

## Future Versions

* Below are some practical features to implement in future versions:
* Enable users to create "collaborators" which can be chosen; they have permission to read from and write to files.
* Allow users to generate file share links for other users.
* Implement a feature to make user owned files public.
* Introduce a "Write Once Read Many" (WORM) model along with an Object Lock feature that would allow file owners
to protect their public files from being edited by other users.
* Add Server or Client side encryption in the app settings.
