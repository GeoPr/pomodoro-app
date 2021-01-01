import { titles } from './../../../components/Navigation/Navigation';
import { SET_ACTIVE_TIMER, SET_TIME, SET_TIME_LEFT } from './actionsTypes';
import { TActions } from './../../store';
import * as actions from './actions';

interface ITimer {
  time: number;
  id: number;
  isActive: boolean;
  title: string;
  color: string;
  timeLeft: number;
}

type TInitalState = Array<ITimer>;

const colors = ['rgb(60, 60, 100)', ' rgb(60, 100, 85)', ' rgb(100, 69, 60)'];

const initalState: TInitalState = titles.map((title, id) => ({
  title,
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
        const { id: timerId, isActive } = timer;

        return timerId === id ? { ...timer, isActive: !isActive } : timer;
      });
    }

    case SET_TIME: {
      const { values } = action.payload;
      // const keys = Object.keys(values);

      // return state.map(timer => {
      //   keys.forEach((key: string) => {
      //     if (timer.title === key) {
      //       timer.time = values[key];
      //     }
      //   });

      //   return timer;
      // });

      return state.map(timer => {
        const { title, time } = values[timer.id];

        return timer.title === title ? { ...timer, time } : timer;
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
