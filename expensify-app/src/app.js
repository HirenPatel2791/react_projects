import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        <p> This is my router page</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p> Add Expense Page</p>
    </div>
);

const EditExpensePage = () => (
    <div>
        <p> EditExpensePage Page</p>
    </div>
);

const HelpPage = () => (
    <div>
        <p> HelpPage Expense Page</p>
    </div>
);

const NotFoundPage = () => (
    <div>
        <p> 404!</p>
        <a href="/"> Go Home </a>
        <br />
        <Link to="/"> Go Home(Client Side)</Link>
    </div>
);

const Header = () => (
    <header>
        <h1> Expensify </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active"> Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

