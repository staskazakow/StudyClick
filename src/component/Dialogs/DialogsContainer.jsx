import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { createMessage, setId } from "../../redux/reducers/MessageReducer";
const DialogsContainer = (props) => {
    return(
        <Dialogs setId = {props.setId} item = {props.item} />
    )
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps,{setId})(DialogsContainer)