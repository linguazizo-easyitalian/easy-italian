import { PageShell, SubHeading, Row, CardGrid, purpleTheme, greenTheme, blueTheme, redTheme } from './shared';

function VerbsBgPage() {
  const regularAre = [
    { italian: 'parlare', translation: 'да говоря' },
    { italian: 'mangiare', translation: 'да ям' },
    { italian: 'cantare', translation: 'да пея' },
    { italian: 'studiare', translation: 'да уча' },
    { italian: 'lavorare', translation: 'да работя' },
    { italian: 'camminare', translation: 'да ходя' },
    { italian: 'guardare', translation: 'да гледам' },
    { italian: 'ascoltare', translation: 'да слушам' },
  ];

  const regularEre = [
    { italian: 'vedere', translation: 'да видя' },
    { italian: 'ricevere', translation: 'да получа' },
    { italian: 'vendere', translation: 'да продавам' },
    { italian: 'cadere', translation: 'да падам' },
  ];

  const regularIre = [
    { italian: 'dormire', translation: 'да спя' },
    { italian: 'sentire', translation: 'да чувствам / да чувам' },
    { italian: 'partire', translation: 'да тръгвам / да замина' },
    { italian: 'aprire', translation: 'да отворя' },
    { italian: 'finire', translation: 'да завърша' },
  ];

  const irregular = [
    { italian: 'essere', translation: 'да съм' },
    { italian: 'avere', translation: 'да имам' },
    { italian: 'fare', translation: 'да правя' },
    { italian: 'andare', translation: 'да отивам' },
    { italian: 'venire', translation: 'да идвам' },
    { italian: 'dire', translation: 'да казвам' },
    { italian: 'dare', translation: 'да давам' },
    { italian: 'stare', translation: 'да стоя / да бъда' },
    { italian: 'volere', translation: 'да искам' },
    { italian: 'potere', translation: 'да мога' },
    { italian: 'dovere', translation: 'трябва / длъжен съм' },
    { italian: 'sapere', translation: 'да знам (факт)' },
    { italian: 'conoscere', translation: 'да познавам (човек/място)' },
  ];

  return (
    <PageShell title="Глаголи">
      <SubHeading label="Правилни — ARE глаголи" color={purpleTheme.badgeColor} />
      <CardGrid>
        {regularAre.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={purpleTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Правилни — ERE глаголи" color={greenTheme.badgeColor} />
      <CardGrid>
        {regularEre.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Правилни — IRE глаголи" color={blueTheme.badgeColor} />
      <CardGrid>
        {regularIre.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Неправилни глаголи" color={redTheme.badgeColor} />
      <CardGrid>
        {irregular.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={redTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default VerbsBgPage;
