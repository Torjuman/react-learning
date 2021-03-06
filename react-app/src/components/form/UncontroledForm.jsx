import React from 'react';

class UncontroledForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        const data = {}
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value

        console.log(data);
        event.target.reset()
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input className="form-control" type="text" name="name" placeholder="Enter your name" />

                    <input className="form-control" type="email" name="email" placeholder="email" />

                    <input className="form-control" type="password" name="password" placeholder="******" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UncontroledForm;