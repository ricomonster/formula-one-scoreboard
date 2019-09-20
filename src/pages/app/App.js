// dependencies
import React, { useEffect, useContext } from 'react';

// components
import { Race, Track } from '@components';

// context
import FormulaOneContext from '@context/FormulaOneContext';

const App = () => {
  // loadup the Formula One Context
  const f1Context = useContext(FormulaOneContext);

  // will run once the component is loaded.
  useEffect(() => {
    f1Context.getActiveGrandPrix();
  }, []);

  return (
    <div
      className="app-page container"
      style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
    >
      {f1Context.loading && <p>Loading...</p>}

      {!f1Context.loading && (
        <>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-8">
              <div className="tile is-child">
                <Race.Detail />
              </div>
            </div>

            <div className="tile is-parent">
              <article className="tile is-child">
                <Track.Map />
              </article>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-parent is-8">
              <article className="tile is-child">
                <p className="title">Race Results</p>

                <Race.Results />
              </article>
            </div>

            <div className="tile is-parent is-vertical">
              <div className="tile is-child notification is-primary">
                <p className="title">Driver of the Day</p>
              </div>

              <div className="tile is-child notification is-warning">
                <p className="title">Formula 1.5</p>
              </div>

              <div className="tile is-child notification is-primary">
                <p className="title">Qualifying</p>
              </div>

              <div className="tile is-child notification is-warning">
                <p className="title">Free Practice 3</p>
              </div>

              <div className="tile is-child notification is-warning">
                <p className="title">Free Practice 2</p>
              </div>

              <div className="tile is-child notification is-warning">
                <p className="title">Free Practice 1</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

App.propTypes = {};

export default App;
