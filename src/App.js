
import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import data from './data';

function App() {

  const renderSectionsArray = data.map((place) => {
    return (
      <Section key={place.title} {...place} />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {renderSectionsArray}
    </div>
  );
}

export default App;
