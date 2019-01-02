import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RouterMain from './RouterMain';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<RouterMain/>, document.getElementById('root'));
/*setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}, 5000);*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
