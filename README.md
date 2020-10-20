# Angular Architecture Project 
This project intended to cover the cornerstone aspects of the Angular development process. This is educational project not designed to produce any functional behavior. The goal of this project is to learn the main architectural parts the standard Angular project.

## RxJS & Http
### Part 1
The goal is to get users posts data from an API and display the results in the template, requirements:
* Refresh results every 60 seconds.
* Display results by user
* Make the UI responsive

**API URL: 
https://jsonplaceholder.typicode.com/posts**

### Part 2
Use the same API call from the first part only now we would like to display the posts result one by one (sequentially) in a dialog, requirements:
* Display the next post only after the previous post is closed by the user (by clicking on a close button or on the background)

## Architecture

Assume you have a workspace with multiple applications (build by angular CLI)  and your goal is to implement a logger package that will serve them all to capture HTTP errors, requirements:
* The logger data will include message, stack, and timestamp.
* The logger will write its errors to the console.
* Extra: write errors also to localstorage
* The logger will be used only in production.
* The package should be publishable using npm
* Use the logger to log HTTP errors thrown in the application.

Implement a retry mechanism for a failed http request. 

Extra: use logger to log also exception thrown anywhere in the application.

Write at least one unit test for your solution.
