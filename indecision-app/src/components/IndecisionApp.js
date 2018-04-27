import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {

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
