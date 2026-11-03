import { PageShell, SubHeading, Row, CardGrid, OrnamentalDivider, greenTheme, blueTheme } from './shared';

function PronounsEnPage() {
  const personal = [
    { italian: 'io', english: 'I' },
    { italian: 'tu', english: 'you (informal, singular)' },
    { italian: 'lui', english: 'he' },
    { italian: 'lei', english: 'she' },
    { italian: 'Lei', english: 'you (formal, singular)' },
    { italian: 'noi', english: 'we' },
    { italian: 'voi', english: 'you (plural)' },
    { italian: 'loro', english: 'they' },
  ];

  const demonstrativeNear = [
    { italian: 'questo', english: 'this (masc. sing.)' },
    { italian: 'questa', english: 'this (fem. sing.)' },
    { italian: 'questi', english: 'these (masc. pl.)' },
    { italian: 'queste', english: 'these (fem. pl.)' },
  ];

  const demonstrativeFar = [
    { italian: 'quello', english: 'that (masc. sing.)' },
    { italian: 'quella', english: 'that (fem. sing.)' },
    { italian: 'quelli', english: 'those (masc. pl.)' },
    { italian: 'quelle', english: 'those (fem. pl.)' },
  ];

  return (
    <PageShell title="Pronouns">
      <SubHeading label="Personal Pronouns" color={greenTheme.badgeColor} />
      <CardGrid>
        {personal.map((p) => (
          <Row key={p.italian} italian={p.italian} english={p.english} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <div className="flex flex-col items-center pt-10 pb-2">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl tracking-wide"
          style={{ fontFamily: "'Amiri', serif", fontWeight: 700, color: '#3B2A14' }}
        >
          Demonstrative Pronouns
        </h1>
        <OrnamentalDivider />
      </div>

      <SubHeading label="Near (this / these)" color={blueTheme.badgeColor} />
      <CardGrid>
        {demonstrativeNear.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Far (that / those)" color={blueTheme.badgeColor} />
      <CardGrid>
        {demonstrativeFar.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default PronounsEnPage;
