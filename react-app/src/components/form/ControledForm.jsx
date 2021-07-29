import React from 'react';

class ControledForm extends React.Component {
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
        const {name, email, password} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input className="form-control" type="text" name="name" placeholder="Enter your name" value={name} onChange={this.handleChange} />

                    <input className="form-control" type="email" name="email" placeholder="email" value={email} onChange={this.handleChange} />

                    <input className="form-control" type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ControledForm;