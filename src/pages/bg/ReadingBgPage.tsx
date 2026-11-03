import { useState } from 'react';
import { X } from 'lucide-react';
import { AudioCell } from '../../components/AudioCell';
import { OrnamentalDivider, LeafDecoration, BottomBlobs } from './shared';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const italianAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Z'];

const bulgarianMapping: Record<string, string> = {
  'A': 'а',
  'B': 'би',
  'C': 'чи',
  'D': 'ди',
  'E': 'е',
  'F': 'ефе',
  'G': 'джи',
  'H': 'ака',
  'I': 'и',
  'L': 'еле',
  'M': 'еме',
  'N': 'ене',
  'O': 'о',
  'P': 'пи',
  'Q': 'ку',
  'R': 'ере',
  'S': 'есе',
  'T': 'ти',
  'U': 'у',
  'V': 'ву',
  'Z': 'дзета',
};

const specialCases = [
  { italian: 'chi', translation: 'ки (който)' },
  { italian: 'che', translation: 'ке (какво/че)' },
  { italian: 'ci', translation: 'чи (с гласна)' },
  { italian: 'ce', translation: 'че (с гласна)' },
  { italian: 'ghi', translation: 'ги (твърдо г)' },
  { italian: 'ghe', translation: 'ге (твърдо г)' },
  { italian: 'gi', translation: 'джи (меко г)' },
  { italian: 'ge', translation: 'дже (меко г)' },
  { italian: 'sci', translation: 'ши (ш звук)' },
  { italian: 'sce', translation: 'ше (ш звук)' },
  { italian: 'gli', translation: 'ли (ль звук)' },
  { italian: 'gn', translation: 'ни (нь звук)' },
];

function ReadingBgPage() {
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
        onClick={() => navigate('/bulgarian')}
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
          Четене — Азбуката
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

            {/* Bulgarian pronunciation */}
            <div
              className="flex-1 text-left text-3xl md:text-4xl px-2"
              style={{ fontFamily: "'Amiri', serif", fontWeight: 700, color: '#2E7D32' }}
            >
              {bulgarianMapping[letter]}
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
          Специални случаи
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
              {item.translation}
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
                ci + гласна (a/o/u/e) =
              </div>
              <div className="text-2xl font-bold" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                „ч“ + втората гласна
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Пример: ciao = чао
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Означава „здравей“
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
                gi + гласна (a/o/u/e) =
              </div>
              <div className="text-2xl font-bold" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                „дж“ + втората гласна
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Пример: giallo = джало
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Не „джи-ало“
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Означава „жълт“
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
                Първата буква в началото на изречението или в имената на хората е главна, а останалите букви са малки.
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
                Никога не се произнася — прескачаме го и продължаваме със следващата буква.
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
                Като българското „е“ но по-кратко.
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
                Когато има една буква S между две гласни, се произнася като „з“.
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Пример: Casa = каза
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Означава „къща“
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
                Когато има едно Z или двойно ZZ между две гласни, се произнася като „ц“.
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Пример: lezione = лецоне (урок)
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Пример: pazzo = пацо (луд)
              </div>
              <div className="text-xl" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Когато преди Z няма съгласна и следва гласна, Z се произнася „дз“.
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Пример: zio = дзио (чичо)
              </div>
              <div className="text-xl" style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Когато преди Z има съгласна и следва гласна, Z става „дз“.
              </div>
              <div className="text-xl" style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}>
                Пример: zanzara = дзандзара (комар)
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

export default ReadingBgPage;
