import React, { Component } from 'react';

class TestLifecycleMethods extends Component {
  //componentDidMount(a, b, c) {
  //  console.log(a, b, c);
  //}

  componentWillUnmount(a, b, c) {
    console.log(a, b, c);
  }

  render() {
    return <div>Hello</div>;
  }
}

export default TestLifecycleMethods;
