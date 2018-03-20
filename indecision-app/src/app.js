const obj = {
    name: 'hire',
    getName() {
        return this.name;
    }
};

//const getName = obj.getName.bind(obj);
const getName = obj.getName.bind({ name: 'Anre'});
console.log(obj.getName());
console.log(getName());

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick() {
        alert('handlepick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}> What should I do? </button>
            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    } 

    handleRemoveAll() {
        alert('Remove all');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}> Remove All </button>
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
    handleAddoption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;

        if (option) {
            alert(option);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
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