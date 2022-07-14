
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
			state.patient.items[tagId].pic.forEach(item => {
				item.isActive = false
			})
			state.patient.items[tagId].isActive = isActive
		},
		picActive: (state, action) => {
			const {tagId, picId, isActive} = action.payload
			state.patient.items[tagId].pic.forEach(item => {
				item.isActive = false
			})
			state.patient.items[tagId].pic[picId].isActive = isActive
		},
		allPicActive: (state, action) => {
			const {tagId} = action.payload
			 if (state.patient.items[tagId].pic.every(item => item.isActive === true)) {
				state.patient.items[tagId].pic.forEach(item => {
					item.isActive = false
				})
			 } else {
				state.patient.items[tagId].pic.forEach(item => {
					item.isActive = true
				})
			 }
		}
	}
})
	
export const {active, picActive, allPicActive} = choiceSlice.actions
export default choiceSlice.reducer
	
	
	
	
