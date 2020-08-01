import { addMassageActionCreator, onMassageChangeActionCreator } from '../../../redux/dialogReducer'
import Dialog from './Dialog'
import { connect } from 'react-redux';



let mapStateToProps =(state)=>{
    return{
        dialog: state.dialog
    }
}
let mapDispathToProps =(dispatch)=>{
    return{

        updateNewMassageText:(text)=>{
            dispatch(onMassageChangeActionCreator(text));
        },
        addNewMassage:()=>{
            dispatch(addMassageActionCreator());
        }
    }
}

const DialogContainer = connect(mapStateToProps,mapDispathToProps)(Dialog);
export default DialogContainer;