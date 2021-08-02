import React from 'react';
import PropTypes from 'prop-types';
import InputTextSign from './input-text';

const Form = ({values, agreement, handleChange, handleAgreement, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <InputTextSign 
            name="name"
            label="Your Name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange} />

            <InputTextSign 
            name="email"
            type="email"
            label="Email"
            placeholder="example@email.com"
            value={values.email}
            onChange={handleChange} />

            <InputTextSign 
            name="password"
            type="password"
            label="Password"
            placeholder="******"
            value={values.password}
            onChange={handleChange} />

            <InputTextSign 
            name="birthDate"
            type="date"
            label="Your BirthDate"
            value={values.birthDate}
            onChange={handleChange} />

            <div className="form-group">
                <label >
                    <input className="form-group mr-2" 
                    type="radio" 
                    name="gender"
                    value="male" 
                    onChange={handleChange} />
                </label> Male

                <label >
                    <input className="form-group mr-2" 
                    type="radio" 
                    name="gender"
                    value="female" 
                    onChange={handleChange} />
                </label> Female

                <label >
                    <input className="form-group mr-2" 
                    type="radio" 
                    name="gender"
                    value="other" 
                    onChange={handleChange} />
                </label> Other

            </div>

            <div className="form-group">
                <label >
                    <input className="form-group mr-2" 
                    type="checkbox" 
                    name="agreement" 
                    checked={agreement} 
                    onChange={handleAgreement} />
                    </label> I agree

            </div>

            <button 
            className="btn btn-primary" 
            type="submit" 
            disabled={!agreement} >Create account</button>

        </form>
    )
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}


export default Form;