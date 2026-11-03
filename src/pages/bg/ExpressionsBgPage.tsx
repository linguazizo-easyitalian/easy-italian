import { PageShell, SubHeading, Row, CardGrid, purpleTheme, redTheme, goldTheme, greenTheme, blueTheme } from './shared';

function ExpressionsBgPage() {
  const happy = [
    { italian: 'Che bello!', translation: 'Колко хубаво! / Страхотно!' },
    { italian: 'Sono felice!', translation: 'Щастлив съм!' },
    { italian: 'Fantastico!', translation: 'Фантастично!' },
    { italian: 'Perfetto!', translation: 'Перфектно!' },
    { italian: 'Evviva!', translation: 'Ура!' },
    { italian: 'Che gioia!', translation: 'Каква радост!' },
  ];

  const sad = [
    { italian: 'Che tristezza', translation: 'Какъв тъг' },
    { italian: 'Sono triste', translation: 'Тъжен съм' },
    { italian: 'Mi dispiace', translation: 'Съжалявам' },
    { italian: 'Poverino', translation: 'Горкото' },
    { italian: 'Che peccato!', translation: 'Какъв срам / жалко!' },
  ];

  const angry = [
    { italian: 'Basta!', translation: 'Стига!' },
    { italian: 'Sono arrabbiato!', translation: 'Ядосан съм!' },
    { italian: 'Che nervi!', translation: 'Колко дразнещо!' },
    { italian: 'Non ce la faccio più!', translation: 'Не мога повече!' },
    { italian: 'Mi fa impazzire!', translation: 'Подлудява ме!' },
  ];

  const surprised = [
    { italian: 'Davvero?!', translation: 'Наистина?!' },
    { italian: 'Non ci credo!', translation: 'Не вярвам!' },
    { italian: 'Che sorpresa!', translation: 'Каква изненада!' },
    { italian: 'Mamma mia!', translation: 'Мамо мия! / Боже мой!' },
    { italian: 'Accidenti!', translation: 'Уау! / Боже!' },
  ];

  const love = [
    { italian: 'Ti amo', translation: 'Обичам те (романтично)' },
    { italian: 'Ti voglio bene', translation: 'Обичам те (семейство/приятели)' },
    { italian: 'Mi manchi', translation: 'Липсваш ми' },
    { italian: 'Sei speciale', translation: 'Специален/на си' },
    { italian: 'Cuore mio', translation: 'Сърце мое / Любов моя' },
  ];

  return (
    <PageShell title="Емоционални изрази">
      <SubHeading label="Радост и вълнение" color={goldTheme.badgeColor} />
      <CardGrid>
        {happy.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Тъга" color={blueTheme.badgeColor} />
      <CardGrid>
        {sad.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Гняв и раздразнение" color={redTheme.badgeColor} />
      <CardGrid>
        {angry.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={redTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Изненада" color={greenTheme.badgeColor} />
      <CardGrid>
        {surprised.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Любов и нежност" color={purpleTheme.badgeColor} />
      <CardGrid>
        {love.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={purpleTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default ExpressionsBgPage;
