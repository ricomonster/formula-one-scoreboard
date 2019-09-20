// dependencies
import React from 'react';

const Detail = () => {
  return (
    <>
      <article
        className="media driver-detail"
        style={{ borderColor: '#DC0000' }}
      >
        <figure className="media-left">
          <p className="race-position title is-4">1</p>

          <figure className="image is-64x64 driver-headshot">
            <img
              alt={`Charles Leclerc`}
              className="driver-headshot-image"
              src={`https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5498.png&h=120&w=120&scale=crop`}
            />
          </figure>
        </figure>

        <div className="media-content">
          <div className="content">
            <p className="driver title is-5">
              <small className="driver-number has-text-grey">#16</small>
              <span className="driver-name">Charles Leclerc</span>
              <span className="country">
                <img
                  alt={`Monaco`}
                  src={`https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mon.png&h=30&w=30&scale=crop&cquality=40&location=origin`}
                />
              </span>
            </p>

            <p className="subtitle driver-team is-6">Ferrari</p>

            {/* <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{' '}
              <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p> */}
          </div>
        </div>

        <div className="media-right has-text-right">
          <strong>1:23:45.678</strong>
          <p>
            <small>Laps:</small> <span>53</span>
          </p>
          <p>
            <small>Pits:</small> <span>1</span>
          </p>
        </div>
      </article>
    </>
  );
};

Detail.propTypes = {};

export default Detail;
