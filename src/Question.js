import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({question}) {

    const [showInfo, setShowInfo] = useState(false)
    const toggleInfo = () => {
        setShowInfo(!showInfo)};
    return (
        <article className='question'>
            <header>
                <h4>{question.title}</h4>
                <button className='btn' onClick={toggleInfo}>
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {showInfo ? <p>{question.info}</p>: ''}
        </article>
    )
}

export default Question;
