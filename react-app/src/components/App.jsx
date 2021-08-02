import React from 'react';

import classes from './app.module.css';
import SignUpForm from './sign-up-form';
// import SplitForm from './split-form';
// import ControledForm from './form/ControledForm';
// import UncontroledForm from './form/UncontroledForm';
// import Input from './inputs/index';

class App extends  React.Component {


    render () {
        return (
            <div className={classes.container}>
                <h1>Simple Input Element !</h1>
                {/* <Input />
                <UncontroledForm />
                <ControledForm />
                <SplitForm /> */}
                <SignUpForm />
            </div>
        )
    }
}

export default App;