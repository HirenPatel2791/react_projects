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


const app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of the computer',
    options: ['One','Two']
};
//JSX - JavaScript XML
const template = (
    <div>
        <h1> {app.title} </h1>
        {app.subtitle && <p> {app.subtitle} </p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p> 
        <ol>
            <li>{app.options[0]}</li>
            <li>{app.options[1]}</li>
        </ol>
    </div>
); 

//class is className is Jsx
let count = 0;
const addOne = () => {
    count++;
    //console.log('add one', count);
    renderCounterApp();                 //Manual data binding
};

const minusOne = () => {
    //console.log('minus one');
    count--;
    renderCounterApp();
}


const reset = () => {
    //console.log('reset');
    count = 0;
    renderCounterApp();
}


const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
             <button onClick={addOne} className="button">+1</button>
             <button onClick={minusOne} className="button">-1</button>
             <button onClick={reset} className="button">reset</button>
        </div>
    );

    
    ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();