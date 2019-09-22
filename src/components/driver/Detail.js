// dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ driver, position }) => {
  console.log('driver ', position, driver);
  return (
    <>
      <article
        className="media driver-detail"
        style={driver.team ? { borderColor: `#${driver.team.color}` } : {}}
      >
        <figure className="media-left">
          <p className="race-position title is-4">
            {driver.race && driver.race.status === 'Retired' ? (
              <span className="dnf">DNF</span>
            ) : (
              <span className="position">{position}</span>
            )}
          </p>

          {driver.driver && (
            <figure className="image is-64x64 driver-headshot">
              <img
                alt={driver.driver.headshot.alt}
                className="driver-headshot-image"
                src={driver.driver.headshot.href}
              />
            </figure>
          )}
        </figure>

        <div className="media-content">
          {driver.driver && (
            <div className="content">
              <p className="driver title is-5">
                {/* <small className="driver-number has-text-grey">#{}</small> */}
                <span className="driver-name">{driver.driver.name}</span>
                <span className="country">
                  <img
                    alt={driver.driver.flag.alt}
                    src={driver.driver.flag.href}
                  />
                </span>
              </p>

              <p className="subtitle driver-team is-6">{driver.team.name}</p>
            </div>
          )}
        </div>

        <div className="media-right has-text-right">
          {driver.race && (
            <>
              <strong>
                {!driver.race.gapToLeader &&
                  !driver.race.behindTime &&
                  !driver.race.time && <span>Interval</span>}

                {!driver.race.time &&
                  (driver.race.gapToLeader ||
                    (driver.race.behindTime && (
                      <span>
                        {driver.race.behindTime
                          ? driver.race.behindTime
                          : driver.race.gapToLeader}
                      </span>
                    )))}

                {driver.race.time && <span>{driver.race.time}</span>}
              </strong>
              <p>
                <small>Laps:</small> <span>{driver.race.laps}</span>
              </p>
              <p>
                <small>Pits:</small>{' '}
                <span>{driver.race.pits ? driver.race.pits : '--'}</span>
              </p>
            </>
          )}
        </div>
      </article>
    </>
  );
};

Detail.propTypes = {
  driver: PropTypes.object,
  position: PropTypes.number,
};

export default Detail;
