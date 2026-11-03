import { PageShell, SubHeading, Row, CardGrid, blueTheme, greenTheme, redTheme, goldTheme, purpleTheme, tealTheme, orangeTheme } from './shared';

function NounsBgPage() {
  const family = [
    { italian: 'padre / papà', translation: 'баща / татко' },
    { italian: 'madre / mamma', translation: 'майка / мама' },
    { italian: 'genitori', translation: 'родители' },
    { italian: 'figlio', translation: 'син' },
    { italian: 'figlia', translation: 'дъщеря' },
    { italian: 'fratello', translation: 'брат' },
    { italian: 'sorella', translation: 'сестра' },
    { italian: 'nonno', translation: 'дядо' },
    { italian: 'nonna', translation: 'баба' },
    { italian: 'nipote', translation: 'внук / внучка / племенник / племенница' },
    { italian: 'zio', translation: 'чичо / вуйчо' },
    { italian: 'zia', translation: 'леля / стрина' },
    { italian: 'cugino', translation: 'братовчед (мъж)' },
    { italian: 'cugina', translation: 'братовчедка (жена)' },
    { italian: 'marito', translation: 'съпруг' },
    { italian: 'moglie', translation: 'съпруга' },
    { italian: 'figlio unico', translation: 'единствен син' },
    { italian: 'figlia unica', translation: 'единствена дъщеря' },
    { italian: 'gemelli', translation: 'близначки' },
  ];

  const work = [
    { italian: 'capo', translation: 'шеф / мениджър' },
    { italian: 'collega', translation: 'колега' },
    { italian: 'dipendente', translation: 'служител' },
    { italian: 'pausa', translation: 'почивка / пауза' },
    { italian: 'riposo', translation: 'почивка' },
    { italian: 'giorno di riposo', translation: 'почивен ден' },
    { italian: 'contratto', translation: 'договор' },
    { italian: 'stipendio', translation: 'заплата' },
    { italian: 'documenti', translation: 'документи' },
  ];

  const animals = [
    { italian: 'cane', translation: 'куче' },
    { italian: 'gatto', translation: 'котка' },
    { italian: 'cavallo', translation: 'кон' },
    { italian: 'mucca', translation: 'крава' },
    { italian: 'pecora', translation: 'овца' },
    { italian: 'gallo', translation: 'петел' },
    { italian: 'gallina', translation: 'кокошка' },
    { italian: 'coniglio', translation: 'заек' },
    { italian: 'topo', translation: 'мишка' },
    { italian: 'pesce', translation: 'риба' },
    { italian: 'uccello', translation: 'птица' },
    { italian: 'aquila', translation: 'орел' },
    { italian: 'leone', translation: 'лъв' },
    { italian: 'tigre', translation: 'тигър' },
    { italian: 'elefante', translation: 'слон' },
    { italian: 'scimmia', translation: 'маймуна' },
    { italian: 'serpente', translation: 'змия' },
    { italian: 'giraffa', translation: 'жираф' },
    { italian: 'maiale', translation: 'прасе' },
    { italian: 'lupo', translation: 'вълк' },
    { italian: 'tartaruga', translation: 'костенурка' },
    { italian: 'rana', translation: 'жаба' },
  ];

  const food = [
    { italian: 'pane', translation: 'хляб' },
    { italian: 'acqua', translation: 'вода' },
    { italian: 'latte', translation: 'мляко' },
    { italian: 'riso', translation: 'ориз' },
    { italian: 'pasta', translation: 'паста' },
    { italian: 'carne', translation: 'месо' },
    { italian: 'pollo', translation: 'пиле' },
    { italian: 'pesce', translation: 'риба' },
    { italian: 'formaggio', translation: 'сирене' },
    { italian: 'uova', translation: 'яйца' },
    { italian: 'zucchero', translation: 'захар' },
    { italian: 'sale', translation: 'сол' },
    { italian: 'olio', translation: 'олио / масло' },
    { italian: 'frutta', translation: 'плодове' },
    { italian: 'verdura', translation: 'зеленчуци' },
    { italian: 'mela', translation: 'ябълка' },
    { italian: 'banana', translation: 'банан' },
    { italian: 'pomodoro', translation: 'домат' },
    { italian: 'patata', translation: 'картоф' },
    { italian: 'cipolla', translation: 'лук' },
  ];

  const house = [
    { italian: 'porta', translation: 'врата' },
    { italian: 'finestra', translation: 'прозорец' },
    { italian: 'tavolo', translation: 'маса' },
    { italian: 'sedia', translation: 'стол' },
    { italian: 'letto', translation: 'легло' },
    { italian: 'divano', translation: 'диван' },
    { italian: 'armadio', translation: 'гардероб' },
    { italian: 'specchio', translation: 'огледало' },
    { italian: 'lampada', translation: 'лампа' },
    { italian: 'tappeto', translation: 'килим' },
    { italian: 'cucina', translation: 'кухня' },
    { italian: 'bagno', translation: 'баня' },
    { italian: 'salotto', translation: 'хол' },
    { italian: 'camera', translation: 'стая' },
    { italian: 'scala', translation: 'стълби' },
    { italian: 'soffitto', translation: 'таван' },
    { italian: 'pavimento', translation: 'под' },
    { italian: 'muro', translation: 'стена' },
    { italian: 'chiave', translation: 'ключ' },
    { italian: 'orologio', translation: 'часовник' },
  ];

  const time = [
    { italian: 'adesso', translation: 'сега' },
    { italian: 'più tardi', translation: 'по-късно' },
    { italian: 'secondo', translation: 'секунда' },
    { italian: 'minuto', translation: 'минута' },
    { italian: "mezz'ora", translation: 'половин час' },
    { italian: 'le tre e un quarto', translation: 'три и петнадесет' },
    { italian: 'le tre meno un quarto', translation: 'две и четиридесет и пет' },
    { italian: 'ora', translation: 'час / часовник' },
    { italian: 'giorno', translation: 'ден' },
    { italian: 'anno', translation: 'година' },
    { italian: 'secolo', translation: 'век' },
  ];

  const travel = [
    { italian: 'viaggio', translation: 'пътуване / пътешествие' },
    { italian: 'viaggiatore', translation: 'пътник' },
    { italian: 'turista', translation: 'турист' },
    { italian: 'turismo', translation: 'туризъм' },
    { italian: 'valigia', translation: 'куфар' },
    { italian: 'passaporto', translation: 'паспорт' },
    { italian: 'biglietto', translation: 'билет' },
    { italian: 'aeroporto', translation: 'летище' },
    { italian: 'aereo', translation: 'самолет' },
    { italian: 'treno', translation: 'влак' },
    { italian: 'nave', translation: 'кораб' },
    { italian: 'autobus', translation: 'автобус' },
    { italian: 'taxi', translation: 'такси' },
    { italian: 'mappa', translation: 'карта' },
    { italian: 'destinazione', translation: 'дестинация' },
    { italian: 'hotel', translation: 'хотел' },
    { italian: 'spiaggia', translation: 'плаж' },
    { italian: 'guida', translation: 'гид / водач' },
    { italian: 'souvenir', translation: 'сувенир' },
    { italian: 'partenza', translation: 'тръгване / отпътуване' },
    { italian: 'ristorante', translation: 'ресторант' },
    { italian: 'strada', translation: 'улица / път' },
    { italian: 'museo', translation: 'музей' },
    { italian: 'negozio', translation: 'магазин' },
  ];

  const directions = [
    { italian: 'a destra', translation: 'надясно' },
    { italian: 'a sinistra', translation: 'наляво' },
    { italian: 'dritto', translation: 'направо' },
    { italian: 'vicino', translation: 'близо' },
    { italian: 'lontano', translation: 'далече' },
    { italian: 'qui', translation: 'тук' },
    { italian: 'lì / là', translation: 'там' },
    { italian: 'la strada', translation: 'улицата / пътят' },
    { italian: 'il centro', translation: 'центърът' },
  ];

  return (
    <PageShell title="Съществителни">
      <SubHeading label="Семейство — La famiglia" color={blueTheme.badgeColor} />
      <CardGrid>
        {family.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Работа — Il lavoro" color={greenTheme.badgeColor} />
      <CardGrid>
        {work.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Животни — Gli animali" color={redTheme.badgeColor} />
      <CardGrid>
        {animals.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={redTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Храна — I cibi" color={goldTheme.badgeColor} />
      <CardGrid>
        {food.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Домашни предмети — Gli oggetti della casa" color={purpleTheme.badgeColor} />
      <CardGrid>
        {house.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={purpleTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Време — Il tempo" color={blueTheme.badgeColor} />
      <CardGrid>
        {time.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Пътуване — Il viaggio" color={tealTheme.badgeColor} />
      <CardGrid>
        {travel.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={tealTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Посоки — Le direzioni" color={orangeTheme.badgeColor} />
      <CardGrid>
        {directions.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={orangeTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default NounsBgPage;
