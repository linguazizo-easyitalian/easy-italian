import { PageShell, SubHeading, Row, CardGrid, redTheme, goldTheme, greenTheme, blueTheme } from './shared';

function PhrasesBgPage() {
  const greetings = [
    { italian: 'Ciao!', translation: 'Здравей! / Чао! (неформално)' },
    { italian: 'Buongiorno', translation: 'Добър ден / Добро утро' },
    { italian: 'Buonasera', translation: 'Добър вечер' },
    { italian: 'Buonanotte', translation: 'Лека нощ' },
    { italian: 'Salve', translation: 'Здравейте (формално)' },
    { italian: 'Arrivederci', translation: 'Довиждане (формално)' },
    { italian: 'A presto', translation: 'До скоро' },
    { italian: 'A domani', translation: 'До утре' },
  ];

  const politeness = [
    { italian: 'Per favore', translation: 'Моля' },
    { italian: 'Grazie', translation: 'Благодаря' },
    { italian: 'Prego', translation: 'Няма защо / Моля (отговор)' },
    { italian: 'Mi scusi', translation: 'Извинете ме (формално)' },
    { italian: 'Scusa', translation: 'Извинявай (неформално)' },
    { italian: 'Non c\'è problema', translation: 'Няма проблем' },
  ];

  const questions = [
    { italian: 'Come stai?', translation: 'Как си? (неформално)' },
    { italian: 'Come sta?', translation: 'Как сте? (формално)' },
    { italian: 'Come ti chiami?', translation: 'Как се казваш?' },
    { italian: 'Di dove sei?', translation: 'Откъде си?' },
    { italian: 'Quanti anni hai?', translation: 'На колко години си?' },
    { italian: 'Che ore sono?', translation: 'Колко е часът?' },
    { italian: 'Dov\'è...?', translation: 'Къде е...?' },
    { italian: 'Quanto costa?', translation: 'Колко струва?' },
  ];

  const practical = [
    { italian: 'Non capisco', translation: 'Не разбирам' },
    { italian: 'Capisco', translation: 'Разбирам' },
    { italian: 'Puoi ripetere?', translation: 'Можеш ли да повториш?' },
    { italian: 'Parla inglese?', translation: 'Говорите ли английски?' },
    { italian: 'Ho bisogno di aiuto', translation: 'Имам нужда от помощ' },
    { italian: 'Dov\'è il bagno?', translation: 'Къде е тоалетната?' },
    { italian: 'Mi piace', translation: 'Харесва ми' },
    { italian: 'Non mi piace', translation: 'Не ми харесва' },
    { italian: 'Ho fame', translation: 'Гладен съм' },
    { italian: 'Ho sete', translation: 'Жаден съм' },
  ];

  return (
    <PageShell title="Ежедневни изрази">
      <SubHeading label="Поздрави и сбогувания" color={redTheme.badgeColor} />
      <CardGrid>
        {greetings.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={redTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Учтивост" color={goldTheme.badgeColor} />
      <CardGrid>
        {politeness.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Често задавани въпроси" color={greenTheme.badgeColor} />
      <CardGrid>
        {questions.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Практични изрази" color={blueTheme.badgeColor} />
      <CardGrid>
        {practical.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default PhrasesBgPage;
