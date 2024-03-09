import './App.css';
import { Newsblock } from './components/Newsblock';
import { Bunner } from './components/Bunner';
import { YandexSearch } from './components/Search';
import { InformationBlock } from './components/InformationBlock';

function App() {
  return (
    <main>
        <Newsblock />
        <YandexSearch />
        <Bunner />
        <InformationBlock />
    </main>
  )
}

export default App
