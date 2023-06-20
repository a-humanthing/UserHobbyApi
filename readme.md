# User Hobby API

User Hobby Api is a project that generates RESTful API endpoints based on mongoose schemas. Includes CRUD Operations for Two Collections, User and Hobby.

Using Node.js,Express.js and MongoDB with Typescript.

Hobbies are Not Embedded In User Collection their Object Id are saved and mongoose "ref" attribute to get data populated when needed.

## Libraries Used

Third party Libraries used:

- Mongoose
- express-validator
- Jest

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Run Locally

You need Node.js installed and you'll need MongoDB installed and running.

Clone the project

```bash
  https://github.com/a-humanthing/UserHobbyApi.git
```

Go to the project directory

```bash
  cd UserHobbyApi
```

Install dependencies

```bash
  npm install
```

Start the server Using Currently library to transpile Typescript and run Javascript.

```bash
  npm run dev
```

Set
PORT ,
DB_URI in .env

## API Reference

# User Endpoints

### #Add a User

```http
  POST /user
```

#### Response

```json
 "success": true,
 "message":"message"
```

| Parameter | Type         | Description                    |
| :-------- | :----------- | :----------------------------- |
| `name`    | `string`     | **Required**. Name of the User |
| `hobbies` | [`ObjectId`] | Object Id of an Hobyy Document |

### #Get all Users

```http
  GET /user
```

#### Response

```json
{
  "success": true,
  "users": [
    {
      "_id": "64914787812837a1f46fd176",
      "hobbies": [
        {
          "_id": "64913bcaff7c52c1af1374ec",
          "passionLevel": "Low",
          "name": "handball",
          "year": 2017,
          "__v": 0
        }
      ],
      "name": "aru",
      "__v": 0
    }
  ]
}
```

### #Get a User

```http
  GET /user/${id}
```

| Parameter | Type       | Description                       |
| :-------- | :--------- | :-------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of user to fetch |

#### Response

```json
{
  "success": true,
  "User": {
    "_id": "64914787812837a1f46fd176",
    "hobbies": [
      {
        "_id": "64913bcaff7c52c1af1374ec",
        "passionLevel": "Low",
        "name": "handball",
        "year": 2017,
        "__v": 0
      }
    ],
    "name": "aru",
    "__v": 0
  }
}
```

### #Update a User

```http
  PUT /user/${id}
```

| Parameter | Type       | Description                        |
| :-------- | :--------- | :--------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of user to Update |
| `hobbies` | `ObjectId` | Id of hobby to be added            |

#### Response

```json
{
  "success": true,
  "message": "User Updated"
}
```

### #Delete a User

```http
  DELETE /user/${id}
```

| Parameter | Type       | Description                        |
| :-------- | :--------- | :--------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of user to Update |

#### Response

```json
{
  "success": true,
  "message": "User Deleted"
}
```

# Hobyy Endpoints

### #Add a Hobby

```http
  POST /hobby
```

| Parameter      | Type     | Description                                      |
| :------------- | :------- | :----------------------------------------------- |
| `name`         | `string` | **Required**. Name of the User                   |
| `passionLevel` | `string` | **Required** ['Low','High','Medium','Very-High'] |
| `year`         | `string` | **Required** Year                                |

#### Response

```json
{
  "success": true,
  "message": "Hobby Added"
}
```

### #Get all hobbies

```http
  GET /hobby
```

#### Response

```json
{
  "success": true,
  "hobbies": [
    {
      "_id": "64913bcaff7c52c1af1374ec",
      "passionLevel": "Low",
      "name": "handball",
      "year": 2017,
      "__v": 0
    },
    {
      "_id": "649159ea139a3d32bb914147",
      "passionLevel": "High",
      "name": "Public Speaking",
      "year": 2022,
      "__v": 0
    }
  ]
}
```

### #Get a Hobby

```http
  GET /hobby/${id}
```

| Parameter | Type       | Description                       |
| :-------- | :--------- | :-------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of user to fetch |

#### Response

```json
{
  "success": true,
  "hobby": {
    "_id": "649159ea139a3d32bb914147",
    "passionLevel": "High",
    "name": "Public Speaking",
    "year": 2022,
    "__v": 0
  }
}
```

### #Update a Hobby

```http
  PUT /hobby/${id}
```

| Parameter      | Type       | Description                                      |
| :------------- | :--------- | :----------------------------------------------- |
| `id`           | `ObjectId` | **Required**. Id of user to Update               |
| `name`         | `string`   | **Required**. Name of the User                   |
| `passionLevel` | `string`   | **Required** ['Low','High','Medium','Very-High'] |
| `year`         | `string`   | **Required** Year                                |

#### Response

```json
{
  "success": true,
  "message": "Hobby Updated"
}
```

### #Delete a User

```http
  DELETE /hobby/${id}
```

| Parameter | Type       | Description                        |
| :-------- | :--------- | :--------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of user to Update |

#### Response

```json
{
  "success": true,
  "message": "Hobby Deleted"
}
```
