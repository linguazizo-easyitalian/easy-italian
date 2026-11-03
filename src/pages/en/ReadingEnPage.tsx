import { useState } from 'react';
import { X } from 'lucide-react';
import { AudioCell } from '../../components/AudioCell';
import { OrnamentalDivider, LeafDecoration, BottomBlobs } from './shared';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const italianAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Z'];

const englishMapping: Record<string, string> = {
  'A': 'ah',
  'B': 'bee',
  'C': 'chee',
  'D': 'dee',
  'E': 'eh',
  'F': 'effe',
  'G': 'gee',
  'H': 'acca',
  'I': 'ee',
  'L': 'elle',
  'M': 'emme',
  'N': 'enne',
  'O': 'oh',
  'P': 'pee',
  'Q': 'cu',
  'R': 'erre',
  'S': 'esse',
  'T': 'tee',
  'U': 'oo',
  'V': 'vu',
  'Z': 'zeta',
};

const specialCases = [
  { italian: 'chi', english: 'kee (who)' },
  { italian: 'che', english: 'keh (what/that)' },
  { italian: 'ci', english: 'chee (with vowel)' },
  { italian: 'ce', english: 'cheh (with vowel)' },
  { italian: 'ghi', english: 'gee (hard g)' },
  { italian: 'ghe', english: 'geh (hard g)' },
  { italian: 'gi', english: 'jee (soft g)' },
  { italian: 'ge', english: 'jeh (soft g)' },
  { italian: 'sci', english: 'shee (sh sound)' },
  { italian: 'sce', english: 'sheh (sh sound)' },
  { italian: 'gli', english: 'lyee (ll sound)' },
  { italian: 'gn', english: 'nyee (ñ sound)' },
];

