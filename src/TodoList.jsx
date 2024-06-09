import { TodoItem } from "./TodoItem"
export function TodoList({list, handleToggle, handleDelete}){
    return (
        <ul>
            {list.length == 0 && 'No Todos'}
            {list.map( todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete}/>
                )
            })}
        </ul>
    )
}