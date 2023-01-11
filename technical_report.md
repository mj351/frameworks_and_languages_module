Technical Report
================

(intro)

A framework is a collection of tools and libraries that give a framework for creating software applications.

Server Framework Features
-------------------------

### Routing

The use of routing is a technique for selecting how an application should responding to HTTP request method such as GET, POST and DELETE from a client. Express app object methods that are related to HTTP methods, such as ```app.get()``` for GET requests,``` app.post()``` for POST requests, and ```app.delete()``` for DELETE requests, are used to design routing. 
```
//GET method route
app.get('/',(req, res) => {
  res.status(200).send('<html><body>Hello World</body></html>')
})
```
Express's route handler method responds to HTTP GET requests for the `'/'` path and sends to the client an HTML string with the text "Hello World" in it. The response that is returned to the client can be personalized by the application in response to requests made to the `'/'` path.

[Routing Link](https://expressjs.com/en/guide/routing.html)

### Middleware

A middleware function is one that is performed either before or after a request is handled.Express.js uses the `app.use()` method to define middleware functions, which accepts an argument of a middleware function. The middleware function may be used to carry out activities like parsing JSON data in the request body.
```
//To parse json data
app.use(express.json());
```
The request body is parsed by this middleware function and stored as a JavaScript object on the `req.body` property so that it may be quickly fetched and used in other areas of the application. By cutting down on the amount of code required to handle the request body and avoiding potential vulnerabilities, it can boost productivity, maintainability, and security.

### Error Handling

Error handling and user error message display are supported and built-in by Express. This might support in improving an application's consistency and stability. We are going to use tools for managing errors such as requests for resources that aren't available and missing or incorrect input data.
```
//GET itemId req
app.get('/item/:id', (req, res) => {
  itemId = parseFloat(req.params.id)
  if(items.hasOwnProperty(itemId)){
    res.json(items[itemId])
  }
  else{
    res.status(404).send("The item with the given Id was not found")
  }
})
```
If the requested item does not exist in the `items` object, the route handler method for the GET itemId req `'/item/:id'`route returns an error with a status code of 404.
This can help the application's consistency, stability, and user experience are all improved by these error handling techniques because they enable the application to gracefully manage failures and reply with informative and helpful error messages.

Server Language Features
-----------------------

### Object Methods

Collections of key-value pairs make up objects in JavaScript. A function connected to an object is known as an object method. It may be accessed and called by using the name of the method, a period `(.)` and the object name.
```
//GET items
app.get('/items/', (req, res) => {
  if (req.query.user_id) {
    res.status(200).json(
      Object.values(items).filter(i => i.user_id == req.query.user_id))
   return;
    }
    res.status(200).json(
      Object.values(items))
})
```
Based on the value of the user id field, a subset of the items object is filtered and returned using the `Object.values()` and `Array.prototype.filter()` methods. They offer a quick and easy way to filter and return items, and they are simple to adapt to the requirements of various applications.

### Object.prototype.hasOwnProperty()

A JavaScript function called `Object.prototype.hasOwnProperty()` checks if an object has a particular property as its own property (as opposed to inheriting it). Since it is a method of the Object prototype, it is by default available to all JavaScript objects.
```
// Check if the new item ID is already used
if(items.hasOwnProperty(newItem)){
  newItem = newItem + 1
}
```
This code checks whether a new item's identifier is already being used by another item in the items object using the function `hasOwnProperty()` function. It is quick and easy to use this method to ensure unique identities. It ensures that each item in the items object will have an unique identifier and does not call for any additional libraries or outside resources.

Client Framework Features
-------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Critique of Server/Client prototype
---------------------

### (name of Issue 1)

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)

---
def find_route_func(request, routes):
---

### (name of Issue 2)

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)


Future Technology Suggestions
-----------------------------

### (name of technology/feature 1)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 2)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 3)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)
