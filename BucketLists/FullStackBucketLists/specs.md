consuming API's (third party= THEY)
1) THEY decide on endpoints 
2) THEY decide how data will be sent - JSON and XML 
3) THEY decide how much data to send 
4) THEY decide what the data will look like - structures

Building (serving) API's-US
1) WE decide on endpoints
2) WE decide how data will be sent - JSON and XML
3) WE decide how much data to send 
4) WE decide what the data will look like - structures

CRUD functional app!!!
Create - POST
Read - GET
Update - PUT
Delete - DELETE
(need four route handlers one for each)

Boss says 
1) whatever you send back it must be JSON
2) Only allowed two endpoints:
   3) /api/bucket
   4) /api/bucket/<id>

READ
1) WE decide on endpoints - GET /api/bucket
2) WE decide how data will be sent - JSON 
3) WE decide how much data to send - send back everything
4) WE decide what the data will look like - structures - array of objects

EXAMPLE data:
{
id: 1
description: "Learn PostgreSQL",
isComplete: false,
}

CREATE
1) endpoint - POST /api/bucket
2) JSON
3) ONE Object - "receipt" from the database
4) Return ONE object
   {
   id: 1
   description: "Learn PostgreSQL",
   isComplete: false,
   }

UPDATE
1) endpoint - PUT /api/bucket <id>
2) JSON
3) ONE Object - "receipt" from the database
4) Return one object

DELETE
1) endpoint - DELETE /api/bucket <id>
2) JSON
3) ONE Object - "receipt" from the database
4) Return one object