import React from 'react';
import Todo from './Todo';

const Todolist = ({todos, setTodos, filterTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo) => {
                    return (
                        <Todo 
                        text={todo.text} 
                        key={todo.id} 
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        />
                    )
                })}
                
            </ul>
        </div>
    )
};

export default Todolist;