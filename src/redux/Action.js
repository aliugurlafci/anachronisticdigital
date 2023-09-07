import { DownloadSiteConfig } from '../api/Api';

const fetchPostsSuccess = config => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: { config }
})

export const fetchPosts = () => {
    return async dispatch => {
        try {
            let config = await DownloadSiteConfig({ "connection_key": "1231-2131-1f33-fga2" });
            dispatch(fetchPostsSuccess(config.json));
        }
        catch (e) { }
    }
}