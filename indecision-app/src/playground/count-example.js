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