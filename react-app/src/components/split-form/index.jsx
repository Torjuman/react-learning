import React from 'react';
import PropTypes from 'prop-types';

var InputText = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input className="form-control" type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />

    </div>
)

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

InputText.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
}

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
        const {name, email, password} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <InputText name="name" label="Enter name" placeholder="Enter your name" value={name} onChange={this.handleChange} />

                    <InputText type="email" name="email" label="Enter email" placeholder="example@email.com" value={email} onChange={this.handleChange} />

                    <InputText type="password" name="password" label="Enter password" placeholder="*******" value={password} onChange={this.handleChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SplitForm;