import dialogReducer, {addMassage} from "./dialogReducer";
const  state = {
    massages: [
        { id: 1, massage: "Hi" },
        { id: 2, massage: "Hi nice" },
        { id: 3, massage: "Hi nice to" },
        { id: 4, massage: "Hi nice to see" },
        { id: 5, massage: "Hi nice to see you" },
        { id: 6, massage: "Hi nice to see you here" },
    ]}

it('new massage should be increment',()=>{
    const action = addMassage('some')

    const newState = dialogReducer(state,action)
    expect(newState.massages.length).toBe(7);
    expect(newState.massages[6].massage).toBe('some');
})
it('after deleting length sho',()=>{
    const action = addMassage('some')

    const newState = dialogReducer(state,action)
    expect(newState.massages.length).toBe(7);
    expect(newState.massages[6].massage).toBe('some');
})