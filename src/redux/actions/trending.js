import { SET_TRENDING } from '../reducers/trending';

export function setTrending(payload) {
    return {
        type: SET_TRENDING,
        payload,
    };
}
