import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isShow: false,
  };

  toggleShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { title, children } = this.props;
    const isShow = this.state.isShow;
    const iconClass = `fa-solid fa-chevron-${isShow ? 'up' : 'down'}`;

    return (
      <div className='expand border'>
        <div className='expand__header'>
          <span className='expand__title'>{title}</span>
          <button className='expand__toggle-btn' onClick={this.toggleShow}>
            <i className={iconClass}></i>
          </button>
        </div>
        <div className='expand__content'>{isShow ? children : null}</div>
      </div>
    );
  }
}

export default Expand;
