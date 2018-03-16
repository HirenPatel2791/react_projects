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
var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    //console.log('form submitted!');
    //console.log(e);
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeAll = function removeAll() {
    app.options.length = 0; // app.options = [];
    renderApp();
};

var numbers = [55, 101, 1000];

//JSX - JavaScript XML

var renderApp = function renderApp() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            ' Remove All '
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' ',
                    option,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                ' Add Option '
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
