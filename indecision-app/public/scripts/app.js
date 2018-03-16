'use strict';

var appRoot = document.getElementById('app');

var showText = true;

var toggle = function toggle() {
    showText = !showText;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {

    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle, className: 'button' },
            showText ? 'Hide Details' : 'Show Details'
        ),
        showText ? React.createElement(
            'p',
            null,
            'This is some text'
        ) : React.createElement('p', null)
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
