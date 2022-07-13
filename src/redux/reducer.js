
import { createSlice } from "@reduxjs/toolkit";
import { Data } from '../data/data'

const initialState = Data

export const choiceSlice = createSlice({
	name: 'choice',
	initialState,
	reducers: {
		active: (state, action) => {
			const {tagId, isActive} = action.payload
			state.patient.items.forEach(item => {
				item.isActive = false
			})
			state.patient.items[tagId].isActive = isActive
		}
	}
})
	
export const {active} = choiceSlice.actions
export default choiceSlice.reducer
	
	
	
	
