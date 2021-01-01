import { settingsReducer } from './settingsReducer/settingsReducer';
import { timerReducer } from './timerReducer/timerReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  timers: timerReducer,
  settings: settingsReducer,
});
