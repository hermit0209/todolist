import {styled, css} from 'styled-components'

const Todo = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    align-items: center;
    border-bottom: 1px solid #ccc;

    input{
        margin-right: 10px;
        width: 20px;
        height: 20px;
        /* appearance: none;
        -webkit-appearance: none; */
        box-shadow: 0 0 0 1px gray, 0 0 0 2px inset white;
        vertical-align: text-top;
        &:checked{
            accent-color: white;
            box-shadow: 0px 0px 0px 1px gray;
        }
    }
    .todo-content{
        width: 65%;
        font-size: 1.2rem;
        text-align: start;
        ${({completed}) => completed && css`
            text-decoration: line-through;
            opacity: 0.6;
        `}
        label{
            display: block;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    
    .comment{
        font-size: 0.8rem;
        opacity: 0.8;
    }
    .btn-danger{
        position: relative;
        padding: 0;
        width: 25px;
        height: 25px;
        border-radius: 3px;
        background-color: #e03737;
        text-align: center;
        &:before{
            content: '×';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -60%);
            color: #fff;
            font-size: 25px;
        }
    }
`
export function TodoItem({todo, handleToggle, handleDelete}){
    return (
        <Todo completed={todo.completed}>
            <input 
            type="checkbox" 
            id={todo.id}
            checked={todo.completed}
            onChange={ e => handleToggle(todo.id, e.target.checked) }
            />
            
            <div className='todo-content'>
                <label htmlFor={todo.id}>{todo.title}</label>
                <label htmlFor={todo.id} className='comment'>{todo.comment}</label>
            </div>
            <button 
                className='btn btn-danger' 
                onClick={ e => handleDelete(todo.id) }
                >
            </button>
        </Todo>
    )
}