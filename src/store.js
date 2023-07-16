import { configureStore, createSlice } from "@reduxjs/toolkit";

let stock = createSlice({
  name: "stock", //state 이름
  initialState: [
    //state 값
  ],
  reducers: {
    countUp(state, action) {
      state.find((ele) => ele.id === action.payload).count++;
    },
    countDown(state, action) {
      if (state.find((ele) => ele.id === action.payload).count !== 1)
        state.find((ele) => ele.id === action.payload).count--;
    },
    addCart(state, action) {
      if (state.find((ele) => ele.id === action.payload.id) == undefined) {
        state.push(action.payload);
      } else {
        state.find((ele) => ele.id === action.payload.id).count++;
      }
    },
    deleteCart(state, action) {
      if (window.confirm("상품을 삭제하시겠습니까?")) {
        let deleteId = state.findIndex((e) => e.id === action.payload);
        state.splice(deleteId, 1);
      }
    },
  },
});

export let { countUp, countDown, addCart, deleteCart } = stock.actions;

export default configureStore({
  reducer: {
    stock: stock.reducer,
  },
});
