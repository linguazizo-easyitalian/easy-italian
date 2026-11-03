import { PageShell, SubHeading, Row, CardGrid, blueTheme, greenTheme, redTheme, goldTheme, purpleTheme, tealTheme, orangeTheme } from './shared';

function NounsEnPage() {
  const family = [
    { italian: 'padre / papà', english: 'father / dad' },
    { italian: 'madre / mamma', english: 'mother / mom' },
    { italian: 'genitori', english: 'parents' },
    { italian: 'figlio', english: 'son' },
    { italian: 'figlia', english: 'daughter' },
    { italian: 'fratello', english: 'brother' },
    { italian: 'sorella', english: 'sister' },
    { italian: 'nonno', english: 'grandfather' },
    { italian: 'nonna', english: 'grandmother' },
    { italian: 'nipote', english: 'grandchild / nephew / niece' },
    { italian: 'zio', english: 'uncle' },
    { italian: 'zia', english: 'aunt' },
    { italian: 'cugino', english: 'cousin (male)' },
    { italian: 'cugina', english: 'cousin (female)' },
    { italian: 'marito', english: 'husband' },
    { italian: 'moglie', english: 'wife' },
    { italian: 'figlio unico', english: 'only son' },
    { italian: 'figlia unica', english: 'only daughter' },
    { italian: 'gemelli', english: 'twins' },
  ];

  const work = [
    { italian: 'capo', english: 'boss / manager' },
    { italian: 'collega', english: 'colleague / coworker' },
    { italian: 'dipendente', english: 'employee' },
    { italian: 'pausa', english: 'break / pause' },
    { italian: 'riposo', english: 'rest' },
    { italian: 'giorno di riposo', english: 'day off' },
    { italian: 'contratto', english: 'contract' },
    { italian: 'stipendio', english: 'salary' },
    { italian: 'documenti', english: 'documents' },
  ];

  const animals = [
    { italian: 'cane', english: 'dog' },
    { italian: 'gatto', english: 'cat' },
    { italian: 'cavallo', english: 'horse' },
    { italian: 'mucca', english: 'cow' },
    { italian: 'pecora', english: 'sheep' },
    { italian: 'gallo', english: 'rooster' },
    { italian: 'gallina', english: 'hen' },
    { italian: 'coniglio', english: 'rabbit' },
    { italian: 'topo', english: 'mouse' },
    { italian: 'pesce', english: 'fish' },
    { italian: 'uccello', english: 'bird' },
    { italian: 'aquila', english: 'eagle' },
    { italian: 'leone', english: 'lion' },
    { italian: 'tigre', english: 'tiger' },
    { italian: 'elefante', english: 'elephant' },
    { italian: 'scimmia', english: 'monkey' },
    { italian: 'serpente', english: 'snake' },
    { italian: 'giraffa', english: 'giraffe' },
    { italian: 'maiale', english: 'pig' },
    { italian: 'lupo', english: 'wolf' },
    { italian: 'tartaruga', english: 'turtle' },
    { italian: 'rana', english: 'frog' },
  ];

  const food = [
    { italian: 'pane', english: 'bread' },
    { italian: 'acqua', english: 'water' },
    { italian: 'latte', english: 'milk' },
    { italian: 'riso', english: 'rice' },
    { italian: 'pasta', english: 'pasta' },
    { italian: 'carne', english: 'meat' },
    { italian: 'pollo', english: 'chicken' },
    { italian: 'pesce', english: 'fish' },
    { italian: 'formaggio', english: 'cheese' },
    { italian: 'uova', english: 'eggs' },
    { italian: 'zucchero', english: 'sugar' },
    { italian: 'sale', english: 'salt' },
    { italian: 'olio', english: 'oil' },
    { italian: 'frutta', english: 'fruit' },
    { italian: 'verdura', english: 'vegetables' },
    { italian: 'mela', english: 'apple' },
    { italian: 'banana', english: 'banana' },
    { italian: 'pomodoro', english: 'tomato' },
    { italian: 'patata', english: 'potato' },
    { italian: 'cipolla', english: 'onion' },
  ];

  const house = [
    { italian: 'porta', english: 'door' },
    { italian: 'finestra', english: 'window' },
    { italian: 'tavolo', english: 'table' },
    { italian: 'sedia', english: 'chair' },
    { italian: 'letto', english: 'bed' },
    { italian: 'divano', english: 'sofa / couch' },
    { italian: 'armadio', english: 'wardrobe / closet' },
    { italian: 'specchio', english: 'mirror' },
    { italian: 'lampada', english: 'lamp' },
    { italian: 'tappeto', english: 'carpet / rug' },
    { italian: 'cucina', english: 'kitchen' },
    { italian: 'bagno', english: 'bathroom' },
    { italian: 'salotto', english: 'living room' },
    { italian: 'camera', english: 'room' },
    { italian: 'scala', english: 'stairs' },
    { italian: 'soffitto', english: 'ceiling' },
    { italian: 'pavimento', english: 'floor' },
    { italian: 'muro', english: 'wall' },
    { italian: 'chiave', english: 'key' },
    { italian: 'orologio', english: 'clock / watch' },
  ];

  const time = [
    { italian: 'adesso', english: 'now' },
    { italian: 'più tardi', english: 'later' },
    { italian: 'secondo', english: 'second' },
    { italian: 'minuto', english: 'minute' },
    { italian: "mezz'ora", english: 'half an hour' },
    { italian: 'le tre e un quarto', english: 'three fifteen / quarter past three' },
    { italian: 'le tre meno un quarto', english: 'two forty-five / quarter to three' },
    { italian: 'ora', english: 'hour / clock' },
    { italian: 'giorno', english: 'day' },
    { italian: 'anno', english: 'year' },
    { italian: 'secolo', english: 'century' },
  ];

  const travel = [
    { italian: 'viaggio', english: 'trip / journey' },
    { italian: 'viaggiatore', english: 'traveler' },
    { italian: 'turista', english: 'tourist' },
    { italian: 'turismo', english: 'tourism' },
    { italian: 'valigia', english: 'suitcase' },
    { italian: 'passaporto', english: 'passport' },
    { italian: 'biglietto', english: 'ticket' },
    { italian: 'aeroporto', english: 'airport' },
    { italian: 'aereo', english: 'airplane' },
    { italian: 'treno', english: 'train' },
    { italian: 'nave', english: 'ship' },
    { italian: 'autobus', english: 'bus' },
    { italian: 'taxi', english: 'taxi' },
    { italian: 'mappa', english: 'map' },
    { italian: 'destinazione', english: 'destination' },
    { italian: 'hotel', english: 'hotel' },
    { italian: 'spiaggia', english: 'beach' },
    { italian: 'guida', english: 'guide' },
    { italian: 'souvenir', english: 'souvenir' },
    { italian: 'partenza', english: 'departure' },
    { italian: 'ristorante', english: 'restaurant' },
    { italian: 'strada', english: 'street' },
    { italian: 'museo', english: 'museum' },
    { italian: 'negozio', english: 'shop / store' },
  ];

  const directions = [
    { italian: 'a destra', english: 'to the right' },
    { italian: 'a sinistra', english: 'to the left' },
    { italian: 'dritto', english: 'straight ahead' },
    { italian: 'vicino', english: 'near' },
    { italian: 'lontano', english: 'far' },
    { italian: 'qui', english: 'here' },
    { italian: 'lì / là', english: 'there' },
    { italian: 'la strada', english: 'the street / the road' },
    { italian: 'il centro', english: 'the city center' },
  ];

  return (
    <PageShell title="Nouns">
      <SubHeading label="Family — La famiglia" color={blueTheme.badgeColor} />
      <CardGrid>
        {family.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Work — Il lavoro" color={greenTheme.badgeColor} />
      <CardGrid>
        {work.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={greenTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Animals — Gli animali" color={redTheme.badgeColor} />
      <CardGrid>
        {animals.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={redTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Food — I cibi" color={goldTheme.badgeColor} />
      <CardGrid>
        {food.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={goldTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="House Objects — Gli oggetti della casa" color={purpleTheme.badgeColor} />
      <CardGrid>
        {house.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={purpleTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Time — Il tempo" color={blueTheme.badgeColor} />
      <CardGrid>
        {time.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={blueTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Travel — Il viaggio" color={tealTheme.badgeColor} />
      <CardGrid>
        {travel.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={tealTheme} showAudio />
        ))}
      </CardGrid>

      <SubHeading label="Directions — Le direzioni" color={orangeTheme.badgeColor} />
      <CardGrid>
        {directions.map((item) => (
          <Row key={item.italian} italian={item.italian} english={item.english} theme={orangeTheme} showAudio />
        ))}
      </CardGrid>
    </PageShell>
  );
}

export default NounsEnPage;
