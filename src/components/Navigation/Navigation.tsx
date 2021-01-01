import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTimer } from '../../redux/reducers/timerReducer/actions';
import './Navigation.scss';

interface ILink {
  title: string;
  id: number;
  isActive: boolean;
}

export const titles = ['Main', 'Short break', 'Long break'];

const linksArray: ILink[] = titles.map((title, id) => ({
  title,
  id,
  isActive: !id,
}));

export const Navigation: FC = () => {
  const [links, setLinks] = useState<Array<ILink>>(linksArray);
  const dispatch = useDispatch();

  const resetActiveLinks = () => {
    setLinks(prev => {
      return prev.map(link => {
        return { ...link, isActive: false };
      });
    });
  };

  const setActiveLink = (id: number) => {
    resetActiveLinks();

    setLinks(prev => {
      return prev.map(link => {
        return link.id === id ? { ...link, isActive: true } : link;
      });
    });
  };

  const clickHandler = (id: number) => {
    setActiveLink(id);
    dispatch(setActiveTimer(id));
  };

  return (
    <nav className="sc__nav nav">
      <ul className="nav__list">
        {links.map(({ id, title, isActive }) => (
          <li
            key={id}
            className={`nav__item ${isActive ? 'nav__item_active' : ''}`}
            onClick={() => clickHandler(id)}>
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
};
