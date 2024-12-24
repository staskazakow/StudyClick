import React from "react";
import { connect } from "react-redux";
import { getCurrentFields, setFieldId } from "../../redux/reducers/LearnReducer";
import Learn from "./Learn";
import { AddDialogs } from "../../redux/reducers/DIalogsReducer";
const LearnContainer = (props) => {
    return (
        <Learn learn = {props.learn} getCurrentFields = {props.getCurrentFields} setFieldId = {props.setFieldId} AddDialogs = {props.AddDialogs}/>
    )
}
const mapStateToProps = (state) => ({
    learn: state.learn.learn_array,

})
export default connect(mapStateToProps,{getCurrentFields,setFieldId,AddDialogs})(LearnContainer)