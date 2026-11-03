import { PageShell, SubHeading, Row, CardGrid, redTheme, goldTheme, greenTheme, blueTheme } from './shared';

function AdjectivesEnPage() {
  const appearance = [
    { italian: 'bello', english: 'beautiful / handsome' },
    { italian: 'brutto', english: 'ugly' },
    { italian: 'grande', english: 'big / large' },
    { italian: 'piccolo', english: 'small / little' },
    { italian: 'alto', english: 'tall / high' },
    { italian: 'basso', english: 'short / low' },
    { italian: 'grosso', english: 'thick / fat' },
    { italian: 'sottile', english: 'thin' },
    { italian: 'nuovo', english: 'new' },
    { italian: 'vecchio', english: 'old' },
  ];

  const personality = [
    { italian: 'buono', english: 'good / kind' },
    { italian: 'cattivo', english: 'bad / mean' },
    { italian: 'felice', english: 'happy' },
    { italian: 'triste', english: 'sad' },
    { italian: 'intelligente', english: 'intelligent / smart' },
    { italian: 'stupido', english: 'stupid' },
    { italian: 'gentile', english: 'kind / polite' },
    { italian: 'timido', english: 'shy' },
    { italian: 'coraggioso', english: 'brave / courageous' },
    { italian: 'pigro', english: 'lazy' },
  ];

  const colors = [
    { italian: 'rosso', english: 'red' },
    { italian: 'blu', english: 'blue' },
    { italian: 'giallo', english: 'yellow' },
    { italian: 'verde', english: 'green' },
    { italian: 'bianco', english: 'white' },
    { italian: 'nero', english: 'black' },
    { italian: 'arancione', english: 'orange' },
    { italian: 'viola', english: 'purple' },
    { italian: 'rosa', english: 'pink' },
    { italian: 'grigio', english: 'gray' },
    { italian: 'marrone', english: 'brown' },
  ];

  const feelings = [
    { italian: 'stanco', english: 'tired' },
    { italian: 'arrabbiato', english: 'angry' },
    { italian: 'spaventato', english: 'scared / frightened' },
    { italian: 'sorpreso', english: 'surprised' },
    { italian: 'annoiato', english: 'bored' },
    { italian: 'nervoso', english: 'nervous' },
    { italian: 'calmo', english: 'calm' },
    { italian: 'malato', english: 'sick' },
  ];

  return (
    <PageShell title="Adjectives">
      <SubHeading label="Appearance" color={redTheme.badgeColor} />
      <CardGrid>
        {appearance.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={redTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Personality" color={goldTheme.badgeColor} />
      <CardGrid>
        {personality.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Colors" color={greenTheme.badgeColor} />
      <CardGrid>
        {colors.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Feelings & States" color={blueTheme.badgeColor} />
      <CardGrid>
        {feelings.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default AdjectivesEnPage;
