import { configureStore } from "@reduxjs/toolkit";
import choiceRducer from './reducer'


export const store = configureStore({
	reducer: choiceRducer
})