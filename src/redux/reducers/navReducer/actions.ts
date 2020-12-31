import { SET_ACTIVE_ITEM } from './actionsTypes';

export const setActiveItem = (id: string | number) => ({
	type: SET_ACTIVE_ITEM,
	payload: { id }
} as const);