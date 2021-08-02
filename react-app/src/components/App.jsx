import React from 'react';

import classes from './app.module.css';
import SignUpForm from './sign-up-form';
// import SplitForm from './split-form';
// import ControledForm from './form/ControledForm';
// import UncontroledForm from './form/UncontroledForm';
// import Input from './inputs/index';

class App extends  React.Component {

    state = {
        users: []
    }

    createUser = user => {
        user.id = new Date().getTime().toString()
        this.setState({
            users: [...this.state.users, user]
        })
    }

    render () {
        return (
            <div className={classes.container}>
                <h1>Simple Input Element !</h1>
                {/* <Input />
                <UncontroledForm />
                <ControledForm />
                <SplitForm /> */}
                <SignUpForm createUser={this.createUser} />

                <div >
                    <h1 className="my-5">All registered users</h1>
                    <ul className="list-group">
                        {this.state.users.map(user => (
                            <li key={user.id} className="list-group-item" >{user.name} --- {user.email}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;