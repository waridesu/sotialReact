import {reset} from "redux-form";

const add_Massage = "ADD_MASSAGE";

const initialState = {
  massages: [
    {id: 1, massage: "Hi"},
    {id: 2, massage: "Hi nice"},
    {id: 3, massage: "Hi nice to"},
    {id: 4, massage: "Hi nice to see"},
    {id: 5, massage: "Hi nice to see you"},
    {id: 6, massage: "Hi nice to see you here"},
  ] as Array<massageType>,
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
type massageType = {id: number, massage:string}
type companionType ={id:number,name:string,src:string}
export  type initialStateType = typeof initialState
const dialogReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case add_Massage: {
      return {
        ...state,

        massages: [
          ...state.massages,
          {id: 7, massage: action.newMassageText},
        ],

      };

    }
    default:
      return state;
  }
};
type  addMassageType= {
  type: typeof add_Massage
  newMassageText:string
}
export const addMassage = (newMassageText: string):addMassageType => ({
  type: add_Massage,
  newMassageText,
});
export const resetAddMassage = (newMassageText: string) => (dispatch: any) => {
  dispatch(addMassage(newMassageText));
  dispatch(reset('DialogAddMassage'));
}
export default dialogReducer;
