const initialState = {
    myGuilds: [],
    messages: [],
    post_message:"",
    updated: false
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
                messages: action.payload,
                updated: false
            };
        case "SUCCESS_POST_MESSAGE":
            return {
                ...messageState,
                updated: true
            };
        case "CHANGE_INPUT_MESSAGE":
            return {
                ...messageState,
                [action.payload.target.name]: action.payload.target.value,
            };
        default:
            return messageState;
    }
}

