import React from 'react';
import {connect} from 'react-redux';
import {addShelf} from '../actions/addShelf'


class ShelfForm extends React.Component {
    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:  event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addShelf(this.state)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
               <h4>Create A New Shelf</h4>
               <form onSubmit={this.handleSubmit}>
                   <label>Shelf Name</label>
                   <input type='text'value={this.state.name} name='name'onChange={this.handleChange}/> 
                   <input type='submit'/><br/><br/>
               </form>
           </div>
        )
    }
}

export default connect(null, {addShelf})(ShelfForm);