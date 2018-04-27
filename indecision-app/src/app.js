import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));