import { SET_CATEGORY, SET_SORT_BY } from "../types";

export const setSortBy = (sortByName) => ({
	type: SET_SORT_BY,
	payload: sortByName,
});

export const setCategory = (index) => ({
	type: SET_CATEGORY,
	payload: index,
});