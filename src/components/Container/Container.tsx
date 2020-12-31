import React, { FC } from 'react';

export const Container: FC = ({ children }) => {
  return (
    <div className="wrapper">
      <main className="page">
        <section className="page__sc sc">
          <div className="sc__container _container">
            <div className="sc__body">{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
};
