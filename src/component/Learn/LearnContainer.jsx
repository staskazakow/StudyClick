import React from "react";
import { connect } from "react-redux";
import { getCurrentFields, setFieldId } from "../../redux/reducers/LearnReducer";
import Learn from "./Learn";
const LearnContainer = (props) => {
    return (
        <Learn learn = {props.learn} getCurrentFields = {props.getCurrentFields} setFieldId = {props.setFieldId}/>
    )
}
const mapStateToProps = (state) => ({
    learn: state.learn.learn_array,

})
export default connect(mapStateToProps,{getCurrentFields,setFieldId})(LearnContainer)