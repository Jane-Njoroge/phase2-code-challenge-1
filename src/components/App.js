import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./components/HogTile";
import NewHogForm from "./components/NewHogForm";

function App() {
  const [hogData, setHogData] = useState(hogs);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState(new Set());

  const handleHideHog = (name) => {
    setHiddenHogs(new Set(hiddenHogs).add(name));
  };

  const handleAddHog = (newHog) => {
    setHogData([...hogData, newHog]);
  };

  const filteredHogs = hogData
    .filter(hog => !filterGreased || hog.greased)
    .filter(hog => !hiddenHogs.has(hog.name))
    .sort((a, b) => {
      if (sortCriteria === 'name') return a.name.localeCompare(b.name);
      if (sortCriteria === 'weight') return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />

  <div>
    <button onClick={() => setFilterGreased(!filterGreased)}>
      {filterGreased ? "Show All" : "Show Only Greased"}
    </button>
    <button onClick={() => setSortCriteria('name')}>Sort by Name</button>
    <button onClick={() => setSortCriteria('weight')}>Sort by Weight</button>
  </div>

  <NewHogForm onAddHog={handleAddHog} />

  <div className="ui grid container">
    {filteredHogs.map(hog => (
      <HogTile key={hog.name} hog={hog} onHide={handleHideHog} />
    ))}
  </div>
</div>
  );
}

export default App;