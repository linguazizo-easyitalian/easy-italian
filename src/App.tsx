import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FushaPage from './pages/FushaPage';
import MasryPage from './pages/MasryPage';
import AbjadiyaPage from './pages/AbjadiyaPage';
import AfaalPage from './pages/AfaalPage';
import DamairPage from './pages/DamairPage';
import AsmaaPage from './pages/AsmaaPage';
import ReadingEnPage from './pages/en/ReadingEnPage';
import PronounsEnPage from './pages/en/PronounsEnPage';
import NounsEnPage from './pages/en/NounsEnPage';
import VerbsEnPage from './pages/en/VerbsEnPage';
import AdjectivesEnPage from './pages/en/AdjectivesEnPage';
import NumbersEnPage from './pages/en/NumbersEnPage';
import AdverbsEnPage from './pages/en/AdverbsEnPage';
import PrepositionsEnPage from './pages/en/PrepositionsEnPage';
import ExpressionsEnPage from './pages/en/ExpressionsEnPage';
import PhrasesEnPage from './pages/en/PhrasesEnPage';
import BulgarianPage from './pages/BulgarianPage';
import ReadingBgPage from './pages/bg/ReadingBgPage';
import PronounsBgPage from './pages/bg/PronounsBgPage';
import NounsBgPage from './pages/bg/NounsBgPage';
import VerbsBgPage from './pages/bg/VerbsBgPage';
import AdjectivesBgPage from './pages/bg/AdjectivesBgPage';
import NumbersBgPage from './pages/bg/NumbersBgPage';
import AdverbsBgPage from './pages/bg/AdverbsBgPage';
import PrepositionsBgPage from './pages/bg/PrepositionsBgPage';
import ExpressionsBgPage from './pages/bg/ExpressionsBgPage';
import PhrasesBgPage from './pages/bg/PhrasesBgPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fusha" element={<FushaPage />} />
      <Route path="/masry" element={<MasryPage />} />
      <Route path="/abjadiya" element={<AbjadiyaPage />} />
      <Route path="/afaal" element={<AfaalPage />} />
      <Route path="/damair" element={<DamairPage />} />
      <Route path="/asmaa" element={<AsmaaPage />} />
      <Route path="/en/reading" element={<ReadingEnPage />} />
      <Route path="/en/pronouns" element={<PronounsEnPage />} />
      <Route path="/en/nouns" element={<NounsEnPage />} />
      <Route path="/en/verbs" element={<VerbsEnPage />} />
      <Route path="/en/adjectives" element={<AdjectivesEnPage />} />
      <Route path="/en/numbers" element={<NumbersEnPage />} />
      <Route path="/en/adverbs" element={<AdverbsEnPage />} />
      <Route path="/en/prepositions" element={<PrepositionsEnPage />} />
      <Route path="/en/expressions" element={<ExpressionsEnPage />} />
      <Route path="/en/phrases" element={<PhrasesEnPage />} />
      <Route path="/bulgarian" element={<BulgarianPage />} />
      <Route path="/bg/reading" element={<ReadingBgPage />} />
      <Route path="/bg/pronouns" element={<PronounsBgPage />} />
      <Route path="/bg/nouns" element={<NounsBgPage />} />
      <Route path="/bg/verbs" element={<VerbsBgPage />} />
      <Route path="/bg/adjectives" element={<AdjectivesBgPage />} />
      <Route path="/bg/numbers" element={<NumbersBgPage />} />
      <Route path="/bg/adverbs" element={<AdverbsBgPage />} />
      <Route path="/bg/prepositions" element={<PrepositionsBgPage />} />
      <Route path="/bg/expressions" element={<ExpressionsBgPage />} />
      <Route path="/bg/phrases" element={<PhrasesBgPage />} />
    </Routes>
  );
}

export default App;
