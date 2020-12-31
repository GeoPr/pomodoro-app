import { titles } from './../navReducer/navReducer';
import { SET_ACTIVE_TIMER, SET_TIME, SET_TIME_LEFT } from './actionsTypes';
import { TActions } from './../../store';
import * as actions from './actions';

interface ITimer {
  time: number;
  id: number | string;
  isActive: boolean;
  title: string;
  color: string;
  timeLeft: number;
}

type TInitalState = Array<ITimer>;

const colors = ['rgb(60, 60, 100)', ' rgb(60, 100, 85)', ' rgb(100, 69, 60)'];

const initalState: TInitalState = titles.map((item, id) => ({
  ...item,
  time: (id + 1) * 10,
  isActive: !id,
  color: colors[id],
  timeLeft: 0,
  id,
}));

type ActionsTypes = TActions<typeof actions>;

export const timerReducer = (
  state: TInitalState = initalState,
  action: ActionsTypes,
): TInitalState => {
  switch (action.type) {
    case SET_ACTIVE_TIMER: {
      const { id } = action.payload;

      state.map(timer => {
        timer.isActive = false;
        return timer;
      });

      return state.map(timer => {
        return timer.id === id
          ? { ...timer, isActive: !timer.isActive }
          : timer;
      });
    }

    case SET_TIME: {
      const { values } = action.payload;
      const keys = Object.keys(values);

      return state.map(timer => {
        keys.forEach((key: string) => {
          if (timer.title === key) {
            timer.time = values[key];
          }
        });

        return timer;
      });
    }

    case SET_TIME_LEFT: {
      return state.map(timer => {
        timer.timeLeft = 0;

        return timer;
      });
    }

    default: {
      return state;
    }
  }
};
