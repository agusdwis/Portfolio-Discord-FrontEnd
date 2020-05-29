const initialState = {
    myGuilds: [],
    messages: [],
};

export default function memberReducer(messageState = initialState, action) {
    switch (action.type) {
        case "SUCCESS_GET_MY_GUILDS":
            return {
                ...messageState,
                myGuilds: action.payload
            };
        case "SUCCESS_GET_MESSAGES":
            return {
                ...messageState,
                messages: action.payload
            };
        // case "SUCCESS_GET_CATEGORY":
        //     return {
        //         ...messageState,
        //         listGuilds: action.payload
        //     };
        default:
            return messageState;
    }
}

