const add_Massage = "ADD_MASSAGE";

let initialState = {
  massages: [
    { id: 1, massege: "Hi" },
    { id: 2, massege: "Hi nice" },
    { id: 3, massege: "Hi nice to" },
    { id: 4, massege: "Hi nice to see" },
    { id: 5, massege: "Hi nice to see you" },
    { id: 6, massege: "Hi nice to see you here" },
  ],
  companion: [
    { id: 1, name: "Liam", src: "https://via.placeholder.com/40" },
    { id: 2, name: "Masone", src: "https://via.placeholder.com/40" },
    { id: 3, name: "Noah", src: "https://via.placeholder.com/40" },
    { id: 4, name: "William", src: "https://via.placeholder.com/40" },
    { id: 5, name: "James", src: "https://via.placeholder.com/40" },
    { id: 6, name: "Oliver", src: "https://via.placeholder.com/40" },
    { id: 7, name: "Benjamin", src: "https://via.placeholder.com/40" },
    { id: 8, name: "Elijah", src: "https://via.placeholder.com/40" },
  ],
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_Massage: {
      return {
        ...state,

        massages: [
          ...state.massages,
          { id: 7, massege: action.newMassageText },
        ],
      };
    }
    default:
      return state;
  }
};
export default dialogReducer;
export const addMassage = (newMassageText) => ({
  type: add_Massage,
  newMassageText,
});