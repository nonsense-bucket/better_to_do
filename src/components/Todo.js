import React, {useState} from 'react';



const Todo = ({text, todo, todos, setTodos}) => {
      const [isComplete, setIsComplete] = useState(false);  
    const handleDelete = () => {
        setTodos(todos.filter((item) => {
            return item.id !== todo.id ;
        })
    );
    };

    const handleComplete = () => {      
         setIsComplete(!isComplete);
         setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return (
                    {
                        ...item,
                        completed: !item.completed
                    }
                )
            }
            return item;
         }))
    };

    return (
       <div className="todo">
        <li className="todo-item" style={isComplete? {textDecorationLine: 'line-through'} : null}>{text}</li>
        <button className='complete-btn' onClick={handleComplete}><i className='fas fa-check'></i></button>
        <button className='trash-btn' onClick={handleDelete}><i className='fas fa-trash'></i></button>
       </div>
    )
};

export default Todo;