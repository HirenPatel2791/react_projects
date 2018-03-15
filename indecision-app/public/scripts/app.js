'use strict';

console.log('Apps is running');

var userName = 'Hiren Patel';
var userAge = 28;
var userLocation = 'New Jersey';

var user = {
    name: 'Hiren',
    age: 29,
    location: 'India'
};

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName.toUpperCase() + '!',
        app.title
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age,
        app.sub
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation
    )
);

//JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
