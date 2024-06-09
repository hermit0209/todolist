import {styled} from 'styled-components'

const TodoListHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 2rem; */
    border-bottom: 1px solid #eee;
    font-size: 2rem;

    h1{
        margin-bottom: 0px;
        font-size: 2rem;
    }
    h2{
        margin-top: 10px;
        font-size: 1rem;
    }
    button{
        padding: 5px;
        width: 50px;
        height: 50px;
        background-color: transparent;
    }
`;

export function TodoHeader(){
    const date = new Date();
    let day = date.getDate();
    // const months = ['一','二','三','四','五','六','七','八','九','十','十一','十二'];
    // const month = months[date.getMonth()];
    const month = date.getMonth()+1;
    const weekDays = ['日','一','二','三','四','五','六'];
    const weekDay = '星期' + weekDays[date.getDay()];


    return(
        <TodoListHeader className='header'>
            <button className='left'>‹</button>
            <div>
                <h1>{weekDay}</h1>
                <h2>{month} / {day}</h2>
            </div>
            <button className='right'>›</button>
        </TodoListHeader>
    )
}