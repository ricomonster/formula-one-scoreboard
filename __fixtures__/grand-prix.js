const grandPrixEvent = {
  racestrip: {
    name: 'Emilia Romagna Grand Prix',
    shortName: 'Emilia Romagna GP',
    date: '2021-04-16T08:55Z',
    endDate: '2021-04-18T12:55Z',
    season: 2021,
    circuit: { name: 'Autodromo Enzo e Dino Ferrari', countryFlag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ita.png', alt: 'Italy', rel: ['country-flag'] } },
    broadcasts: [{
      type: {
        id: '1', shortName: 'TV', longName: 'Television', slug: 'television',
      },
      media: {
        $ref: 'http://sports.core.api.espn.pvt/v2/sports/racing/leagues/f1/media/8?lang=en&region=ph', id: '8', threeLetterAbbreviation: 'ES2', callLetters: 'ESP2', name: 'ESPN2', shortName: 'ESPN2',
      },
      lang: 'en',
      region: 'us',
    }],
    airings: [],
    sessionDetail: [{
      competitionId: '401313013',
      titleTab: 'Free Practice 1',
      competitionDate: '2021-04-16T08:55Z',
      gameState: 'post',
      currentLap: '23/0',
      topFinisher: {
        type: { id: '1', text: 'Free Practice', abbreviation: 'FP1' },
        state: 'post',
        session: 1,
        vehicle: [{
          number: '77', manufacturer: 'Mercedes', chassis: 'W08 EQ Power+', engine: 'M08 EQ Power+', team: 'Mercedes', series: { $ref: 'http://sports.core.api.espn.pvt/v2/sports/racing/leagues/f1?lang=en&region=ph' },
        }],
        teamColor: '00D2BE',
        flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] },
        id: '4520',
        headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png', alt: 'Valtteri Bottas' },
        displayName: 'Valtteri Bottas',
        shortName: 'V. Bottas',
        shortDisplayName: 'V. Bottas',
        abbreviation: 'BOT',
        date: '2021-04-16T08:55Z',
        period: 23,
        statusDisplayValue: 'Classified',
        statusName: 'STATUS_CLASSIFIED',
        completed: true,
        stats: { lapsCompleted: '23', place: '1', totalTime: '1:16.564' },
      },
    }, {
      competitionId: '401313014',
      titleTab: 'Free Practice 2',
      competitionDate: '2021-04-16T12:25Z',
      gameState: 'post',
      currentLap: '25/0',
      topFinisher: {
        type: { id: '1', text: 'Free Practice', abbreviation: 'FP2' },
        state: 'post',
        session: 2,
        vehicle: [{
          number: '77', manufacturer: 'Mercedes', chassis: 'W08 EQ Power+', engine: 'M08 EQ Power+', team: 'Mercedes', series: { $ref: 'http://sports.core.api.espn.pvt/v2/sports/racing/leagues/f1?lang=en&region=ph' },
        }],
        teamColor: '00D2BE',
        flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] },
        id: '4520',
        headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png', alt: 'Valtteri Bottas' },
        displayName: 'Valtteri Bottas',
        shortName: 'V. Bottas',
        shortDisplayName: 'V. Bottas',
        abbreviation: 'BOT',
        date: '2021-04-16T12:25Z',
        period: 25,
        statusDisplayValue: 'Classified',
        statusName: 'STATUS_CLASSIFIED',
        completed: true,
        stats: { lapsCompleted: '25', place: '1', totalTime: '1:15.551' },
      },
    }, {
      competitionId: '401313015',
      titleTab: 'Free Practice 3',
      competitionDate: '2021-04-17T08:55Z',
      gameState: 'post',
      currentLap: '18/0',
      topFinisher: {
        type: { id: '1', text: 'Free Practice', abbreviation: 'FP3' },
        state: 'post',
        session: 3,
        vehicle: [{
          number: '33', manufacturer: 'Red Bull', chassis: 'RB13', engine: 'RE 17', tire: 'Pirelli', team: 'Red Bull', series: { $ref: 'http://sports.core.api.espn.pvt/v2/sports/racing/leagues/f1?lang=en&region=ph' },
        }],
        teamColor: '00327D',
        flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png', alt: 'Netherlands', rel: ['country-flag'] },
        id: '4665',
        headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png', alt: 'Max Verstappen' },
        displayName: 'Max Verstappen',
        shortName: 'M. Verstappen',
        shortDisplayName: 'M. Verstappen',
        abbreviation: 'VER',
        date: '2021-04-17T08:55Z',
        period: 18,
        statusDisplayValue: 'Classified',
        statusName: 'STATUS_CLASSIFIED',
        completed: true,
        stats: { lapsCompleted: '18', place: '1', totalTime: '1:14.958' },
      },
    }, {
      competitionId: '401313016',
      titleTab: 'Qualifying',
      competitionDate: '2021-04-17T11:55Z',
      gameState: 'post',
      currentLap: '23/0',
      topFinisher: {
        type: { id: '2', text: 'Qualifying', abbreviation: 'Qual' },
        state: 'post',
        session: 1,
        vehicle: [{
          number: '44', manufacturer: 'Mercedes', chassis: 'W08 EQ Power+', engine: 'M08 EQ Power+', tire: 'Pirelli', sponsor: '-', team: 'Mercedes', series: { $ref: 'http://sports.core.api.espn.pvt/v2/sports/racing/leagues/f1?lang=en&region=ph' },
        }],
        teamColor: '00D2BE',
        flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] },
        id: '868',
        headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png', alt: 'Lewis Hamilton' },
        displayName: 'Lewis Hamilton',
        shortName: 'L. Hamilton',
        shortDisplayName: 'L. Hamilton',
        abbreviation: 'HAM',
        date: '2021-04-17T11:55Z',
        period: 23,
        statusDisplayValue: 'Classified',
        statusName: 'STATUS_CLASSIFIED',
        completed: true,
        stats: { lapsCompleted: '23', place: '1', totalTime: '1:14.411' },
      },
    }, {
      competitionId: '401313017',
      titleTab: 'Race',
      competitionDate: '2021-04-18T12:55Z',
      gameState: 'post',
      currentLap: '63/63',
      topFinisher: {
        type: { id: '3', text: 'Race', abbreviation: 'Race' },
        state: 'post',
        session: 1,
        vehicle: [{
          number: '33', manufacturer: 'Red Bull', chassis: 'RB13', engine: 'RE 17', tire: 'Pirelli', team: 'Red Bull', series: { $ref: 'http://sports.core.api.espn.pvt/v2/sports/racing/leagues/f1?lang=en&region=ph' },
        }],
        teamColor: '00327D',
        flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png', alt: 'Netherlands', rel: ['country-flag'] },
        id: '4665',
        headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png', alt: 'Max Verstappen' },
        displayName: 'Max Verstappen',
        shortName: 'M. Verstappen',
        shortDisplayName: 'M. Verstappen',
        abbreviation: 'VER',
        date: '2021-04-18T12:55Z',
        period: 63,
        statusDisplayValue: 'Classified',
        statusName: 'STATUS_CLASSIFIED',
        completed: true,
        stats: {
          lapsCompleted: '63', pitsTaken: '2', place: '1', totalTime: '2:02:34.598',
        },
      },
    }],
  },
  commentaries: [{
    competitionId: '401313013', titleTab: 'Free Practice 1', titleModule: 'Free Practice 1', session: 1,
  }, {
    competitionId: '401313014', titleTab: 'Free Practice 2', titleModule: 'Free Practice 2', session: 2,
  }, {
    competitionId: '401313015', titleTab: 'Free Practice 3', titleModule: 'Free Practice 3', session: 3,
  }, {
    competitionId: '401313016', titleTab: 'Qualifying', titleModule: 'Qualifying', session: 1,
  }, {
    competitionId: '401313017', titleTab: 'Race', titleModule: 'Race', session: 1,
  }],
  positions: [{
    competitionId: '401313017',
    titleTab: 'Race',
    state: 'post',
    date: '2021-04-18T12:55Z',
    positions: [{
      order: 1,
      winner: true,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '4665', order: 1, lastName: 'Max', firstName: 'Verstappen', displayName: 'Max Verstappen', shortName: 'M. Verstappen', shortDisplayName: 'M. Verstappen', abbreviation: 'VER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png', alt: 'Netherlands', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png', alt: 'Max Verstappen' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', pitsTaken: '2', place: '1', totalTime: '2:02:34.598',
      },
    }, {
      order: 2,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '868', order: 2, lastName: 'Lewis', firstName: 'Hamilton', displayName: 'Lewis Hamilton', shortName: 'L. Hamilton', shortDisplayName: 'L. Hamilton', abbreviation: 'HAM', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png', alt: 'Lewis Hamilton' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+22.000', fastestLap: '1:16.702', pitsTaken: '4', fastestLapNum: '60', place: '2', totalTime: '2:02:56.598',
      },
    }, {
      order: 3,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '5579', order: 3, lastName: 'Lando', firstName: 'Norris', displayName: 'Lando Norris', shortName: 'L. Norris', shortDisplayName: 'L. Norris', abbreviation: 'NOR', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5579.png', alt: 'Lando Norris' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+23.702', pitsTaken: '2', place: '3', totalTime: '2:02:58.300',
      },
    }, {
      order: 4,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '5498', order: 4, lastName: 'Charles', firstName: 'Leclerc', displayName: 'Charles Leclerc', shortName: 'C. Leclerc', shortDisplayName: 'C. Leclerc', abbreviation: 'LEC', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mon.png', alt: 'Monaco', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5498.png', alt: 'Charles Leclerc' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+25.579', pitsTaken: '2', place: '4', totalTime: '2:03:00.177',
      },
    }, {
      order: 5,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '4686', order: 5, lastName: 'Carlos', firstName: 'Sainz', displayName: 'Carlos Sainz Jr', shortName: 'C. Sainz', shortDisplayName: 'C. Sainz', abbreviation: 'SAI', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4686.png', alt: 'Carlos Sainz Jr' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+27.036', pitsTaken: '2', place: '5', totalTime: '2:03:01.634',
      },
    }, {
      order: 6,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '4510', order: 6, lastName: 'Daniel', firstName: 'Ricciardo', displayName: 'Daniel Ricciardo', shortName: 'D. Ricciardo', shortDisplayName: 'D. Ricciardo', abbreviation: 'RIC', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png', alt: 'Australia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4510.png', alt: 'Daniel Ricciardo' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+51.220', pitsTaken: '2', place: '6', totalTime: '2:03:25.818',
      },
    }, {
      order: 7,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '5501', order: 7, lastName: 'Pierre', firstName: 'Gasly', displayName: 'Pierre Gasly', shortName: 'P. Gasly', shortDisplayName: 'P. Gasly', abbreviation: 'GAS', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5501.png', alt: 'Pierre Gasly' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+52.818', pitsTaken: '4', place: '7', totalTime: '2:03:27.416',
      },
    }, {
      order: 8,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '4775', order: 8, lastName: 'Lance', firstName: 'Stroll', displayName: 'Lance Stroll', shortName: 'L. Stroll', shortDisplayName: 'L. Stroll', abbreviation: 'STR', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4775.png', alt: 'Lance Stroll' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+56.909', pitsTaken: '3', place: '8', totalTime: '2:03:31.507',
      },
    }, {
      order: 9,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '4678', order: 9, lastName: 'Esteban', firstName: 'Ocon', displayName: 'Esteban Ocon', shortName: 'E. Ocon', shortDisplayName: 'E. Ocon', abbreviation: 'OCO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4678.png', alt: 'Esteban Ocon' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+1:05.704', pitsTaken: '5', place: '9', totalTime: '2:03:40.302',
      },
    }, {
      order: 10,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '348', order: 10, lastName: 'Fernando', firstName: 'Alonso', displayName: 'Fernando Alonso', shortName: 'F. Alonso', shortDisplayName: 'F. Alonso', abbreviation: 'ALO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/348.png', alt: 'Fernando Alonso' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+1:06.561', pitsTaken: '3', place: '10', totalTime: '2:03:41.159',
      },
    }, {
      order: 11,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '4472', order: 11, lastName: 'Sergio', firstName: 'Pérez', displayName: 'Sergio Perez', shortName: 'S. Pérez', shortDisplayName: 'S. Pérez', abbreviation: 'PER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png', alt: 'Mexico', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4472.png', alt: 'Sergio Perez' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+1:07.151', pitsTaken: '2', place: '11', totalTime: '2:03:41.749',
      },
    }, {
      order: 12,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '5652', order: 12, lastName: 'Yuki', firstName: 'Tsunoda', displayName: 'Yuki Tsunoda', shortName: 'Y. Tsunoda', shortDisplayName: 'Y. Tsunoda', abbreviation: 'TSU', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png', alt: 'Japan', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5652.png', alt: 'Yuki Tsunoda' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+1:13.184', pitsTaken: '3', place: '12', totalTime: '2:03:47.782',
      },
    }, {
      order: 13,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '337', order: 13, lastName: 'Kimi', firstName: 'Räikkönen', displayName: 'Kimi Raikkonen', shortName: 'K. Räikkönen', shortDisplayName: 'K. Räikkönen', abbreviation: 'RAI', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/337.png', alt: 'Kimi Raikkonen' },
      },
      stateInfo: {
        period: 63, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '63', behindTime: '+1:34.773', pitsTaken: '3', place: '13', totalTime: '2:04:09.371',
      },
    }, {
      order: 14,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '5499', order: 14, lastName: 'Antonio', firstName: 'Giovinazzi', displayName: 'Antonio Giovinazzi', shortName: 'A. Giovinazzi', shortDisplayName: 'A. Giovinazzi', abbreviation: 'GIO', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ita.png', alt: 'Italy', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5499.png', alt: 'Antonio Giovinazzi' },
      },
      stateInfo: {
        period: 62, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '62', pitsTaken: '4', place: '14', behindTime: '+1 Lap', fomGapToLeader: '+1 Lap',
      },
    }, {
      order: 15,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '864', order: 15, lastName: 'Sebastian', firstName: 'Vettel', displayName: 'Sebastian Vettel', shortName: 'S. Vettel', shortDisplayName: 'S. Vettel', abbreviation: 'VET', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png', alt: 'Germany', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/864.png', alt: 'Sebastian Vettel' },
      },
      stateInfo: {
        period: 61, displayValue: 'Retired', name: 'STATUS_RETIRED', state: 'post', completed: false, lapsCompleted: '61', pitsTaken: '6', place: '15', behindTime: '+2 Laps', fomGapToLeader: '+2 Laps',
      },
    }, {
      order: 16,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '5654', order: 16, lastName: 'Mick', firstName: 'Schumacher', displayName: 'Mick Schumacher', shortName: 'M. Schumacher', shortDisplayName: 'M. Schumacher', abbreviation: 'MSC', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png', alt: 'Switzerland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5654.png', alt: 'Mick Schumacher' },
      },
      stateInfo: {
        period: 61, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '61', pitsTaken: '4', place: '16', behindTime: '+2 Laps', fomGapToLeader: '+2 Laps',
      },
    }, {
      order: 17,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '5653', order: 17, lastName: 'Nikita', firstName: 'Mazepin', displayName: 'Nikita Mazepin', shortName: 'N. Mazepin', shortDisplayName: 'N. Mazepin', abbreviation: 'MAZ', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png', alt: 'Russia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5653.png', alt: 'Nikita Mazepin' },
      },
      stateInfo: {
        period: 61, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '61', pitsTaken: '4', place: '17', behindTime: '+2 Laps', fomGapToLeader: '+2 Laps',
      },
    }, {
      order: 18,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '4520', order: 18, lastName: 'Valtteri', firstName: 'Bottas', displayName: 'Valtteri Bottas', shortName: 'V. Bottas', shortDisplayName: 'V. Bottas', abbreviation: 'BOT', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png', alt: 'Valtteri Bottas' },
      },
      stateInfo: {
        period: 30, displayValue: 'Retired', name: 'STATUS_RETIRED', state: 'post', completed: false, lapsCompleted: '30', pitsTaken: '1', place: '18', behindTime: '+33 Laps', fomGapToLeader: '+33 Laps',
      },
    }, {
      order: 19,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '5503', order: 19, lastName: 'George', firstName: 'Russell', displayName: 'George Russell', shortName: 'G. Russell', shortDisplayName: 'G. Russell', abbreviation: 'RUS', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5503.png', alt: 'George Russell' },
      },
      stateInfo: {
        period: 30, displayValue: 'Retired', name: 'STATUS_RETIRED', state: 'post', completed: false, lapsCompleted: '30', pitsTaken: '1', place: '19', behindTime: '+33 Laps', fomGapToLeader: '+33 Laps',
      },
    }, {
      order: 20,
      winner: false,
      type: 'athlete',
      raceType: 'Race',
      athleteInfo: {
        id: '4733', order: 20, lastName: 'Nicholas', firstName: 'Latifi', displayName: 'Nicholas Latifi', shortName: 'N. Latifi', shortDisplayName: 'N. Latifi', abbreviation: 'LAT', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4733.png', alt: 'Nicholas Latifi' },
      },
      stateInfo: {
        period: 0, displayValue: 'Retired', name: 'STATUS_RETIRED', state: 'post', completed: false, lapsCompleted: '0', place: '20', behindTime: '+63 Laps', fomGapToLeader: '+63 Laps',
      },
    }],
  }, {
    competitionId: '401313016',
    titleTab: 'Qualifying',
    state: 'post',
    date: '2021-04-17T11:55Z',
    positions: [{
      order: 1,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '868', order: 1, lastName: 'Lewis', firstName: 'Hamilton', displayName: 'Lewis Hamilton', shortName: 'L. Hamilton', shortDisplayName: 'L. Hamilton', abbreviation: 'HAM', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png', alt: 'Lewis Hamilton' },
      },
      stateInfo: {
        period: 23, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '23', place: '1', totalTime: '1:14.411',
      },
    }, {
      order: 2,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '4472', order: 2, lastName: 'Sergio', firstName: 'Pérez', displayName: 'Sergio Perez', shortName: 'S. Pérez', shortDisplayName: 'S. Pérez', abbreviation: 'PER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png', alt: 'Mexico', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4472.png', alt: 'Sergio Perez' },
      },
      stateInfo: {
        period: 18, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '18', behindTime: '+0.035', place: '2', totalTime: '1:14.446',
      },
    }, {
      order: 3,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '4665', order: 3, lastName: 'Max', firstName: 'Verstappen', displayName: 'Max Verstappen', shortName: 'M. Verstappen', shortDisplayName: 'M. Verstappen', abbreviation: 'VER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png', alt: 'Netherlands', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png', alt: 'Max Verstappen' },
      },
      stateInfo: {
        period: 20, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '20', behindTime: '+0.087', place: '3', totalTime: '1:14.498',
      },
    }, {
      order: 4,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '5498', order: 4, lastName: 'Charles', firstName: 'Leclerc', displayName: 'Charles Leclerc', shortName: 'C. Leclerc', shortDisplayName: 'C. Leclerc', abbreviation: 'LEC', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mon.png', alt: 'Monaco', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5498.png', alt: 'Charles Leclerc' },
      },
      stateInfo: {
        period: 19, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '19', behindTime: '+0.329', place: '4', totalTime: '1:14.740',
      },
    }, {
      order: 5,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '5501', order: 5, lastName: 'Pierre', firstName: 'Gasly', displayName: 'Pierre Gasly', shortName: 'P. Gasly', shortDisplayName: 'P. Gasly', abbreviation: 'GAS', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5501.png', alt: 'Pierre Gasly' },
      },
      stateInfo: {
        period: 21, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '21', behindTime: '+0.379', place: '5', totalTime: '1:14.790',
      },
    }, {
      order: 6,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '4510', order: 6, lastName: 'Daniel', firstName: 'Ricciardo', displayName: 'Daniel Ricciardo', shortName: 'D. Ricciardo', shortDisplayName: 'D. Ricciardo', abbreviation: 'RIC', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png', alt: 'Australia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4510.png', alt: 'Daniel Ricciardo' },
      },
      stateInfo: {
        period: 21, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '21', behindTime: '+0.415', place: '6', totalTime: '1:14.826',
      },
    }, {
      order: 7,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '5579', order: 7, lastName: 'Lando', firstName: 'Norris', displayName: 'Lando Norris', shortName: 'L. Norris', shortDisplayName: 'L. Norris', abbreviation: 'NOR', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5579.png', alt: 'Lando Norris' },
      },
      stateInfo: {
        period: 15, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '15', behindTime: '+0.464', place: '7', totalTime: '1:14.875',
      },
    }, {
      order: 8,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '4520', order: 8, lastName: 'Valtteri', firstName: 'Bottas', displayName: 'Valtteri Bottas', shortName: 'V. Bottas', shortDisplayName: 'V. Bottas', abbreviation: 'BOT', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png', alt: 'Valtteri Bottas' },
      },
      stateInfo: {
        period: 22, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '22', behindTime: '+0.487', place: '8', totalTime: '1:14.898',
      },
    }, {
      order: 9,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '4678', order: 9, lastName: 'Esteban', firstName: 'Ocon', displayName: 'Esteban Ocon', shortName: 'E. Ocon', shortDisplayName: 'E. Ocon', abbreviation: 'OCO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4678.png', alt: 'Esteban Ocon' },
      },
      stateInfo: {
        period: 20, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '20', behindTime: '+0.799', place: '9', totalTime: '1:15.210',
      },
    }, {
      order: 10,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '4775', order: 10, lastName: 'Lance', firstName: 'Stroll', displayName: 'Lance Stroll', shortName: 'L. Stroll', shortDisplayName: 'L. Stroll', abbreviation: 'STR', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4775.png', alt: 'Lance Stroll' },
      },
      stateInfo: {
        period: 20, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '20', place: '10',
      },
    }, {
      order: 11,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '4686', order: 11, lastName: 'Carlos', firstName: 'Sainz', displayName: 'Carlos Sainz Jr', shortName: 'C. Sainz', shortDisplayName: 'C. Sainz', abbreviation: 'SAI', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4686.png', alt: 'Carlos Sainz Jr' },
      },
      stateInfo: {
        period: 16, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '16', behindTime: '+0.788', place: '11', totalTime: '1:15.199',
      },
    }, {
      order: 12,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '5503', order: 12, lastName: 'George', firstName: 'Russell', displayName: 'George Russell', shortName: 'G. Russell', shortDisplayName: 'G. Russell', abbreviation: 'RUS', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5503.png', alt: 'George Russell' },
      },
      stateInfo: {
        period: 16, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '16', behindTime: '+0.850', place: '12', totalTime: '1:15.261',
      },
    }, {
      order: 13,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '864', order: 13, lastName: 'Sebastian', firstName: 'Vettel', displayName: 'Sebastian Vettel', shortName: 'S. Vettel', shortDisplayName: 'S. Vettel', abbreviation: 'VET', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png', alt: 'Germany', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/864.png', alt: 'Sebastian Vettel' },
      },
      stateInfo: {
        period: 14, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '14', behindTime: '+0.983', place: '13', totalTime: '1:15.394',
      },
    }, {
      order: 14,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '4733', order: 14, lastName: 'Nicholas', firstName: 'Latifi', displayName: 'Nicholas Latifi', shortName: 'N. Latifi', shortDisplayName: 'N. Latifi', abbreviation: 'LAT', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4733.png', alt: 'Nicholas Latifi' },
      },
      stateInfo: {
        period: 14, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '14', behindTime: '+1.182', place: '14', totalTime: '1:15.593',
      },
    }, {
      order: 15,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '348', order: 15, lastName: 'Fernando', firstName: 'Alonso', displayName: 'Fernando Alonso', shortName: 'F. Alonso', shortDisplayName: 'F. Alonso', abbreviation: 'ALO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/348.png', alt: 'Fernando Alonso' },
      },
      stateInfo: {
        period: 14, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '14', behindTime: '+1.182', place: '15', totalTime: '1:15.593',
      },
    }, {
      order: 16,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '337', order: 16, lastName: 'Kimi', firstName: 'Räikkönen', displayName: 'Kimi Raikkonen', shortName: 'K. Räikkönen', shortDisplayName: 'K. Räikkönen', abbreviation: 'RAI', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/337.png', alt: 'Kimi Raikkonen' },
      },
      stateInfo: {
        period: 10, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '10', behindTime: '+1.563', place: '16', totalTime: '1:15.974',
      },
    }, {
      order: 17,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '5499', order: 17, lastName: 'Antonio', firstName: 'Giovinazzi', displayName: 'Antonio Giovinazzi', shortName: 'A. Giovinazzi', shortDisplayName: 'A. Giovinazzi', abbreviation: 'GIO', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ita.png', alt: 'Italy', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5499.png', alt: 'Antonio Giovinazzi' },
      },
      stateInfo: {
        period: 9, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '9', behindTime: '+1.711', place: '17', totalTime: '1:16.122',
      },
    }, {
      order: 18,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '5654', order: 18, lastName: 'Mick', firstName: 'Schumacher', displayName: 'Mick Schumacher', shortName: 'M. Schumacher', shortDisplayName: 'M. Schumacher', abbreviation: 'MSC', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png', alt: 'Switzerland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5654.png', alt: 'Mick Schumacher' },
      },
      stateInfo: {
        period: 12, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '12', behindTime: '+1.868', place: '18', totalTime: '1:16.279',
      },
    }, {
      order: 19,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '5653', order: 19, lastName: 'Nikita', firstName: 'Mazepin', displayName: 'Nikita Mazepin', shortName: 'N. Mazepin', shortDisplayName: 'N. Mazepin', abbreviation: 'MAZ', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png', alt: 'Russia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5653.png', alt: 'Nikita Mazepin' },
      },
      stateInfo: {
        period: 12, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '12', behindTime: '+2.386', place: '19', totalTime: '1:16.797',
      },
    }, {
      order: 20,
      winner: false,
      type: 'athlete',
      raceType: 'Qualifying',
      athleteInfo: {
        id: '5652', order: 20, lastName: 'Yuki', firstName: 'Tsunoda', displayName: 'Yuki Tsunoda', shortName: 'Y. Tsunoda', shortDisplayName: 'Y. Tsunoda', abbreviation: 'TSU', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png', alt: 'Japan', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5652.png', alt: 'Yuki Tsunoda' },
      },
      stateInfo: {
        period: 2, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '2', place: '20',
      },
    }],
  }, {
    competitionId: '401313015',
    titleTab: 'Free Practice 3',
    state: 'post',
    date: '2021-04-17T08:55Z',
    positions: [{
      order: 1,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '4665', order: 1, lastName: 'Max', firstName: 'Verstappen', displayName: 'Max Verstappen', shortName: 'M. Verstappen', shortDisplayName: 'M. Verstappen', abbreviation: 'VER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png', alt: 'Netherlands', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png', alt: 'Max Verstappen' },
      },
      stateInfo: {
        period: 18, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '18', place: '1', totalTime: '1:14.958',
      },
    }, {
      order: 2,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '5579', order: 2, lastName: 'Lando', firstName: 'Norris', displayName: 'Lando Norris', shortName: 'L. Norris', shortDisplayName: 'L. Norris', abbreviation: 'NOR', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5579.png', alt: 'Lando Norris' },
      },
      stateInfo: {
        period: 17, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '17', behindTime: '+0.456', place: '2', totalTime: '1:15.414',
      },
    }, {
      order: 3,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '868', order: 3, lastName: 'Lewis', firstName: 'Hamilton', displayName: 'Lewis Hamilton', shortName: 'L. Hamilton', shortDisplayName: 'L. Hamilton', abbreviation: 'HAM', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png', alt: 'Lewis Hamilton' },
      },
      stateInfo: {
        period: 18, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '18', behindTime: '+0.557', place: '3', totalTime: '1:15.515',
      },
    }, {
      order: 4,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '4472', order: 4, lastName: 'Sergio', firstName: 'Pérez', displayName: 'Sergio Perez', shortName: 'S. Pérez', shortDisplayName: 'S. Pérez', abbreviation: 'PER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png', alt: 'Mexico', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4472.png', alt: 'Sergio Perez' },
      },
      stateInfo: {
        period: 18, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '18', behindTime: '+0.593', place: '4', totalTime: '1:15.551',
      },
    }, {
      order: 5,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '5498', order: 5, lastName: 'Charles', firstName: 'Leclerc', displayName: 'Charles Leclerc', shortName: 'C. Leclerc', shortDisplayName: 'C. Leclerc', abbreviation: 'LEC', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mon.png', alt: 'Monaco', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5498.png', alt: 'Charles Leclerc' },
      },
      stateInfo: {
        period: 21, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '21', behindTime: '+0.780', place: '5', totalTime: '1:15.738',
      },
    }, {
      order: 6,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '5501', order: 6, lastName: 'Pierre', firstName: 'Gasly', displayName: 'Pierre Gasly', shortName: 'P. Gasly', shortDisplayName: 'P. Gasly', abbreviation: 'GAS', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5501.png', alt: 'Pierre Gasly' },
      },
      stateInfo: {
        period: 22, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '22', behindTime: '+0.932', place: '6', totalTime: '1:15.890',
      },
    }, {
      order: 7,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '4686', order: 7, lastName: 'Carlos', firstName: 'Sainz', displayName: 'Carlos Sainz Jr', shortName: 'C. Sainz', shortDisplayName: 'C. Sainz', abbreviation: 'SAI', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4686.png', alt: 'Carlos Sainz Jr' },
      },
      stateInfo: {
        period: 21, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '21', behindTime: '+0.950', place: '7', totalTime: '1:15.908',
      },
    }, {
      order: 8,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '4520', order: 8, lastName: 'Valtteri', firstName: 'Bottas', displayName: 'Valtteri Bottas', shortName: 'V. Bottas', shortDisplayName: 'V. Bottas', abbreviation: 'BOT', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png', alt: 'Valtteri Bottas' },
      },
      stateInfo: {
        period: 19, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '19', behindTime: '+0.950', place: '8', totalTime: '1:15.908',
      },
    }, {
      order: 9,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '348', order: 9, lastName: 'Fernando', firstName: 'Alonso', displayName: 'Fernando Alonso', shortName: 'F. Alonso', shortDisplayName: 'F. Alonso', abbreviation: 'ALO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/348.png', alt: 'Fernando Alonso' },
      },
      stateInfo: {
        period: 20, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '20', behindTime: '+1.228', place: '9', totalTime: '1:16.186',
      },
    }, {
      order: 10,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '4678', order: 10, lastName: 'Esteban', firstName: 'Ocon', displayName: 'Esteban Ocon', shortName: 'E. Ocon', shortDisplayName: 'E. Ocon', abbreviation: 'OCO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4678.png', alt: 'Esteban Ocon' },
      },
      stateInfo: {
        period: 20, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '20', behindTime: '+1.270', place: '10', totalTime: '1:16.228',
      },
    }, {
      order: 11,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '5652', order: 11, lastName: 'Yuki', firstName: 'Tsunoda', displayName: 'Yuki Tsunoda', shortName: 'Y. Tsunoda', shortDisplayName: 'Y. Tsunoda', abbreviation: 'TSU', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png', alt: 'Japan', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5652.png', alt: 'Yuki Tsunoda' },
      },
      stateInfo: {
        period: 20, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '20', behindTime: '+1.272', place: '11', totalTime: '1:16.230',
      },
    }, {
      order: 12,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '4775', order: 12, lastName: 'Lance', firstName: 'Stroll', displayName: 'Lance Stroll', shortName: 'L. Stroll', shortDisplayName: 'L. Stroll', abbreviation: 'STR', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4775.png', alt: 'Lance Stroll' },
      },
      stateInfo: {
        period: 19, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '19', behindTime: '+1.287', place: '12', totalTime: '1:16.245',
      },
    }, {
      order: 13,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '4510', order: 13, lastName: 'Daniel', firstName: 'Ricciardo', displayName: 'Daniel Ricciardo', shortName: 'D. Ricciardo', shortDisplayName: 'D. Ricciardo', abbreviation: 'RIC', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png', alt: 'Australia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4510.png', alt: 'Daniel Ricciardo' },
      },
      stateInfo: {
        period: 17, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '17', behindTime: '+1.295', place: '13', totalTime: '1:16.253',
      },
    }, {
      order: 14,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '864', order: 14, lastName: 'Sebastian', firstName: 'Vettel', displayName: 'Sebastian Vettel', shortName: 'S. Vettel', shortDisplayName: 'S. Vettel', abbreviation: 'VET', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png', alt: 'Germany', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/864.png', alt: 'Sebastian Vettel' },
      },
      stateInfo: {
        period: 19, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '19', behindTime: '+1.431', place: '14', totalTime: '1:16.389',
      },
    }, {
      order: 15,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '5503', order: 15, lastName: 'George', firstName: 'Russell', displayName: 'George Russell', shortName: 'G. Russell', shortDisplayName: 'G. Russell', abbreviation: 'RUS', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5503.png', alt: 'George Russell' },
      },
      stateInfo: {
        period: 20, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '20', behindTime: '+1.469', place: '15', totalTime: '1:16.427',
      },
    }, {
      order: 16,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '5654', order: 16, lastName: 'Mick', firstName: 'Schumacher', displayName: 'Mick Schumacher', shortName: 'M. Schumacher', shortDisplayName: 'M. Schumacher', abbreviation: 'MSC', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png', alt: 'Switzerland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5654.png', alt: 'Mick Schumacher' },
      },
      stateInfo: {
        period: 22, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '22', behindTime: '+1.490', place: '16', totalTime: '1:16.448',
      },
    }, {
      order: 17,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '4733', order: 17, lastName: 'Nicholas', firstName: 'Latifi', displayName: 'Nicholas Latifi', shortName: 'N. Latifi', shortDisplayName: 'N. Latifi', abbreviation: 'LAT', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4733.png', alt: 'Nicholas Latifi' },
      },
      stateInfo: {
        period: 15, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '15', behindTime: '+1.579', place: '17', totalTime: '1:16.537',
      },
    }, {
      order: 18,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '5499', order: 18, lastName: 'Antonio', firstName: 'Giovinazzi', displayName: 'Antonio Giovinazzi', shortName: 'A. Giovinazzi', shortDisplayName: 'A. Giovinazzi', abbreviation: 'GIO', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ita.png', alt: 'Italy', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5499.png', alt: 'Antonio Giovinazzi' },
      },
      stateInfo: {
        period: 22, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '22', behindTime: '+1.654', place: '18', totalTime: '1:16.612',
      },
    }, {
      order: 19,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '337', order: 19, lastName: 'Kimi', firstName: 'Räikkönen', displayName: 'Kimi Raikkonen', shortName: 'K. Räikkönen', shortDisplayName: 'K. Räikkönen', abbreviation: 'RAI', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/337.png', alt: 'Kimi Raikkonen' },
      },
      stateInfo: {
        period: 23, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '23', behindTime: '+1.845', place: '19', totalTime: '1:16.803',
      },
    }, {
      order: 20,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 3',
      athleteInfo: {
        id: '5653', order: 20, lastName: 'Nikita', firstName: 'Mazepin', displayName: 'Nikita Mazepin', shortName: 'N. Mazepin', shortDisplayName: 'N. Mazepin', abbreviation: 'MAZ', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png', alt: 'Russia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5653.png', alt: 'Nikita Mazepin' },
      },
      stateInfo: {
        period: 23, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '23', behindTime: '+2.440', place: '20', totalTime: '1:17.398',
      },
    }],
  }, {
    competitionId: '401313014',
    titleTab: 'Free Practice 2',
    state: 'post',
    date: '2021-04-16T12:25Z',
    positions: [{
      order: 1,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '4520', order: 1, lastName: 'Valtteri', firstName: 'Bottas', displayName: 'Valtteri Bottas', shortName: 'V. Bottas', shortDisplayName: 'V. Bottas', abbreviation: 'BOT', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png', alt: 'Valtteri Bottas' },
      },
      stateInfo: {
        period: 25, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '25', place: '1', totalTime: '1:15.551',
      },
    }, {
      order: 2,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '868', order: 2, lastName: 'Lewis', firstName: 'Hamilton', displayName: 'Lewis Hamilton', shortName: 'L. Hamilton', shortDisplayName: 'L. Hamilton', abbreviation: 'HAM', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png', alt: 'Lewis Hamilton' },
      },
      stateInfo: {
        period: 26, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '26', behindTime: '+0.010', place: '2', totalTime: '1:15.561',
      },
    }, {
      order: 3,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '5501', order: 3, lastName: 'Pierre', firstName: 'Gasly', displayName: 'Pierre Gasly', shortName: 'P. Gasly', shortDisplayName: 'P. Gasly', abbreviation: 'GAS', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5501.png', alt: 'Pierre Gasly' },
      },
      stateInfo: {
        period: 30, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '30', behindTime: '+0.078', place: '3', totalTime: '1:15.629',
      },
    }, {
      order: 4,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '4686', order: 4, lastName: 'Carlos', firstName: 'Sainz', displayName: 'Carlos Sainz Jr', shortName: 'C. Sainz', shortDisplayName: 'C. Sainz', abbreviation: 'SAI', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4686.png', alt: 'Carlos Sainz Jr' },
      },
      stateInfo: {
        period: 30, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '30', behindTime: '+0.283', place: '4', totalTime: '1:15.834',
      },
    }, {
      order: 5,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '5498', order: 5, lastName: 'Charles', firstName: 'Leclerc', displayName: 'Charles Leclerc', shortName: 'C. Leclerc', shortDisplayName: 'C. Leclerc', abbreviation: 'LEC', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mon.png', alt: 'Monaco', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5498.png', alt: 'Charles Leclerc' },
      },
      stateInfo: {
        period: 28, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '28', behindTime: '+0.820', place: '5', totalTime: '1:16.371',
      },
    }, {
      order: 6,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '4472', order: 6, lastName: 'Sergio', firstName: 'Pérez', displayName: 'Sergio Perez', shortName: 'S. Pérez', shortDisplayName: 'S. Pérez', abbreviation: 'PER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png', alt: 'Mexico', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4472.png', alt: 'Sergio Perez' },
      },
      stateInfo: {
        period: 25, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '25', behindTime: '+0.860', place: '6', totalTime: '1:16.411',
      },
    }, {
      order: 7,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '5652', order: 7, lastName: 'Yuki', firstName: 'Tsunoda', displayName: 'Yuki Tsunoda', shortName: 'Y. Tsunoda', shortDisplayName: 'Y. Tsunoda', abbreviation: 'TSU', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png', alt: 'Japan', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5652.png', alt: 'Yuki Tsunoda' },
      },
      stateInfo: {
        period: 26, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '26', behindTime: '+0.868', place: '7', totalTime: '1:16.419',
      },
    }, {
      order: 8,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '5579', order: 8, lastName: 'Lando', firstName: 'Norris', displayName: 'Lando Norris', shortName: 'L. Norris', shortDisplayName: 'L. Norris', abbreviation: 'NOR', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5579.png', alt: 'Lando Norris' },
      },
      stateInfo: {
        period: 23, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '23', behindTime: '+0.934', place: '8', totalTime: '1:16.485',
      },
    }, {
      order: 9,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '5499', order: 9, lastName: 'Antonio', firstName: 'Giovinazzi', displayName: 'Antonio Giovinazzi', shortName: 'A. Giovinazzi', shortDisplayName: 'A. Giovinazzi', abbreviation: 'GIO', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ita.png', alt: 'Italy', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5499.png', alt: 'Antonio Giovinazzi' },
      },
      stateInfo: {
        period: 25, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '25', behindTime: '+0.962', place: '9', totalTime: '1:16.513',
      },
    }, {
      order: 10,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '4775', order: 10, lastName: 'Lance', firstName: 'Stroll', displayName: 'Lance Stroll', shortName: 'L. Stroll', shortDisplayName: 'L. Stroll', abbreviation: 'STR', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4775.png', alt: 'Lance Stroll' },
      },
      stateInfo: {
        period: 25, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '25', behindTime: '+1.186', place: '10', totalTime: '1:16.737',
      },
    }, {
      order: 11,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '4678', order: 11, lastName: 'Esteban', firstName: 'Ocon', displayName: 'Esteban Ocon', shortName: 'E. Ocon', shortDisplayName: 'E. Ocon', abbreviation: 'OCO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4678.png', alt: 'Esteban Ocon' },
      },
      stateInfo: {
        period: 27, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '27', behindTime: '+1.266', place: '11', totalTime: '1:16.817',
      },
    }, {
      order: 12,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '4733', order: 12, lastName: 'Nicholas', firstName: 'Latifi', displayName: 'Nicholas Latifi', shortName: 'N. Latifi', shortDisplayName: 'N. Latifi', abbreviation: 'LAT', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4733.png', alt: 'Nicholas Latifi' },
      },
      stateInfo: {
        period: 29, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '29', behindTime: '+1.272', place: '12', totalTime: '1:16.823',
      },
    }, {
      order: 13,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '348', order: 13, lastName: 'Fernando', firstName: 'Alonso', displayName: 'Fernando Alonso', shortName: 'F. Alonso', shortDisplayName: 'F. Alonso', abbreviation: 'ALO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/348.png', alt: 'Fernando Alonso' },
      },
      stateInfo: {
        period: 27, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '27', behindTime: '+1.284', place: '13', totalTime: '1:16.835',
      },
    }, {
      order: 14,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '4665', order: 14, lastName: 'Max', firstName: 'Verstappen', displayName: 'Max Verstappen', shortName: 'M. Verstappen', shortDisplayName: 'M. Verstappen', abbreviation: 'VER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png', alt: 'Netherlands', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png', alt: 'Max Verstappen' },
      },
      stateInfo: {
        period: 5, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '5', behindTime: '+1.448', place: '14', totalTime: '1:16.999',
      },
    }, {
      order: 15,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '864', order: 15, lastName: 'Sebastian', firstName: 'Vettel', displayName: 'Sebastian Vettel', shortName: 'S. Vettel', shortDisplayName: 'S. Vettel', abbreviation: 'VET', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png', alt: 'Germany', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/864.png', alt: 'Sebastian Vettel' },
      },
      stateInfo: {
        period: 27, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '27', behindTime: '+1.541', place: '15', totalTime: '1:17.092',
      },
    }, {
      order: 16,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '5503', order: 16, lastName: 'George', firstName: 'Russell', displayName: 'George Russell', shortName: 'G. Russell', shortDisplayName: 'G. Russell', abbreviation: 'RUS', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5503.png', alt: 'George Russell' },
      },
      stateInfo: {
        period: 31, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '31', behindTime: '+1.628', place: '16', totalTime: '1:17.179',
      },
    }, {
      order: 17,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '337', order: 17, lastName: 'Kimi', firstName: 'Räikkönen', displayName: 'Kimi Raikkonen', shortName: 'K. Räikkönen', shortDisplayName: 'K. Räikkönen', abbreviation: 'RAI', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/337.png', alt: 'Kimi Raikkonen' },
      },
      stateInfo: {
        period: 27, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '27', behindTime: '+1.722', place: '17', totalTime: '1:17.273',
      },
    }, {
      order: 18,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '4510', order: 18, lastName: 'Daniel', firstName: 'Ricciardo', displayName: 'Daniel Ricciardo', shortName: 'D. Ricciardo', shortDisplayName: 'D. Ricciardo', abbreviation: 'RIC', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png', alt: 'Australia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4510.png', alt: 'Daniel Ricciardo' },
      },
      stateInfo: {
        period: 24, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '24', behindTime: '+1.730', place: '18', totalTime: '1:17.281',
      },
    }, {
      order: 19,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '5654', order: 19, lastName: 'Mick', firstName: 'Schumacher', displayName: 'Mick Schumacher', shortName: 'M. Schumacher', shortDisplayName: 'M. Schumacher', abbreviation: 'MSC', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png', alt: 'Switzerland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5654.png', alt: 'Mick Schumacher' },
      },
      stateInfo: {
        period: 28, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '28', behindTime: '+1.799', place: '19', totalTime: '1:17.350',
      },
    }, {
      order: 20,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 2',
      athleteInfo: {
        id: '5653', order: 20, lastName: 'Nikita', firstName: 'Mazepin', displayName: 'Nikita Mazepin', shortName: 'N. Mazepin', shortDisplayName: 'N. Mazepin', abbreviation: 'MAZ', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png', alt: 'Russia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5653.png', alt: 'Nikita Mazepin' },
      },
      stateInfo: {
        period: 16, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '16', behindTime: '+2.306', place: '20', totalTime: '1:17.857',
      },
    }],
  }, {
    competitionId: '401313013',
    titleTab: 'Free Practice 1',
    state: 'post',
    date: '2021-04-16T08:55Z',
    positions: [{
      order: 1,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '4520', order: 1, lastName: 'Valtteri', firstName: 'Bottas', displayName: 'Valtteri Bottas', shortName: 'V. Bottas', shortDisplayName: 'V. Bottas', abbreviation: 'BOT', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png', alt: 'Valtteri Bottas' },
      },
      stateInfo: {
        period: 23, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '23', place: '1', totalTime: '1:16.564',
      },
    }, {
      order: 2,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '868', order: 2, lastName: 'Lewis', firstName: 'Hamilton', displayName: 'Lewis Hamilton', shortName: 'L. Hamilton', shortDisplayName: 'L. Hamilton', abbreviation: 'HAM', team: 'Mercedes', teamColor: '00D2BE', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png', alt: 'Lewis Hamilton' },
      },
      stateInfo: {
        period: 25, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '25', behindTime: '+0.041', place: '2', totalTime: '1:16.605',
      },
    }, {
      order: 3,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '4665', order: 3, lastName: 'Max', firstName: 'Verstappen', displayName: 'Max Verstappen', shortName: 'M. Verstappen', shortDisplayName: 'M. Verstappen', abbreviation: 'VER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png', alt: 'Netherlands', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png', alt: 'Max Verstappen' },
      },
      stateInfo: {
        period: 21, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '21', behindTime: '+0.058', place: '3', totalTime: '1:16.622',
      },
    }, {
      order: 4,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '5501', order: 4, lastName: 'Pierre', firstName: 'Gasly', displayName: 'Pierre Gasly', shortName: 'P. Gasly', shortDisplayName: 'P. Gasly', abbreviation: 'GAS', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5501.png', alt: 'Pierre Gasly' },
      },
      stateInfo: {
        period: 21, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '21', behindTime: '+0.324', place: '4', totalTime: '1:16.888',
      },
    }, {
      order: 5,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '4686', order: 5, lastName: 'Carlos', firstName: 'Sainz', displayName: 'Carlos Sainz Jr', shortName: 'C. Sainz', shortDisplayName: 'C. Sainz', abbreviation: 'SAI', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4686.png', alt: 'Carlos Sainz Jr' },
      },
      stateInfo: {
        period: 26, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '26', behindTime: '+0.324', place: '5', totalTime: '1:16.888',
      },
    }, {
      order: 6,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '5498', order: 6, lastName: 'Charles', firstName: 'Leclerc', displayName: 'Charles Leclerc', shortName: 'C. Leclerc', shortDisplayName: 'C. Leclerc', abbreviation: 'LEC', team: 'Ferrari', teamColor: 'DC0000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mon.png', alt: 'Monaco', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5498.png', alt: 'Charles Leclerc' },
      },
      stateInfo: {
        period: 13, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '13', behindTime: '+0.345', place: '6', totalTime: '1:16.909',
      },
    }, {
      order: 7,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '348', order: 7, lastName: 'Fernando', firstName: 'Alonso', displayName: 'Fernando Alonso', shortName: 'F. Alonso', shortDisplayName: 'F. Alonso', abbreviation: 'ALO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', alt: 'Spain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/348.png', alt: 'Fernando Alonso' },
      },
      stateInfo: {
        period: 23, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '23', behindTime: '+0.893', place: '7', totalTime: '1:17.457',
      },
    }, {
      order: 8,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '4775', order: 8, lastName: 'Lance', firstName: 'Stroll', displayName: 'Lance Stroll', shortName: 'L. Stroll', shortDisplayName: 'L. Stroll', abbreviation: 'STR', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4775.png', alt: 'Lance Stroll' },
      },
      stateInfo: {
        period: 19, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '19', behindTime: '+0.925', place: '8', totalTime: '1:17.489',
      },
    }, {
      order: 9,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '4733', order: 9, lastName: 'Nicholas', firstName: 'Latifi', displayName: 'Nicholas Latifi', shortName: 'N. Latifi', shortDisplayName: 'N. Latifi', abbreviation: 'LAT', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', alt: 'Canada', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4733.png', alt: 'Nicholas Latifi' },
      },
      stateInfo: {
        period: 24, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '24', behindTime: '+1.175', place: '9', totalTime: '1:17.739',
      },
    }, {
      order: 10,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '4510', order: 10, lastName: 'Daniel', firstName: 'Ricciardo', displayName: 'Daniel Ricciardo', shortName: 'D. Ricciardo', shortDisplayName: 'D. Ricciardo', abbreviation: 'RIC', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png', alt: 'Australia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4510.png', alt: 'Daniel Ricciardo' },
      },
      stateInfo: {
        period: 23, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '23', behindTime: '+1.205', place: '10', totalTime: '1:17.769',
      },
    }, {
      order: 11,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '5503', order: 11, lastName: 'George', firstName: 'Russell', displayName: 'George Russell', shortName: 'G. Russell', shortDisplayName: 'G. Russell', abbreviation: 'RUS', team: 'Williams', teamColor: 'FFFFFF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5503.png', alt: 'George Russell' },
      },
      stateInfo: {
        period: 25, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '25', behindTime: '+1.302', place: '11', totalTime: '1:17.866',
      },
    }, {
      order: 12,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '337', order: 12, lastName: 'Kimi', firstName: 'Räikkönen', displayName: 'Kimi Raikkonen', shortName: 'K. Räikkönen', shortDisplayName: 'K. Räikkönen', abbreviation: 'RAI', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', alt: 'Finland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/337.png', alt: 'Kimi Raikkonen' },
      },
      stateInfo: {
        period: 16, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '16', behindTime: '+1.319', place: '12', totalTime: '1:17.883',
      },
    }, {
      order: 13,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '5579', order: 13, lastName: 'Lando', firstName: 'Norris', displayName: 'Lando Norris', shortName: 'L. Norris', shortDisplayName: 'L. Norris', abbreviation: 'NOR', team: 'McLaren', teamColor: 'FF8700', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', alt: 'Britain', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5579.png', alt: 'Lando Norris' },
      },
      stateInfo: {
        period: 16, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '16', behindTime: '+1.371', place: '13', totalTime: '1:17.935',
      },
    }, {
      order: 14,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '864', order: 14, lastName: 'Sebastian', firstName: 'Vettel', displayName: 'Sebastian Vettel', shortName: 'S. Vettel', shortDisplayName: 'S. Vettel', abbreviation: 'VET', team: 'Aston Martin', teamColor: '006F62', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png', alt: 'Germany', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/864.png', alt: 'Sebastian Vettel' },
      },
      stateInfo: {
        period: 23, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '23', behindTime: '+1.420', place: '14', totalTime: '1:17.984',
      },
    }, {
      order: 15,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '5499', order: 15, lastName: 'Antonio', firstName: 'Giovinazzi', displayName: 'Antonio Giovinazzi', shortName: 'A. Giovinazzi', shortDisplayName: 'A. Giovinazzi', abbreviation: 'GIO', team: 'Alfa Romeo', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ita.png', alt: 'Italy', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/5499.png', alt: 'Antonio Giovinazzi' },
      },
      stateInfo: {
        period: 24, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '24', behindTime: '+1.494', place: '15', totalTime: '1:18.058',
      },
    }, {
      order: 16,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '4472', order: 16, lastName: 'Sergio', firstName: 'Pérez', displayName: 'Sergio Perez', shortName: 'S. Pérez', shortDisplayName: 'S. Pérez', abbreviation: 'PER', team: 'Red Bull', teamColor: '00327D', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png', alt: 'Mexico', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4472.png', alt: 'Sergio Perez' },
      },
      stateInfo: {
        period: 15, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '15', behindTime: '+1.664', place: '16', totalTime: '1:18.228',
      },
    }, {
      order: 17,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '4678', order: 17, lastName: 'Esteban', firstName: 'Ocon', displayName: 'Esteban Ocon', shortName: 'E. Ocon', shortDisplayName: 'E. Ocon', abbreviation: 'OCO', team: 'Alpine', teamColor: '000000', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', alt: 'France', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/rpm/players/full/4678.png', alt: 'Esteban Ocon' },
      },
      stateInfo: {
        period: 20, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '20', behindTime: '+1.796', place: '17', totalTime: '1:18.360',
      },
    }, {
      order: 18,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '5653', order: 18, lastName: 'Nikita', firstName: 'Mazepin', displayName: 'Nikita Mazepin', shortName: 'N. Mazepin', shortDisplayName: 'N. Mazepin', abbreviation: 'MAZ', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png', alt: 'Russia', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5653.png', alt: 'Nikita Mazepin' },
      },
      stateInfo: {
        period: 22, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '22', behindTime: '+2.259', place: '18', totalTime: '1:18.823',
      },
    }, {
      order: 19,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '5654', order: 19, lastName: 'Mick', firstName: 'Schumacher', displayName: 'Mick Schumacher', shortName: 'M. Schumacher', shortDisplayName: 'M. Schumacher', abbreviation: 'MSC', team: 'Haas', teamColor: '5A5A5A', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png', alt: 'Switzerland', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5654.png', alt: 'Mick Schumacher' },
      },
      stateInfo: {
        period: 18, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '18', behindTime: '+2.916', place: '19', totalTime: '1:19.480',
      },
    }, {
      order: 20,
      winner: false,
      type: 'athlete',
      raceType: 'Free Practice 1',
      athleteInfo: {
        id: '5652', order: 20, lastName: 'Yuki', firstName: 'Tsunoda', displayName: 'Yuki Tsunoda', shortName: 'Y. Tsunoda', shortDisplayName: 'Y. Tsunoda', abbreviation: 'TSU', team: 'AlphaTauri', teamColor: '0032FF', flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png', alt: 'Japan', rel: ['country-flag'] }, headshot: { href: 'https://a.espncdn.com/i/headshots/f1/players/full/5652.png', alt: 'Yuki Tsunoda' },
      },
      stateInfo: {
        period: 11, displayValue: 'Classified', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, lapsCompleted: '11', behindTime: '+3.217', place: '20', totalTime: '1:19.781',
      },
    }],
  }],
  eventInfo: {
    venue: {
      id: '293',
      fullName: 'Autodromo Enzo e Dino Ferrari',
      address: { city: 'Rome', country: 'Italy' },
      images: [],
      length: 4.909,
      countryFlag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/ita.png', alt: 'Italy', rel: ['country-flag'] },
      circuit: {
        fullName: 'Autodromo Enzo e Dino Ferrari', length: '4.909 km', distance: '307.458 km', laps: 62, turns: 17, direction: 'Counterclockwise', established: 1953, diagrams: [],
      },
    },
  },
  news: {
    header: 'F1 News',
    link: {
      language: 'en', rel: ['index', 'desktop', 'league'], href: 'https://www.espn.com/f1/', text: 'All F1 News', shortText: 'All News', isExternal: false, isPremium: false,
    },
    articles: [{
      images: [{
        name: 'Lewis Hamilton [800x320] - face - Copy', width: 800, caption: 'Lewis Hamilton won a seventh F1 championship in 2020.', id: 31363927, credit: 'Mario Renzi - Formula 1/Formula 1 via Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2020/1210/r788151_800x320_5-2.jpg', height: 320,
      }, {
        name: 'How will a qualifying sprint race work to determine the grid?', width: 576, caption: "Nate Saunders is pleased with F1's \"proactive\" decision to have a qualifying sprint race in three of the 2021 events.", type: 'Media', url: 'https://a.espncdn.com/media/motion/2021/0426/dm_210426_INET_F1_Analysis_How_will_a_qualifying_sprint_race_work_to_determine_the_grid_20210426_GLOBAL/dm_210426_INET_F1_Analysis_How_will_a_qualifying_sprint_race_work_to_determine_the_grid_20210426_GLOBAL.jpg', height: 324,
      }],
      description: 'Formula One champion Lewis Hamilton has joined fellow British drivers Lando Norris and George Russell in boycotting social media for the next three days.',
      links: { api: { news: { href: 'http://now.core.api.espn.com/v1/sports/news/31363928' }, self: { href: 'http://now.core.api.espn.com/v1/sports/news/31363928' } }, web: { href: 'https://www.espn.co.uk/f1/story/_/id/31363928/lewis-hamilton-12-f1-drivers-boycotting-social-media', short: { href: 'https://es.pn/3aRvVxW' } }, mobile: { href: 'http://m.espn.go.com/wireless/story?storyId=31363928' } },
      categories: [{
        id: 53304, description: 'Formula One', type: 'league', sportId: 2030, leagueId: 2030, league: { id: 2030, description: 'Formula One', links: { api: { leagues: { href: 'http://now.core.api.espn.com/v1/sports/racing/f1' } }, web: { leagues: { href: 'http://espn.co.uk/f1/' } }, mobile: { leagues: { href: 'http://m.espnf1.com/' } } } }, uid: 's:2000~l:2030', createDate: '2021-04-30T09:46:00Z',
      }, {
        id: 145836, description: 'news - au f1', type: 'topic', sportId: 0, topicId: 390, createDate: '2021-04-30T09:46:00Z',
      }, {
        id: 152392, description: 'news - in f1', type: 'topic', sportId: 0, topicId: 407, createDate: '2021-04-30T09:46:00Z',
      }, {
        id: 133854, description: 'news - uk f1', type: 'topic', sportId: 0, topicId: 158, createDate: '2021-04-30T09:46:00Z',
      }, { type: 'guid', guid: '5d109aaf4af1cac26933636491dff219', createDate: '2021-04-30T09:46:00Z' }, { type: 'guid', guid: 'b010f7233e4a4031488904cbe2c46fb9', createDate: '2021-04-30T09:46:00Z' }, { type: 'guid', guid: '23bf83ee-6d7a-3957-8b67-8014ddb9ca47', createDate: '2021-04-30T09:46:00Z' }, { type: 'guid', guid: 'bea582b690566a62fa230eeb7124429b', createDate: '2021-04-30T09:46:00Z' }],
      headline: 'Lewis Hamilton among 12 F1 drivers boycotting social media',
    }, {
      images: [{
        name: 'George Russell [800x320]', width: 800, caption: 'George Russell collided with Valtteri Bottas in Imola.', id: 31289681, credit: 'Laurent Charniaux - Pool/Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0419/r842653_800x320_5-2.jpg', height: 320,
      }, {
        name: 'How will a qualifying sprint race work to determine the grid?', width: 576, caption: "Nate Saunders is pleased with F1's \"proactive\" decision to have a qualifying sprint race in three of the 2021 events.", type: 'Media', url: 'https://a.espncdn.com/media/motion/2021/0426/dm_210426_INET_F1_Analysis_How_will_a_qualifying_sprint_race_work_to_determine_the_grid_20210426_GLOBAL/dm_210426_INET_F1_Analysis_How_will_a_qualifying_sprint_race_work_to_determine_the_grid_20210426_GLOBAL.jpg', height: 324,
      }],
      description: 'Williams driver George Russell said his relationship with Mercedes Formula One boss Toto Wolff remained strong despite a costly collision with Valtteri Bottas at the Emilia Romagna Grand Prix.',
      links: { api: { news: { href: 'http://now.core.api.espn.com/v1/sports/news/31361043' }, self: { href: 'http://now.core.api.espn.com/v1/sports/news/31361043' } }, web: { href: 'https://www.espn.co.uk/f1/story/_/id/31361043/russell-says-wolff-relationship-stronger-imola-crash', short: { href: 'https://es.pn/2R8PBGG' } }, mobile: { href: 'http://m.espn.go.com/wireless/story?storyId=31361043' } },
      categories: [{
        id: 53304, description: 'Formula One', type: 'league', sportId: 2030, leagueId: 2030, league: { id: 2030, description: 'Formula One', links: { api: { leagues: { href: 'http://now.core.api.espn.com/v1/sports/racing/f1' } }, web: { leagues: { href: 'http://espn.co.uk/f1/' } }, mobile: { leagues: { href: 'http://m.espnf1.com/' } } } }, uid: 's:2000~l:2030', createDate: '2021-04-29T22:58:31Z',
      }, {
        id: 152392, description: 'news - in f1', type: 'topic', sportId: 0, topicId: 407, createDate: '2021-04-29T22:58:31Z',
      }, {
        id: 145836, description: 'news - au f1', type: 'topic', sportId: 0, topicId: 390, createDate: '2021-04-29T22:58:31Z',
      }, {
        id: 133854, description: 'news - uk f1', type: 'topic', sportId: 0, topicId: 158, createDate: '2021-04-29T22:58:31Z',
      }, { type: 'guid', guid: 'bea582b690566a62fa230eeb7124429b', createDate: '2021-04-29T22:58:31Z' }, { type: 'guid', guid: 'b010f7233e4a4031488904cbe2c46fb9', createDate: '2021-04-29T22:58:31Z' }, { type: 'guid', guid: '5d109aaf4af1cac26933636491dff219', createDate: '2021-04-29T22:58:31Z' }, { type: 'guid', guid: '23bf83ee-6d7a-3957-8b67-8014ddb9ca47', createDate: '2021-04-29T22:58:31Z' }],
      headline: 'Russell says Wolff relationship stronger since Imola crash',
    }, {
      images: [{
        name: 'Lewis Hamilton, Sergio Perez [800x320]', width: 800, alt: 'Lewis Hamilton started ahead of Red Bull drivers Sergio Perez and Max Verstappen at Imola.', caption: 'Lewis Hamilton started ahead of Red Bull drivers Sergio Perez and Max Verstappen at Imola.', id: 31275518, credit: 'Dan Istitene - Formula 1/Formula 1 via Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0417/r841759_800x320_5-2.jpg', height: 320,
      }, {
        name: 'Hamilton reveals guitar gifted by David Bowie', width: 576, caption: 'Lewis Hamilton reveals the story behind his guitars gifted from David Bowie before his passing.', type: 'Media', url: 'https://a.espncdn.com/media/motion/2021/0426/dm_210426_INET_F1_News_Hamilton_reveals_guitar_gifted_by_David_Bowie_20210426_GLOBAL/dm_210426_INET_F1_News_Hamilton_reveals_guitar_gifted_by_David_Bowie_20210426_GLOBAL.jpg', height: 324,
      }],
      description: "Seven-times world champion Lewis Hamilton said on Thursday that he planned to be in Formula One next season, was enjoying this year's title battle and had already been laying the groundwork for 2022.",
      links: { api: { news: { href: 'http://now.core.api.espn.com/v1/sports/news/31359142' }, self: { href: 'http://now.core.api.espn.com/v1/sports/news/31359142' } }, web: { href: 'https://www.espn.co.uk/f1/story/_/id/31359142/hamilton-planning-stay-f1-next-year', short: { href: 'https://es.pn/3t4uKS6' } }, mobile: { href: 'http://m.espn.go.com/wireless/story?storyId=31359142' } },
      categories: [{
        id: 53304, description: 'Formula One', type: 'league', sportId: 2030, leagueId: 2030, league: { id: 2030, description: 'Formula One', links: { api: { leagues: { href: 'http://now.core.api.espn.com/v1/sports/racing/f1' } }, web: { leagues: { href: 'http://espn.co.uk/f1/' } }, mobile: { leagues: { href: 'http://m.espnf1.com/' } } } }, uid: 's:2000~l:2030', createDate: '2021-04-29T17:58:00Z',
      }, {
        id: 152392, description: 'news - in f1', type: 'topic', sportId: 0, topicId: 407, createDate: '2021-04-29T17:58:00Z',
      }, {
        id: 145836, description: 'news - au f1', type: 'topic', sportId: 0, topicId: 390, createDate: '2021-04-29T17:58:00Z',
      }, {
        id: 133854, description: 'news - uk f1', type: 'topic', sportId: 0, topicId: 158, createDate: '2021-04-29T17:58:00Z',
      }, { type: 'guid', guid: 'b010f7233e4a4031488904cbe2c46fb9', createDate: '2021-04-29T17:58:00Z' }, { type: 'guid', guid: '5d109aaf4af1cac26933636491dff219', createDate: '2021-04-29T17:58:00Z' }, { type: 'guid', guid: '23bf83ee-6d7a-3957-8b67-8014ddb9ca47', createDate: '2021-04-29T17:58:00Z' }, { type: 'guid', guid: 'bea582b690566a62fa230eeb7124429b', createDate: '2021-04-29T17:58:00Z' }],
      headline: 'Lewis Hamilton planning to stay in F1 next year',
    }, {
      images: [{
        name: 'Lewis Hamilton\n [800x320]', width: 800, caption: "Lewis Hamilton was speaking during a press conference ahead of this weekend's Portuguese Grand Prix.", id: 31359088, credit: 'Gabriel Bouys - Pool/Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0429/r847322_800x320_5-2.jpg', height: 320,
      }, {
        name: 'Hamilton reveals guitar gifted by David Bowie', width: 576, caption: 'Lewis Hamilton reveals the story behind his guitars gifted from David Bowie before his passing.', type: 'Media', url: 'https://a.espncdn.com/media/motion/2021/0426/dm_210426_INET_F1_News_Hamilton_reveals_guitar_gifted_by_David_Bowie_20210426_GLOBAL/dm_210426_INET_F1_News_Hamilton_reveals_guitar_gifted_by_David_Bowie_20210426_GLOBAL.jpg', height: 324,
      }],
      description: 'Formula One world champion Lewis Hamilton is open to joining a three-day boycott of social media this weekend aimed at making a stand against discriminatory abuse online.',
      links: { api: { news: { href: 'http://now.core.api.espn.com/v1/sports/news/31359117' }, self: { href: 'http://now.core.api.espn.com/v1/sports/news/31359117' } }, web: { href: 'https://www.espn.co.uk/f1/story/_/id/31359117/hamilton-open-joining-social-media-boycott', short: { href: 'https://es.pn/3eKjLrR' } }, mobile: { href: 'http://m.espn.go.com/wireless/story?storyId=31359117' } },
      categories: [{
        id: 53304, description: 'Formula One', type: 'league', sportId: 2030, leagueId: 2030, league: { id: 2030, description: 'Formula One', links: { api: { leagues: { href: 'http://now.core.api.espn.com/v1/sports/racing/f1' } }, web: { leagues: { href: 'http://espn.co.uk/f1/' } }, mobile: { leagues: { href: 'http://m.espnf1.com/' } } } }, uid: 's:2000~l:2030', createDate: '2021-04-29T17:51:38Z',
      }, {
        id: 145836, description: 'news - au f1', type: 'topic', sportId: 0, topicId: 390, createDate: '2021-04-29T17:51:38Z',
      }, {
        id: 133854, description: 'news - uk f1', type: 'topic', sportId: 0, topicId: 158, createDate: '2021-04-29T17:51:38Z',
      }, {
        id: 152392, description: 'news - in f1', type: 'topic', sportId: 0, topicId: 407, createDate: '2021-04-29T17:51:38Z',
      }, { type: 'guid', guid: '23bf83ee-6d7a-3957-8b67-8014ddb9ca47', createDate: '2021-04-29T17:51:38Z' }, { type: 'guid', guid: 'b010f7233e4a4031488904cbe2c46fb9', createDate: '2021-04-29T17:51:38Z' }, { type: 'guid', guid: '5d109aaf4af1cac26933636491dff219', createDate: '2021-04-29T17:51:38Z' }, { type: 'guid', guid: 'bea582b690566a62fa230eeb7124429b', createDate: '2021-04-29T17:51:38Z' }],
      headline: 'Hamilton open to joining social media boycott',
    }, {
      images: [{
        name: 'Valtteri Bottas and George Russell crash\n [800x320]', width: 800, caption: "The accident put an end to both drivers' races.", id: 31284175, credit: 'Hasan Bratic/picture alliance via Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0418/r842329_800x320_5-2.jpg', height: 320,
      }, {
        name: 'How will a qualifying sprint race work to determine the grid?', width: 576, caption: "Nate Saunders is pleased with F1's \"proactive\" decision to have a qualifying sprint race in three of the 2021 events.", type: 'Media', url: 'https://a.espncdn.com/media/motion/2021/0426/dm_210426_INET_F1_Analysis_How_will_a_qualifying_sprint_race_work_to_determine_the_grid_20210426_GLOBAL/dm_210426_INET_F1_Analysis_How_will_a_qualifying_sprint_race_work_to_determine_the_grid_20210426_GLOBAL.jpg', height: 324,
      }],
      description: 'Mercedes driver Valtteri Bottas says he has moved on from the collision with Williams driver George Russell at the Emilia Romagna Grand Prix two weeks ago.',
      links: { api: { news: { href: 'http://now.core.api.espn.com/v1/sports/news/31358941' }, self: { href: 'http://now.core.api.espn.com/v1/sports/news/31358941' } }, web: { href: 'https://www.espn.co.uk/f1/story/_/id/31358941/george-apologised-move-on', short: { href: 'https://es.pn/3gNxTmI' } }, mobile: { href: 'http://m.espn.go.com/wireless/story?storyId=31358941' } },
      categories: [{
        id: 53304, description: 'Formula One', type: 'league', sportId: 2030, leagueId: 2030, league: { id: 2030, description: 'Formula One', links: { api: { leagues: { href: 'http://now.core.api.espn.com/v1/sports/racing/f1' } }, web: { leagues: { href: 'http://espn.co.uk/f1/' } }, mobile: { leagues: { href: 'http://m.espnf1.com/' } } } }, uid: 's:2000~l:2030', createDate: '2021-04-29T16:58:19Z',
      }, {
        id: 145836, description: 'news - au f1', type: 'topic', sportId: 0, topicId: 390, createDate: '2021-04-29T16:58:19Z',
      }, {
        id: 152392, description: 'news - in f1', type: 'topic', sportId: 0, topicId: 407, createDate: '2021-04-29T16:58:19Z',
      }, {
        id: 133854, description: 'news - uk f1', type: 'topic', sportId: 0, topicId: 158, createDate: '2021-04-29T16:58:19Z',
      }, { type: 'guid', guid: '5d109aaf4af1cac26933636491dff219', createDate: '2021-04-29T16:58:19Z' }, { type: 'guid', guid: 'b010f7233e4a4031488904cbe2c46fb9', createDate: '2021-04-29T16:58:19Z' }, { type: 'guid', guid: '23bf83ee-6d7a-3957-8b67-8014ddb9ca47', createDate: '2021-04-29T16:58:19Z' }, { type: 'guid', guid: 'bea582b690566a62fa230eeb7124429b', createDate: '2021-04-29T16:58:19Z' }],
      headline: "Bottas: 'George apologised, and it's time to move on'",
    }, {
      images: [{
        name: 'Hamilton Verstappen\n [800x320]', width: 800, caption: 'Lewis Hamilton and Max Verstappen went wheel to wheel for the lead on the opening lap at Imola.', id: 31350865, credit: 'Bryn Lennon/Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0428/r846714_800x320_5-2.jpg', height: 320,
      }, {
        name: 'Ricciardo Vettel\n [800x320]', width: 800, caption: 'Daniel Ricciardo and Sebastian Vettel have both struggled to hit top form at the opening two races.', id: 31350894, credit: 'Bryn Lennon/Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0428/r846715_800x320_5-2.jpg', height: 320,
      }, {
        name: 'Hamilton and Bottas [800x320]', width: 800, caption: 'Valtteri Bottas is already 28 points off teammate and championship leader Lewis Hamilton after two rounds.', id: 31350923, credit: 'Lars Baron/Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0428/r846716_800x320_5-2.jpg', height: 320,
      }, {
        name: 'Valtteri Bottas and George Russell crash\n [800x320]', width: 800, caption: "The accident put an end to both drivers' races.", id: 31284175, credit: 'Hasan Bratic/picture alliance via Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0418/r842329_800x320_5-2.jpg', height: 320,
      }, {
        name: 'The best and worst of the Monaco Historic GP', width: 576, caption: 'Jean Alesi crashes his Ferrari and Michael Lyons emerges victorious in an action-packed Monaco Historic GP.', type: 'Media', url: 'https://a.espncdn.com/media/motion/2021/0426/dm_210426_INET_F1_Feature_The_best_and_worst_of_the_Monaco_Historic_GP_20210426_GLOBAL/dm_210426_INET_F1_Feature_The_best_and_worst_of_the_Monaco_Historic_GP_20210426_GLOBAL.jpg', height: 324,
      }],
      description: "Ahead of the Portuguese Grand Prix, ESPN's F1 editorial team takes a look at some of the main questions arising from the 2021 season so far.",
      links: { api: { news: { href: 'http://now.core.api.espn.com/v1/sports/news/31350943' }, self: { href: 'http://now.core.api.espn.com/v1/sports/news/31350943' } }, web: { href: 'https://www.espn.co.uk/f1/story/_/id/31350943/the-unanswered-questions-ahead-third-round-2021-f1-season', short: { href: 'https://es.pn/3u4aLEc' } }, mobile: { href: 'http://m.espn.go.com/wireless/story?storyId=31350943' } },
      categories: [{
        id: 53304, description: 'Formula One', type: 'league', sportId: 2030, leagueId: 2030, league: { id: 2030, description: 'Formula One', links: { api: { leagues: { href: 'http://now.core.api.espn.com/v1/sports/racing/f1' } }, web: { leagues: { href: 'http://espn.co.uk/f1/' } }, mobile: { leagues: { href: 'http://m.espnf1.com/' } } } }, uid: 's:2000~l:2030', createDate: '2021-04-28T13:02:00Z',
      }, {
        id: 152392, description: 'news - in f1', type: 'topic', sportId: 0, topicId: 407, createDate: '2021-04-28T13:02:00Z',
      }, {
        id: 145836, description: 'news - au f1', type: 'topic', sportId: 0, topicId: 390, createDate: '2021-04-28T13:02:00Z',
      }, {
        id: 133854, description: 'news - uk f1', type: 'topic', sportId: 0, topicId: 158, createDate: '2021-04-28T13:02:00Z',
      }, { type: 'guid', guid: 'bea582b690566a62fa230eeb7124429b', createDate: '2021-04-28T13:02:00Z' }, { type: 'guid', guid: 'b010f7233e4a4031488904cbe2c46fb9', createDate: '2021-04-28T13:02:00Z' }, { type: 'guid', guid: '5d109aaf4af1cac26933636491dff219', createDate: '2021-04-28T13:02:00Z' }, { type: 'guid', guid: '23bf83ee-6d7a-3957-8b67-8014ddb9ca47', createDate: '2021-04-28T13:02:00Z' }],
      headline: 'The unanswered questions ahead of the third round of the 2021 F1 season',
    }],
  },
  articles: [{
    eventId: 600004580,
    competitionId: '401313017',
    contentKey: '31281889-1-21-30',
    images: [{
      name: 'Verstappen win Imola [800x320]', width: 800, caption: 'Red Bull celebrate as Max Verstappen secures victory at the Emilia Romagna Grand Prix.', id: 31283145, credit: 'Mark Thompson/Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0418/r842232_800x320_5-2.jpg', height: 320,
    }, {
      name: 'Lando Norris [800x320]', width: 800, id: 31284034, credit: 'Mario Renzi - Formula 1/Formula 1 via Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0418/r842315_800x320_5-2.jpg', height: 320,
    }, {
      name: 'George Russell, Valtteri Bottas [800x320]', width: 800, caption: 'George Russell and Valtteri Bottas had a heated exchange after their collision at Imola.', id: 31282913, credit: 'Hasan Bratic/picture alliance via Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0418/r842215_800x320_5-2.jpg', height: 320,
    }, {
      name: 'Imola start\n [800x320]', width: 800, caption: 'Max Verstappen forces his way past Lewis Hamilton on the opening lap.', id: 31282128, credit: 'Bryn Lennon/Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0418/r842169_800x320_5-2.jpg', height: 320,
    }],
    feedDisplayType: 'Default',
    description: 'Max Verstappen took his first victory of the 2021 season at a chaotic Emilia Romagna Grand Prix, which saw Lewis Hamilton recover from a costly mistake midway through the race to finish second.',
    categorized: '2021-04-18T12:47:02Z',
    section: 'Formula One',
    linkText: 'Verstappen wins chaotic Imola race, Hamilton second',
    published: '2021-04-18T18:06:12Z',
    type: 'Recap',
    allowComments: true,
    nowId: '1-31281889',
    premium: false,
    related: [],
    root: 'uk/f1',
    links: { api: { news: { href: 'http://now.core.api.espn.com/v1/sports/news/31281889' }, self: { href: 'http://now.core.api.espn.com/v1/sports/news/31281889' } }, web: { href: 'http://www.espn.co.uk/f1/report?id=600004580', short: {} }, mobile: { href: 'http://m.espn.go.com/wireless/story?storyId=31281889' } },
    id: 31281889,
    lastModified: '2021-04-18T18:06:11Z',
    categories: [{
      id: 53304, description: 'Formula One', type: 'league', sportId: 2030, leagueId: 2030, league: { id: 2030, description: 'Formula One', links: { api: { leagues: { href: 'http://now.core.api.espn.com/v1/sports/racing/f1' } }, web: { leagues: { href: 'https://tv5.espn.com/f1/' } }, mobile: { leagues: { href: 'http://m.espnf1.com/' } } } }, uid: 's:2000~l:2030', createDate: '2021-04-18T12:47:01Z',
    }, {
      id: 145836, description: 'news - au f1', type: 'topic', sportId: 0, topicId: 390, createDate: '2021-04-18T12:47:01Z',
    }, {
      id: 152392, description: 'news - in f1', type: 'topic', sportId: 0, topicId: 407, createDate: '2021-04-18T12:47:01Z',
    }, {
      id: 133854, description: 'news - uk f1', type: 'topic', sportId: 0, topicId: 158, createDate: '2021-04-18T12:47:01Z',
    }, { type: 'guid', guid: '23bf83ee-6d7a-3957-8b67-8014ddb9ca47', createDate: '2021-04-18T12:47:01Z' }, { type: 'guid', guid: 'b010f7233e4a4031488904cbe2c46fb9', createDate: '2021-04-18T12:47:01Z' }, { type: 'guid', guid: '5d109aaf4af1cac26933636491dff219', createDate: '2021-04-18T12:47:01Z' }, { type: 'guid', guid: 'bea582b690566a62fa230eeb7124429b', createDate: '2021-04-18T12:47:01Z' }],
    metrics: [{ count: 0, type: 'views' }, { count: 0, type: 'fShares' }, { count: 0, type: 'tweets' }, { count: 0, type: 'comments' }, { count: 0, type: 'emails' }, { count: 0, type: 'votes' }, { count: 0, type: 'popularity' }],
    headline: 'Verstappen wins chaotic Imola race, Hamilton second',
    byline: 'ESPN',
    story: "<p><photo1></p>\n<p>Max Verstappen took his first victory of the 2021 season at a chaotic Emilia Romagna Grand Prix, which saw Lewis Hamilton recover from a costly mistake midway through the race to finish second.</p>\n<p>The Red Bull driver, who started third on a wet grid, took the lead on the opening lap of the race by barging his way past Hamilton at the Tamburello chicane. </p>\n<p>Verstappen then had to contend with drying track conditions, a red flag stoppage midway through and a spin just before the race restart to take victory.</p>\n<p>Hamilton had to fight back from ninth to second in the closing stages. He picked up the bonus point on offer for fastest lap, meaning he retains the lead in the championship. </p>\n<p>McLaren's Lando Norris finished third, claiming the second podium of his Formula One career. Ferrari pair Charles Leclerc and Carlos Sainz took the next two places ahead of Daniel Ricciardo. </p>\n<p>Lance Stroll finished the race seventh, but was demoted to eighth behind Pierre Gasly after the event for passing the French driver off the track during the race. Kimi Raikkonen was ninth and Esteban Ocon claimed the final points-paying position for Alpine. </p>\n<p><photo2></p>\n<p>Despite being passed by his championship rival on the opening lap, Hamilton was within striking distance of Verstappen for the first half of the race and continued to put pressure on the Red Bull as the track dried and the field switched from intermediate tyres to slicks.</p>\n<p>Hamilton was putting pressure on the Red Bull when they came up behind lapped cars on lap 31, but as he went to pass the Williams of George Russell at Tosa, he lost control on a wet part of the track and slid wide into the gravel.</p>\n<p>Hamilton damaged his front wing against the wall beyond the gravel trap and lost a huge amount of time reversing his car back onto the track.</p>\n<p>It looked as though the incident would put Hamilton a lap down and out of podium contention, but a huge accident involving his Mercedes teammate, Valtteri Bottas, and Russell a lap later resulted in the race being suspended.</p>\n<p><photo3></p>\n<p>Russell was attempting to pass Bottas for ninth place around the outside on the run to Tamburello when he put a wheel on the grass and his Williams slewed sideways and into the Mercedes. The two cars smashed into the barrier on the left before ricocheting down the track and into the barriers at Tamburello where they came to a halt in the gravel.</p>\n<p>Both drivers were unharmed, but were clearly angry with one another as Russell walked over to Bottas's wreckage to make his feelings known to the Mercedes driver.</p>\n<p>The red flags were shown within moments of the accident, suspending the race on lap 34 and forcing all cars back to the pits.</p>\n<p>The race restarted under the Safety Car, but the lapped cars, including Hamilton, were allowed to unlap themselves before racing resumed.</p>\n<p>Verstappen, who raced immaculately up to that point, lost control of his Red Bull at Rivazza just before the restart, but was able to counter the spin and resume his position in the lead before blasting onto the pit straight to resume racing.</p>\n<p>Behind Verstappen, Lando Norris passed Charles Leclerc for second place, while Hamilton started his fightback from eighth place.</p>\n<p><photo4></p>\n<p>The world champion picked off Lance Stroll, Daniel Ricciardo, Carlos Sainz and Leclerc in the space 20 laps to move back into third before passing Norris with three laps remaining to recover second place.</p>\n<p>Meanwhile, Verstappen had built a 20 second lead over the rest of the pack, giving him a comfortable victory ahead of Hamilton at the chequered flag. </p>\n<p>Hamilton secured the fastest lap once he was in clear air, giving him a bonus point and the lead of the championship by a single point over Verstappen. </p>\n\n\n\n\n",
    titleTab: 'Race',
  }, {
    feedDisplayType: 'Default',
    description: 'Lewis Hamilton beat Red Bull pair Sergio Perez and Max Verstappen to pole position for the Emilia Romagna Grand Prix at Imola, with just 0.087s covering the top three.',
    categorized: '2021-04-17T13:22:06Z',
    section: 'Formula One',
    video: [],
    type: 'Recap',
    nowId: '1-31274985',
    premium: false,
    related: [],
    root: 'uk/f1',
    links: { api: { news: { href: 'http://now.core.api.espn.com/v1/sports/news/31274985' }, self: { href: 'http://now.core.api.espn.com/v1/sports/news/31274985' } }, web: { href: 'http://www.espn.co.uk/f1/report?id=600004580', short: {} }, mobile: { href: 'http://m.espn.go.com/wireless/story?storyId=31274985' } },
    id: 31274985,
    categories: [{
      id: 53304, description: 'Formula One', type: 'league', sportId: 2030, leagueId: 2030, league: { id: 2030, description: 'Formula One', links: { api: { leagues: { href: 'http://now.core.api.espn.com/v1/sports/racing/f1' } }, web: { leagues: { href: 'https://tv5.espn.com/f1/' } }, mobile: { leagues: { href: 'http://m.espnf1.com/' } } } }, uid: 's:2000~l:2030', createDate: '2021-04-17T13:22:05Z',
    }, {
      id: 145836, description: 'news - au f1', type: 'topic', sportId: 0, topicId: 390, createDate: '2021-04-17T13:22:05Z',
    }, {
      id: 152392, description: 'news - in f1', type: 'topic', sportId: 0, topicId: 407, createDate: '2021-04-17T13:22:05Z',
    }, {
      id: 133854, description: 'news - uk f1', type: 'topic', sportId: 0, topicId: 158, createDate: '2021-04-17T13:22:05Z',
    }, { type: 'guid', guid: '23bf83ee-6d7a-3957-8b67-8014ddb9ca47', createDate: '2021-04-17T13:22:05Z' }, { type: 'guid', guid: '5d109aaf4af1cac26933636491dff219', createDate: '2021-04-17T13:22:05Z' }, { type: 'guid', guid: 'b010f7233e4a4031488904cbe2c46fb9', createDate: '2021-04-17T13:22:05Z' }, { type: 'guid', guid: 'bea582b690566a62fa230eeb7124429b', createDate: '2021-04-17T13:22:05Z' }],
    headline: 'Hamilton beats Perez, Verstappen to pole at Imola',
    byline: 'ESPN',
    eventId: 600004580,
    competitionId: '401313016',
    contentKey: '31274985-1-21-30',
    images: [{
      name: 'Lewis Hamilton [800x320]', width: 800, id: 31274887, credit: 'Dan Istitene - Formula 1/Formula 1 via Getty Images', type: 'header', url: 'https://a.espncdn.com/photo/2021/0417/r841715_800x320_5-2.jpg', height: 320,
    }],
    linkText: 'Hamilton beats Perez, Verstappen to pole at Imola',
    published: '2021-04-18T01:06:29Z',
    allowComments: true,
    lastModified: '2021-04-18T01:06:24Z',
    metrics: [{ count: 0, type: 'views' }, { count: 0, type: 'fShares' }, { count: 0, type: 'tweets' }, { count: 0, type: 'comments' }, { count: 0, type: 'emails' }, { count: 0, type: 'votes' }, { count: 0, type: 'popularity' }],
    story: "<p><photo1></p>\n<p>Lewis Hamilton beat Red Bull pair Sergio Perez and Max Verstappen on pole position for the Emilia Romagna Grand Prix at Imola, Italy, with just 0.087s covering the top three.</p>\n<p>It is the 99th pole position of Hamilton's illustrious career. His Mercedes teammate Valtteri Bottas managed to qualify eighth.</p>\n<p>Perez was left ruing a mistake at the final corner, which he believed cost him pole position, but he is the first Red Bull driver to out qualify Verstappen in a dry qualifying session since Daniel Ricciardo left the team at the end of 2018. </p>\n<p>Verstappen had a wide moment of his own at Tamburello, which appeared to cost him valuable time. </p>\n<p>Ferrari's Charles Leclerc will start fourth after a strong performance for the Italian team. </p>\n<p>Pierre Gasly converted AlphaTauri's strong pace into fifth on the grid, ahead of McLaren pair Daniel Ricciardo and Lando Norris. Norris briefly appeared to be on the front row of the grid with his final effort, only for the lap time to be deleted for exceeding track limits and gaining an advantage. </p>\n<p>Bottas had a pair of scruffy laps in Q3 on a track with limited overtaking opportunities.</p>\n<p>Esteban Ocon and Lance Stroll will start ninth and 10th. </p>\n<p>Ferrari's Carlos Sainz missed out on a spot in Q3 by just 0.061s, showing how fine the margins are in the midfield battle. Given how strongly Leclerc qualified, Sainz will see it as a missed opportunity ahead of his second race in red. </p>\n<p>Williams were the stars of qualifying, with both drivers making it into Q2. George Russell continued his perfect record against Nicholas Latifi by qualifying 12th to the Canadian's 14th, showing clear improvements made by the British team after a 2020 spent at the back of the field. </p>\n<p>Sebastian Vettel and Fernando Alonso, who have six world titles between them, will start 14th and 15th after disappointing performances in Q2. </p>\n<p>Yuki Tsunoda will start from the back of the grad after crashing heavily at the start of Q1. The Japanese driver was unhurt in the accident, which saw him spin on exit of Variante Alta and slam into the wall.</p>\n<p>With Williams progressing through Q1, Alfa Romeo and Haas had both drivers eliminated in the first session. Kimi Raikkonen and Antonio Giovinazzi finished ahead of Mick Schumacher and Nikita Mazepin.</p>\n<p>With Tsuonda set to line up in 20th, it means 2020's three rookies will occupy the final three spots of the grid if there are no grid penalties applied before the race.</p>\n\n\n\n\n",
    titleTab: 'Qualifying',
  }],
  header: {
    id: '600004580',
    name: 'Emilia Romagna Grand Prix',
    season: { year: 2021 },
    competitions: [{
      competitionId: '401313013',
      raceType: 'Free Practice 1',
      date: '2021-04-16T08:55Z',
      type: { id: '1', text: 'Free Practice', abbreviation: 'FP1' },
      status: {
        type: {
          id: '3', name: 'STATUS_FINAL', state: 'post', completed: true, description: 'Final', detail: 'Final', shortDetail: 'Final',
        },
      },
      liveBlogId: '2765960157206014113',
    }, {
      competitionId: '401313014',
      raceType: 'Free Practice 2',
      date: '2021-04-16T12:25Z',
      type: { id: '1', text: 'Free Practice', abbreviation: 'FP2' },
      status: {
        type: {
          id: '3', name: 'STATUS_FINAL', state: 'post', completed: true, description: 'Final', detail: 'Final', shortDetail: 'Final',
        },
      },
    }, {
      competitionId: '401313015',
      raceType: 'Free Practice 3',
      date: '2021-04-17T08:55Z',
      type: { id: '1', text: 'Free Practice', abbreviation: 'FP3' },
      status: {
        type: {
          id: '3', name: 'STATUS_FINAL', state: 'post', completed: true, description: 'Final', detail: 'Final', shortDetail: 'Final',
        },
      },
    }, {
      competitionId: '401313016',
      raceType: 'Qualifying',
      date: '2021-04-17T11:55Z',
      type: { id: '2', text: 'Qualifying', abbreviation: 'Qual' },
      status: {
        type: {
          id: '3', name: 'STATUS_FINAL', state: 'post', completed: true, description: 'Final', detail: 'Final', shortDetail: 'Final',
        },
      },
      liveBlogId: '2766688000205202317',
    }, {
      competitionId: '401313017',
      raceType: 'Race',
      date: '2021-04-18T12:55Z',
      type: { id: '3', text: 'Race', abbreviation: 'Race' },
      status: {
        type: {
          id: '3', name: 'STATUS_FINAL', state: 'post', completed: true, description: 'Final', detail: 'Final', shortDetail: 'Final',
        },
      },
      liveBlogId: '2767515398393161899',
    }],
    links: [{
      language: 'en-PH', rel: ['summary', 'desktop', 'event'], href: 'http://tv5.espn.com/f1/race/_/id/600004580', text: 'Summary', shortText: 'Summary', isExternal: false, isPremium: false,
    }, {
      language: 'en-PH', rel: ['report', 'desktop', 'event'], href: 'http://tv5.espn.com/f1/report/_/id/600004580', text: 'Report', shortText: 'Report', isExternal: false, isPremium: false,
    }, {
      language: 'en-PH', rel: ['circuit', 'desktop', 'event'], href: 'http://tv5.espn.com/f1/circuit?id=600004580', text: 'Circuit', shortText: 'Circuit', isExternal: false, isPremium: false,
    }, {
      language: 'en-PH', rel: ['results', 'desktop', 'event'], href: 'http://tv5.espn.com/f1/results?id=600004580', text: 'Results', shortText: 'Results', isExternal: false, isPremium: false,
    }, {
      language: 'en-PH', rel: ['commentary', 'desktop', 'event'], href: 'http://tv5.espn.com/f1/commentary/_/id/600004580', text: 'Commentary', shortText: 'Commentary', isExternal: false, isPremium: false,
    }],
  },
  videos: [],
};

