import { SET_ACTIVE_TIMER, SET_TIME, SET_TIME_LEFT } from './actionsTypes';

export const setActiveTimer = (id: string | number) => ({
	type: SET_ACTIVE_TIMER,
	payload: { id }
} as const);

export const setTime = (values: any) => ({
	type: SET_TIME,
	payload: { values }
} as const);

export const setTimeLeft = () => ({
	type: SET_TIME_LEFT
} as const)
