/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
const initialState = {
  listBookChair: [],
  loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHOOSE_CHAIR':
      const listChairUpdate = [...state.listBookChair];

      const index = listChairUpdate.findIndex(
        (chair) => chair.maGhe === payload.maGhe
      );
      if (index !== -1) {
        listChairUpdate.splice(index, 1);
        state.listBookChair = listChairUpdate;
      } else {
        listChairUpdate.push(payload);
        state.listBookChair = listChairUpdate;
      }
      return { ...state };
    case 'DELETE_CHAIR':
      const listChairUp = [...state.listBookChair];
      const item = listChairUp.findIndex(
        (chair) => chair.maGhe === payload.maGhe
      );
      if (item === -1) {
        listChairUp.splice(item, 1);
        // console.log(item);
        state.listBookChair = listChairUp;
      }
      state.listBookChair = listChairUp;
      return { ...state };

    // book ticket
    case 'BOOK_TICKET_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'BOOK_TICKET_SUCCESS':
      return {
        ...state,
        listBookChair: [],
        loading: false,
      };
    case 'BOOK_TICKET_FAILURE':
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
export default reducer;
