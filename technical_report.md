Technical Report
================

### Introduction

This technical report provides an overview of Express.js, Vue.js, and JavaScript features and how they can be used to develop web applications. It discusses the key characteristics, advantages, and difficulties of different technologies and offers suggestions and examples for selecting the best technology for a web application. It is a helpful tool for companies and project managers who want to use these technologies to develop web applications.

Server Framework Features
-------------------------

### Routing

Routing is a technique for selecting how an application should respond to HTTP request methods such as GET, POST, and DELETE from a client. Express app object methods that are related to HTTP methods, such as ```app.get()``` for GET requests,``` app.post()``` for POST requests, and ```app.delete()``` for DELETE requests, are used to design Routing. 
```
//GET method route
app.get('/',(req, res) => {
  res.status(200).send('<html><body>Hello World</body></html>')
})
```
Express's route handler method responds to HTTP GET requests for the `'/'` path and sends the client an HTML string with the text "Hello World" in it. The response returned to the client can be personalized by the application in response to requests made to the `'/'` path.

[Routing](https://expressjs.com/en/guide/routing.html)

### Middleware

A middleware function is performed before or after a request is handled .Express.js uses the `app.use()` method to define middleware functions, which accepts an argument of a middleware function. The middleware function may perform activities like parsing JSON data in the request body.
```
//To parse JSON data
app.use(express.json());
```
The request body is parsed by this middleware function and stored as a JavaScript object on the `req.body` property so that it can be quickly fetched and used in other application areas. Reducing the amount of code required to handle the request body and avoiding potential vulnerabilities can boost productivity, maintainability, and security.

### Error Handling

Error handling and user error message display are supported and built-in by Express. This might support improving an application's consistency and stability. We will use tools to manage errors, such as requests for resources that are unavailable and missing or incorrect input data.
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
If the requested item does not exist in the `items` Object, the route handler method for the GET itemId req `'/item/:id'`route returns an error with a status code of 404.
This can help the application's consistency, stability, and user experience are improved by these error-handling techniques because they enable the application to gracefully manage failures and reply with informative and helpful error messages.

Server Language Features
-----------------------

### Object Methods

Collections of key-value pairs make up objects in JavaScript. A function connected to an object is known as an object method. It may be accessed and called by using the method's name, a period `(.)`, and the object name.
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

A JavaScript function called `Object.prototype.hasOwnProperty()` checks if an object has a particular property as its property (as opposed to inheriting it). Since it is a method of the Object prototype, it is by default available to all JavaScript objects.
```
// Check if the new item ID is already used
if(items.hasOwnProperty(newItem)){
  newItem = newItem + 1
}
```
This code checks whether another item is already using a new item's identifier in the items object using the function `hasOwnProperty()` function. It is quick and easy to use this method to ensure unique identities. It ensures that each item in the items Object will have a unique identifier and does not call for any additional libraries or outside resources.

Client Framework Features
-------------------------

The administration of the application's user interactions and data is made simple and effective by the Vue.js framework. It offers a strong framework for creating responsive and dynamic user interfaces.

### v-model and v-for

Two-way data binding between a form element and a data property in the Vue instance is made possible by the v-model directive. The v-for directive allows presenting an array of elements as a list after iterating through them. The app becomes dynamic and responsive according to these instructions, which makes it simple to handle data and show it over there.

```
<input v-model="item.user_id" name="user_id" type="text" placeholder="user_id" />
```

```
<li v-for="item in items">
```

It is simple and clear to show items from the data object, connect data to form fields, and list items using v-model and v-for. Keeping the data and the display in sync reduces processing time and improves maintainability. As a result, it is simple to develop dynamic, responsive, and user-friendly apps with clean, maintainable code using the v-model and v-for directives, which are solid tools for handling data and presenting it in the app.

### CreateApp function

The root Vue instance, which serves as the starting point for the Vue application, is created using the create-app method. It is an options object that includes the Vue instance's properties and methods. Data, computed properties, methods, and lifecycle loops are a few examples of these features.

```
const {createApp} = Vue
createApp ({
}).mount('#app')
 ```

The Vue app is created using the create-app method, which also sets the app's data items. It makes it simple to maintain the application's state and structure the code.

### Flexbox grid system

A layout approach called the Flexbox grid system uses Flexbox to build a responsive grid of elements. It makes it simple and flexible to arrange objects inside containers, and it can be used to build responsive and uniform layouts across various screen sizes. It is an effective way to create responsive, flexible, and consistent layouts.

```
<div class="col-lg-6 col-md-6 col-sm-12 col-12">
```

The layout and style of the pieces are accomplished using the Flexbox grid system. This makes it simple to construct responsive and dependable layouts and improves the app's visual quality.

Client Language Features
------------------------

### const and let

To declare variables, `let` and `const` are used. `Const` assures that the variable cannot be changed, whereas `let` allows change. This makes the code more predictable and helps prevent accidental data changes.

### urlParams.get('api') and URLSearchParams

` urlParams.get('api')` is a technique for finding the URL's 'API' parameter's value.

`URLSearchParams` class for URL parsing

```
  // javascript here
  const {createApp} = Vue
  const DEFAULT_API = '/API/v1';  // default to current HTTP(s)://currentHost:currentPort/API/v1'
  const urlParams = new URLSearchParams(window.location.search);
  const urlAPI = (urlParams.get('api') || '/api/v1').replace(/\/$/, '');// Get API URL (and remove trailing slash if present)
  const testURL = "https://8000-mj351-frameworksandlan-y0x0jirdzds.ws-eu78.gitpod.io";
```

` urlParams.get('api')`  If the api argument is present in the URL, this method provides its value; otherwise, it returns null. This enables the API endpoint to be set by the code by retrieving the value of the URL's api parameter.

The `URLSearchParams` class makes it simple to parse and work with a URL's query string. It provides a simple API for interacting with the query string.

#### Reference

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

### Serverless

A cloud computing architecture known as `serverless` allows companies to build and run applications and services without having to manage and set up servers. Development teams may write their code and publish it to a provider, such as AWS Lambda, Google Cloud Functions, or Azure Functions, rather than setting up and managing servers. These service providers automatically take care of the application's cloud platform, scalability, and availability.

#### Benefits:

`Cost-effectiveness` Do not pay for provisioned, new servers; pay for the resources and compute time you used.

`Flexibility` Automatic scaling up or scaling down in response to demand.

` Low upkeep`  The cloud provider manages and updates servers, so you do not have to.

`Event-driven` Applications can do actions automatically when certain events occur, such as a user uploading a file, a message being added to a queue, or a database update.

#### Reference

[Serverless](https://www.cloudflare.com/en-gb/learning/serverless/what-is-serverless/)

### (multi-cloud database)

A web application can use a multi-cloud database to meet its database demands by using many cloud service providers. By using several cloud service providers for the database needs of web applications, multi-cloud databases can address data loss and downtime issues, scalability, and cloud provider lock-in. Cost-effectiveness, adaptability, and increased security are advantages.

#### Reference

[multi-cloud database](https://severalnines.com/blog/what-is-a-multi-cloud-database/)


### GraphQL

A query language called GraphQL is used to create and carry out API requests, delivering more flexible and effective data fetching. In contrast to REST, which requires clients to request a given set of data from a specific number of endpoints, it enables clients to request just the data they need from an API and nothing more. In response to a single GraphQL query, the server returns the required data as a single JSON object. Reducing load times and wasting network capacity. With GraphQL, the client may only request the data it needs, resulting in less network traffic and better performance.

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference URLs to your source of information about this technology - required)

#### Reference

[GraphQL](https://graphql.org/)
