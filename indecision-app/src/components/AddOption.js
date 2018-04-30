import React from 'react';

export default class AddOption extends React.Component {

    //class properties
    state = {
        error: undefined
    }

    // constructor(props) {
    //     super(props);
    //     this.handleAddoption = this.handleAddoption.bind(this);
    // }
   
    //class properties events
    handleAddoption = (e) => {
        e.preventDefault();
        console.log('testing ddebgigng');
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

 