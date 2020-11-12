import dialogReducer, {addMessage} from "./dialogReducer";
const  state = {
    messages: [
        { id: 1, massage: "Hi" },
        { id: 2, massage: "Hi nice" },
        { id: 3, massage: "Hi nice to" },
        { id: 4, massage: "Hi nice to see" },
        { id: 5, massage: "Hi nice to see you" },
        { id: 6, massage: "Hi nice to see you here" },
    ]}

it('new massage should be increment',()=>{
    const action = addMessage('some')

    const newState = dialogReducer(state,action)
    expect(newState.messages.length).toBe(7);
    expect(newState.messages[6].message).toBe('some');
})
it('after deleting length sho',()=>{
    const action = addMessage('some')

    const newState = dialogReducer(state,action)
    expect(newState.messages.length).toBe(7);
    expect(newState.messages[6].message).toBe('some');
})