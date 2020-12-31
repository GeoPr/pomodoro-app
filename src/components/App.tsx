import React from 'react';
import { Container } from './Container/Container';
import { Navigation } from './Navigation/Navigation';
import { Timer } from './Timer/Timer';
import { SettingsButton } from './SettingsButton/SettingsButton';
import { useSelector } from 'react-redux';
import { TApp } from '../redux/store';
import { SettingsModal } from './SettingsModal/SettingsModal';
import './App.scss';

const App: React.FC = () => {
  const { isOpen } = useSelector((state: TApp) => state.settings);

  return (
    <>
      <Container>
        <h1 className="sc__title">Pomodoro</h1>
        <Navigation />
        <Timer />
        <SettingsButton />
      </Container>
      {isOpen && <SettingsModal />}
    </>
  );
};

export default App;
