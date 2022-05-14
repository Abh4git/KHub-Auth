//Instructions to execute script :
//mongo localhost:27017 mongodbinit.js

// Current Database name: authdb
db = db.getSiblingDB('authdb');



//khubTest@12
db.user.insert ({
    "_id" : ObjectId(),
    "username" : "khubtestuser1",
    "email" : "khubtest@yopmail.com",
    "enabled" : true,
    "password" : "$2a$10$CwoSE0B7FlUKrN2MAB8hAecBqaKyBkDuCXEYBUJpFqgCWqAvpY6F.",
    "roles" : [ 
        {
            "name" : "Viewer"
        }
    ]
});

//khubTest@34
db.user.insert ({
    "_id" : ObjectId(),
    "username" : "khubtestuser2",
    "email" : "khubtest2@yopmail.com",
    "enabled" : true,
    "password" : "$2a$10$CwoSE0B7FlUKrN2MAB8hAe2YiLWzHq99MPH28y2FVc8oInXJeYIFe",
    "roles" : [ 
        {
            "name" : "Viewer"
        }
    ]
});
