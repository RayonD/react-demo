import React, {Component, Fragment} from 'react';
import {Jsx1, Jsx2, Expressions, Style} from './jsx';
import Stateless from './Stateless';
import Stateful from './Stateful';
import State from './State';
import SetState from './SetState';
import ForceUpdate from './ForceUpdate';
import LifeCycle from './LifeCycle';
import FormSimple from './FormSimple';
import FormComplex from './FormComplex';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div id="jsx">
                    <Jsx1/>
                    <Jsx2/>
                    <Expressions/>
                    <Style/>
                </div>
                <Stateless/>
                <Stateful/>
                <State/>
                <SetState/>
                <ForceUpdate/>
                <LifeCycle/>
                <FormSimple/>
                <FormComplex/>
            </Fragment>
        );
    }
}

export default App;
