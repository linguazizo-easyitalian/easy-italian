import { PageShell, SubHeading, Row, CardGrid, goldTheme, greenTheme, blueTheme } from './shared';

function NumbersBgPage() {
  const cardinal = [
    { italian: 'zero', translation: 'нула' },
    { italian: 'uno', translation: 'едно' },
    { italian: 'due', translation: 'две' },
    { italian: 'tre', translation: 'три' },
    { italian: 'quattro', translation: 'четири' },
    { italian: 'cinque', translation: 'пет' },
    { italian: 'sei', translation: 'шест' },
    { italian: 'sette', translation: 'седем' },
    { italian: 'otto', translation: 'осем' },
    { italian: 'nove', translation: 'девет' },
    { italian: 'dieci', translation: 'десет' },
    { italian: 'undici', translation: 'единадесет' },
    { italian: 'dodici', translation: 'дванадесет' },
    { italian: 'tredici', translation: 'тринадесет' },
    { italian: 'quattordici', translation: 'четиринадесет' },
    { italian: 'quindici', translation: 'петнадесет' },
    { italian: 'sedici', translation: 'шестнадесет' },
    { italian: 'diciassette', translation: 'седемнадесет' },
    { italian: 'diciotto', translation: 'осемнадесет' },
    { italian: 'diciannove', translation: 'деветнадесет' },
    { italian: 'venti', translation: 'двадесет' },
  ];

  const tens = [
    { italian: 'trenta', translation: 'тридесет' },
    { italian: 'quaranta', translation: 'четиридесет' },
    { italian: 'cinquanta', translation: 'петдесет' },
    { italian: 'sessanta', translation: 'шестдесет' },
    { italian: 'settanta', translation: 'седемдесет' },
    { italian: 'ottanta', translation: 'осемдесет' },
    { italian: 'novanta', translation: 'деветдесет' },
    { italian: 'cento', translation: 'сто' },
    { italian: 'mille', translation: 'хиляда' },
    { italian: 'diecimila', translation: 'десет хиляди' },
    { italian: 'un milione', translation: 'един милион' },
  ];

  const ordinal = [
    { italian: 'primo', translation: 'първи' },
    { italian: 'secondo', translation: 'втори' },
    { italian: 'terzo', translation: 'трети' },
    { italian: 'quarto', translation: 'четвърти' },
    { italian: 'quinto', translation: 'пети' },
    { italian: 'sesto', translation: 'шести' },
    { italian: 'settimo', translation: 'седми' },
    { italian: 'ottavo', translation: 'осми' },
    { italian: 'nono', translation: 'девети' },
    { italian: 'decimo', translation: 'десети' },
  ];

  return (
    <PageShell title="Числа">
      <SubHeading label="Бройни числа 0–20" color={goldTheme.badgeColor} />
      <CardGrid>
        {cardinal.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Десетици и големи числа" color={greenTheme.badgeColor} />
      <CardGrid>
        {tens.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Редни числа" color={blueTheme.badgeColor} />
      <CardGrid>
        {ordinal.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default NumbersBgPage;
