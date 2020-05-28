const initialState = {
    listGuilds: [],
    oneGuild: [],
};

export default function guildReducer(guildState = initialState, action) {
    switch (action.type) {
        case "SUCCESS_GET_ALL_GUILDS":
            return {
                ...guildState,
                listGuilds: action.payload
            };
        case "SUCCESS_GET_ONE_GUILD":
            return {
                ...guildState,
                oneGuild: action.payload};
        case "SUCCESS_GET_CATEGORY":
            return {
                ...guildState,
                listGuilds: action.payload
            };
        default:
            return guildState;
    }
}

