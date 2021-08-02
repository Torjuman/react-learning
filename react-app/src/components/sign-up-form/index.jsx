import React from 'react';
import Form from './form';

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: '',
}

class SignUpForm extends React.Component {

    state = {
        values: initValues,
        agreement: false,
        errors: {},
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }
    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        const {isValid, errors} = this.validation()

        if (isValid) {
            console.log(this.state.values)

            event.target.reset()
            this.setState({values: initValues, agreement: false, errors: {}})
        } else {
            this.setState({errors})
        }

    }

    validation = () => {
        const errors = {}
        const {values: {name, email, password, birthDate, gender}} = this.state

        if (!name) {
            errors.name = 'Please provide your name'
        }

        if (!email) {
            errors.email = 'Please provide your email'
        }
        if (!password) {
            errors.password = 'Please provide a valid password'
        }
        if (!birthDate) {
            errors.birthDate = 'Please provide your birth date'
        }
        if (!gender) {
            errors.gender = 'Please select your gender'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }

    }

    render () {
        return (
            <div>
                <h1>Sign Up Form</h1>
                <Form 
                values={this.state.values} 
                agreement={this.state.agreement} 
                errors={this.state.errors}
                handleChange={this.handleChange} 
                handleAgreement={this.handleAgreement} 
                handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default SignUpForm;