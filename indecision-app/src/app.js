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
        this.state = {
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddoption={this.handleAddoption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        //console.log(this.props);
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        );
    }

}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {


    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}> Remove All </button>
                {
                    this.props.options.map((opt) => {
                        return <Option key={opt} optionText={opt} />
                    })
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

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

        this.setState(() => {
            return {
                error
            };
        });

        e.target.elements.option.value = '';
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

ReactDOM.render(jsx, document.getElementById('app'));