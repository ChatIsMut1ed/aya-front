export const authReducer = (state, action) => {
    switch (action.type) {
        case "ADD_LOGGED_IN_USER":
            // console.log(action.loggedInUser);
            return {
                ...state,
                isLoggedIn: true,
                user: action.loggedInUser || state.user,
            };
        case "REMOVE_LOGGED_IN_USER":
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
