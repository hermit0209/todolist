import { useEffect, useState } from 'react';
import {styled, keyframes} from 'styled-components'

const Modal = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 120px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    overflow: auto;
    z-index: 1;
    .modal-content{
        position: relative;
        margin: 0 auto;
        padding: 1rem 2rem;
        width: 80%;
        border: 1px solid #888;
        background-color: #fefefe;
        transform: translate(0, 0);
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        animation-name: ${props => props.show ? modalAnimation : ''};
        animation-duration: 1s;
        animation-iteration-count: 1;
    }
    .modal-input{
        margin-bottom: 20px;
        label{
            display: block;
            text-align: left;
        }
        input{
            display: block;
            box-sizing: border-box;
            padding: 15px;
            width: 100%;
            height: 50px;
            border: none;
            background-color: #eee;
            font-size: 1.5rem;
            
        }
    }
    .add-todo-btn{
        display: inline-block;
    }
`

const AddTodoBtn = styled.button`
    padding: 3px;
    padding-bottom: 5px;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: darkslategray;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 0px;

`
const modalAnimation = keyframes`
 0% { transform: translate(0, -20px); }
 100% { transform: translate(0, 0); }
`


export function NewTodos({onSubmit}){
    const [newTodo, setNewTodo] = useState('item1');
    const [todoComment, setTodoComment] = useState('comment1');
    const [showModal, setShowModal] = useState(false);
    
    function handleSubmit(e){
        e.preventDefault();
        if(newTodo == ''){
            setShowModal(false);
            return;
        }

        onSubmit(newTodo, todoComment);
        setNewTodo("");
        setTodoComment("");
        setShowModal(false);
    }

    return (
        <>
            <Modal show={showModal} onClick={()=>setShowModal(false)}>
                <form onSubmit={handleSubmit} className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-input'>
                        <label>New Todo
                            <input 
                                type="text"
                                value={newTodo} 
                                onChange={e => setNewTodo(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='modal-input'>
                        <label>Todo Comment
                            <input 
                                type="text"
                                value={todoComment} 
                                onChange={e => setTodoComment(e.target.value)}
                            />
                        </label>
                    </div>
                    
                    <AddTodoBtn className='add-todo-btn'>+</AddTodoBtn>
                </form>
            </Modal>

            <AddTodoBtn onClick={()=> setShowModal(true)} className='add-todo-btn'>+</AddTodoBtn>
        </>
    )
}