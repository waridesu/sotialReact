import {InferActionsTypes} from "./redux_store";

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
interface messageType {id: number, message:string|null}
interface companionType{id:number,name:string,src:string}
const dialogReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case add_Message:
      let text = action.payload
      return {...state,
        messages: [...state.messages,{id:9, message: text}],
      }
    default:
      return state;
  }
};
export const actions={
  sendMessage:(payload:string|null)=>({type:add_Message, payload}as const),
}
export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>



export default dialogReducer;
