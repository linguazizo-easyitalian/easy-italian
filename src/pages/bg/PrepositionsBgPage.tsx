import { PageShell, SubHeading, Row, CardGrid, blueTheme, greenTheme, goldTheme } from './shared';

function PrepositionsBgPage() {
  const simple = [
    { italian: 'di', translation: 'от / на (принадлежност)' },
    { italian: 'a', translation: 'към / в' },
    { italian: 'da', translation: 'от / при' },
    { italian: 'in', translation: 'в / вътре' },
    { italian: 'con', translation: 'с' },
    { italian: 'su', translation: 'върху / на' },
    { italian: 'per', translation: 'за / през' },
    { italian: 'tra / fra', translation: 'между' },
  ];

  const articulated = [
    { italian: 'del (di + il)', translation: 'на (м. ед.)' },
    { italian: 'della (di + la)', translation: 'на (ж. ед.)' },
    { italian: 'dei (di + i)', translation: 'на (м. мн.)' },
    { italian: 'delle (di + le)', translation: 'на (ж. мн.)' },
    { italian: 'al (a + il)', translation: 'към / на (м. ед.)' },
    { italian: 'alla (a + la)', translation: 'към / на (ж. ед.)' },
    { italian: 'nel (in + il)', translation: 'в (м. ед.)' },
    { italian: 'nella (in + la)', translation: 'в (ж. ед.)' },
    { italian: 'sul (su + il)', translation: 'върху (м. ед.)' },
    { italian: 'sulla (su + la)', translation: 'върху (ж. ед.)' },
  ];

  const common = [
    { italian: 'prima di', translation: 'преди' },
    { italian: 'dopo di', translation: 'след' },
    { italian: 'sopra', translation: 'над / отгоре' },
    { italian: 'sotto', translation: 'под / отдолу' },
    { italian: 'dentro', translation: 'вътре в' },
    { italian: 'fuori di', translation: 'вън от' },
    { italian: 'vicino a', translation: 'близо до' },
    { italian: 'lontano da', translation: 'далече от' },
    { italian: 'verso', translation: 'към / към' },
    { italian: 'contro', translation: 'срещу / против' },
  ];

  return (
    <PageShell title="Предлози">
      <SubHeading label="Прости предлози" color={blueTheme.badgeColor} />
      <CardGrid>
        {simple.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Сложни предлози (с член)" color={greenTheme.badgeColor} />
      <CardGrid>
        {articulated.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Предложни изрази" color={goldTheme.badgeColor} />
      <CardGrid>
        {common.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={goldTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default PrepositionsBgPage;
