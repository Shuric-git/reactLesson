import React from 'react';
import ReactDOM from 'react-dom';

// const HelloWorld = () => {
//     return <h1>Hello React</h1>
// }

class ToDoApp extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                { name: 'Настроить webpack', checked: true },
                { name: 'Наконец настроить автосборку!', checked: true },
                { name: 'Написать ToDoApp', checked: false }
            ],
            newTodoText: ''
        };
    }

    toggleToDo(key) {
        const todos = this.state.todos.map((todo, i) => {
            if (key === i) {
                return {
                    name: todo.name,
                    checked: !todo.checked
                }
            }
            else {
                return todo;
            }
        });
        
        this.setState({ todos });
    }

    addToDo() {
        const todos = this.state.todos;
        todos.push({
            name: this.state.newTodoText,
            checked: false
        });

        this.setState({ 
            todos,
            newTodoText: ''
         });
    }

    render() {
        return (
            <div>

            <h2>List</h2>

            <ol>
                {
                    this.state.todos.map((todo, i) => {
                        const className = todo.checked ? 'checked' : '';

                        return (
                            <li 
                            key={i} 
                            className={className}
                            onClick={ev => {this.toggleToDo(i)}}
                            >
                                {todo.name}
                            </li>
                        )
                    })
                }
            </ol>
            
            <input 
            type="text"
             placeholder="Новая задача"
             value={this.state.newTodoText}
             onChange={ev => {
                 this.setState({ newTodoText: ev.target.value});
             }}
             onKeyUp={ev => {
                 if (ev.keyCode === 13) {
                     this.addToDo();
                 }
             }
                 
             }
             />
             </div>
        );
    }
}

ReactDOM.render(
    <ToDoApp />,
    document.querySelector('#app')
)