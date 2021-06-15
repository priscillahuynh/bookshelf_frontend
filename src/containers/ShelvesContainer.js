import React from 'react';
import ShelfForm from '../components/ShelfForm'
import ShelfList from '../components/ShelfList'
import Shelf from '../components/Shelf'
import {connect} from 'react-redux';
import {fetchShelves} from '../actions/fetchShelves'
import {Route} from 'react-router-dom'
 

class ShelvesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchShelves()
    }
    
    render() {
        return(
            <div>
                <Route path='/shelves/new' component={ShelfForm}/>
                <Route path='/shelf/:id'render={(routerProps)=> <Shelf {...routerProps} shelves={this.props.shelves}/>}/>
                <Route exact path='/shelves' render={(routerProps)=> <ShelfList shelves={this.props.shelves}/>}/>
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