import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { setAuth, setLoginActive } from "../../redux/reducers/AppReducer";
const LoginContainer = (props) => {
    return(
        <Login setLoginActive={props.setLoginActive} setAuth={props.setAuth} login_active={props.login_active}/>
    )
}
const mapStateToProps = (state) =>({
    login_active:state.app.login_active
})
export default connect(mapStateToProps,{setAuth,setLoginActive})(LoginContainer)