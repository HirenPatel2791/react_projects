import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p> 404!</p>
        <a href="/"> Go Home </a>
        <br />
        <Link to="/"> Go Home(Client Side)</Link>
    </div>
);

export default NotFoundPage;