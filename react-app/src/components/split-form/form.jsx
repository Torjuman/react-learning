import React from 'react';
import PropTypes from 'prop-types';
import InputText from './text_input';

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


export default Form;