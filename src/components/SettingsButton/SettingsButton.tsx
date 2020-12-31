import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { showSettings } from '../../redux/reducers/settingsReducer/actions';
import './SettingsButton.scss';

export const SettingsButton: FC = () => {
  const dispatch = useDispatch();

  const openSettings = () => {
    dispatch(showSettings());
  };

  return (
    <div className="sc__settings-button settings-button">
      <button className="settings-button__item" onClick={openSettings}>
        Open Settings
      </button>
    </div>
  );
};
