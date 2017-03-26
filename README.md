# Online auction system #

This is my final semester project which I am developing by myself without any partner. 
I chose this topic because E-commerce is very interesting and there are lot of things to learn. Though this system is not fully ecommerce system, I wanted to develop system which can be used by everyone who want to sell their product unlike only merchants can sell in typical ecommerce system. So this is kind of C2C system, anyone can be seller and buyear at any time. 

## Technology stack ##
For front-end, normally html/css/js are used but I wanted to learn some new tech also as per my time availability. For back-end I used PHP. Following is detailed stack:

- **Front-end technologies:**
    - **Core technologies:**
        - HTML5
        - CSS3
        - Javascript
    - **Libraries used:**
        - Bootstrap3
        - jQuery
        - requirejs
        - Handlebars - for templating
    - **Building & other tools:**
        - Bower - package manager
        - Grunt for building tool
    - ** Building & other tools: **
        - Bower - package manager
        - Gulp for building tool
- **Back-end technologies:**
    - PHP
    - MySQL database
    - Apache server

## How to start with project ? ##
For development purpose, you need to install `node.js` in your system. After that go to this project directory and use following commands:
  - `npm i -g yarn grunt`
  - `yarn`

**To build project:**  
  - `grunt`

**To run in browser:**  
Before you do so, you need to set your machine's IP address in `package.json` file, under `serverHost`. This will be automated soon but till that you need to do manually. After than execute following:
  - `grunt serve`

**For production build:**
  - `grunt build`

To run production build in browser:
  - `grunt serve --directory dist`