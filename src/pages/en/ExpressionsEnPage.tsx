import { PageShell, SubHeading, Row, CardGrid, purpleTheme, redTheme, goldTheme, greenTheme } from './shared';

function ExpressionsEnPage() {
  const happy = [
    { italian: 'Che bello!', english: 'How nice! / Great!' },
    { italian: 'Sono felice!', english: 'I am happy!' },
    { italian: 'Fantastico!', english: 'Fantastic!' },
    { italian: 'Perfetto!', english: 'Perfect!' },
    { italian: 'Evviva!', english: 'Hurray!' },
    { italian: 'Che gioia!', english: 'What joy!' },
  ];

  const sad = [
    { italian: 'Che tristezza', english: 'What sadness' },
    { italian: 'Sono triste', english: 'I am sad' },
    { italian: 'Mi dispiace', english: 'I am sorry' },
    { italian: 'Poverino', english: 'Poor thing' },
    { italian: 'Che peccato!', english: 'What a pity!' },
  ];

  const angry = [
    { italian: 'Basta!', english: 'Enough!' },
    { italian: 'Sono arrabbiato!', english: 'I am angry!' },
    { italian: 'Che nervi!', english: 'How annoying!' },
    { italian: 'Non ce la faccio più!', english: 'I can\'t take it anymore!' },
    { italian: 'Mi fa impazzire!', english: 'It drives me crazy!' },
  ];

  const surprised = [
    { italian: 'Davvero?!', english: 'Really?!' },
    { italian: 'Non ci credo!', english: 'I don\'t believe it!' },
    { italian: 'Che sorpresa!', english: 'What a surprise!' },
    { italian: 'Mamma mia!', english: 'Oh my!' },
    { italian: 'Accidenti!', english: 'Wow! / Goodness!' },
  ];

  const love = [
    { italian: 'Ti amo', english: 'I love you (romantic)' },
    { italian: 'Ti voglio bene', english: 'I love you (family/friends)' },
    { italian: 'Mi manchi', english: 'I miss you' },
    { italian: 'Sei speciale', english: 'You are special' },
    { italian: 'Cuore mio', english: 'My heart / My love' },
  ];

  return (
    <PageShell title="Emotional Expressions">
      <SubHeading label="Happiness & Excitement" color={goldTheme.badgeColor} />
      <CardGrid>
        {happy.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Sadness" color={purpleTheme.badgeColor} />
      <CardGrid>
        {sad.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={purpleTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Anger & Frustration" color={redTheme.badgeColor} />
      <CardGrid>
        {angry.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={redTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Surprise" color={greenTheme.badgeColor} />
      <CardGrid>
        {surprised.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Love & Affection" color={purpleTheme.badgeColor} />
      <CardGrid>
        {love.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={purpleTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default ExpressionsEnPage;
