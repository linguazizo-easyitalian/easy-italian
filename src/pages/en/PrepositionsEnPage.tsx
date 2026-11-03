import { PageShell, SubHeading, Row, CardGrid, blueTheme, greenTheme, goldTheme, redTheme } from './shared';

function PrepositionsEnPage() {
  const simple = [
    { italian: 'di', english: 'of / from' },
    { italian: 'a', english: 'to / at' },
    { italian: 'da', english: 'from / by' },
    { italian: 'in', english: 'in / into' },
    { italian: 'con', english: 'with' },
    { italian: 'su', english: 'on / upon' },
    { italian: 'per', english: 'for / through' },
    { italian: 'tra / fra', english: 'between / among' },
  ];

  const articulatedExamples = [
    { italian: 'del (di + il)', english: 'of the (masc. sing.)' },
    { italian: 'della (di + la)', english: 'of the (fem. sing.)' },
    { italian: 'dei (di + i)', english: 'of the (masc. pl.)' },
    { italian: 'delle (di + le)', english: 'of the (fem. pl.)' },
    { italian: 'al (a + il)', english: 'to the (masc. sing.)' },
    { italian: 'alla (a + la)', english: 'to the (fem. sing.)' },
    { italian: 'nel (in + il)', english: 'in the (masc. sing.)' },
    { italian: 'nella (in + la)', english: 'in the (fem. sing.)' },
    { italian: 'sul (su + il)', english: 'on the (masc. sing.)' },
    { italian: 'sulla (su + la)', english: 'on the (fem. sing.)' },
  ];

  const common = [
    { italian: 'prima di', english: 'before' },
    { italian: 'dopo di', english: 'after' },
    { italian: 'sopra', english: 'above / over' },
    { italian: 'sotto', english: 'under / below' },
    { italian: 'dentro', english: 'inside' },
    { italian: 'fuori di', english: 'outside' },
    { italian: 'vicino a', english: 'near / next to' },
    { italian: 'lontano da', english: 'far from' },
    { italian: 'verso', english: 'towards' },
    { italian: 'contro', english: 'against' },
  ];

  return (
    <PageShell title="Prepositions">
      <SubHeading label="Simple Prepositions" color={blueTheme.badgeColor} />
      <CardGrid>
        {simple.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Articulated Prepositions (Combined with Articles)" color={greenTheme.badgeColor} />
      <CardGrid>
        {articulatedExamples.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Common Prepositional Locutions" color={goldTheme.badgeColor} />
      <CardGrid>
        {common.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={goldTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default PrepositionsEnPage;
