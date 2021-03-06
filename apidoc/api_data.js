define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Credentials Check",
    "name": "authCredentialCheck",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "   200 OK\n{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDg0Y2IzMGZhZjRjMThkYzJlYjU0ZSIsImlhdCI6MTU3NDQ1NjUwMCwiZXhwIjoxNTc0NDYwMTAwfQ.sFVZWOgykCbUQYix3Zzvgu8flHj75ZBxVYu9PILi59s\",\n   \"user\": {\n           \"_id\": \"5dd84cb30faf4c18dc2eb54e\",\n           \"name\": \"John123\",\n           \"email\": \"Johnmail@gmail.com\",\n           \"age\": \"1997-11-07\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing fields:",
          "content": "    400 Bad Request\n{\n \"error\": \"Please enter all fields.\"\n}",
          "type": "json"
        },
        {
          "title": "User doesn't exist:",
          "content": "    400 Bad Request\n{\n \"msg\": \"User doesn't exist.\"\n}",
          "type": "json"
        },
        {
          "title": "Wrong password:",
          "content": "    400 Bad Request\n{\n \"msg\": \"Invalid credentials.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/user",
    "title": "Request User Information By Token",
    "name": "authGetUserInformation",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Users' JWT (JSON Web Token)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  \"_id\": \"5dd8622cf01ecb128885f502\",\n  \"name\": \"John123\",\n  \"email\": \"Johmail@gmail.com\",\n  \"age\": \"2019-11-07\",\n  \"createdAt\": \"2019-11-22T22:33:16.496Z\",\n  \"updatedAt\": \"2019-11-22T22:33:16.496Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token isn't valid:",
          "content": "    400 Bad request\n{\n \"msg\": \"Token is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "No token:",
          "content": "    401 Unauthorized\n{\n \"msg\": \"No token, authorization denied.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/posts/create",
    "title": "Request Create New Post",
    "name": "CreatePost",
    "group": "posts",
    "parameter": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in (authorized) users can create posts.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the post (max 50 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Content of the post (max 256characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "file:jpeg/png",
            "optional": true,
            "field": "blogImage",
            "description": "<p>An image file (max size 10 MB)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>ID of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"My first post\",\n  \"text\" : \"Hello World\";\n  \"username\" : \"John123\",\n  \"owner\" : \"5dd8455740f12f13ecbb48bf\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  \"_id\": \"5dd8478b55b9a60104361157\",\n  \"title\": \"My first post\",\n  \"username\": \"John123\",\n  \"text\": \"Hello World\",\n  \"owner\": \"5dd8455740f12f13ecbb48bf\",\n  \"createdAt\": \"2019-11-22T20:39:39.580Z\",\n  \"updatedAt\": \"2019-11-22T20:39:39.580Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing fields:",
          "content": "    400 Bad request\n{\n \"error\": \"Please enter all fields\"\n}",
          "type": "json"
        },
        {
          "title": "Token isn't valid:",
          "content": "    400 Bad request\n{\n \"msg\": \"Token is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "No token:",
          "content": "    401 Unauthorized\n{\n \"msg\": \"No token, authorization denied.\"\n}",
          "type": "json"
        },
        {
          "title": "Exceeding limits:",
          "content": "   422Unprocessable Entity\n{\n  \"erro\": [\n     {\n          \"title\": \"Maximum length for a title is 50 characters.\"\n      },\n      {\n          \"text\": \"Maximum length for text is 256 characters.\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "posts"
  },
  {
    "type": "delete",
    "url": "/posts/:id",
    "title": "Delete Posts by postID",
    "name": "DeletePostsByID",
    "group": "posts",
    "parameter": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can delete posts.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ID",
            "description": "<p>ID of the post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "http://localhost:8080/posts/5dd84ec55aecf2093c5a7452",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "\"Post deleted\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "No auth:",
          "content": "    401 Unauthorized\n{\n   \"msg\" : \"No token, authorization denied\"\n}",
          "type": "json"
        },
        {
          "title": "Post not found:",
          "content": "    404 Not found\n\n\"Error: No post found on the database\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "posts"
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "Request Posts",
    "name": "GetPosts",
    "group": "posts",
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": " {\n  \"posts\": [\n    {\n    \"_id\": \"5dd8478b55b9a60104361157\",\n    \"title\": \"My first post\",\n    \"username\": \"John123\",\n    \"text\": \"Hello World\",\n    \"owner\": \"5dd8455740f12f13ecbb48bf\",\n    \"createdAt\": \"2019-11-22T20:39:39.580Z\",\n    \"updatedAt\": \"2019-11-22T20:39:39.580Z\",\n    \"__v\": 0\n   },\n   {\n    \"_id\": \"5dd8478b55b9a60104361157\",\n    \"title\": \"My first post with an image\",\n    \"username\": \"John123\",\n    \"text\": \"Hello World!\",\n    \"owner\": \"5dd8455740f12f13ecbb48bf\",\n    \"blogImage\": \"uploads\\\\1574457248168dog.png\",\n    \"createdAt\": \"2019-11-23T20:39:39.580Z\",\n    \"updatedAt\": \"2019-11-23T20:39:39.580Z\",\n    \"__v\": 0\n   }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "posts"
  },
  {
    "type": "get",
    "url": "/posts/find/:id",
    "title": "Search Posts by postID",
    "name": "GetPostsByID",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ID",
            "description": "<p>ID of the post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "http://localhost:8080/posts/find/5dd8478b55b9a60104361157",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n posts: [\n    {\n    \"_id\": \"5dd8478b55b9a60104361157\",\n    \"title\": \"My first post with an image\",\n    \"username\": \"John123\",\n    \"text\": \"Hello World!\",\n    \"owner\": \"5dd8455740f12f13ecbb48bf\",\n    \"blogImage\": \"uploads\\\\1574457248168dog.png\",\n    \"createdAt\": \"2019-11-23T20:39:39.580Z\",\n    \"updatedAt\": \"2019-11-23T20:39:39.580Z\",\n    \"__v\": 0\n  }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "posts"
  },
  {
    "type": "post",
    "url": "/posts/postsByID",
    "title": "Posts by userID",
    "name": "GetpostsByID",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>ID of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"owner\": \"5dd8455740f12f13ecbb48bf\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n {\n   \"_id\": \"5dd8478b55b9a60104361157\",\n   \"title\": \"My first post\",\n   \"username\": \"John123\",\n   \"text\": \"Hello World\",\n   \"owner\": \"5dd8455740f12f13ecbb48bf\",\n   \"createdAt\": \"2019-11-22T20:39:39.580Z\",\n   \"updatedAt\": \"2019-11-22T20:39:39.580Z\",\n   \"__v\": 0\n },\n {\n   \"_id\": \"5dd8478b55b9a60104361157\",\n   \"title\": \"My first post with an image\",\n   \"username\": \"John123\",\n   \"text\": \"Hello World!\",\n   \"owner\": \"5dd8455740f12f13ecbb48bf\",\n   \"blogImage\": \"uploads\\\\1574457248168dog.png\",\n   \"createdAt\": \"2019-11-23T20:39:39.580Z\",\n   \"updatedAt\": \"2019-11-23T20:39:39.580Z\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing fields:",
          "content": "    400 Bad request\n{\n \"error\": \"Id is not submitted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "posts"
  },
  {
    "type": "post",
    "url": "/posts/postsByUsername",
    "title": "Posts by username",
    "name": "GetpostsByUsername",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"owner\": \"John123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n {\n   \"_id\": \"5dd8478b55b9a60104361157\",\n   \"title\": \"My first post\",\n   \"username\": \"John123\",\n   \"text\": \"Hello World\",\n   \"owner\": \"5dd8455740f12f13ecbb48bf\",\n   \"createdAt\": \"2019-11-22T20:39:39.580Z\",\n   \"updatedAt\": \"2019-11-22T20:39:39.580Z\",\n   \"__v\": 0\n },\n {\n   \"_id\": \"5dd8478b55b9a60104361157\",\n   \"title\": \"My first post with an image\",\n   \"username\": \"John123\",\n   \"text\": \"Hello World!\",\n   \"owner\": \"5dd8455740f12f13ecbb48bf\",\n   \"blogImage\": \"uploads\\\\1574457248168dog.png\",\n   \"createdAt\": \"2019-11-23T20:39:39.580Z\",\n   \"updatedAt\": \"2019-11-23T20:39:39.580Z\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing fields:",
          "content": "    400 Bad request\n{\n \"error\": \"Username is not submitted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "posts"
  },
  {
    "type": "put",
    "url": "/posts/update/:id",
    "title": "Update Posts by postID",
    "name": "UpdatePostsByID",
    "group": "posts",
    "parameter": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can edit posts.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the post (max 50 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the post (max 256 characters)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "\n{\n  posts: [\n   {\n   \"_id\": \"5dd8478b55b9a60104361157\",\n   \"title\": \"My first edited post\",\n   \"username\": \"John123\",\n   \"text\": \"Hello World\",\n   \"owner\": \"5dd8455740f12f13ecbb48bf\",\n   \"createdAt\": \"2019-11-22T20:39:39.580Z\",\n   \"updatedAt\": \"2019-11-22T20:45:39.580Z\",\n   \"__v\": 0\n   }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token isn't valid:",
          "content": "    400 Bad request\n{\n \"msg\": \"Token is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "No token:",
          "content": "    401 Unauthorized\n{\n \"msg\": \"No token, authorization denied.\"\n}",
          "type": "json"
        },
        {
          "title": "Missing fields:",
          "content": "    400 Bad Request\n{\n \"error\": \"Please enter all fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Exceeding limits:",
          "content": "   422Unprocessable Entity\n{\n  \"erro\": [\n     {\n          \"title\": \"Maximum length for a title is 50 characters.\"\n      },\n      {\n          \"text\": \"Maximum length for text is 256 characters.\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "posts"
  },
  {
    "type": "post",
    "url": "/users/create",
    "title": "Creating a New User",
    "name": "createUser",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user (min 3 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user (min 8 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date of birth</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"John\",\n  \"email\" : \"exampleemail@gmail.com\";\n  \"password\" : \"ad45ee79566\",\n  \"age\" : \"1997-11-07\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDg0Y2IzMGZhZjRjMThkYzJlYjU0ZSIsImlhdCI6MTU3NDQ1NjUwMCwiZXhwIjoxNTc0NDYwMTAwfQ.sFVZWOgykCbUQYix3Zzvgu8flHj75ZBxVYu9PILi59s\",\n   \"user\": {\n           \"_id\": \"5dd84cb30faf4c18dc2eb54e\",\n           \"name\": \"John123\",\n           \"email\": \"Johnmail@gmail.com\",\n           \"age\": \"1997-11-07\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    422 Unprocessable Entity\n{\n   \"erro\": [\n      {\n          \"name\": \"Name has to be longer than 3 characters.\"\n      },\n      {\n            \"name\": \"Name can't have whitespaces in it.\"\n         },\n      {\n          \"email\": \"Invalid email address.\"\n      },\n      {\n          \"password\": \"Password needs to be 8 characters long.\"\n      }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get Users",
    "name": "getUsers",
    "group": "users",
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n \"_id\": '65b5de958c50c45'\n \"name\": 'Juho'\n},\n{\n \"_id\": '32bhge01dd80f7d'\n \"name\": 'Antti'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "users"
  }
] });
