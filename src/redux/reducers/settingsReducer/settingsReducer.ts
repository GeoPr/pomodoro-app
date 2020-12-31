import { SHOW_SETTINGS, HIDE_SETTINGS } from './actionsTypes';
import { TActions } from './../../store';
import * as actions from './actions';

interface IInitalState {
  isOpen: boolean;
}

const initalState: IInitalState = { isOpen: false };

type ActionsTypes = TActions<typeof actions>;

export const settingsReducer = (
  state: IInitalState = initalState,
  action: ActionsTypes,
): IInitalState => {
  switch (action.type) {
    case SHOW_SETTINGS: {
      return { ...state, isOpen: true };
    }

    case HIDE_SETTINGS: {
      return { ...state, isOpen: false };
    }

    default: {
      return state;
    }
  }
};
