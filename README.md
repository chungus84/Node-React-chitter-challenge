
Chitter Challenge
=================

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit your work by 9:30am Monday morning

### Installation Instructions
```
clone the repo

Backend Instructions
- cd Backend
- npm i to install packages
- npm test to run backend tests and (c8) coverage
- npm start to run dev environment


Frontend Instructions
- cd Frontend/chitter-frontend
- npm i to install packages
- npm test to run tests
- npm run coverage to see test coverage (Istanbul)
- npm run dev to run dev environment


```

### Technologies used

```
Frontend
- Vite (React)
- Bootstrap
- Istanbul
- Vitest
- Jsdom
- React-router-dom

Backend
- NodeJs
- Express
- Mongoose
- MongoDB
- Mocha
- Chai
- Chai-http
- c8
- Axios
- BodyParser

```


Challenge:
-------

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

Features:
-------

### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing
I want to post a message (peep) to chitter

| Object | Properties        | Messages                | Returns |
| ------ | ----------------- | ----------------------- | ------- |
| Peep   | _id: @String      | NewPeep(req.body)       | @Object |
|        | createdAt: @Date  |                         |         |
|        | message: @String  |                         |         |
|        | userName: @String | newPeepService(@Object) | @Object |
|        |                   |                         |         |
| User   | userName: @String |                         |         |

As a trainee
So that I can see what others are saying
I want to see all peeps in reverse chronological order

| Object | Properties        | Messages         | Returns |
| ------ | ----------------- | ---------------- | ------- |
| Peep   | _id: @String      | allPeeps()       | @Array  |
|        | createdAt: @Date  |                  |         |
|        | message: @String  |                  |         |
|        | userName: @String | getPeepService() | @Array  |


As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made
| Object | Properties        | Messages         | Returns |
| ------ | ----------------- | ---------------- | ------- |
| Peep   | _id: @String      | allPeeps()       | @Array  |
|        | createdAt: @Date  |                  |         |
|        | message: @String  |                  |         |
|        | userName: @String | getPeepService() | @Array  |


As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

| Object | Properties        | Messages                | Returns |
| ------ | ----------------- | ----------------------- | ------- |
| User   | fName @String     | newUser(req.body)       | @Object |
|        | lName @String     |                         |         |
|        | email: @String    |                         |         |
|        | userName: @String | addUserService(@Object) | @Object |
|        | password: @String |                         |

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

| Object | Properties        | Messages                          | Returns |
| ------ | ----------------- | --------------------------------- | ------- |
| User   | email: @String    | loginUser(req.body)               | @Object |
|        | password: @String | loginUserService(email, password) | @Object |

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter

| Object | Properties        | Messages                          | Returns |
| ------ | ----------------- | --------------------------------- | ------- |
| User   | email: @String    | loginUser(req.body)               | @Object |
|        | password: @String | loginUserService(email, password) | @Object |
```

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewright@digitalfutures.com, password123, Ed Wright, edwright6975).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
