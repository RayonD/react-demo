import React from 'react';
import {Route, BrowserRouter, NavLink} from 'react-router-dom';
import Home from './Router/Home';
import About from './Router/About';
import Contact from './Router/Contact';

class RouterMain extends React.Component {
    style = {
        padding: 5
    };
    activeStyle = {
        fontWeight: "bold",
        color     : "green"
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <NavLink
                            to="/home"
                            style={this.style}
                            activeStyle={this.activeStyle}>
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            style={this.style}
                            activeStyle={this.activeStyle}>
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            style={this.style}
                            activeStyle={this.activeStyle}>
                            Contact
                        </NavLink>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default RouterMain;






