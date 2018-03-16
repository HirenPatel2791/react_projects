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
const appRoot = document.getElementById('app');

const app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of the computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    //console.log('form submitted!');
    //console.log(e);
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }

}; 

const removeAll = () => {
    app.options.length = 0; // app.options = [];
    renderApp();
}

const numbers = [55, 101, 1000];

//JSX - JavaScript XML

const renderApp = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && <p> {app.subtitle} </p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p> 
            <p>{app.options.length}</p>
            <button onClick={removeAll}> Remove All </button>
            {
               // [99, 98, 97, 'Mike Smith', null, undefined, true]
            }
            {
                // [<p key="1">a</p>,<p key="2">a</p>]
            }
            {
                /* numbers.map((number) => {
                    return <p key={number}> Number: {number}</p>
                }) */
            }
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}> {option} </li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button> Add Option </button>
            </form>
        </div>
    ); 
    
    ReactDOM.render(template, appRoot);
};

renderApp();