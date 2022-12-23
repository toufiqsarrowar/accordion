import React, {useState } from 'react'
import { questions } from "./api";
import MyAccordion from './MyAccordion';
import './Accordion.css';

const Accordion = () => {
    const [data] = useState(questions);
    return (
        <>
            <section className="main-div">
                <h1>Home Services FAQ </h1>
        {
                data.map((curElem) => {
                    return <MyAccordion key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })
        }
                 </section>
        </>
    )
}

export default Accordion
