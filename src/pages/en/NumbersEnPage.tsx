import { PageShell, SubHeading, Row, CardGrid, goldTheme, greenTheme, blueTheme, redTheme } from './shared';

function NumbersEnPage() {
  const cardinal = [
    { italian: 'zero', english: 'zero' },
    { italian: 'uno', english: 'one' },
    { italian: 'due', english: 'two' },
    { italian: 'tre', english: 'three' },
    { italian: 'quattro', english: 'four' },
    { italian: 'cinque', english: 'five' },
    { italian: 'sei', english: 'six' },
    { italian: 'sette', english: 'seven' },
    { italian: 'otto', english: 'eight' },
    { italian: 'nove', english: 'nine' },
    { italian: 'dieci', english: 'ten' },
    { italian: 'undici', english: 'eleven' },
    { italian: 'dodici', english: 'twelve' },
    { italian: 'tredici', english: 'thirteen' },
    { italian: 'quattordici', english: 'fourteen' },
    { italian: 'quindici', english: 'fifteen' },
    { italian: 'sedici', english: 'sixteen' },
    { italian: 'diciassette', english: 'seventeen' },
    { italian: 'diciotto', english: 'eighteen' },
    { italian: 'diciannove', english: 'nineteen' },
    { italian: 'venti', english: 'twenty' },
  ];

  const tens = [
    { italian: 'trenta', english: 'thirty' },
    { italian: 'quaranta', english: 'forty' },
    { italian: 'cinquanta', english: 'fifty' },
    { italian: 'sessanta', english: 'sixty' },
    { italian: 'settanta', english: 'seventy' },
    { italian: 'ottanta', english: 'eighty' },
    { italian: 'novanta', english: 'ninety' },
    { italian: 'cento', english: 'one hundred' },
    { italian: 'mille', english: 'one thousand' },
    { italian: 'diecimila', english: 'ten thousand' },
    { italian: 'un milione', english: 'one million' },
  ];

  const ordinal = [
    { italian: 'primo', english: 'first' },
    { italian: 'secondo', english: 'second' },
    { italian: 'terzo', english: 'third' },
    { italian: 'quarto', english: 'fourth' },
    { italian: 'quinto', english: 'fifth' },
    { italian: 'sesto', english: 'sixth' },
    { italian: 'settimo', english: 'seventh' },
    { italian: 'ottavo', english: 'eighth' },
    { italian: 'nono', english: 'ninth' },
    { italian: 'decimo', english: 'tenth' },
  ];

  return (
    <PageShell title="Numbers">
      <SubHeading label="Cardinal Numbers 0–20" color={goldTheme.badgeColor} />
      <CardGrid>
        {cardinal.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Tens & Large Numbers" color={greenTheme.badgeColor} />
      <CardGrid>
        {tens.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Ordinal Numbers" color={blueTheme.badgeColor} />
      <CardGrid>
        {ordinal.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default NumbersEnPage;
