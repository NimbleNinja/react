import React, { Component } from 'react';

class Dimensions extends Component {
  constructor(props) {
    super(props);

    const { innerWidth, innerHeight } = window;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = e => {
    const { innerHeight, innerWidth } = e.target;

    document.title = `${innerWidth} x ${innerHeight}`;

    this.setState({
      width: innerWidth,
      height: innerHeight,
    });
  };

  render() {
    return (
      <div className='dimensions'>{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}

export default Dimensions;
