import React, { useState } from "react";
import s from "./Learn.module.css"
import { NavLink } from "react-router-dom";
const Learn = ({getCurrentFields,learn,setFieldId}) => {
    let [touched,setTouched] = useState(false)
    const watchingLearn = () => {
        getCurrentFields()
        setTouched(true)
    }
    return(
        <div className={s.wrapper}>
           <div className={s.learn_block}>
            {touched ? <div className={s.learn_header_active}>Выбери тему для изучения</div>
            : <div className={s.learn_header} onClick={watchingLearn}>Выбери тему для изучения ↓</div>}
            {touched && <div className={s.btn_block}>
                {learn.map(e => <NavLink to={"/home"} onClick={() => setFieldId(e.id,e.name,e.prompt)} className={s.learn_btn}>{e.name}</NavLink>)}
            </div>}
            
           </div>
        </div>
    )
}
export default Learn