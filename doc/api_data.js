define({ "api": [
  {
    "type": "post",
    "url": "/meals/:mealId/bookings",
    "title": "Book a meal",
    "version": "0.1.0",
    "name": "Book",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "group": "Booking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>Meal unique id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "seats",
            "description": "<p>requested seats.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "seats",
            "description": "<p>Number of reserved seats for this booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>id of the related Meal.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>id of the User who booked for this meal.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"seats\": 2,\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/bookings.js",
    "groupTitle": "Booking",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/meals/:mealId/bookings"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/bookings/:bookingId",
    "title": "Cancel a booking",
    "version": "0.1.0",
    "name": "DeleteBooking",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "group": "Booking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bookingId",
            "description": "<p>Booking unique id.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 Empty Response",
          "type": "json"
        }
      ]
    },
    "filename": "routes/bookings.js",
    "groupTitle": "Booking",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/bookings/:bookingId"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/bookings/:bookingId",
    "title": "Get booking",
    "version": "0.1.0",
    "name": "GetBooking",
    "group": "Booking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bookingId",
            "description": "<p>Booking unique id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "seats",
            "description": "<p>Number of reserved seats for this booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>id of the related Meal.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>id of the User who booked for this meal.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"seats\": 2,\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/bookings.js",
    "groupTitle": "Booking",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/bookings/:bookingId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/meals/:mealId/bookings",
    "title": "Get bookings for a meal",
    "version": "0.1.0",
    "name": "GetMealBookings",
    "group": "Booking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>Meal unique id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "seats",
            "description": "<p>Number of reserved seats for this booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>id of the related Meal.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>id of the User who booked for this meal.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"seats\": 2,\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"seats\": 2,\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/bookings.js",
    "groupTitle": "Booking",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/meals/:mealId/bookings"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/me/bookings",
    "title": "Get self bookings",
    "version": "0.1.0",
    "name": "GetSelfBookings",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "group": "Booking",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "seats",
            "description": "<p>Number of reserved seats for this booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>id of the related Meal.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>id of the User who booked for this meal.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"seats\": 2,\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"seats\": 2,\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/bookings.js",
    "groupTitle": "Booking",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users/me/bookings"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:userId/bookings",
    "title": "Get user bookings",
    "version": "0.1.0",
    "name": "GetUserBookings",
    "group": "Booking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User unique id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "seats",
            "description": "<p>Number of reserved seats for this booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>id of the related Meal.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>id of the User who booked for this meal.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"seats\": 2,\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"seats\": 2,\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/bookings.js",
    "groupTitle": "Booking",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users/:userId/bookings"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/dishes/:dishId",
    "title": "Delete a Dish",
    "version": "0.1.0",
    "name": "DeleteDish",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "group": "Dish",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "dishId",
            "description": "<p>Dish meal id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 Empty",
          "type": "json"
        }
      ]
    },
    "filename": "routes/dishes.js",
    "groupTitle": "Dish",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/dishes/:dishId"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/meals/:mealId/dishes",
    "title": "Get Dishes for a Meal",
    "version": "0.1.0",
    "name": "GetMealDishes",
    "group": "Dish",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>Unique meal id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Booking.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the dish.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the dish.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cuisine",
            "description": "<p>Cuisine of the dish.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the dish.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>id of the related Meal.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"name\": \"Rice\",\n    \"description\": \"White rice\",\n    \"cuisine\": \"Chineese\",\n    \"type\": \"Main\",\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"name\": \"Rice\",\n    \"description\": \"White rice\",\n    \"cuisine\": \"Chineese\",\n    \"type\": \"Main\",\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/dishes.js",
    "groupTitle": "Dish",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/meals/:mealId/dishes"
      }
    ]
  },
  {
    "type": "post",
    "url": "/meals/:mealId/dishes",
    "title": "Post a Dish for a Meal",
    "version": "0.1.0",
    "name": "PostMealDish",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "group": "Dish",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>Unique meal id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Dish name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Dish description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cuisine",
            "description": "<p>Dish cuisine</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Dish type</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Rice\",\n    \"description\": \"White rice\",\n    \"cuisine\": \"Chineese\",\n    \"type\": \"Main\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Booking.</p> "
          },
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the dish.</p> "
          },
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the dish.</p> "
          },
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cuisine",
            "description": "<p>Cuisine of the dish.</p> "
          },
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the dish.</p> "
          },
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>id of the related Meal.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"name\": \"Rice\",\n    \"description\": \"White rice\",\n    \"cuisine\": \"Chineese\",\n    \"type\": \"Main\",\n    \"mealId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/dishes.js",
    "groupTitle": "Dish",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/meals/:mealId/dishes"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/jwt",
    "title": "Get a json web token",
    "version": "0.1.0",
    "name": "GetJwt",
    "group": "Jwt",
    "permission": [
      {
        "name": "basicAuth",
        "title": "Client should auth via basic http auth containing email and password.",
        "description": ""
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>The requested token.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "jwks_uri",
            "description": "<p>The path to the public key url.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"access_token\": \"eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.82wXTCDa4VHEAaDlq7PyqOqNbMGwDiXSt_n1nKGH43w\",\n    \"jwks_uri\": \"/jwt/public-key\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/jwt.js",
    "groupTitle": "Jwt",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/jwt"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the email and password, like <code>&quot;Basic &quot; + base64encode(email + &quot;:&quot; password)</code> (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Basic am9obkBkb2UuY29tOnNlY3VyZWRfcGFzc3dvcmQ=\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Basic authorization header is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/jwt/public-key",
    "title": "Get the server jwt public key",
    "version": "0.1.0",
    "name": "GetJwtPublicKey",
    "group": "Jwt",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "public_key",
            "description": "<p>The jwt public key.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"public_key\": \"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCTgYKGKXovlDarIwYJVZjSFqYS\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/jwt.js",
    "groupTitle": "Jwt",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/jwt/public-key"
      }
    ]
  },
  {
    "type": "get",
    "url": "/meals/:mealId",
    "title": "Get meals by id",
    "version": "0.1.0",
    "name": "GetMeal",
    "group": "Meal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>Meal id.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n    \"title\": \"Cool chinese breakfast\",\n    \"description\": \"I will cook some cool chinese breakfast !!!\",\n    \"location\": {\n        \"latitude\": 42.5,\n        \"longitude\": 47.5\n    },\n    \"format\": \"Breakfast\",\n    \"cuisine\": \"Continental chinese\",\n    \"price\": 12.5,\n    \"date\": \"AAAA-MM-JJ HH:MM:SS\",\n    \"seats\": 7,\n    \"tags\": [\"cool\", \"chinese\", \"hot\", \"salad\", \"waffle\"],\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meals.js",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/meals/:mealId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/meals",
    "title": "Get meals",
    "version": "0.1.0",
    "name": "GetMeals",
    "group": "Meal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "latitude",
            "description": "<p>Search position.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "longitude",
            "description": "<p>Search position.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "radius",
            "description": "<p>Search radius.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n    \"title\": \"Cool chinese breakfast\",\n    \"description\": \"I will cook some cool chinese breakfast !!!\",\n    \"location\": {\n        \"latitude\": 42.5,\n        \"longitude\": 47.5\n    },\n    \"format\": \"Breakfast\",\n    \"cuisine\": \"Continental chinese\",\n    \"price\": 12.5,\n    \"date\": \"AAAA-MM-JJ HH:MM:SS\",\n    \"seats\": 7,\n    \"tags\": [\"cool\", \"chinese\", \"hot\", \"salad\", \"waffle\"],\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n    \"title\": \"Cool chinese breakfast\",\n    \"description\": \"I will cook some cool chinese breakfast !!!\",\n    \"location\": {\n        \"latitude\": 42.5,\n        \"longitude\": 47.5\n    },\n    \"format\": \"Breakfast\",\n    \"cuisine\": \"Continental chinese\",\n    \"price\": 12.5,\n    \"date\": \"AAAA-MM-JJ HH:MM:SS\",\n    \"seats\": 7,\n    \"tags\": [\"cool\", \"chinese\", \"hot\", \"salad\", \"waffle\"],\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n    \"title\": \"Cool chinese breakfast\",\n    \"description\": \"I will cook some cool chinese breakfast !!!\",\n    \"location\": {\n        \"latitude\": 42.5,\n        \"longitude\": 47.5\n    },\n    \"format\": \"Breakfast\",\n    \"cuisine\": \"Continental chinese\",\n    \"price\": 12.5,\n    \"date\": \"AAAA-MM-JJ HH:MM:SS\",\n    \"seats\": 7,\n    \"tags\": [\"cool\", \"chinese\", \"hot\", \"salad\", \"waffle\"],\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meals.js",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/meals"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:userId/meals",
    "title": "Get meals for User",
    "version": "0.1.0",
    "name": "GetUserMeals",
    "group": "Meal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n    \"title\": \"Cool chinese breakfast\",\n    \"description\": \"I will cook some cool chinese breakfast !!!\",\n    \"location\": {\n        \"latitude\": 42.5,\n        \"longitude\": 47.5\n    },\n    \"format\": \"Breakfast\",\n    \"cuisine\": \"Continental chinese\",\n    \"price\": 12.5,\n    \"date\": \"AAAA-MM-JJ HH:MM:SS\",\n    \"seats\": 7,\n    \"tags\": [\"cool\", \"chinese\", \"hot\", \"salad\", \"waffle\"],\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n    \"title\": \"Cool chinese breakfast\",\n    \"description\": \"I will cook some cool chinese breakfast !!!\",\n    \"location\": {\n        \"latitude\": 42.5,\n        \"longitude\": 47.5\n    },\n    \"format\": \"Breakfast\",\n    \"cuisine\": \"Continental chinese\",\n    \"price\": 12.5,\n    \"date\": \"AAAA-MM-JJ HH:MM:SS\",\n    \"seats\": 7,\n    \"tags\": [\"cool\", \"chinese\", \"hot\", \"salad\", \"waffle\"],\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n    \"title\": \"Cool chinese breakfast\",\n    \"description\": \"I will cook some cool chinese breakfast !!!\",\n    \"location\": {\n        \"latitude\": 42.5,\n        \"longitude\": 47.5\n    },\n    \"format\": \"Breakfast\",\n    \"cuisine\": \"Continental chinese\",\n    \"price\": 12.5,\n    \"date\": \"AAAA-MM-JJ HH:MM:SS\",\n    \"seats\": 7,\n    \"tags\": [\"cool\", \"chinese\", \"hot\", \"salad\", \"waffle\"],\n    \"userId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meals.js",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users/:userId/meals"
      }
    ]
  },
  {
    "type": "post",
    "url": "/meals",
    "title": "Post a meal",
    "version": "0.1.0",
    "name": "PostMeal",
    "group": "Meal",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Meal title.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Meal description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>Meal location.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "location.latitude",
            "description": "<p>location latitude.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "location.longitude",
            "description": "<p>location longitude.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "format",
            "description": "<p>Meal format.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "cuisine",
            "description": "<p>Meal cuisine.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "price",
            "description": "<p>Meal price.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "date",
            "description": "<p>Meal date.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "seats",
            "description": "<p>Meal number of seats.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>Meal tags array.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"title\": \"Cool chinese breakfast\",\n    \"description\": \"I will cook some cool chinese breakfast !!!\",\n    \"location\": {\n        \"latitude\": 42.5,\n        \"longitude\": 47.5\n    },\n    \"format\": \"Breakfast\",\n    \"cuisine\": \"Continental chinese\",\n    \"price\": 12.5,\n    \"date\": \"AAAA-MM-JJ HH:MM:SS\",\n    \"seats\": 7,\n    \"tags\": [\"cool\", \"chinese\", \"hot\", \"salad\", \"waffle\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\"\n    \"title\": \"Cool chinese breakfast\",\n    \"description\": \"I will cook some cool chinese breakfast !!!\",\n    \"location\": {\n        \"latitude\": 42.5,\n        \"longitude\": 47.5\n    },\n    \"format\": \"Breakfast\",\n    \"cuisine\": \"Continental chinese\",\n    \"price\": 12.5,\n    \"date\": \"AAAA-MM-JJ HH:MM:SS\",\n    \"seats\": 7,\n    \"tags\": [\"cool\", \"chinese\", \"hot\", \"salad\", \"waffle\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meals.js",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/meals"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/meals/:mealId/reviews",
    "title": "Get reviews for a meal",
    "version": "0.1.0",
    "name": "GetReviews",
    "group": "Review",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mealId",
            "description": "<p>Meal unique id.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"comment\": \"Was so cool, would go again\",\n    \"hospitalityRating\": 5,\n    \"foodRating\": 7\n    \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"comment\": \"Was so cool, would go again\",\n    \"hospitalityRating\": 5,\n    \"foodRating\": 7\n    \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}, {\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"comment\": \"Was so cool, would go again\",\n    \"hospitalityRating\": 5,\n    \"foodRating\": 7\n    \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/reviews.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/meals/:mealId/reviews"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/me/reviews",
    "title": "Get self reviews",
    "version": "0.1.0",
    "name": "GetSelfReviews",
    "group": "Review",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    asReviewer: [{\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }, {\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }, {\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }],\n    asReviewee: [{\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }, {\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }, {\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/reviews.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users/me/reviews"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:userId/reviews",
    "title": "Get self reviews",
    "version": "0.1.0",
    "name": "GetSelfReviews",
    "group": "Review",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User unique id.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    asReviewer: [{\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }, {\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }, {\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }],\n    asReviewee: [{\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }, {\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }, {\n        \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"comment\": \"Was so cool, would go again\",\n        \"hospitalityRating\": 5,\n        \"foodRating\": 7\n        \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n        \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/reviews.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users/:userId/reviews"
      }
    ]
  },
  {
    "type": "post",
    "url": "/bookings/:bookingId/reviews",
    "title": "Post a review for a booking",
    "version": "0.1.0",
    "name": "PostReview",
    "group": "Review",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bookingId",
            "description": "<p>Booking unique id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comment",
            "description": "<p>Review comment.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "hospitalityRating",
            "description": "<p>Review hospitality rating from 0 to 10.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "foodRating",
            "description": "<p>Review food rating from 0 to 10.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"comment\": \"Was so cool, would go again\",\n    \"hospitalityRating\": 5,\n    \"foodRating\": 7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"comment\": \"Was so cool, would go again\",\n    \"hospitalityRating\": 5,\n    \"foodRating\": 7\n    \"bookingId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"reviewerId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"revieweeId\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"createdAt\": \"AAAA-MM-JJ HH:MM:SS\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/reviews.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/bookings/:bookingId/reviews"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/users/me",
    "title": "Delete user account",
    "version": "0.1.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 Empty Response",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users/me"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Get self",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>User unique id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastName",
            "description": "<p>User last name.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"firstName\": \"Marc\"\n    \"firstName\": \"Dutroux\"\n    \"email\": \"marc.dutroux@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User with the requested id not found.</p> "
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users/me"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:userId",
    "title": "Get a user by id",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User unique id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"firstName\": \"Marc\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User with the requested id not found.</p> "
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users/:userId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Register a new user",
    "version": "0.1.0",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>User email, must be a valid email or will throw a 400.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User password, must be at least 6 character long.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"john@doe.com\",\n    \"password\": \"really secured\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p> "
          },
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"email\": \"john@doe.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Client error, more details within the response body.</p> "
          }
        ],
        "409": [
          {
            "group": "409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Email already registered.</p> "
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/me",
    "title": "Edit user informations",
    "version": "0.1.0",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "loggedIn",
        "title": "Client should auth via a bearer token.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>User email, must be a valid email or will throw a 400.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User password, must be at least 6 character long.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"john@doe.com\",\n    \"password\": \"really secured\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": \"2676a6fd-a734-4639-a5cb-1f78e03fae2c\",\n    \"email\": \"john@doe.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Client error, more details within the response body.</p> "
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Bearer authorization token is wrong or not set.</p> "
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Insufficient permissions.</p> "
          }
        ],
        "409": [
          {
            "group": "409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Email already registered.</p> "
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://mealting-pot.herokuapp.com/users/me"
      }
    ],
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>should contain the bearer token (see examples).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });