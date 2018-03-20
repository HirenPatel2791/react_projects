class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <div>
                <h1> Indecision </h1>
                <h2> Put your life in the hands of computer </h2>
            </div>
        );
    }

}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button> What should I do? </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option></Option>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                option here
            </div>
        );
    }
}

class AddOption extends React.Component {
    render () {
        return (
            <div>
                AddOptions Component here
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