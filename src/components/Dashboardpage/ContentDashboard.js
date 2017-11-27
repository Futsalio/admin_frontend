import React from 'react';

import '../../utils/global.css';

export default class ContentDashboard extends React.Component {
  render() {
    return (
      <div className = 'content'>
        {this.props.name} is a cat. Dashboardpage
      </div>
    );
  }
}
