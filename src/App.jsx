import './App.css';
import Header from './components/Header';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-gray-900">
      <Header />
      <Scroll/>
    </div>
  );
}

export default App;