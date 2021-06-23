import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchShelves} from '../actions/fetchShelves'
import ShelfList from '../components/ShelfList'
import Shelf from '../components/Shelf'
import ShelfForm from '../components/ShelfForm'
import { Redirect} from 'react-router-dom'
import Welcome from '../components/Welcome'

 
class ShelvesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchShelves()
    }
    
    render() {
        return(
            <div>
                <Welcome /><br/>
                <Route path='/'>
                    <Redirect to='/shelves'/>
                </Route>
                <Route path='/shelves/new' component={ShelfForm}/>
                <Route path='/shelves' render={(routerProps) => <ShelfList {...routerProps} shelves={this.props.shelves}/>}/>
                
                    <Route path='/shelf/:id' render={(routerProps) => <Shelf {...routerProps} shelves={this.props.shelves}/>}/>
                    <Route path='/shelf/:id/edit' render={(routerProps) => <Shelf {...routerProps} shelves={this.props.shelves}/>}/>
                
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