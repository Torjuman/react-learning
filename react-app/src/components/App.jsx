import React from 'react';

import classes from './app.module.css';
import Input from './inputs/index';

class App extends  React.Component {


    render () {
        return (
            <div className={classes.container}>
                <h1>Simple Input Element !</h1>
                <Input />
            </div>
        )
    }
}

export default App;