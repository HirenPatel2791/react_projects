class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            showText: true
        };

    }

    handleToggle() {
        this.setState((prevState) => {
            return{
                showText: !prevState.showText
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle} className="button">{this.state.showText ? 'Hide Details' : 'Show Details'}</button>
                {
                    this.state.showText ? <p>This is some text</p> : <p></p>
                }
            </div>
        );
    }
}


ReactDOM.render(<Visible />, document.getElementById('app'));


// const appRoot = document.getElementById('app');

// let showText = true;

// const toggle = () => {
//     showText = !showText;
//     renderCounterApp();
// };

// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Visibility Toggle</h1>
//              <button onClick={toggle} className="button">{showText ? 'Hide Details' : 'Show Details' }</button>
//              {
//                  showText ? <p>This is some text</p> : <p></p>
//              }

//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);

// };

// renderCounterApp();