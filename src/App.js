import './App.css';
import Header, { profileMenuItems } from './Header/Header';
import Footer from './Footer/Footer';
import MiniProject from './Project/MiniProject';
import MidiumProject from './Project/MidiumProject';
import LargeProject from './Project/LargeProject';
import { Routes, Route } from "react-router-dom";
import Testimonials from './Footer/Testimonials';
import Vision from './Header/Vision';

function App() {
  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans overflow-x-hidden">
      <Header />
     
      <main className="px-4 md:px-16 py-10 space-y-20">
        <Routes>
          <Route path="/" element={
            <>
              <section className="z-10 transform transition-all duration-500 shadow-2xl rounded-3xl bg-white/5 dark:bg-black/10 backdrop-blur p-6 hover:scale-[1.02]">
                <MiniProject />
              </section>
              <section className="z-10 transform transition-all duration-500 shadow-2xl rounded-3xl bg-white/5 dark:bg-black/10 backdrop-blur p-6 hover:scale-[1.02]">
                <MidiumProject />
              </section>
              <section className="z-10 transform transition-all duration-500 shadow-2xl rounded-3xl bg-white/5 dark:bg-black/10 backdrop-blur p-6 hover:scale-[1.02]">
                <LargeProject />
              </section>
            </>
          } />
          <Route path="/vision" element={<Vision />} />
          {/* Dynamically render routes from profileMenuItems */}
          {profileMenuItems.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </main>
        <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;
