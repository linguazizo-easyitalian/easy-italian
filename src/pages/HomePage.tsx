import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { GoogleSignInButton } from '../components/GoogleSignInButton';
import { LogOut, User } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/unnamed.jpg)' }}
        ></div>

        <div className="relative flex flex-col items-center pt-10 md:pt-16 pb-16">
          <div className="mt-16 mb-1 px-4">
            <h2
              className="text-[3rem] sm:text-6xl md:text-8xl lg:text-[8rem] whitespace-nowrap text-center"
              style={{
                fontFamily: "'Amiri', serif",
                fontWeight: 700,
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.45))',
                direction: 'rtl',
                lineHeight: 1.1,
              }}
            >
              <span style={{
                color: '#E83535',
                textShadow: '2px 2px 0px rgba(120,0,0,0.5), 4px 4px 10px rgba(0,0,0,0.25)',
              }}>أهلاً</span>
              <span style={{
                color: '#F0F0F0',
                textShadow: '2px 2px 0px rgba(0,0,0,0.3), 4px 4px 10px rgba(0,0,0,0.25)',
                margin: '0 0.15em',
              }}> و</span>
              <span style={{
                color: '#28B028',
                textShadow: '2px 2px 0px rgba(0,60,0,0.5), 4px 4px 10px rgba(0,0,0,0.25)',
              }}>سهلاً</span>
            </h2>
          </div>

          <div className="mb-8 px-4">
            <h1
              className="text-[3.75rem] sm:text-7xl md:text-9xl lg:text-[10rem] whitespace-nowrap"
              style={{
                fontFamily: "'Permanent Marker', cursive",
                letterSpacing: '0.05em',
                filter: 'drop-shadow(4px 6px 8px rgba(0,0,0,0.35))'
              }}
            >
              {['B', 'e', 'n'].map((letter, i) => (
                <span
                  key={i}
                  style={{
                    color: '#28B028',
                    textShadow: '3px 3px 0px rgba(0,80,0,0.7), 6px 6px 8px rgba(0,0,0,0.3)',
                    WebkitTextStroke: '1px rgba(0,60,0,0.3)',
                    display: 'inline-block',
                    transform: 'rotate(8deg)',
                  }}
                >{letter}</span>
              ))}
              {['v', 'e', 'n'].map((letter, i) => (
                <span
                  key={i + 3}
                  style={{
                    color: '#F0F0F0',
                    textShadow: '3px 3px 0px rgba(0,0,0,0.4), 6px 6px 8px rgba(0,0,0,0.3)',
                    WebkitTextStroke: '1px rgba(0,0,0,0.15)',
                    display: 'inline-block',
                    transform: 'rotate(8deg)',
                  }}
                >{letter}</span>
              ))}
              {['u', 't', 'o'].map((letter, i) => (
                <span
                  key={i + 6}
                  style={{
                    color: '#E83535',
                    textShadow: '3px 3px 0px rgba(150,0,0,0.7), 6px 6px 8px rgba(0,0,0,0.3)',
                    WebkitTextStroke: '1px rgba(100,0,0,0.3)',
                    display: 'inline-block',
                    transform: 'rotate(8deg)',
                  }}
                >{letter}</span>
              ))}
            </h1>
          </div>

          <div className="mb-8">
            {!loading && (
              user ? (
                <div className="flex items-center gap-4 md:gap-6 bg-white/90 backdrop-blur-sm px-6 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-xl md:rounded-2xl shadow-lg border-2 border-gray-200">
                  <div className="flex items-center gap-3 md:gap-4">
                    <User className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 text-gray-700" />
                    <span className="text-base md:text-xl lg:text-2xl font-semibold text-gray-700">{user.email}</span>
                  </div>
                  <button
                    onClick={signOut}
                    className="p-2 md:p-3 hover:bg-gray-100 rounded-full transition-colors"
                    title="Sign out"
                  >
                    <LogOut className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-600" />
                  </button>
                </div>
              ) : (
                <GoogleSignInButton />
              )
            )}
          </div>

          <div className="flex gap-6 md:gap-8">
            <button
              onClick={() => navigate('/fusha')}
              className="px-10 py-4 md:px-16 lg:px-24 xl:px-32 rounded-2xl font-bold text-xl md:text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:brightness-110 active:scale-100"
              style={{
                background: 'linear-gradient(160deg, #D9434B 0%, #B5232D 55%, #8E1820 100%)',
                color: '#FFF6E0',
                fontFamily: "'Amiri', serif",
                textShadow: '0 1px 2px rgba(60,0,0,0.45)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 20px rgba(120,10,20,0.35)',
                border: '2px solid #E0B55A',
              }}
            >
              بالعربية
            </button>

            <button
              onClick={() => navigate('/masry')}
              className="px-10 py-4 md:px-16 lg:px-24 xl:px-32 rounded-2xl font-bold text-xl md:text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:brightness-110 active:scale-100"
              style={{
                background: 'linear-gradient(160deg, #6DB5E4 0%, #3A8CCB 55%, #2A6FA8 100%)',
                color: '#FFFFFF',
                textShadow: '0 1px 2px rgba(10,40,70,0.45)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 20px rgba(20,70,110,0.35)',
                border: '2px solid #E0B55A'
              }}
            >
              English
            </button>
          </div>

          <button
            onClick={() => navigate('/bulgarian')}
            className="px-10 py-4 md:px-16 lg:px-24 xl:px-32 rounded-2xl font-bold text-xl md:text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:brightness-110 active:scale-100 mt-6"
            style={{
              background: 'linear-gradient(160deg, #1FB188 0%, #00966E 55%, #006F50 100%)',
              color: '#FFFFFF',
              fontFamily: "'Amiri', serif",
              textShadow: '0 1px 2px rgba(0,40,30,0.45)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 20px rgba(0,80,60,0.35)',
              border: '2px solid #D6A500',
            }}
          >
            Български
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
