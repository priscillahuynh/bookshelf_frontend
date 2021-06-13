import React from 'react';
import ShelfForm from '../components/ShelfForm'
import ShelfList from '../components/ShelfList'
import {connect} from 'react-redux';
import {fetchShelves} from '../actions/fetchShelves'
 

class ShelvesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchShelves()
    }
    
    render() {
        return(
            <div>
                <ShelfForm />
                <ShelfList shelves={this.props.shelves}/>
            </div>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        shelves: state.shelves
    }
}

export default connect(mapStateToProps, {fetchShelves})(ShelvesContainer)