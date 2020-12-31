import { SET_ACTIVE_ITEM } from './actionsTypes';
import { TActions } from './../../store';
import * as actions from './actions';

interface IItem {
  title: string;
  id: number | string;
  isActive: boolean;
}

type TInitalState = Array<IItem>;

export const titles = [
  { title: 'Main' },
  { title: 'Short break' },
  { title: 'Long break' },
];

const initalState: TInitalState = [...titles].map((item, id) => ({
  ...item,
  id,
  isActive: !id,
}));

type ActionsTypes = TActions<typeof actions>;

export const navReducer = (
  state: TInitalState = initalState,
  action: ActionsTypes,
): TInitalState => {
  switch (action.type) {
    case SET_ACTIVE_ITEM: {
      const { id } = action.payload;

      state.map(item => {
        item.isActive = false;
        return item;
      });

      return state.map(item => {
        return item.id === id ? { ...item, isActive: !item.isActive } : item;
      });
    }

    default: {
      return state;
    }
  }
};
