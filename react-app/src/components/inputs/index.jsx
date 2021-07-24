import React from 'react';

class Input extends React.Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
    }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render () {
        const {name, country, bio, birthday} = this.state

        return (
            <div>
                <input className="form-control my-2" type="text" onChange={this.handleChange} value={name} name="name" placeholder="Enter your name"/>

                <select className="form-control my-2" onChange=     {this.handleChange} value={country} name="country" >
                    <option >Select your country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="China">China</option>
                </select>

                <textarea className="form-control my-2" onChange={this.handleChange} name="bio" value={bio} placeholder="Write about yourself."></textarea>

                <input className="form-control my-2" onChange={this.handleChange} value={birthday} type="date" name="birthday"/>

                <button onClick={() => console.log(this.state)}>Show data</button>
            </div>
        )
    }
}

export default Input;