const f1Events = {
  sports: [{
    id: '2000',
    uid: 's:2000',
    name: 'Motor Sports',
    slug: 'racing',
    leagues: [{
      id: '2030',
      uid: 's:2000~l:2030',
      name: 'Formula One',
      abbreviation: 'F1',
      shortName: 'F1',
      slug: 'f1',
      events: [{
        gamecastAvailable: false,
        playByPlayAvailable: false,
        commentaryAvailable: false,
        recent: true,
        id: '600004420',
        competitionId: '401275087',
        uid: 's:2000~l:2030~e:600004420~c:401275087',
        date: '2021-04-30T10:30:00Z',
        timeValid: true,
        name: 'Portuguese Grand Prix',
        shortName: 'Portuguese GP',
        location: 'Portimao',
        season: 2021,
        seasonStartDate: '2021-01-01T08:00:00Z',
        seasonEndDate: '2021-12-31T08:00:00Z',
        seasonType: '2',
        seasonTypeHasGroups: false,
        group: {
          groupId: '2', name: 'Regular Season', abbreviation: 'reg', shortName: 'REG',
        },
        period: 31,
        clock: '0:00',
        track: { length: 4.653, displayLength: '4.653 km' },
        trackText: '4.653 km',
        laps: '0',
        status: 'post',
        summary: 'Final',
        fullStatus: {
          clock: 0.0,
          displayClock: '0:00',
          period: 31,
          type: {
            id: '3', name: 'STATUS_FINAL', state: 'post', completed: true, description: 'Final', detail: 'Final', shortDetail: 'Final',
          },
        },
        link: 'http://tv5.espn.com/f1/race/_/id/600004420',
        links: [{
          language: 'en-PH', rel: ['summary', 'desktop', 'competition'], href: 'http://tv5.espn.com/f1/race?id=600004420', text: 'Summary', isExternal: false, isPremium: false,
        }],
        onWatch: true,
        broadcasts: [{
          type: 'TV', lang: 'en', region: 'us', typeId: 1, isNational: true, broadcasterId: 145, broadcastId: 145, name: 'ESPNU', shortName: 'ESPNU', callLetters: 'ESPU',
        }],
        broadcast: 'ESPNU',
        competitors: [{
          id: '4520',
          uid: 's:2000~a:4520',
          type: 'athlete',
          order: 1,
          winner: false,
          status: {
            period: 31,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '77', manufacturer: 'Mercedes', teamColor: '00D2BE' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png',
          laps: '31',
          place: 1,
          time: '1:19.648',
          displayName: 'Valtteri Bottas',
          firstName: 'Valtteri',
          middleName: '',
          lastName: 'Bottas',
          shortName: 'V. Bottas',
          name: 'Valtteri Bottas',
          abbreviation: 'V. Bottas',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png',
        }, {
          id: '4665',
          uid: 's:2000~a:4665',
          type: 'athlete',
          order: 2,
          winner: false,
          status: {
            period: 23,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '33', manufacturer: 'Red Bull', teamColor: '00327D' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png',
          laps: '23',
          behindTime: '+0.025',
          place: 2,
          time: '1:19.673',
          displayName: 'Max Verstappen',
          firstName: 'Max',
          middleName: '',
          lastName: 'Verstappen',
          shortName: 'M. Verstappen',
          name: 'Max Verstappen',
          abbreviation: 'M. Verstappen',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png',
        }, {
          id: '4472',
          uid: 's:2000~a:4472',
          type: 'athlete',
          order: 3,
          winner: false,
          status: {
            period: 22,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '11', manufacturer: 'Red Bull', teamColor: '00327D' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png',
          laps: '22',
          behindTime: '+0.198',
          place: 3,
          time: '1:19.846',
          displayName: 'Sergio Perez',
          firstName: 'Sergio',
          middleName: '',
          lastName: 'Pérez',
          shortName: 'S. Pérez',
          name: 'Sergio Perez',
          abbreviation: 'S. Pérez',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4472.png',
        }, {
          id: '5498',
          uid: 's:2000~a:5498',
          type: 'athlete',
          order: 4,
          winner: false,
          status: {
            period: 27,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '16', manufacturer: 'Ferrari', teamColor: 'DC0000' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/mon.png',
          laps: '27',
          behindTime: '+0.236',
          place: 4,
          time: '1:19.884',
          displayName: 'Charles Leclerc',
          firstName: 'Charles',
          middleName: '',
          lastName: 'Leclerc',
          shortName: 'C. Leclerc',
          name: 'Charles Leclerc',
          abbreviation: 'C. Leclerc',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5498.png',
        }, {
          id: '868',
          uid: 's:2000~a:868',
          type: 'athlete',
          order: 5,
          winner: false,
          status: {
            period: 32,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '44', manufacturer: 'Mercedes', teamColor: '00D2BE' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png',
          laps: '32',
          behindTime: '+0.319',
          place: 5,
          time: '1:19.967',
          displayName: 'Lewis Hamilton',
          firstName: 'Lewis',
          middleName: '',
          lastName: 'Hamilton',
          shortName: 'L. Hamilton',
          name: 'Lewis Hamilton',
          abbreviation: 'L. Hamilton',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png',
        }, {
          id: '5501',
          uid: 's:2000~a:5501',
          type: 'athlete',
          order: 6,
          winner: false,
          status: {
            period: 31,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '10', manufacturer: 'AlphaTauri', teamColor: '0032FF' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png',
          laps: '31',
          behindTime: '+0.796',
          place: 6,
          time: '1:20.444',
          displayName: 'Pierre Gasly',
          firstName: 'Pierre',
          middleName: '',
          lastName: 'Gasly',
          shortName: 'P. Gasly',
          name: 'Pierre Gasly',
          abbreviation: 'P. Gasly',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5501.png',
        }, {
          id: '5503',
          uid: 's:2000~a:5503',
          type: 'athlete',
          order: 7,
          winner: false,
          status: {
            period: 29,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '63', manufacturer: 'Williams', teamColor: 'FFFFFF' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png',
          laps: '29',
          behindTime: '+0.881',
          place: 7,
          time: '1:20.529',
          displayName: 'George Russell',
          firstName: 'George',
          middleName: '',
          lastName: 'Russell',
          shortName: 'G. Russell',
          name: 'George Russell',
          abbreviation: 'G. Russell',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5503.png',
        }, {
          id: '5579',
          uid: 's:2000~a:5579',
          type: 'athlete',
          order: 8,
          winner: false,
          status: {
            period: 26,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '4', manufacturer: 'McLaren', teamColor: 'FF8700' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png',
          laps: '26',
          behindTime: '+0.987',
          place: 8,
          time: '1:20.635',
          displayName: 'Lando Norris',
          firstName: 'Lando',
          middleName: '',
          lastName: 'Norris',
          shortName: 'L. Norris',
          name: 'Lando Norris',
          abbreviation: 'L. Norris',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5579.png',
        }, {
          id: '4686',
          uid: 's:2000~a:4686',
          type: 'athlete',
          order: 9,
          winner: false,
          status: {
            period: 27,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '55', manufacturer: 'Ferrari', teamColor: 'DC0000' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png',
          laps: '27',
          behindTime: '+1.032',
          place: 9,
          time: '1:20.680',
          displayName: 'Carlos Sainz Jr',
          firstName: 'Carlos',
          middleName: '',
          lastName: 'Sainz',
          shortName: 'C. Sainz',
          name: 'Carlos Sainz Jr',
          abbreviation: 'C. Sainz',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4686.png',
        }, {
          id: '4678',
          uid: 's:2000~a:4678',
          type: 'athlete',
          order: 10,
          winner: false,
          status: {
            period: 27,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '31', manufacturer: 'Alpine', teamColor: '000000' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png',
          laps: '27',
          behindTime: '+1.152',
          place: 10,
          time: '1:20.800',
          displayName: 'Esteban Ocon',
          firstName: 'Esteban',
          middleName: '',
          lastName: 'Ocon',
          shortName: 'E. Ocon',
          name: 'Esteban Ocon',
          abbreviation: 'E. Ocon',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4678.png',
        }, {
          id: '4775',
          uid: 's:2000~a:4775',
          type: 'athlete',
          order: 11,
          winner: false,
          status: {
            period: 29,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '18', manufacturer: 'Aston Martin', teamColor: '006F62' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png',
          laps: '29',
          behindTime: '+1.246',
          place: 11,
          time: '1:20.894',
          displayName: 'Lance Stroll',
          firstName: 'Lance',
          middleName: '',
          lastName: 'Stroll',
          shortName: 'L. Stroll',
          name: 'Lance Stroll',
          abbreviation: 'L. Stroll',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4775.png',
        }, {
          id: '4510',
          uid: 's:2000~a:4510',
          type: 'athlete',
          order: 12,
          winner: false,
          status: {
            period: 31,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '3', manufacturer: 'McLaren', teamColor: 'FF8700' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png',
          laps: '31',
          behindTime: '+1.347',
          place: 12,
          time: '1:20.995',
          displayName: 'Daniel Ricciardo',
          firstName: 'Daniel',
          middleName: '',
          lastName: 'Ricciardo',
          shortName: 'D. Ricciardo',
          name: 'Daniel Ricciardo',
          abbreviation: 'D. Ricciardo',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4510.png',
        }, {
          id: '5652',
          uid: 's:2000~a:5652',
          type: 'athlete',
          order: 13,
          winner: false,
          status: {
            period: 28,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '22', manufacturer: 'AlphaTauri', teamColor: '0032FF' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png',
          laps: '28',
          behindTime: '+1.442',
          place: 13,
          time: '1:21.090',
          displayName: 'Yuki Tsunoda',
          firstName: 'Yuki',
          middleName: '',
          lastName: 'Tsunoda',
          shortName: 'Y. Tsunoda',
          name: 'Yuki Tsunoda',
          abbreviation: 'Y. Tsunoda',
          headshot: 'https://a.espncdn.com/i/headshots/f1/players/full/5652.png',
        }, {
          id: '348',
          uid: 's:2000~a:348',
          type: 'athlete',
          order: 14,
          winner: false,
          status: {
            period: 31,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '14', manufacturer: 'Alpine', teamColor: '000000' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png',
          laps: '31',
          behindTime: '+1.655',
          place: 14,
          time: '1:21.303',
          displayName: 'Fernando Alonso',
          firstName: 'Fernando',
          middleName: '',
          lastName: 'Alonso',
          shortName: 'F. Alonso',
          name: 'Fernando Alonso',
          abbreviation: 'F. Alonso',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/348.png',
        }, {
          id: '337',
          uid: 's:2000~a:337',
          type: 'athlete',
          order: 15,
          winner: false,
          status: {
            period: 25,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '7', manufacturer: 'Alfa Romeo' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png',
          laps: '25',
          behindTime: '+1.733',
          place: 15,
          time: '1:21.381',
          displayName: 'Kimi Raikkonen',
          firstName: 'Kimi',
          middleName: '',
          lastName: 'Räikkönen',
          shortName: 'K. Räikkönen',
          name: 'Kimi Raikkonen',
          abbreviation: 'K. Räikkönen',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/337.png',
        }, {
          id: '864',
          uid: 's:2000~a:864',
          type: 'athlete',
          order: 16,
          winner: false,
          status: {
            period: 31,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '5', manufacturer: 'Aston Martin', teamColor: '006F62' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png',
          laps: '31',
          behindTime: '+1.757',
          place: 16,
          time: '1:21.405',
          displayName: 'Sebastian Vettel',
          firstName: 'Sebastian',
          middleName: '',
          lastName: 'Vettel',
          shortName: 'S. Vettel',
          name: 'Sebastian Vettel',
          abbreviation: 'S. Vettel',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/864.png',
        }, {
          id: '5646', uid: 's:2000~a:5646', type: 'athlete', order: 17, winner: false, status: {}, vehicle: { number: '98', manufacturer: 'Alfa Romeo' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', laps: '21', behindTime: '+2.158', place: 17, time: '1:21.806', displayName: 'Callum Ilott', firstName: 'Callum', middleName: '', lastName: 'Ilott', shortName: 'C. Ilott', name: 'Callum Ilott', abbreviation: 'C. Ilott',
        }, {
          id: '5654',
          uid: 's:2000~a:5654',
          type: 'athlete',
          order: 18,
          winner: false,
          status: {
            period: 29,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '47', manufacturer: 'Haas', teamColor: '5A5A5A' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png',
          laps: '29',
          behindTime: '+2.291',
          place: 18,
          time: '1:21.939',
          displayName: 'Mick Schumacher',
          firstName: 'Mick',
          middleName: '',
          lastName: 'Schumacher',
          shortName: 'M. Schumacher',
          name: 'Mick Schumacher',
          abbreviation: 'M. Schumacher',
          headshot: 'https://a.espncdn.com/i/headshots/f1/players/full/5654.png',
        }, {
          id: '4733',
          uid: 's:2000~a:4733',
          type: 'athlete',
          order: 19,
          winner: false,
          status: {
            period: 29,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '6', manufacturer: 'Williams', teamColor: 'FFFFFF' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png',
          laps: '29',
          behindTime: '+2.645',
          place: 19,
          time: '1:22.293',
          displayName: 'Nicholas Latifi',
          firstName: 'Nicholas',
          middleName: '',
          lastName: 'Latifi',
          shortName: 'N. Latifi',
          name: 'Nicholas Latifi',
          abbreviation: 'N. Latifi',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4733.png',
        }, {
          id: '5653',
          uid: 's:2000~a:5653',
          type: 'athlete',
          order: 20,
          winner: false,
          status: {
            period: 29,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '9', manufacturer: 'Haas', teamColor: '5A5A5A' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png',
          laps: '29',
          behindTime: '+4.576',
          place: 20,
          time: '1:24.224',
          displayName: 'Nikita Mazepin',
          firstName: 'Nikita',
          middleName: '',
          lastName: 'Mazepin',
          shortName: 'N. Mazepin',
          name: 'Nikita Mazepin',
          abbreviation: 'N. Mazepin',
          headshot: 'https://a.espncdn.com/i/headshots/f1/players/full/5653.png',
        }],
        competitionType: { id: '1', text: 'Free Practice', abbreviation: 'FP1' },
        session: 1,
        priority: 5,
        note: 'Free Practice 1',
        appLinks: [],
      }, {
        gamecastAvailable: false,
        playByPlayAvailable: false,
        commentaryAvailable: false,
        recent: true,
        id: '600004420',
        competitionId: '401275088',
        uid: 's:2000~l:2030~e:600004420~c:401275088',
        date: '2021-04-30T14:10:00Z',
        timeValid: true,
        name: 'Portuguese Grand Prix',
        shortName: 'Portuguese GP',
        location: 'Portimao',
        season: 2021,
        seasonStartDate: '2021-01-01T08:00:00Z',
        seasonEndDate: '2021-12-31T08:00:00Z',
        seasonType: '2',
        seasonTypeHasGroups: false,
        group: {
          groupId: '2', name: 'Regular Season', abbreviation: 'reg', shortName: 'REG',
        },
        period: 33,
        clock: '0:00',
        track: { length: 4.653, displayLength: '4.653 km' },
        trackText: '4.653 km',
        laps: '0',
        status: 'post',
        summary: 'Final',
        fullStatus: {
          clock: 0.0,
          displayClock: '0:00',
          period: 33,
          type: {
            id: '3', name: 'STATUS_FINAL', state: 'post', completed: true, description: 'Final', detail: 'Final', shortDetail: 'Final',
          },
        },
        link: 'http://tv5.espn.com/f1/race/_/id/600004420',
        links: [{
          language: 'en-PH', rel: ['summary', 'desktop', 'competition'], href: 'http://tv5.espn.com/f1/race?id=600004420', text: 'Summary', isExternal: false, isPremium: false,
        }],
        onWatch: true,
        broadcasts: [{
          type: 'TV', lang: 'en', region: 'us', typeId: 1, isNational: true, broadcasterId: 145, broadcastId: 145, name: 'ESPNU', shortName: 'ESPNU', callLetters: 'ESPU',
        }],
        broadcast: 'ESPNU',
        competitors: [{
          id: '868',
          uid: 's:2000~a:868',
          type: 'athlete',
          order: 1,
          winner: false,
          status: {
            period: 33,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '44', manufacturer: 'Mercedes', teamColor: '00D2BE' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png',
          laps: '33',
          place: 1,
          time: '1:19.837',
          displayName: 'Lewis Hamilton',
          firstName: 'Lewis',
          middleName: '',
          lastName: 'Hamilton',
          shortName: 'L. Hamilton',
          name: 'Lewis Hamilton',
          abbreviation: 'L. Hamilton',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png',
        }, {
          id: '4665',
          uid: 's:2000~a:4665',
          type: 'athlete',
          order: 2,
          winner: false,
          status: {
            period: 25,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '33', manufacturer: 'Red Bull', teamColor: '00327D' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png',
          laps: '25',
          behindTime: '+0.143',
          place: 2,
          time: '1:19.980',
          displayName: 'Max Verstappen',
          firstName: 'Max',
          middleName: '',
          lastName: 'Verstappen',
          shortName: 'M. Verstappen',
          name: 'Max Verstappen',
          abbreviation: 'M. Verstappen',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png',
        }, {
          id: '4520',
          uid: 's:2000~a:4520',
          type: 'athlete',
          order: 3,
          winner: false,
          status: {
            period: 28,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '77', manufacturer: 'Mercedes', teamColor: '00D2BE' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png',
          laps: '28',
          behindTime: '+0.344',
          place: 3,
          time: '1:20.181',
          displayName: 'Valtteri Bottas',
          firstName: 'Valtteri',
          middleName: '',
          lastName: 'Bottas',
          shortName: 'V. Bottas',
          name: 'Valtteri Bottas',
          abbreviation: 'V. Bottas',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png',
        }, {
          id: '4686',
          uid: 's:2000~a:4686',
          type: 'athlete',
          order: 4,
          winner: false,
          status: {
            period: 33,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '55', manufacturer: 'Ferrari', teamColor: 'DC0000' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png',
          laps: '33',
          behindTime: '+0.360',
          place: 4,
          time: '1:20.197',
          displayName: 'Carlos Sainz Jr',
          firstName: 'Carlos',
          middleName: '',
          lastName: 'Sainz',
          shortName: 'C. Sainz',
          name: 'Carlos Sainz Jr',
          abbreviation: 'C. Sainz',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4686.png',
        }, {
          id: '348',
          uid: 's:2000~a:348',
          type: 'athlete',
          order: 5,
          winner: false,
          status: {
            period: 31,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '14', manufacturer: 'Alpine', teamColor: '000000' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png',
          laps: '31',
          behindTime: '+0.383',
          place: 5,
          time: '1:20.220',
          displayName: 'Fernando Alonso',
          firstName: 'Fernando',
          middleName: '',
          lastName: 'Alonso',
          shortName: 'F. Alonso',
          name: 'Fernando Alonso',
          abbreviation: 'F. Alonso',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/348.png',
        }, {
          id: '4678',
          uid: 's:2000~a:4678',
          type: 'athlete',
          order: 6,
          winner: false,
          status: {
            period: 31,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '31', manufacturer: 'Alpine', teamColor: '000000' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png',
          laps: '31',
          place: 6,
          displayName: 'Esteban Ocon',
          firstName: 'Esteban',
          middleName: '',
          lastName: 'Ocon',
          shortName: 'E. Ocon',
          name: 'Esteban Ocon',
          abbreviation: 'E. Ocon',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4678.png',
        }, {
          id: '5498',
          uid: 's:2000~a:5498',
          type: 'athlete',
          order: 7,
          winner: false,
          status: {
            period: 33,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '16', manufacturer: 'Ferrari', teamColor: 'DC0000' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/mon.png',
          laps: '33',
          place: 7,
          displayName: 'Charles Leclerc',
          firstName: 'Charles',
          middleName: '',
          lastName: 'Leclerc',
          shortName: 'C. Leclerc',
          name: 'Charles Leclerc',
          abbreviation: 'C. Leclerc',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5498.png',
        }, {
          id: '4510',
          uid: 's:2000~a:4510',
          type: 'athlete',
          order: 8,
          winner: false,
          status: {
            period: 30,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '3', manufacturer: 'McLaren', teamColor: 'FF8700' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png',
          laps: '30',
          place: 8,
          displayName: 'Daniel Ricciardo',
          firstName: 'Daniel',
          middleName: '',
          lastName: 'Ricciardo',
          shortName: 'D. Ricciardo',
          name: 'Daniel Ricciardo',
          abbreviation: 'D. Ricciardo',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4510.png',
        }, {
          id: '4775',
          uid: 's:2000~a:4775',
          type: 'athlete',
          order: 9,
          winner: false,
          status: {
            period: 31,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '18', manufacturer: 'Aston Martin', teamColor: '006F62' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png',
          laps: '31',
          place: 9,
          displayName: 'Lance Stroll',
          firstName: 'Lance',
          middleName: '',
          lastName: 'Stroll',
          shortName: 'L. Stroll',
          name: 'Lance Stroll',
          abbreviation: 'L. Stroll',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4775.png',
        }, {
          id: '4472',
          uid: 's:2000~a:4472',
          type: 'athlete',
          order: 10,
          winner: false,
          status: {
            period: 28,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '11', manufacturer: 'Red Bull', teamColor: '00327D' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png',
          laps: '28',
          place: 10,
          displayName: 'Sergio Perez',
          firstName: 'Sergio',
          middleName: '',
          lastName: 'Pérez',
          shortName: 'S. Pérez',
          name: 'Sergio Perez',
          abbreviation: 'S. Pérez',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4472.png',
        }, {
          id: '5501',
          uid: 's:2000~a:5501',
          type: 'athlete',
          order: 11,
          winner: false,
          status: {
            period: 34,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '10', manufacturer: 'AlphaTauri', teamColor: '0032FF' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png',
          laps: '34',
          place: 11,
          displayName: 'Pierre Gasly',
          firstName: 'Pierre',
          middleName: '',
          lastName: 'Gasly',
          shortName: 'P. Gasly',
          name: 'Pierre Gasly',
          abbreviation: 'P. Gasly',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5501.png',
        }, {
          id: '5579',
          uid: 's:2000~a:5579',
          type: 'athlete',
          order: 12,
          winner: false,
          status: {
            period: 28,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '4', manufacturer: 'McLaren', teamColor: 'FF8700' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png',
          laps: '28',
          place: 12,
          displayName: 'Lando Norris',
          firstName: 'Lando',
          middleName: '',
          lastName: 'Norris',
          shortName: 'L. Norris',
          name: 'Lando Norris',
          abbreviation: 'L. Norris',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5579.png',
        }, {
          id: '5503',
          uid: 's:2000~a:5503',
          type: 'athlete',
          order: 13,
          winner: false,
          status: {
            period: 32,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '63', manufacturer: 'Williams', teamColor: 'FFFFFF' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png',
          laps: '32',
          place: 13,
          displayName: 'George Russell',
          firstName: 'George',
          middleName: '',
          lastName: 'Russell',
          shortName: 'G. Russell',
          name: 'George Russell',
          abbreviation: 'G. Russell',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5503.png',
        }, {
          id: '5652',
          uid: 's:2000~a:5652',
          type: 'athlete',
          order: 14,
          winner: false,
          status: {
            period: 33,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '22', manufacturer: 'AlphaTauri', teamColor: '0032FF' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png',
          laps: '33',
          place: 14,
          displayName: 'Yuki Tsunoda',
          firstName: 'Yuki',
          middleName: '',
          lastName: 'Tsunoda',
          shortName: 'Y. Tsunoda',
          name: 'Yuki Tsunoda',
          abbreviation: 'Y. Tsunoda',
          headshot: 'https://a.espncdn.com/i/headshots/f1/players/full/5652.png',
        }, {
          id: '864',
          uid: 's:2000~a:864',
          type: 'athlete',
          order: 15,
          winner: false,
          status: {
            period: 32,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '5', manufacturer: 'Aston Martin', teamColor: '006F62' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png',
          laps: '32',
          place: 15,
          displayName: 'Sebastian Vettel',
          firstName: 'Sebastian',
          middleName: '',
          lastName: 'Vettel',
          shortName: 'S. Vettel',
          name: 'Sebastian Vettel',
          abbreviation: 'S. Vettel',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/864.png',
        }, {
          id: '337',
          uid: 's:2000~a:337',
          type: 'athlete',
          order: 16,
          winner: false,
          status: {
            period: 22,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '7', manufacturer: 'Alfa Romeo' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png',
          laps: '22',
          place: 16,
          displayName: 'Kimi Raikkonen',
          firstName: 'Kimi',
          middleName: '',
          lastName: 'Räikkönen',
          shortName: 'K. Räikkönen',
          name: 'Kimi Raikkonen',
          abbreviation: 'K. Räikkönen',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/337.png',
        }, {
          id: '5499',
          uid: 's:2000~a:5499',
          type: 'athlete',
          order: 17,
          winner: false,
          status: {
            period: 32,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '99', manufacturer: 'Alfa Romeo' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/ita.png',
          laps: '32',
          place: 17,
          displayName: 'Antonio Giovinazzi',
          firstName: 'Antonio',
          middleName: '',
          lastName: 'Giovinazzi',
          shortName: 'A. Giovinazzi',
          name: 'Antonio Giovinazzi',
          abbreviation: 'A. Giovinazzi',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5499.png',
        }, {
          id: '5654',
          uid: 's:2000~a:5654',
          type: 'athlete',
          order: 18,
          winner: false,
          status: {
            period: 29,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '47', manufacturer: 'Haas', teamColor: '5A5A5A' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png',
          laps: '29',
          place: 18,
          displayName: 'Mick Schumacher',
          firstName: 'Mick',
          middleName: '',
          lastName: 'Schumacher',
          shortName: 'M. Schumacher',
          name: 'Mick Schumacher',
          abbreviation: 'M. Schumacher',
          headshot: 'https://a.espncdn.com/i/headshots/f1/players/full/5654.png',
        }, {
          id: '4733',
          uid: 's:2000~a:4733',
          type: 'athlete',
          order: 19,
          winner: false,
          status: {
            period: 31,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '6', manufacturer: 'Williams', teamColor: 'FFFFFF' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png',
          laps: '31',
          place: 19,
          displayName: 'Nicholas Latifi',
          firstName: 'Nicholas',
          middleName: '',
          lastName: 'Latifi',
          shortName: 'N. Latifi',
          name: 'Nicholas Latifi',
          abbreviation: 'N. Latifi',
          headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4733.png',
        }, {
          id: '5653',
          uid: 's:2000~a:5653',
          type: 'athlete',
          order: 20,
          winner: false,
          status: {
            period: 28,
            type: {
              id: '12', name: 'STATUS_CLASSIFIED', state: 'post', completed: true, description: 'Classified', detail: 'Classified', shortDetail: 'Classified',
            },
            displayValue: 'Classified',
          },
          vehicle: { number: '9', manufacturer: 'Haas', teamColor: '5A5A5A' },
          logo: 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png',
          laps: '28',
          place: 20,
          displayName: 'Nikita Mazepin',
          firstName: 'Nikita',
          middleName: '',
          lastName: 'Mazepin',
          shortName: 'N. Mazepin',
          name: 'Nikita Mazepin',
          abbreviation: 'N. Mazepin',
          headshot: 'https://a.espncdn.com/i/headshots/f1/players/full/5653.png',
        }],
        competitionType: { id: '1', text: 'Free Practice', abbreviation: 'FP2' },
        session: 2,
        priority: 4,
        note: 'Free Practice 2',
        appLinks: [],
      }, {
        gamecastAvailable: false,
        playByPlayAvailable: false,
        commentaryAvailable: false,
        recent: false,
        id: '600004420',
        competitionId: '401275089',
        uid: 's:2000~l:2030~e:600004420~c:401275089',
        date: '2021-05-01T11:00:00Z',
        timeValid: true,
        name: 'Portuguese Grand Prix',
        shortName: 'Portuguese GP',
        location: 'Portimao',
        season: 2021,
        seasonStartDate: '2021-01-01T08:00:00Z',
        seasonEndDate: '2021-12-31T08:00:00Z',
        seasonType: '2',
        seasonTypeHasGroups: false,
        group: {
          groupId: '2', name: 'Regular Season', abbreviation: 'reg', shortName: 'REG',
        },
        period: 0,
        clock: '0:00',
        track: { length: 4.653, displayLength: '4.653 km' },
        trackText: '4.653 km',
        laps: '0',
        status: 'pre',
        summary: '5/1 - 7:00 AM EDT',
        fullStatus: {
          clock: 0.0,
          displayClock: '0:00',
          period: 0,
          type: {
            id: '1', name: 'STATUS_SCHEDULED', state: 'pre', completed: false, description: 'Scheduled', detail: 'Sat, May 1st at 7:00 AM EDT', shortDetail: '5/1 - 7:00 AM EDT',
          },
        },
        link: 'http://tv5.espn.com/f1/race/_/id/600004420',
        links: [{
          language: 'en-PH', rel: ['summary', 'desktop', 'competition'], href: 'http://tv5.espn.com/f1/race?id=600004420', text: 'Summary', isExternal: false, isPremium: false,
        }],
        onWatch: true,
        broadcasts: [{
          type: 'TV', lang: 'en', region: 'us', typeId: 1, isNational: true, broadcasterId: 8, broadcastId: 8, name: 'ESPN2', shortName: 'ESPN2', callLetters: 'ESP2',
        }],
        broadcast: 'ESPN2',
        competitionType: { id: '1', text: 'Free Practice', abbreviation: 'FP3' },
        session: 3,
        priority: 3,
        note: 'Free Practice 3',
        appLinks: [],
      }, {
        gamecastAvailable: false,
        playByPlayAvailable: false,
        commentaryAvailable: false,
        recent: false,
        id: '600004420',
        competitionId: '401275090',
        uid: 's:2000~l:2030~e:600004420~c:401275090',
        date: '2021-05-01T14:00:00Z',
        timeValid: true,
        name: 'Portuguese Grand Prix',
        shortName: 'Portuguese GP',
        location: 'Portimao',
        season: 2021,
        seasonStartDate: '2021-01-01T08:00:00Z',
        seasonEndDate: '2021-12-31T08:00:00Z',
        seasonType: '2',
        seasonTypeHasGroups: false,
        group: {
          groupId: '2', name: 'Regular Season', abbreviation: 'reg', shortName: 'REG',
        },
        period: 0,
        clock: '0:00',
        track: { length: 4.653, displayLength: '4.653 km' },
        trackText: '4.653 km',
        laps: '0',
        status: 'pre',
        summary: '5/1 - 10:00 AM EDT',
        fullStatus: {
          clock: 0.0,
          displayClock: '0:00',
          period: 0,
          type: {
            id: '1', name: 'STATUS_SCHEDULED', state: 'pre', completed: false, description: 'Scheduled', detail: 'Sat, May 1st at 10:00 AM EDT', shortDetail: '5/1 - 10:00 AM EDT',
          },
        },
        link: 'http://tv5.espn.com/f1/race/_/id/600004420',
        links: [{
          language: 'en-PH', rel: ['summary', 'desktop', 'competition'], href: 'http://tv5.espn.com/f1/race?id=600004420', text: 'Summary', isExternal: false, isPremium: false,
        }],
        onWatch: true,
        broadcasts: [{
          type: 'TV', lang: 'en', region: 'us', typeId: 1, isNational: true, broadcasterId: 8, broadcastId: 8, name: 'ESPN2', shortName: 'ESPN2', callLetters: 'ESP2',
        }],
        broadcast: 'ESPN2',
        competitionType: { id: '2', text: 'Qualifying', abbreviation: 'Qual' },
        session: 1,
        priority: 2,
        note: 'Qualifying',
        appLinks: [],
      }, {
        gamecastAvailable: false,
        playByPlayAvailable: false,
        commentaryAvailable: false,
        recent: false,
        id: '600004420',
        competitionId: '401275091',
        uid: 's:2000~l:2030~e:600004420~c:401275091',
        date: '2021-05-02T14:00:00Z',
        timeValid: true,
        name: 'Portuguese Grand Prix',
        shortName: 'Portuguese GP',
        location: 'Portimao',
        season: 2021,
        seasonStartDate: '2021-01-01T08:00:00Z',
        seasonEndDate: '2021-12-31T08:00:00Z',
        seasonType: '2',
        seasonTypeHasGroups: false,
        group: {
          groupId: '2', name: 'Regular Season', abbreviation: 'reg', shortName: 'REG',
        },
        period: 0,
        clock: '0:00',
        track: { length: 4.653, displayLength: '4.653 km' },
        trackText: '4.653 km',
        laps: '66',
        status: 'pre',
        summary: '5/2 - 10:00 AM EDT',
        fullStatus: {
          clock: 0.0,
          displayClock: '0:00',
          period: 0,
          type: {
            id: '1', name: 'STATUS_SCHEDULED', state: 'pre', completed: false, description: 'Scheduled', detail: 'Sun, May 2nd at 10:00 AM EDT', shortDetail: '5/2 - 10:00 AM EDT',
          },
        },
        link: 'http://tv5.espn.com/f1/race/_/id/600004420',
        links: [{
          language: 'en-PH', rel: ['summary', 'desktop', 'competition'], href: 'http://tv5.espn.com/f1/race?id=600004420', text: 'Summary', isExternal: false, isPremium: false,
        }],
        onWatch: true,
        broadcasts: [{
          type: 'TV', lang: 'en', region: 'us', typeId: 1, isNational: true, broadcasterId: 6, broadcastId: 6, name: 'ESPN                          ', shortName: 'ESPN', callLetters: 'ESPN',
        }],
        broadcast: 'ESPN',
        competitors: [{
          id: '4520', uid: 's:2000~a:4520', type: 'athlete', startOrder: 1, winner: false, status: {}, vehicle: { number: '77', manufacturer: 'Mercedes', teamColor: '00D2BE' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', laps: '0', displayName: 'Valtteri Bottas', firstName: 'Valtteri', middleName: '', lastName: 'Bottas', shortName: 'V. Bottas', name: 'Valtteri Bottas', abbreviation: 'V. Bottas', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4520.png',
        }, {
          id: '4665', uid: 's:2000~a:4665', type: 'athlete', startOrder: 2, winner: false, status: {}, vehicle: { number: '33', manufacturer: 'Red Bull', teamColor: '00327D' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png', laps: '0', displayName: 'Max Verstappen', firstName: 'Max', middleName: '', lastName: 'Verstappen', shortName: 'M. Verstappen', name: 'Max Verstappen', abbreviation: 'M. Verstappen', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4665.png',
        }, {
          id: '4472', uid: 's:2000~a:4472', type: 'athlete', startOrder: 3, winner: false, status: {}, vehicle: { number: '11', manufacturer: 'Red Bull', teamColor: '00327D' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png', laps: '0', displayName: 'Sergio Perez', firstName: 'Sergio', middleName: '', lastName: 'Pérez', shortName: 'S. Pérez', name: 'Sergio Perez', abbreviation: 'S. Pérez', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4472.png',
        }, {
          id: '5498', uid: 's:2000~a:5498', type: 'athlete', startOrder: 4, winner: false, status: {}, vehicle: { number: '16', manufacturer: 'Ferrari', teamColor: 'DC0000' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/mon.png', laps: '0', displayName: 'Charles Leclerc', firstName: 'Charles', middleName: '', lastName: 'Leclerc', shortName: 'C. Leclerc', name: 'Charles Leclerc', abbreviation: 'C. Leclerc', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5498.png',
        }, {
          id: '868', uid: 's:2000~a:868', type: 'athlete', startOrder: 5, winner: false, status: {}, vehicle: { number: '44', manufacturer: 'Mercedes', teamColor: '00D2BE' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', laps: '0', displayName: 'Lewis Hamilton', firstName: 'Lewis', middleName: '', lastName: 'Hamilton', shortName: 'L. Hamilton', name: 'Lewis Hamilton', abbreviation: 'L. Hamilton', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png',
        }, {
          id: '5501', uid: 's:2000~a:5501', type: 'athlete', startOrder: 6, winner: false, status: {}, vehicle: { number: '10', manufacturer: 'AlphaTauri', teamColor: '0032FF' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', laps: '0', displayName: 'Pierre Gasly', firstName: 'Pierre', middleName: '', lastName: 'Gasly', shortName: 'P. Gasly', name: 'Pierre Gasly', abbreviation: 'P. Gasly', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5501.png',
        }, {
          id: '5503', uid: 's:2000~a:5503', type: 'athlete', startOrder: 7, winner: false, status: {}, vehicle: { number: '63', manufacturer: 'Williams', teamColor: 'FFFFFF' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', laps: '0', displayName: 'George Russell', firstName: 'George', middleName: '', lastName: 'Russell', shortName: 'G. Russell', name: 'George Russell', abbreviation: 'G. Russell', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5503.png',
        }, {
          id: '5579', uid: 's:2000~a:5579', type: 'athlete', startOrder: 8, winner: false, status: {}, vehicle: { number: '4', manufacturer: 'McLaren', teamColor: 'FF8700' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png', laps: '0', displayName: 'Lando Norris', firstName: 'Lando', middleName: '', lastName: 'Norris', shortName: 'L. Norris', name: 'Lando Norris', abbreviation: 'L. Norris', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/5579.png',
        }, {
          id: '4686', uid: 's:2000~a:4686', type: 'athlete', startOrder: 9, winner: false, status: {}, vehicle: { number: '55', manufacturer: 'Ferrari', teamColor: 'DC0000' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', laps: '0', displayName: 'Carlos Sainz Jr', firstName: 'Carlos', middleName: '', lastName: 'Sainz', shortName: 'C. Sainz', name: 'Carlos Sainz Jr', abbreviation: 'C. Sainz', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4686.png',
        }, {
          id: '4678', uid: 's:2000~a:4678', type: 'athlete', startOrder: 10, winner: false, status: {}, vehicle: { number: '31', manufacturer: 'Alpine', teamColor: '000000' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png', laps: '0', displayName: 'Esteban Ocon', firstName: 'Esteban', middleName: '', lastName: 'Ocon', shortName: 'E. Ocon', name: 'Esteban Ocon', abbreviation: 'E. Ocon', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4678.png',
        }, {
          id: '4775', uid: 's:2000~a:4775', type: 'athlete', startOrder: 11, winner: false, status: {}, vehicle: { number: '18', manufacturer: 'Aston Martin', teamColor: '006F62' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', laps: '0', displayName: 'Lance Stroll', firstName: 'Lance', middleName: '', lastName: 'Stroll', shortName: 'L. Stroll', name: 'Lance Stroll', abbreviation: 'L. Stroll', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4775.png',
        }, {
          id: '4510', uid: 's:2000~a:4510', type: 'athlete', startOrder: 12, winner: false, status: {}, vehicle: { number: '3', manufacturer: 'McLaren', teamColor: 'FF8700' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png', laps: '0', displayName: 'Daniel Ricciardo', firstName: 'Daniel', middleName: '', lastName: 'Ricciardo', shortName: 'D. Ricciardo', name: 'Daniel Ricciardo', abbreviation: 'D. Ricciardo', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4510.png',
        }, {
          id: '5652', uid: 's:2000~a:5652', type: 'athlete', startOrder: 13, winner: false, status: {}, vehicle: { number: '22', manufacturer: 'AlphaTauri', teamColor: '0032FF' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/jpn.png', laps: '0', displayName: 'Yuki Tsunoda', firstName: 'Yuki', middleName: '', lastName: 'Tsunoda', shortName: 'Y. Tsunoda', name: 'Yuki Tsunoda', abbreviation: 'Y. Tsunoda', headshot: 'https://a.espncdn.com/i/headshots/f1/players/full/5652.png',
        }, {
          id: '348', uid: 's:2000~a:348', type: 'athlete', startOrder: 14, winner: false, status: {}, vehicle: { number: '14', manufacturer: 'Alpine', teamColor: '000000' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png', laps: '0', displayName: 'Fernando Alonso', firstName: 'Fernando', middleName: '', lastName: 'Alonso', shortName: 'F. Alonso', name: 'Fernando Alonso', abbreviation: 'F. Alonso', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/348.png',
        }, {
          id: '337', uid: 's:2000~a:337', type: 'athlete', startOrder: 15, winner: false, status: {}, vehicle: { number: '7', manufacturer: 'Alfa Romeo' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png', laps: '0', displayName: 'Kimi Raikkonen', firstName: 'Kimi', middleName: '', lastName: 'Räikkönen', shortName: 'K. Räikkönen', name: 'Kimi Raikkonen', abbreviation: 'K. Räikkönen', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/337.png',
        }, {
          id: '864', uid: 's:2000~a:864', type: 'athlete', startOrder: 16, winner: false, status: {}, vehicle: { number: '5', manufacturer: 'Aston Martin', teamColor: '006F62' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png', laps: '0', displayName: 'Sebastian Vettel', firstName: 'Sebastian', middleName: '', lastName: 'Vettel', shortName: 'S. Vettel', name: 'Sebastian Vettel', abbreviation: 'S. Vettel', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/864.png',
        }, {
          id: '5654', uid: 's:2000~a:5654', type: 'athlete', startOrder: 18, winner: false, status: {}, vehicle: { number: '47', manufacturer: 'Haas', teamColor: '5A5A5A' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/sui.png', laps: '0', displayName: 'Mick Schumacher', firstName: 'Mick', middleName: '', lastName: 'Schumacher', shortName: 'M. Schumacher', name: 'Mick Schumacher', abbreviation: 'M. Schumacher', headshot: 'https://a.espncdn.com/i/headshots/f1/players/full/5654.png',
        }, {
          id: '4733', uid: 's:2000~a:4733', type: 'athlete', startOrder: 19, winner: false, status: {}, vehicle: { number: '6', manufacturer: 'Williams', teamColor: 'FFFFFF' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/can.png', laps: '0', displayName: 'Nicholas Latifi', firstName: 'Nicholas', middleName: '', lastName: 'Latifi', shortName: 'N. Latifi', name: 'Nicholas Latifi', abbreviation: 'N. Latifi', headshot: 'https://a.espncdn.com/i/headshots/rpm/players/full/4733.png',
        }, {
          id: '5653', uid: 's:2000~a:5653', type: 'athlete', startOrder: 20, winner: false, status: {}, vehicle: { number: '9', manufacturer: 'Haas', teamColor: '5A5A5A' }, logo: 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png', laps: '0', displayName: 'Nikita Mazepin', firstName: 'Nikita', middleName: '', lastName: 'Mazepin', shortName: 'N. Mazepin', name: 'Nikita Mazepin', abbreviation: 'N. Mazepin', headshot: 'https://a.espncdn.com/i/headshots/f1/players/full/5653.png',
        }],
        competitionType: { id: '3', text: 'Race', abbreviation: 'Race' },
        session: 1,
        priority: 1,
        note: 'Race',
        appLinks: [],
      }],
      smartdates: ['2021-04-18T07:00Z', '2021-05-02T07:00Z', '2021-05-09T07:00Z'],
    }],
  }],
};

export {
  grandPrixEvent,
  f1Events,
};
