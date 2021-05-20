import {
    ZIP_SELECTED
} from '../reducers/zip';

export function setZip(payload) {
    return {
        type: ZIP_SELECTED,
        payload
    }
}