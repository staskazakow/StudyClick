import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
const Dialogs = ({setId,item}) => {
    return (
            <NavLink className={data => data.isActive ? s.navigate_active :s.navigate} to={"/dialog/" + item.id} onClick={() => setId(item.id)}>
            <div className={s.dialog}>
                {item.name}
                </div>
                </NavLink>
        
    )
}
export default Dialogs