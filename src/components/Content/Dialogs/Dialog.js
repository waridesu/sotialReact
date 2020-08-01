import React from 'react';
import s from './Dialog.module.css';
import DialogMasage from './DialogMassage/DialogMasage'
import DialogName from './DialogName/DialogName'

const Dialog = (props) => {

    let dialogItem = props.dialog.companion
        .map(n => <DialogName id={n.id} name={n.name} src={n.src} />);
    let massageitem = props.dialog.massages
        .map(m => <DialogMasage massege={m.massege} />);
    let onaddMassage = ()=> {
        props.addNewMassage();
    }
    let onMassageChange = (evt) =>{
        let text =evt.target.value;
        props.updateNewMassageText(text);
    }
    return <div className={s.dialog_container}>
        <div className={s.name}>
            {dialogItem}
        </div>
        <div className={s.masseges}>
            <div className={s.massege_string}>
            {massageitem}
            </div>
            <div className= {s.send_input}>
            <textarea onChange={onMassageChange} value={props.dialog.newMassageText}/>
            <button onClick={onaddMassage} type="button">Отправить</button>
            </div>
        </div>
    </div>
}

export default Dialog;