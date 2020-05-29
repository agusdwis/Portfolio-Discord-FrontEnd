import axios from "axios"


export const memberGuild = () => {
    return async (dispatch, getState) => {
        let token;
        if (getState().user.token) {
            token = getState().user.token;
        } else {
            token = localStorage.getItem('token')
        }

        await axios({
            method: 'get',
            url: "http://0.0.0.0:5000/members",
            headers: {'Authorization':'Bearer ' + token},
        })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_GET_MY_GUILDS",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                console.log('%c Error! ', 'background: #ff0033; color: ##0f0f0f; font-weight: 600', error);
            });
    };
};

export const messageGuild = (guildID) => {
    return async (dispatch, getState) => {
        let token;
        if (getState().user.token) {
            token = getState().user.token;
        } else {
            token = localStorage.getItem('token')
        }

        await axios({
            method: 'get',
            url: "http://0.0.0.0:5000/messages",
            headers: {'Authorization':'Bearer ' + token},
            params: {
                guild_id: guildID,
            }
        })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_GET_MESSAGES",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                console.log('%c Error! ', 'background: #ff0033; color: ##0f0f0f; font-weight: 600', error);
            });
    };
};

// export const handleCategory = (category) => {
//     return async (dispatch, getState) => {
//         let token;
//         if (getState().user.token) {
//             token = getState().user.token;
//         } else {
//             token = localStorage.getItem('token')
//         }
//
//         await axios({
//             method: 'get',
//             url: "http://0.0.0.0:5000/guilds/search",
//             headers: {'Authorization':'Bearer ' + token},
//             params: {
//                 keyword: category
//             }
//         })
//             .then(async (response) => {
//                 if (response.status === 200) {
//                     dispatch({
//                         type: "SUCCESS_GET_CATEGORY",
//                         payload: response.data});
//                 }
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     };
// };