const Config = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return action.payload.config
        default:
            return state
    }
}

export default Config;