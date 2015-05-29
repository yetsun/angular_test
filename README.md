angular_test
==========================

This is to learn angular with examples.

It has the sample Angular application, UI only. 
And the unit test. 

The sample application is from Angular tutorial:
http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro


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

# auto install npm and bower
grunt 