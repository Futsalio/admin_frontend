import React from 'react';

import './ContentLayout.css';

export default class ContentLayout extends React.Component {
  render() {
    return (
      <div className = 'content_base'>
        {this.props.name} is a cat.
      </div>
    );
  }
}
