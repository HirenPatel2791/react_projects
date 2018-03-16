'use strict';

console.log('Apps is running');

// var userName = 'Hiren Patel';
// var userAge = 28;
// var userLocation = 'New Jersey';

// const user = {
//     name : 'Hiren Patel',
//     age : 16,
//     location : 'NY'
// };

// function getLocation(location) {
//     if(location) {
//         return location;
//     } else {
//         return 'Unknown';
//     }
// }

// function getLocationNew(location) {
//     if(location) {
//         return <p>Location : {location}</p>;
//     }
// }

// const templateTwo = (
// <div>
//     <h1>
//         {userName.toUpperCase() + '!'}
//         <br/>
//         {user.name ? user.name : 'Anonymous'}
//     </h1>
//     <p>
//         Age: {user.age}
//     </p>
//     {(user.age && user.age >= 18) && <p> Age: {user.age}</p>}
//     <p>
//         Location: {getLocation(userLocation)}
//     </p>
//     {getLocationNew(user.location)}
// </div>
// );


var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: ['One', 'Two']
};
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
    app.subtitle && React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.options[0]
        ),
        React.createElement(
            'li',
            null,
            app.options[1]
        )
    )
);

//class is className is Jsx
var count = 0;
var addOne = function addOne() {
    count++;
    //console.log('add one', count);
    renderCounterApp(); //Manual data binding
};

var minusOne = function minusOne() {
    //console.log('minus one');
    count--;
    renderCounterApp();
};

var reset = function reset() {
    //console.log('reset');
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne, className: 'button' },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne, className: 'button' },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset, className: 'button' },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
