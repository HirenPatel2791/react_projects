console.log('Apps is running');




var userName = 'Hiren Patel';
var userAge = 28;
var userLocation = 'New Jersey';

var user = {
    name : 'Hiren',
    age : 29,
    location : 'India'
};

var app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of the computer'
};

var templateTwo = (
<div>
    <h1>
        {userName.toUpperCase() + '!'}
        {app.title}
    </h1>
    <p>
        Age: {user.age}
        {app.sub}
    </p>
    <p>
        Location: {userLocation}
    </p>
</div>
);

//JSX - JavaScript XML
var template = (
    <div>
        <h1> {app.title} </h1>
        <p> {app.subtitle} </p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
    );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);