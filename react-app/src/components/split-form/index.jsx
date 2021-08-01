import React from 'react';
import Form from './form'

class SplitForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = {}
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value

        console.log(this.state);
        event.target.reset();
        this.setState({name: '', email: '', password: '',})
        
    }

    render () {
        return (
            <div>
                <Form values={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default SplitForm;