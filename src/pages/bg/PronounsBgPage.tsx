import { PageShell, SubHeading, Row, CardGrid, OrnamentalDivider, greenTheme, blueTheme } from './shared';

function PronounsBgPage() {
  const personal = [
    { italian: 'io', translation: 'аз' },
    { italian: 'tu', translation: 'ти' },
    { italian: 'lui', translation: 'той' },
    { italian: 'lei', translation: 'тя' },
    { italian: 'Lei', translation: 'Вие (формално, ед.ч.)' },
    { italian: 'noi', translation: 'ние' },
    { italian: 'voi', translation: 'вие (мн.ч.)' },
    { italian: 'loro', translation: 'те' },
  ];

  const demonstrativeNear = [
    { italian: 'questo', translation: 'този (м. ед.)' },
    { italian: 'questa', translation: 'тази (ж. ед.)' },
    { italian: 'questi', translation: 'тези (м. мн.)' },
    { italian: 'queste', translation: 'тези (ж. мн.)' },
  ];

  const demonstrativeFar = [
    { italian: 'quello', translation: 'онзи (м. ед.)' },
    { italian: 'quella', translation: 'онази (ж. ед.)' },
    { italian: 'quelli', translation: 'онези (м. мн.)' },
    { italian: 'quelle', translation: 'онези (ж. мн.)' },
  ];

  return (
    <PageShell title="Местоимения">
      <SubHeading label="Лични местоимения" color={greenTheme.badgeColor} />
      <CardGrid>
        {personal.map((p) => (
          <Row key={p.italian} italian={p.italian} translation={p.translation} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <div className="flex flex-col items-center pt-10 pb-2">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl tracking-wide"
          style={{ fontFamily: "'Amiri', serif", fontWeight: 700, color: '#3B2A14' }}
        >
          Показателни местоимения
        </h1>
        <OrnamentalDivider />
      </div>

      <SubHeading label="Близки (този / тези)" color={blueTheme.badgeColor} />
      <CardGrid>
        {demonstrativeNear.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Далечни (онзи / онези)" color={blueTheme.badgeColor} />
      <CardGrid>
        {demonstrativeFar.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default PronounsBgPage;
