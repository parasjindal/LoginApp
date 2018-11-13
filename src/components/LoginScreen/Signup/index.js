import React from 'react';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>Name: <input type="text"></input></div>
                <div>Mobile: <input type="number"></input></div>
            </div>
        );
    }
}