import React from 'react';
import {connect} from 'react-redux';
import { addBook } from '../actions/addBook';

class BookForm extends React.Component {
    state = {
        title: '',
        author: '',
        image_url: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBook(this.state, this.props.shelf.id)
        this.setState({
            title: '',
            author: '',
            image_url: ''
        })
    }

    render () {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="hidden" name="shelf_id" value=""></input>  
                <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input><br></br>             
                <label>Author:</label>
                    <input type="text" name="author" value={this.state.author} onChange={this.handleChange}></input> <br></br>           
                <label>Image Url:</label>
                    <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange}></input>  <br></br>          
                {/* <input type="submit" value="Add New Book"></input> */}
                <button class="btn btn-secondary btn-sm" type="submit">Add New Book</button>
            </form>
        </div>
        )
    }
}

export default connect(null, {addBook})(BookForm)