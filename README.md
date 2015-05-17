angular_test
==========================

This is to learn angular with examples.


##setup

###bower

.bowerrc
{
  "directory": "src/components"
}

bower install boostrap --save
bower install angular --save

### karma jasmine
http://ericnish.io/blog/set-up-jasmine-and-karma-for-angularjs
npm install karma --save-dev
npm install karma-jasmine --save-dev
karma init
karma start
karma start --single-run