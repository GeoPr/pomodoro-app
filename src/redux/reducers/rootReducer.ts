import { settingsReducer } from './settingsReducer/settingsReducer';
import { timerReducer } from './timerReducer/timerReducer';
import { navReducer } from './navReducer/navReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	navItems: navReducer,
	timers: timerReducer,
	settings: settingsReducer
});
