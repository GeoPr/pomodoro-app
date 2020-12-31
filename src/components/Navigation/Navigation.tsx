import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from '../../redux/reducers/navReducer/actions';
import { setActiveTimer } from '../../redux/reducers/timerReducer/actions';
import { TApp } from '../../redux/store';
import './Navigation.scss';

export const Navigation: FC = () => {
  const items = useSelector((state: TApp) => state.navItems);
  const dispatch = useDispatch();

  const clickHandler = (id: string | number) => {
    dispatch(setActiveItem(id));
    dispatch(setActiveTimer(id));
  };

  return (
    <nav className="sc__nav nav">
      <ul className="nav__list">
        {items.map(({ id, title, isActive }) => (
          <li
            key={id}
            className={`nav__item ${isActive ? 'nav__item_active' : ''}`}
            onClick={() => clickHandler(id)}
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
};
