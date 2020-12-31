import { SHOW_SETTINGS, HIDE_SETTINGS } from './actionsTypes';

export const showSettings = () => ({
	type: SHOW_SETTINGS
} as const);

export const hideSettings = () => ({
	type: HIDE_SETTINGS
} as const);