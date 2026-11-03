import { PageShell, SubHeading, Row, CardGrid, greenTheme, blueTheme, goldTheme, redTheme } from './shared';

function AdverbsEnPage() {
  const time = [
    { italian: 'oggi', english: 'today' },
    { italian: 'domani', english: 'tomorrow' },
    { italian: 'ieri', english: 'yesterday' },
    { italian: 'ora', english: 'now' },
    { italian: 'poi', english: 'then / later' },
    { italian: 'sempre', english: 'always' },
    { italian: 'mai', english: 'never' },
    { italian: 'spesso', english: 'often' },
    { italian: 'qualche volta', english: 'sometimes' },
    { italian: 'tardi', english: 'late' },
    { italian: 'presto', english: 'early / soon' },
  ];

  const manner = [
    { italian: 'bene', english: 'well' },
    { italian: 'male', english: 'badly' },
    { italian: 'velocemente', english: 'quickly' },
    { italian: 'lentamente', english: 'slowly' },
    { italian: 'facilmente', english: 'easily' },
    { italian: 'difficilmente', english: 'with difficulty' },
    { italian: 'volentieri', english: 'gladly / willingly' },
  ];

  const place = [
    { italian: 'qui', english: 'here' },
    { italian: 'lì', english: 'there' },
    { italian: 'laggiù', english: 'over there' },
    { italian: 'sopra', english: 'above / on top' },
    { italian: 'sotto', english: 'below / under' },
    { italian: 'dentro', english: 'inside' },
    { italian: 'fuori', english: 'outside' },
    { italian: 'vicino', english: 'near / close' },
    { italian: 'lontano', english: 'far' },
    { italian: 'dovunque', english: 'everywhere' },
  ];

  const degree = [
    { italian: 'molto', english: 'very / a lot' },
    { italian: 'poco', english: 'little / not much' },
    { italian: 'abbastanza', english: 'enough / quite' },
    { italian: 'troppo', english: 'too much' },
    { italian: 'quasi', english: 'almost' },
    { italian: 'solo', english: 'only' },
  ];

  return (
    <PageShell title="Adverbs">
      <SubHeading label="Time" color={greenTheme.badgeColor} />
      <CardGrid>
        {time.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Manner" color={blueTheme.badgeColor} />
      <CardGrid>
        {manner.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Place" color={goldTheme.badgeColor} />
      <CardGrid>
        {place.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Degree" color={redTheme.badgeColor} />
      <CardGrid>
        {degree.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={redTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default AdverbsEnPage;
