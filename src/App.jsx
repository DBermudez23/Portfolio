import './App.css';
import Header from './components/Header';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-gray-900">
      <div className="w-full lg:w-[280px] flex-shrink-0">
        <Header />
      </div>
      <div className="w-full flex-grow overflow-y-auto">
        <Scroll />
      </div>
    </div>
  );
}
export default App;