// const obj = {
//     name: 'hire',
//     getName() {
//         return this.name;
//     }
// };

// //const getName = obj.getName.bind(obj);
// const getName = obj.getName.bind({ name: 'Anre'});
// console.log(obj.getName());
// console.log(getName());

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddoption = this.handleAddoption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        //console.log('Component did mount, Fetching Data');
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        
        //console.log(prevState);
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }

    handleAddoption(option) {
        if (!option) {
            return 'Enter value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }

    render() {
        const subtitle = 'Put your life in the hands of computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddoption={this.handleAddoption} />
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };


//Stateless functional component

const Header = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            {props.subtitle && <h2> {props.subtitle} </h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render() {
//         //console.log(this.props);
//         return (
//             <div>
//                 <h1> {this.props.title} </h1>
//                 <h2> {this.props.subtitle} </h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should I do?
                </button>
        </div>
    );
};

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}>
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All </button>
            {props.options.length == 0 &&<p> please add an option to get started!</p> }
            {
                props.options.map((opt) => {
                    return <Option
                        key={opt}
                        optionText={opt}
                        handleDeleteOption={props.handleDeleteOption} />
                })
            }
        </div>
    );
};

// class Options extends React.Component {


//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}> Remove All </button>
//                 {
//                     this.props.options.map((opt) => {
//                         return <Option key={opt} optionText={opt} />
//                     })
//                 }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}>
                remove
            </button>
        </div>
    );
};



class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddoption = this.handleAddoption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddoption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddoption(option);

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        } 
    }

    render() {
        return (
            <div>{
                this.state.error && <p>{this.state.error}</p>
            }
                <form onSubmit={this.handleAddoption}>
                    <input type="text" name="option" />
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}

//root
const jsx = (
    <div>
        <IndecisionApp />
    </div>
);

//Stateless Component Function
// const User = (props) => {
//     return(
//         <div>
//             <p>Name : {props.name} </p>
//             <p>Age : {props.age}</p>
//         </div>
//     );
// };

//ReactDOM.render(<User name="Hiren" age={26}/>, document.getElementById('app'));

ReactDOM.render(jsx, document.getElementById('app'));