
# Sample Spring Express/Nodejs Backend

> This is an Express/Nodejs application. 

> It exposes a REST API using Swagger which can be accessed at http://localhost:5000/api/news/. Rest API details mentioned later.

> For changing the server url, port include a properties file.

![Alt text](Web-app-using-express.JPG?raw=true )

## To Install and Run in Development mode
     npm run dev 
or

     nodemon app.js


## MongoDB  Setup:
-------------------------------------------------

{path to mongod executable}/mongod.exe --dbpath "{path to data i.e storage directory}"

Eg:  ./mongod.exe --dbpath "C:/data/db"

![Alt text](mongodb_start.JPG?raw=true )


We have a database named "newsAPI".  
It contains a collection named "news".
This collection will store our documents. 

![Alt text](mongodb_database_collections_documents.JPG?raw=true )

#### Sample JSON document:
---------------------
    {
    "title" : "Govt declares help",
    "content" : "Govt decides to extend help to flood victims",
    "author" : "Sam",
    "image" : "dlkfjlk",
    "source" : "TOI"
    }


## REST API:

-------------------------------------------------
> Try the following using Postman or your favorite Rest client

-------------------------------------------------



    1. POST Create News
    http://localhost:5000/api/news/
    
    HEADERS
    Content-Type application/json
    
    BODY
    {
        "title": "Coffee",
        "content": "Coffee may be good for your health",
        "author": "Victor",
        "image": "iuyf056",
        "source": "ABC"
    }


-------------------------------------------------

    2. DEL Delete News
    http://localhost:5000/api/news/{id}
 
    HEADERS
    Content-Type application/json

    BODY
    {
        "title": "Coffee",
        "content": "Coffee may be good for your health",
        "author": "Victor",
        "image": "iuyf056",
        "source": "ABC"
    }


-------------------------------------------------

    3. GET Get all News
    http://localhost:5000/api/news

    HEADERS
    Content-Type application/json

    BODY
    {
        "title": "Coffee",
        "content": "Coffee may be good for your health",
        "author": "Victor",
        "image": "iuyf056",
        "source": "ABC"
    }

-------------------------------------------------

    4. GET Get a single news by id
    http://localhost:5000/api/news/{id}

    HEADERS
    Content-Type application/json

    BODY
    {
        "title": "Coffee",
        "content": "Coffee may be good for your health",
        "author": "Victor",
        "image": "iuyf056",
        "source": "ABC"
    }


-------------------------------------------------
> 
Note: For id's we will use Mongo generated IDs because when application will scale incrementing/ decrementing id's for additions/ deletions across  multiple machines/ shards.


## Reading:
-------------------------------------------------
1. https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90

2. Using Promises - https://stackoverflow.com/questions/15852043/mongoose-find-how-to-access-the-result-documents


