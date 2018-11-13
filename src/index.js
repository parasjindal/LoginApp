import React from 'react';
import ReactDOM from 'react-dom';

import LoginScreen from './components/LoginScreen';

// TODO if session ID present then open MainScreen rather than LoginScreen

const Index = () => {
    return <LoginScreen />;
};

ReactDOM.render(<Index />, document.getElementById("index"));