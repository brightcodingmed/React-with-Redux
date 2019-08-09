import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAll } from './../../actions/todoActions';
import { Link } from 'react-router-dom';

class Todos extends Component {


    componentWillMount() {
        this.props.getAll();
    }

    render() {
        return (
            <div>
               <div className="row">
                   <div className="col-md-6 mx-auto">
                         
                         <Link to="/todos/create">New Todo</Link>
                         <ul className="list-group">
                             {this.props.todos && this.props.todos.map(todo => (

                             <li key={todo.id} className="list-group-item">{todo.label}</li>
                             ))}
                         </ul>   
                  </div>
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       todos: state.todo.todos
   }
}

export default connect(mapStateToProps, { getAll })(Todos)
