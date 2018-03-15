console.log('Apps is running');

//JSX - JavaScript XML
var template = (
<div>
    <h1> This is JSX from app.js</h1>
    <p>This is some info</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);