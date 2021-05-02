import {
  STANDINGS_FREE_PRACTICE_1,
  STANDINGS_FREE_PRACTICE_2,
  STANDINGS_FREE_PRACTICE_3,
  STANDINGS_QUALIFYING,
  STANDINGS_RACE,
} from './standings.types';

export const standingsFreePractice1 = (payload) => ({
  type: STANDINGS_FREE_PRACTICE_1,
  payload,
});

export const standingsFreePractice2 = (payload) => ({
  type: STANDINGS_FREE_PRACTICE_2,
  payload,
});

export const standingsFreePractice3 = (payload) => ({
  type: STANDINGS_FREE_PRACTICE_3,
  payload,
});

export const standingsQualifying = (payload) => ({
  type: STANDINGS_QUALIFYING,
  payload,
});

export const standingsRace = (payload) => ({
  type: STANDINGS_RACE,
  payload,
});
