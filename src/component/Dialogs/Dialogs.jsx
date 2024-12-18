import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
const Dialogs = ({setId,item,deleteDialog}) => {
    return (
            <NavLink className={data => data.isActive ? s.navigate_active :s.navigate} to={"/dialog/" + item.id} onClick={() => setId(item.id)}>
            <div className={s.dialog}>
                <div>{item.name}</div>
                </div>
                <img onClick={() => deleteDialog(item.id)} className={s.delete_btn} src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png" alt="" />
                </NavLink>
        
    )
}
export default Dialogs