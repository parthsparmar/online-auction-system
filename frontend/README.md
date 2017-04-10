## About ##
This is frontend part of application. It contains all front-end technologies which are intended to use and make development fast and easy.

## How to start with project ? ##
For development purpose, you need to install `node.js` in your system. After that go to this project directory and use following commands:
  - `npm i -g yarn grunt-cli`
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