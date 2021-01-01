import { IValue } from './../../../components/SettingsModal/SettingsModal';
import { SET_ACTIVE_TIMER, SET_TIME, SET_TIME_LEFT } from './actionsTypes';

export const setActiveTimer = (id: number) => ({
	type: SET_ACTIVE_TIMER,
	payload: { id }
} as const);

export const setTime = (values: Array<IValue>) => ({
	type: SET_TIME,
	payload: { values }
} as const);

export const setTimeLeft = () => ({
	type: SET_TIME_LEFT
} as const)
