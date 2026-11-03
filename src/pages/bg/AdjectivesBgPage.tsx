import { PageShell, SubHeading, Row, CardGrid, redTheme, goldTheme, greenTheme, blueTheme } from './shared';

function AdjectivesBgPage() {
  const appearance = [
    { italian: 'bello', translation: 'красив' },
    { italian: 'brutto', translation: 'грозен' },
    { italian: 'grande', translation: 'голям' },
    { italian: 'piccolo', translation: 'малък' },
    { italian: 'alto', translation: 'висок' },
    { italian: 'basso', translation: 'нисък' },
    { italian: 'grosso', translation: 'дебел' },
    { italian: 'sottile', translation: 'тънък' },
    { italian: 'nuovo', translation: 'нов' },
    { italian: 'vecchio', translation: 'стар' },
  ];

  const personality = [
    { italian: 'buono', translation: 'добър' },
    { italian: 'cattivo', translation: 'лош' },
    { italian: 'felice', translation: 'щастлив' },
    { italian: 'triste', translation: 'тъжен' },
    { italian: 'intelligente', translation: 'умен' },
    { italian: 'stupido', translation: 'глупав' },
    { italian: 'gentile', translation: 'любезен' },
    { italian: 'timido', translation: 'срамежлив' },
    { italian: 'coraggioso', translation: 'смел' },
    { italian: 'pigro', translation: 'мързелив' },
  ];

  const colors = [
    { italian: 'rosso', translation: 'червен' },
    { italian: 'blu', translation: 'син' },
    { italian: 'giallo', translation: 'жълт' },
    { italian: 'verde', translation: 'зелен' },
    { italian: 'bianco', translation: 'бял' },
    { italian: 'nero', translation: 'черен' },
    { italian: 'arancione', translation: 'оранжев' },
    { italian: 'viola', translation: 'лилав' },
    { italian: 'rosa', translation: 'розов' },
    { italian: 'grigio', translation: 'сив' },
    { italian: 'marrone', translation: 'кафяв' },
  ];

  const feelings = [
    { italian: 'stanco', translation: 'уморен' },
    { italian: 'arrabbiato', translation: 'ядосан' },
    { italian: 'spaventato', translation: 'уплашен' },
    { italian: 'sorpreso', translation: 'изненадан' },
    { italian: 'annoiato', translation: 'отегчен' },
    { italian: 'nervoso', translation: 'нервен' },
    { italian: 'calmo', translation: 'спокоен' },
    { italian: 'malato', translation: 'болен' },
  ];

  return (
    <PageShell title="Прилагателни">
      <SubHeading label="Външен вид" color={redTheme.badgeColor} />
      <CardGrid>
        {appearance.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={redTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Характер" color={goldTheme.badgeColor} />
      <CardGrid>
        {personality.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Цветове" color={greenTheme.badgeColor} />
      <CardGrid>
        {colors.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Чувства и състояния" color={blueTheme.badgeColor} />
      <CardGrid>
        {feelings.map((item) => (
          <Row key={item.italian} italian={item.italian} translation={item.translation} theme={blueTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default AdjectivesBgPage;
