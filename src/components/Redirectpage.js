import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './Redirectpage.css';

export const Redirectpage = () => {
  return <Redirect to = '/dashboard' />
}

export const NoMatch = ({ location }) => (
  <div className = 'notFound'>
    <h1 className = 'h1'>404</h1>
    <h3 className = 'h3'>Uh oh, there is nothing here..</h3>
    <Link to = '/'>
      <Button type = 'primary' className = 'btn'>Back to Home</Button>
    </Link>
  </div>
);
