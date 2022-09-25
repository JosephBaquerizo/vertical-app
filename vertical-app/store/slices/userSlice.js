import { createSlice } from '@reduxjs/toolkit'; 

const userSlice = createSlice({
	name: 'user',
	initialState: { 
		address: null,
	},
	reducers: {
		setAddress(state, action) {
			state.address = action.payload;
		},
		removeUser(state) {
			state.address = '';
		},
	}
});

export const userActions = userSlice.actions;

export default userSlice.reducer;