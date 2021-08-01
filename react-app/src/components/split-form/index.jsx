import React from 'react';
import PropTypes from 'prop-types';

const InputText = props => (
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

const Form = props => (
    <form onSubmit={props.handleSubmit} >
        <InputText name="name" label="Enter name" placeholder="Enter your name" value={props.values.name} onChange={props.handleChange} />

        <InputText type="email" name="email" label="Enter email" placeholder="example@email.com" value={props.values.email} onChange={props.handleChange} />

        <InputText type="password" name="password" label="Enter password" placeholder="*******" value={props.values.password} onChange={props.handleChange} />

        <button type="submit">Submit</button>
    </form>
)

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
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
        return (
            <div>
                <Form values={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default SplitForm;