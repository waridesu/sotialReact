import dialogReducer from "./dialogReducer";

let store = {
    _state: {

        dialog: {
            massages: [
                { id: 1, massege: 'Hi' },
                { id: 2, massege: 'Hi nice' },
                { id: 3, massege: 'Hi nice to' },
                { id: 4, massege: 'Hi nice to see' },
                { id: 5, massege: 'Hi nice to see you' },
                { id: 6, massege: 'Hi nice to see you here' }
            ],
            companion: [
                { id: 1, name: 'Liam', src: 'https://via.placeholder.com/40' },
                { id: 2, name: 'Masone', src: 'https://via.placeholder.com/40' },
                { id: 3, name: 'Noah', src: 'https://via.placeholder.com/40' },
                { id: 4, name: 'William', src: 'https://via.placeholder.com/40' },
                { id: 5, name: 'James', src: 'https://via.placeholder.com/40' },
                { id: 6, name: 'Oliver', src: 'https://via.placeholder.com/40' },
                { id: 7, name: 'Benjamin', src: 'https://via.placeholder.com/40' },
                { id: 8, name: 'Elijah', src: 'https://via.placeholder.com/40' }],
            newText: ''
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
    },
    dispatch(action) {
        this._state.dialog = dialogReducer(this._state.dialog, action);
        this._callSubscriber(this._state);
    }

}

window.store = store;
export default store;