function ReadingEnPage() {
  const navigate = useNavigate();
  const [showHInfo, setShowHInfo] = useState(false);
  const [showAInfo, setShowAInfo] = useState(false);
  const [showEInfo, setShowEInfo] = useState(false);
  const [showSInfo, setShowSInfo] = useState(false);
  const [showZInfo, setShowZInfo] = useState(false);
  const [showCiInfo, setShowCiInfo] = useState(false);
  const [showGiInfo, setShowGiInfo] = useState(false);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#F5EDD8', direction: 'ltr' }}
    >
      <button
        onClick={() => navigate('/masry')}
        className="absolute top-5 left-5 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
        style={{ backgroundColor: 'rgba(139,106,62,0.15)', color: '#5C4A32' }}
        title="back"
      >
        <ArrowRight size={22} className="rotate-180" />
      </button>

      <div className="flex flex-col items-center pt-10 pb-2">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl tracking-wide"
          style={{ fontFamily: "'Amiri', serif", fontWeight: 700, color: '#3B2A14' }}
        >
          Reading — The Alphabet
        </h1>
        <OrnamentalDivider />
      </div>

      {/* Alphabet cards */}
      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6">
        {italianAlphabet.map((letter) => (
          <div
            key={letter}
            className="flex items-center justify-between rounded-2xl overflow-hidden transition-all hover:scale-[1.015] hover:shadow-md"
            style={{
              background: 'linear-gradient(135deg, #FFFDF5 0%, #FDF3DC 100%)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
              border: '1.5px solid rgba(255,255,255,0.8)',
            }}
          >
            {/* Italian letter badge (left side — LTR) */}
            <div
              className="m-2 min-w-14 h-14 md:min-w-16 md:h-16 px-3 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#F5E6C8' }}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-bold" style={{ color: '#8B6F1F', fontFamily: "'Amiri', serif" }}>
                  {letter}
                </span>
                <span className="text-2xl md:text-3xl" style={{ color: '#B8973A', fontFamily: "'Amiri', serif" }}>
                  {letter.toLowerCase()}
                </span>
              </div>
            </div>

            {/* English pronunciation */}
            <div
              className="flex-1 text-left text-3xl md:text-4xl px-2"
              style={{ fontFamily: "'Amiri', serif", fontWeight: 700, color: '#2E7D32' }}
            >
              {englishMapping[letter]}
            </div>

            {/* Audio + Info (right side — LTR) */}
            <div className="flex items-center gap-1 m-2 flex-shrink-0">
              <AudioCell wordKey={letter} accentColor="#8B6F1F" />
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                {(letter === 'A' || letter === 'H' || letter === 'E' || letter === 'S' || letter === 'Z') && (
                  <button
                    onClick={() =>
                      letter === 'A' ? setShowAInfo(!showAInfo) :
                      letter === 'H' ? setShowHInfo(!showHInfo) :
                      letter === 'E' ? setShowEInfo(!showEInfo) :
                      letter === 'Z' ? setShowZInfo(!showZInfo) :
                      setShowSInfo(!showSInfo)
                    }
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all hover:scale-110 shadow-md"
                    style={{ backgroundColor: '#FFD54F', color: '#5C4A32' }}
                  >
                    !
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special cases title */}
      <div className="flex flex-col items-center pt-10 pb-2">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl tracking-wide"
          style={{ fontFamily: "'Amiri', serif", fontWeight: 700, color: '#3B2A14' }}
        >
          Special Cases
        </h2>
        <OrnamentalDivider width="w-10 md:w-16" />
      </div>

      {/* Special cases cards */}
      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {specialCases.map((item) => (
          <div
            key={item.italian}
            className="flex items-center justify-between rounded-2xl overflow-hidden transition-all hover:scale-[1.015] hover:shadow-md"
            style={{
              background: 'linear-gradient(135deg, #F5FBF7 0%, #E4F4EB 100%)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
              border: '1.5px solid rgba(255,255,255,0.8)',
            }}
          >
            <div
              className="m-2 min-w-14 h-14 md:min-w-16 md:h-16 px-3 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#D8EDE0' }}
            >
              <span className="text-2xl md:text-3xl font-bold" style={{ color: '#4A8B62', fontFamily: "'Amiri', serif" }}>
                {item.italian}
              </span>
            </div>
            <div
              className="flex-1 text-left text-2xl md:text-3xl px-2"
              style={{ fontFamily: "'Amiri', serif", fontWeight: 700, color: '#2E7D32' }}
            >
              {item.english}
            </div>
            <div className="flex items-center gap-1 m-2 flex-shrink-0">
              <AudioCell wordKey={item.italian} accentColor="#4A8B62" />
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                {(item.italian === 'gi' || item.italian === 'ci') && (
                  <button
                    onClick={() => item.italian === 'gi' ? setShowGiInfo(!showGiInfo) : setShowCiInfo(!showCiInfo)}
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all hover:scale-110 shadow-md"
                    style={{ backgroundColor: '#FFD54F', color: '#5C4A32' }}
                  >
                    !
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <LeafDecoration />
      <BottomBlobs />

      {/* Info modals */}
      {showCiInfo && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]" onClick={() => setShowCiInfo(false)} />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-left w-11/12 max-w-md z-[1000]"
            style={{ backgroundColor: '#FFF3CD', border: '2px solid #FFD54F' }}
          >
            <div className="space-y-2">
              <div className="text-2xl font-bold" style={{ color: '#5C4A32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                ci + a/o/u/e (any vowel) =
              </div>
              <div className="text-2xl font-bold" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                "ch" + the second vowel
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Example: ciao = chao
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                It means "hello"
              </div>
            </div>
            <button
              onClick={() => setShowCiInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: '#FFD54F', color: '#5C4A32' }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showGiInfo && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]" onClick={() => setShowGiInfo(false)} />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-left w-11/12 max-w-md z-[1000]"
            style={{ backgroundColor: '#FFF3CD', border: '2px solid #FFD54F' }}
          >
            <div className="space-y-2">
              <div className="text-2xl font-bold" style={{ color: '#5C4A32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                gi + a/o/u/e (any vowel) =
              </div>
              <div className="text-2xl font-bold" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                "j" + the second vowel
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Example: giallo = jallo
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Not "gee-allo"
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                It means "yellow"
              </div>
            </div>
            <button
              onClick={() => setShowGiInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: '#FFD54F', color: '#5C4A32' }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showAInfo && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]" onClick={() => setShowAInfo(false)} />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-left w-11/12 max-w-md z-[1000]"
            style={{ backgroundColor: '#FFF3CD', border: '2px solid #FFD54F' }}
          >
            <div className="space-y-2">
              <div className="text-xl font-bold" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                The first letter at the beginning of a sentence or in people's names is capitalized, and the rest of the letters are lowercase.
              </div>
            </div>
            <button
              onClick={() => setShowAInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: '#FFD54F', color: '#5C4A32' }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showHInfo && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]" onClick={() => setShowHInfo(false)} />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-5 pb-12 rounded-xl shadow-2xl text-center w-auto max-w-xs z-[1000]"
            style={{ backgroundColor: '#FFF3CD', border: '2px solid #FFD54F' }}
          >
            <div className="space-y-2">
              <div className="text-xl font-bold" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                It is never pronounced — we skip it and continue with the next letter.
              </div>
            </div>
            <button
              onClick={() => setShowHInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: '#FFD54F', color: '#5C4A32' }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showEInfo && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]" onClick={() => setShowEInfo(false)} />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-5 pb-12 rounded-xl shadow-2xl text-center w-auto max-w-xs z-[1000]"
            style={{ backgroundColor: '#FFF3CD', border: '2px solid #FFD54F' }}
          >
            <div className="space-y-2">
              <div className="text-xl font-bold text-center" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Like the Egyptian pronunciation but shorter.
              </div>
            </div>
            <button
              onClick={() => setShowEInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: '#FFD54F', color: '#5C4A32' }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showSInfo && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]" onClick={() => setShowSInfo(false)} />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-left w-11/12 max-w-md z-[1000]"
            style={{ backgroundColor: '#FFF3CD', border: '2px solid #FFD54F' }}
          >
            <div className="space-y-2">
              <div className="text-xl" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                When there is a single letter S between two vowels, it is pronounced like "z".
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Example: Casa = kaza
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                It means "house"
              </div>
            </div>
            <button
              onClick={() => setShowSInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: '#FFD54F', color: '#5C4A32' }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showZInfo && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]" onClick={() => setShowZInfo(false)} />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-left w-11/12 max-w-md z-[1000]"
            style={{ backgroundColor: '#FFF3CD', border: '2px solid #FFD54F' }}
          >
            <div className="space-y-2">
              <div className="text-xl" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                When there is a single Z or double ZZ between two vowels, it is pronounced like "ts".
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Example: lezione = leh-tsyoh-neh (lesson)
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Example: pazzo = pat-so (crazy)
              </div>
              <div className="text-xl" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                When there is no consonant before Z and a vowel follows, Z is pronounced "dz".
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Example: zio = dzee-oh (uncle)
              </div>
              <div className="text-xl" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                When there is a consonant before Z and a vowel follows, Z becomes "dz".
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Example: zanzara = dzan-dzara (mosquito)
              </div>
            </div>
            <button
              onClick={() => setShowZInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{ backgroundColor: '#FFD54F', color: '#5C4A32' }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ReadingEnPage;
