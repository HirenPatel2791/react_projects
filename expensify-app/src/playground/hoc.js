//Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstarct state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p> The info is {props.info}</p>
        </div>
    );
};

const withAdminWarning = (WrappedComponent) => {
    return  (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        <div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props}/>
        ) : (
            <p>Auth required</p>
        )}
        
        
    </div>
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="haha!!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="haha!!" />, document.getElementById('app'));