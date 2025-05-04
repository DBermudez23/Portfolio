import './App.css';
import Header from './components/Header';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-gradient-to-br from-gray-900 via-sky-950 to-gray-900 text-white overflow-x-hidden">
      <div className="w-full lg:w-[25%] flex-shrink-0">
        <Header />
      </div>
      <div className="w-full lg:w-[75%] flex-grow">
        <Scroll />
      </div>
    </div>
  );
}

export default App;
