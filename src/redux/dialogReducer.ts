import {reset} from "redux-form";

const add_Message = "ADD_MESSAGE";

const initialState = {
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hi nice"},
    {id: 3, message: "Hi nice to"},
    {id: 4, message: "Hi nice to see"},
    {id: 5, message: "Hi nice to see you"},
    {id: 6, message: "Hi nice to see you here"},
  ] as Array<messageType>,
  companion: [
    {id: 1, name: "Liam", src: "https://via.placeholder.com/40"},
    {id: 2, name: "Terry", src: "https://via.placeholder.com/40"},
    {id: 3, name: "Noah", src: "https://via.placeholder.com/40"},
    {id: 4, name: "William", src: "https://via.placeholder.com/40"},
    {id: 5, name: "James", src: "https://via.placeholder.com/40"},
    {id: 6, name: "Oliver", src: "https://via.placeholder.com/40"},
    {id: 7, name: "Benjamin", src: "https://via.placeholder.com/40"},
    {id: 8, name: "Elijah", src: "https://via.placeholder.com/40"},
  ]as Array<companionType>,
};
type messageType = {id: number, message:string}
type companionType ={id:number,name:string,src:string}
export  type initialStateType = typeof initialState
const dialogReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case add_Message: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {id: 7, message: action.newMessageText},
        ],
      };
    }
    default:
      return state;
  }
};
type  addMessageType= {
  type: typeof add_Message
  newMessageText:string
}
export const addMessage = (newMessageText: string):addMessageType => ({
  type: add_Message,
  newMessageText,
});
export const resetAddMessage = (newMessageText: string) => (dispatch: any) => {
  dispatch(addMessage(newMessageText));
  dispatch(reset('DialogAddMessage'));
}
export default dialogReducer;
