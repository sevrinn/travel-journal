import './App.css';
import Nav from './components/Nav.js';
import Entry from './components/Entry.js';
import journalData from './journal-entries'






function App() {

  const entryElements = journalData.map(data => {
    return (
      <Entry 
        country={data.country} 
        location={data.location} 
        googleMapsLink={data.googleMapsLink} 
        startDate={data.startDate} 
        endDate={data.endDate} 
        content={data.content}
        img={data.imageUrl}
        altText={data.altText}
      />
    )
   })

  return (
    <div className="App">
      <Nav />
      {entryElements}
    </div>
  );
}

export default App;
