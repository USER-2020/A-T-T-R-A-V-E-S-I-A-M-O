import { createSlice } from '@reduxjs/toolkit';



export const startSlice = createSlice({
  name: 'start',
  initialState:{
    value: new Date(2022, 2, 25), //getTime retorna cuantos milisegundos han pasado desde media noche de 1970 hasta la epoca actual
  },
  
  reducers: {
    setStart: (state, action) => {
     
      state.value = action.payload;
    }
   
  },
});

export const { setStart } = startSlice.actions;


export const selectStart = (state) => state.start.value;

export default startSlice.reducer;
