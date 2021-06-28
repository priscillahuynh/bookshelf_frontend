import React from 'react';
import {connect} from 'react-redux';
import {editShelf} from '../actions/editShelf'

class ShelfEdit extends React.Component {
    state = {
        name: '',
        id: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:  event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let shelf = {...this.state, id: this.props.shelf.id}
        this.props.editShelf(shelf)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Edit Shelf Name: </label>
                   <input type='text'value={this.state.name} name='name'onChange={this.handleChange}/> 
                   {/* <input type="submit">Update</input> */}
                   <button className="btn btn-secondary btn-sm" type="submit">Update</button>
               </form>
           </div>
        )
    }
}

export default connect(null, {editShelf})(ShelfEdit);