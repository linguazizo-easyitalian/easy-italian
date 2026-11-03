import { PageShell, SubHeading, Row, CardGrid, greenTheme, blueTheme, goldTheme, redTheme } from './shared';

function AdverbsBgPage() {
  const time = [
    { italian: 'oggi', translation: 'днес' },
    { italian: 'domani', translation: 'утре' },
    { italian: 'ieri', translation: 'вчера' },
    { italian: 'ora', translation: 'сега' },
    { italian: 'poi', translation: 'после / тогава' },
    { italian: 'sempre', translation: 'винаги' },
    { italian: 'mai', translation: 'никога' },
    { italian: 'spesso', translation: 'често' },
    { italian: 'qualche volta', translation: 'понякога' },
    { italian: 'tardi', translation: 'късно' },
    { italian: 'presto', translation: 'рано / скоро' },
  ];

  const manner = [
    { italian: 'bene', translation: 'добре' },
    { italian: 'male', translation: 'зле' },
    { italian: 'velocemente', translation: 'бързо' },
    { italian: 'lentamente', translation: 'бавно' },
    { italian: 'facilmente', translation: 'лесно' },
    { italian: 'difficilmente', translation: 'трудно' },
    { italian: 'volentieri', translation: 'охотно / с удоволствие' },
  ];

  const place = [
    { italian: 'qui', translation: 'тук' },
    { italian: 'lì', translation: 'там' },
    { italian: 'laggiù', translation: 'онам / ей там' },
    { italian: 'sopra', translation: 'отгоре / над' },
    { italian: 'sotto', translation: 'отдолу / под' },
    { italian: 'dentro', translation: 'вътре' },
    { italian: 'fuori', translation: 'вън' },
    { italian: 'vicino', translation: 'близо' },
    { italian: 'lontano', translation: 'далече' },
    { italian: 'dovunque', translation: 'навсякъде' },
  ];

  const degree = [
    { italian: 'molto', translation: 'много' },
    { italian: 'poco', translation: 'малко' },
    { italian: 'abbastanza', translation: 'достатъчно / доста' },
    { italian: 'troppo', translation: 'твърде много' },
    { italian: 'quasi', translation: 'почти' },
    { italian: 'solo', translation: 'само' },
  ];

  return (
    <PageShell title="Наречия">
      <SubHeading label="Време" color={greenTheme.badgeColor} />
      <CardGrid>
        {time.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Начин" color={blueTheme.badgeColor} />
      <CardGrid>
        {manner.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Място" color={goldTheme.badgeColor} />
      <CardGrid>
        {place.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Степен" color={redTheme.badgeColor} />
      <CardGrid>
        {degree.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={redTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default AdverbsBgPage;
