import { createSlice } from '@reduxjs/toolkit';




export const endSlice = createSlice({
  name: 'end',
  initialState:{
    value: new Date(2022, 2, 25), //getTime retorna cuantos milisegundos han pasado desde media noche de 1970 hasta la epoca actual
  },
  
  reducers: {
    setEnd: (state, action) => {
     
      state.value = action.payload;
    }
   
  },
});

export const { setEnd } = endSlice.actions;


export const selectEnd = (state) => state.end.value;

export default endSlice.reducer;
