
const appRoot = document.getElementById('app');

let showText = true;

const toggle = () => {
    showText = !showText;
    renderCounterApp();
};

const renderCounterApp = () => {
   
    const templateTwo = (
        <div>
            <h1>Visibility Toggle</h1>
             <button onClick={toggle} className="button">{showText ? 'Hide Details' : 'Show Details' }</button>
             {
                 showText ? <p>This is some text</p> : <p></p>
             }
             
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();