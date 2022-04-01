/* eslint-disable no-undef */

const rootElem = document.querySelector('#root');

const divElem = React.createElement(
  'div',
  {
    className: 'greeting',
  },
  'Hello, React!'
);

ReactDOM.render(divElem, rootElem);
