import axios from 'axios';

    export const getAll = () => (dispatch) => {
        
       axios.get('http://localhost:5000/todos')
            .then(res => {

                dispatch({
                    type: "GET_TODOS",
                    payload: res.data
                })
            })
            .catch(err => console.error(err))

    }

    export const persistTodo = (todo) => (dispatch) => {
        
        axios.post('http://localhost:5000/todos', todo)
             .then(res => {
 
                 dispatch({
                     type: "ADD_TODO",
                     payload: res.data
                 })
             })
             .catch(err => console.error(err))
 
     }