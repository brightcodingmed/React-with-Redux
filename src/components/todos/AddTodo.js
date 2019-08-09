import React, { Component } from 'react'
import { connect } from 'react-redux';
import { persistTodo } from './../../actions/todoActions';

export class AddTodo extends Component {

    state = {
        label: ''
    }

    inputHandle = (e) => {
        this.setState({
            label: e.target.value
        })
    } 

    addTodo = () => {

        this.props.persistTodo({ label: this.state.label, active: false })
        
        this.props.history.push('/todos')
    }

    render() {
        return (
            <div>
                
                <div className="form-group">
                    <label htmlFor="">Label</label>
                    <input onChange={this.inputHandle} value={this.state.label} type="text" className="form-control"/>
                    <button onClick={this.addTodo} className="btn btn-success">Add</button>
                </div>    

            </div>
        )
    }
}

export default connect(null, { persistTodo })(AddTodo)
