import React from 'react';

class Input extends React.Component {
    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        skills: [],
        agree: false,
    }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleCheckBox = event => {
        this.setState({agree: event.target.checked})
    }
    handleSkillsChange = event => {
        if (event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        } else {
            const newSkills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState({skills: newSkills})
        }
    }

    render () {
        const {name, country, bio, birthday, agree, skills, } = this.state

        return (
            <div>
                <input className="form-control my-2" type="text" name="name" placeholder="Enter your name" value={name} onChange={this.handleChange} />

                <select className="form-control my-2" name="country" value={country} onChange={this.handleChange} >
                    <option >Select your country</option>
                    <option value="Bnagladesh">Bnagladesh</option>
                    <option value="India">India</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="China">China</option>
                </select>

                <textarea className="form-control my-2" name="bio" placeholder="Write about your self" value={bio} onChange={this.handleChange} ></textarea>
        
                <input className="form-control my-2" type="date" name="birthday" value={birthday} onChange={this.handleChange} />

                <div onChange={this.handleChange}>
                    <input type="radio" name="gender" value="Male" /> Male

                    <input type="radio" name="gender" value="Female" /> Female

                    <input type="radio" name="gender" value="Other" /> Other
                </div>

                <div>
                    <p>Skills: </p>
                    <br/>

                    <input type="checkbox" name="skills" value="Java" checked={skills.includes("Java")}  onChange={this.handleSkillsChange} /> Java

                    <input type="checkbox" name="skills" value="JavaScript" checked={skills.includes("JavaScript")}  onChange={this.handleSkillsChange} /> JavaScript

                    <input type="checkbox" name="skills" value="Python" checked={skills.includes("Python")}  onChange={this.handleSkillsChange} /> Python

                    <input type="checkbox" name="skills" value="Php" checked={skills.includes("Php")}  onChange={this.handleSkillsChange} /> Php
                    
                </div>

                <div>
                    <input type="checkbox" name="agree" checked={agree} onChange={this.handleCheckBox} /> I agree to all the terms and conditions.
                </div>

                <button onClick={() => console.log(this.state)}>Show data</button>
            </div>
        )
    }
}

export default Input;