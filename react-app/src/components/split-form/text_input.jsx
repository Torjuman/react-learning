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


export default InputText;