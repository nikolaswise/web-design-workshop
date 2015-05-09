---
title: What Is The Tech Stack?
---

# The Server | The Back End
# The Client | The Front End

---

# The Client / The Browser

Resolves a URL. The Browser interprets what it finds at the URL.

---

## HTML, CSS, JS

---

# The Server / The Cloud

Decides what to send to the client.

Works that logic that enables the internet.

---

## Ruby, PHP, Node, Go

---

# "Full Stack"

- HTML
- CSS
- JS
- Server Languages

---

# The Front End

---

## HTML

```
<body>
  <header>
    <h1>Simple Site</h1>
  </header>
  <main>
    <p>Hello World!</p>
  </main>
  <footer>
    <!-- Footer content Lives Here -->
  </footer>
  <script src="script.js"></script>
</body>
```

---

## Markdown

---

```
# I am a Header!

Here, take [this](http://stackoverflow.com/).

A way to write **markup** that's _easy._
```

---

## CSS

---

```
body {
  color: #EA4035;
}
h1 {
  text-align: center;
}
```

---

## Sass / SCSS

---

```
$cinnabar: #EA4035;

body {
  color: $cinnabar;
}
```

---

## JavaScript

---

```
var hello = function(name) {
  console.log('hello ' + name );
}

hello('Nikolas');
```

---

Defines and executes behaviors and interactions of the project between the user and the client, the user and the server.

---

# The Back End

---

## Ruby

---

```
$i = 0
$num = 5

while $i < $num  do
  puts("Inside the loop i = #$i" )
  $i +=1
end
```

---

## Node

---

```
var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(8000);
```

---

Server side languages perform the broader functions of a project that can't happen on the client.

---

- User Logins
- Databases
- Delivering Content

---

# What Else?

---

## API
Application Programming Interface

Server-side code that lets the client communicate with the server.

Lets servers communicate with each other.

---

```
https://api.twitter.com/1.1/friends/ids.json?cursor=-1&screen_name=nikolaswise&count=5000
```

---

## Client Library

Packages of code that allow easy implementation of complex functions

---

```
twitter.getFollowersList({screename: 'nikolaswise', count: '5000'}, errorCallback, successCallback);
```

---




