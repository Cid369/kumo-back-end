# Kumo-Back-End-Client
Kumo (cloud in Japanese) is a secure cloud services platform that offers database
storage, content delivery and other functionality to help users maintain files or collections online.

Kumo prompts users to create an account for authentication purposes. Once logged in they can change their password and sign-out. The application works by allowing users to upload file(s) into its database. Once files are uploaded, they can also be updated & deleted; in addition users will be able to see all of the names of their files through integrated features.

## Links

* [Back-end repo](https://github.com/jooewoo/kumo-back-end) (Current Repo)
* [Front-end repo](https://github.com/jooewoo/kumo-front-end-client)
* [Kumo Application Deployed](https://jooewoo.github.io/kumo-front-end-client/)
* [Heroku Server](https://glacial-chamber-28137.herokuapp.com)

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
* Mongoose

## Thought Process & Execution

* For the back-end of the application there were 3 main objectives:
- 1. Utilizing Kumo, upload file(s) from a local device and send it to Amazon Web Services.
- 2. Once hosted in AWS, users would be able to download, update and delete the file(s). Furthermore, users should be able to see the names of all their files if needed.
- 3. View metadata (date created/uploaded,
date modified, owner, tag) for each file rendered on Kumo.

## Path Catalogues:

### Users
| Verb   |    URL Pattern           | Controller#Action    |
|--------|--------------------------|----------------------|
| POST   | `/sign-up`               | `users#signup`       |
| POST   | `/sign-in`               | `users#signin`       |
| DELETE | `/sign-out`              | `users#signout`      |
| PATCH  | `/change-password`       | `users#changepw`     |

### Collections
| Verb   |    URL Pattern           | Controller#Action    |
|--------|--------------------------|----------------------|
| GET    | `/collections`           | `collections#index`  |
| POST   | `/collections`           | `collections#create` |
| GET    | `/collections/:id`       | `collections#show`   |
| PATCH  | `/collections/:id`       | `collections#update` |
| DELETE | `/collections/:id`       | `collections#destroy`|


## ERD (entity relationship diagram)

![ERD Images](https://i.imgur.com/JvuQpBN.png)
<!-- Link below not working properly it fades as if it were hiding it. -->
<!-- ![ERD Images](./public/kumoerd.png) -->

## Unsolved Problems

* Modernize Styling
* Unable to download all file types/formats.

## Future Versions

* Below are some practical features to implement in future versions:
* Enable users to create "collaborators" which can be chosen; they have permission to read from and write to files.
* Allow users to generate file share links for other users.
* Implement a feature to make user owned files public.
* Introduce a "Write Once Read Many" (WORM) model along with an Object Lock feature that would allow file owners
to protect their public files from being edited by other users.
* Add Server or Client side encryption in the app settings.
