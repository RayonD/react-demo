import React, {Component} from 'react';

class Jsx1 extends Component {
    render() {
        return (
            <div>
                Hello World!!!
            </div>
        );
    }
}

class Jsx2 extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>This is the content!!!</p>
            </div>
        );
    }
}

class Expressions extends React.Component {
    render() {
        return (
            <div>
                <h1>{1 + 1}</h1>
            </div>
        );
    }
}

class Style extends Component {
    render() {
        let myStyle = {
            fontSize: 100,
            color   : '#FF0000'
        };
        return (
            <div>
                <h1 style={myStyle}>Header</h1>
            </div>
        );
    }
}

export {Jsx1, Jsx2, Expressions, Style};