import React, {useState} from 'react'
const MyAccordion = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="main-heading">
           
                <h3>{question}</h3>
                <div className="button"> 
                <button onClick={() => setShow(!show)}> { show? "▲" : "▼"} </button>
                </div>
                

              </div>
              
           
            { show &&  <p className="answers"> {answer} </p> }

        </>
    )
}

export default MyAccordion
