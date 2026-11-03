import { PageShell, SubHeading, Row, CardGrid, redTheme, goldTheme, greenTheme, blueTheme } from './shared';

function PhrasesEnPage() {
  const greetings = [
    { italian: 'Ciao!', english: 'Hi! / Bye! (informal)' },
    { italian: 'Buongiorno', english: 'Good morning / Good day' },
    { italian: 'Buonasera', english: 'Good evening' },
    { italian: 'Buonanotte', english: 'Good night' },
    { italian: 'Salve', english: 'Hello (formal)' },
    { italian: 'Arrivederci', english: 'Goodbye (formal)' },
    { italian: 'A presto', english: 'See you soon' },
    { italian: 'A domani', english: 'See you tomorrow' },
  ];

  const politeness = [
    { italian: 'Per favore', english: 'Please' },
    { italian: 'Grazie', english: 'Thank you' },
    { italian: 'Prego', english: 'You\'re welcome' },
    { italian: 'Mi scusi', english: 'Excuse me (formal)' },
    { italian: 'Scusa', english: 'Sorry (informal)' },
    { italian: 'Non c\'è problema', english: 'No problem' },
  ];

  const questions = [
    { italian: 'Come stai?', english: 'How are you? (informal)' },
    { italian: 'Come sta?', english: 'How are you? (formal)' },
    { italian: 'Come ti chiami?', english: 'What is your name? (informal)' },
    { italian: 'Di dove sei?', english: 'Where are you from?' },
    { italian: 'Quanti anni hai?', english: 'How old are you?' },
    { italian: 'Che ore sono?', english: 'What time is it?' },
    { italian: 'Dov\'è...?', english: 'Where is...?' },
    { italian: 'Quanto costa?', english: 'How much does it cost?' },
  ];

  const practical = [
    { italian: 'Non capisco', english: 'I don\'t understand' },
    { italian: 'Capisco', english: 'I understand' },
    { italian: 'Puoi ripetere?', english: 'Can you repeat?' },
    { italian: 'Parla inglese?', english: 'Do you speak English?' },
    { italian: 'Ho bisogno di aiuto', english: 'I need help' },
    { italian: 'Dov\'è il bagno?', english: 'Where is the bathroom?' },
    { italian: 'Mi piace', english: 'I like it' },
    { italian: 'Non mi piace', english: 'I don\'t like it' },
    { italian: 'Ho fame', english: 'I am hungry' },
    { italian: 'Ho sete', english: 'I am thirsty' },
  ];

  return (
    <PageShell title="Daily Phrases">
      <SubHeading label="Greetings & Farewells" color={redTheme.badgeColor} />
      <CardGrid>
        {greetings.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={redTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Politeness" color={goldTheme.badgeColor} />
      <CardGrid>
        {politeness.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Common Questions" color={greenTheme.badgeColor} />
      <CardGrid>
        {questions.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Practical Phrases" color={blueTheme.badgeColor} />
      <CardGrid>
        {practical.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default PhrasesEnPage;
