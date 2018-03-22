class Counter extends React.Component {

    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne() {
        this.setState(() => {
            return {
                count: this.state.count + 1
            };
        });

        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1
        //     };
        // });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1> Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));


// //class is className is Jsx
// let count = 0;
// const addOne = () => {
//     count++;
//     //console.log('add one', count);
//     renderCounterApp();                 //Manual data binding
// };

// const minusOne = () => {
//     //console.log('minus one');
//     count--;
//     renderCounterApp();
// }


// const reset = () => {
//     //console.log('reset');
//     count = 0;
//     renderCounterApp();
// }


// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//              <button onClick={addOne} className="button">+1</button>
//              <button onClick={minusOne} className="button">-1</button>
//              <button onClick={reset} className="button">reset</button>
//         </div>
//     );


//     ReactDOM.render(templateTwo, appRoot);

// };

// renderCounterApp();