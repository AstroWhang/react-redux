const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return !state; // opposite of state
        default:
            return state;
    }
};

export default loggedReducer;