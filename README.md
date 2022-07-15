# nodejs-mysql-restful-api

*This api is basically the same as my jdbctemplate spring boot api but much more simple with nodejs*

This is a project that shows you how to build a NodeJs RESTful API that connects to MySQL databse using npm promise wrapper & nodemon.<br/>
Database used is called "university". All data in the database is for test purposes only.<br/><br/>
Using "Postman" application to be able to use Post, Put, Delete operations. Ideally it is implemented such that JavaScript/HTML is used on client side instead. (Will add angular front end soon)


## Node Modules (Must have NodeJs installed)


- Express
- Promise
- MySQL2
- Cors


## Features

- Post students
- Get all students
- Get single student by id
- Put student by id
- Delete students by id

  
## API Reference

Creation of a Student RESTful API, following are the rest end points

### Get all students

```http
  GET .../students
```

#### Sample Response

```json
 [
  { 
    "id":"00128",
    "name":"Zhang",
    "dept_name":"Comp. Sci.",
    "tot_cred":102
  },
  {
    "id":12345,
    "name":"Shankar",
    "dept_name":"Comp. Sci.",
    "tot_cred":32
   },
   {
    "id":19991,
    "name":"Brandt",
    "dept_name":"History",
    "tot_cred":80
   },
   {
    "id":23121,
    "name":"Chavez",
    "dept_name":"Finance",
    "tot_cred":110
   },
   {
    "id":44553,
    "name":"Peltier",
    "dept_name":"Physics",
    "tot_cred":56
   },
   {
    "id":45678,
    "name":"Levy",
    "dept_name":"Physics",
    "tot_cred":46
   },
   {
    "id":54321,
    "name":"Williams",
    "dept_name":"Comp. Sci.",
    "tot_cred":54
   },
   {
    "id":55739,
    "name":"Sanchez",
    "dept_name":"Music",
    "tot_cred":38
   },
   {
    "id":70557,
    "name":"Snow",
    "dept_name":"Physics",
    "tot_cred":0
   },
   {
    "id":76543,
    "name":"Brown",
    "dept_name":"Comp. Sci.",
    "tot_cred":58
   },
   {
    "id":76653,
    "name":"Aoi",
    "dept_name":"Elec. Eng.",
    "tot_cred":60
   },
   {
    "id":98765,
    "name":"Bourikas",
    "dept_name":"Elec. Eng.",
    "tot_cred":98
   },
   {
    "id":98988,
    "name":"Tanaka",
    "dept_name":"Biology",
    "tot_cred":120
   }
  ]
```

### Get single student

```http
  GET .../students/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of student to fetch |

#### Sample Response

```json
{
    "id": "00128",
    "name": "Zhang",
    "dept_name": "Comp. Sci.",
    "tot_cred": "102"
}
```

### Save student

```http
  POST .../students
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `student reference`      | `Student` | **Required**. Request body of student |

#### Sample Request

```json
{
    "id": "13039",
    "name": "Kevin",
    "dept_name": "Comp. Sci.",
    "tot_cred": "133"
}
```

### Update student

```http
  PUT .../students/{id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of student to update |
| `students reference`      | `Student` | **Required**. Request body of student |

#### Sample Request

```json
{
    "id": "13039",
    "name": "Kevin",
    "dept_name": "History",
    "tot_cred": "136"
}
```

### Delete student

```http
  DELETE .../students/{id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of student to delete |


# Student was deleted from university...."
![rest](https://github.com/kkemmere/nodejs-mysql-restful-api/blob/main/Screen%20Shot%202022-07-15%20at%201.23.04%20PM.png)
<br/>

  
## Authors

- [@kkemmere](https://github.com/kkemmere)

