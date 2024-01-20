import { ChevronRight, ExternalLink } from 'lucide-react';
import './App.css';
import { Banner } from './components/banner';
import { Feedback } from './components/feedback';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Project } from './components/project';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="h-full w-full relative">
      <Navbar />
      <Header />
      <Banner />
      <Project />
      <Feedback />

      <div className='justify-center pt-8 flex px-4 md:px-8 w-full gap-2'>
        <p className='shrink-0 bg-slate-400 text-slate-100 text-md font-normal px-2'>Learn more</p>
        <p className='text-neutral-800 font-normal text-md'>about our listing process, as well as our additional staging and <span>design work</span>.</p>
      </div>
      <div className='justify-center pb-8 flex px-4 md:px-8 w-full gap-2'>
        <button className="mt-4 hover:bg-blue-500 hover:border-transparent transition-all hover:text-white border-2 border-neutral-800 py-2 px-4 text-sm text-neutral-800 rounded-full flex items-center gap-2 bottom-8 left-8">
          <p>Learn more</p>
          <ExternalLink className='w-4 h-4' />
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
