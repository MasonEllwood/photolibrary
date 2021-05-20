export const ZIP_SELECTED = 'ZIP_SELECTED';
export const INIT = '';

export default function(state = INIT, { type, payload }) {

  switch(type) {

    case ZIP_SELECTED:

      return payload;

    default:
      return state;
  }
}