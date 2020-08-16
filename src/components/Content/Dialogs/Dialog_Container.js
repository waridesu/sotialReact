import { addMassage, onMassageChange } from '../../../redux/dialogReducer'
import Dialog from './Dialog'
import { connect } from 'react-redux';



let mapStateToProps =(state)=>{
    return{
        dialog: state.dialog
    }
}

const DialogContainer = connect(mapStateToProps,{onMassageChange,addMassage})(Dialog);
export default DialogContainer;