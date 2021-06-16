import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchShelves} from '../actions/fetchShelves'
import ShelfList from '../components/ShelfList'
import Shelf from '../components/Shelf'
import ShelfForm from '../components/ShelfForm'
 
class ShelvesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchShelves()
    }
    
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/shelves/new' component={ShelfForm}/>
                    <Route path='/shelf/:id' render={(routerProps) => <Shelf {...routerProps} shelves={this.props.shelves}/>}/>
                    <Route path='/shelves' render={(routerProps) => <ShelfList {...routerProps} shelves={this.props.shelves}/>}/>
                </Switch>
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