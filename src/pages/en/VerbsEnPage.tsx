import { PageShell, SubHeading, Row, CardGrid, purpleTheme, greenTheme, blueTheme, redTheme } from './shared';

function VerbsEnPage() {
  const regularAre = [
    { italian: 'parlare', english: 'to speak' },
    { italian: 'mangiare', english: 'to eat' },
    { italian: 'cantare', english: 'to sing' },
    { italian: 'studiare', english: 'to study' },
    { italian: 'lavorare', english: 'to work' },
    { italian: 'camminare', english: 'to walk' },
    { italian: 'guardare', english: 'to watch / to look' },
    { italian: 'ascoltare', english: 'to listen' },
  ];

  const regularEre = [
    { italian: 'vedere', english: 'to see' },
    { italian: 'ricevere', english: 'to receive' },
    { italian: 'vendere', english: 'to sell' },
    { italian: 'cadere', english: 'to fall' },
  ];

  const regularIre = [
    { italian: 'dormire', english: 'to sleep' },
    { italian: 'sentire', english: 'to hear / to feel' },
    { italian: 'partire', english: 'to leave / to depart' },
    { italian: 'aprire', english: 'to open' },
    { italian: 'finire', english: 'to finish' },
  ];

  const irregular = [
    { italian: 'essere', english: 'to be' },
    { italian: 'avere', english: 'to have' },
    { italian: 'fare', english: 'to do / to make' },
    { italian: 'andare', english: 'to go' },
    { italian: 'venire', english: 'to come' },
    { italian: 'dire', english: 'to say / to tell' },
    { italian: 'dare', english: 'to give' },
    { italian: 'stare', english: 'to stay / to be' },
    { italian: 'volere', english: 'to want' },
    { italian: 'potere', english: 'to be able to / can' },
    { italian: 'dovere', english: 'must / to have to' },
    { italian: 'sapere', english: 'to know (a fact)' },
    { italian: 'conoscere', english: 'to know (a person/place)' },
  ];

  return (
    <PageShell title="Verbs">
      <SubHeading label="Regular — ARE verbs" color={purpleTheme.badgeColor} />
      <CardGrid>
        {regularAre.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={purpleTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Regular — ERE verbs" color={greenTheme.badgeColor} />
      <CardGrid>
        {regularEre.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Regular — IRE verbs" color={blueTheme.badgeColor} />
      <CardGrid>
        {regularIre.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Irregular Verbs" color={redTheme.badgeColor} />
      <CardGrid>
        {irregular.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={redTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default VerbsEnPage;
