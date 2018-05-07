import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';

// const Layout = () => {
//     return (
//         <div>
//             <p> header </p>
//             <p> footer </p>
//         </div>
//     );
// }
// IndecisionApp.defaultProps = {
//     options: []
// };


//Stateless functional component




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







// //root
// const jsx = (
//     <div>
//         <IndecisionApp />
//     </div>
// );

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

//ReactDOM.render(<Layout />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// transfrom - class babel plugin test::


class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi, My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
// how we break this binding
const getGreeting = oldSyntax.getGreeting
//console.log(oldSyntax);
console.log(getGreeting()); 

// new 

class NewSyntax {
    name = 'Jan';
    getGreeting = () => {
        return `Hi, My name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newgetGreeting = newSyntax.getGreeting
console.log(newSyntax);
console.log(newgetGreeting());