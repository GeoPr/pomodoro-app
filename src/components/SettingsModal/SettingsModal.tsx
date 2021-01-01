import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSettings } from '../../redux/reducers/settingsReducer/actions';
import { setTime } from '../../redux/reducers/timerReducer/actions';
import { TApp } from '../../redux/store';
import './SettingsModal.scss';

export interface IValue {
  title: string;
  time: number;
}

export const SettingsModal: FC = () => {
  const timers = useSelector((state: TApp) => state.timers);
  const dispatch = useDispatch();
  // const valuesEntries = timers.map(timer => [
  //   ['title', timer.title],
  //   ['time', timer.time],
  // ]);
  // const [values, setValues] = useState(Object.fromEntries(valuesEntries));

  const valuesObj = timers.map(({ title, time }) => ({ title, time }));
  const [values, setValues] = useState<Array<IValue>>(valuesObj);

  const closeSettings = (e: any) => {
    const { type } = e.target.dataset;

    type === 'close-modal' && dispatch(hideSettings());
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTime = +e.target.value;
    const inputTitle = e.target.name;

    if (inputTime >= 1) {
      setValues(prev => {
        return prev.map(value => {
          const { title } = value;

          return title === inputTitle ? { ...value, time: inputTime } : value;
        });
      });

      // setValues((prev: any) => ({
      //   ...prev,
      //   [inputTitle]: inputTime,
      // }));
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setTime(values));
    dispatch(hideSettings());
  };

  return (
    <div
      className="settings-modal"
      onClick={closeSettings}
      data-type="close-modal">
      <form
        className="settings-modal__body"
        action="#"
        onSubmit={submitHandler}>
        <div className="settings-modal__header">
          <h4 className="settings-modal__title">Settings</h4>
          <button
            className="settings-modal__close-button"
            onClick={closeSettings}
            data-type="close-modal">
            &times;
          </button>
        </div>
        <div className="settings-modal__actions actions-settings-modal">
          <div className="actions-settings-modal__title">TIME (MINUTES)</div>
          <div className="actions-settings-modal__body">
            {timers.map(({ title, id }) => (
              <div className="actions-settings-modal__item" key={id}>
                <div className="actions-settings-modal__name">{title}</div>
                <input
                  type="number"
                  value={values[id].time}
                  name={title}
                  onChange={changeHandler}
                  className="actions-settings-modal__input"
                />
              </div>
            ))}
          </div>
        </div>
        <button className="actions-settings-modal__apply-button" type="submit">
          Apply
        </button>
      </form>
    </div>
  );
};
