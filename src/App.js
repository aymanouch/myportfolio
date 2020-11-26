import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Thebar from "./components/Thebar/Thebar";
import Herosection from "./components/Herosection/Herosection";
const data = require('./Json-folder/data.json');
function App() {
  return (
    <div className="App">
      <Navbar />
      {data.data.map(item => {
        return(<Herosection
          key={item.id}
          dir={item.dir} 
          img={{...item.img}} 
          content={{...item.content}} 
          pur={item.pur}
          someLink={item.someLink}
          img={item.img}
          logos={{...item.logos}}
          statique={{...item.statique}}
          card={{...item.card}}
          />);
      })}
      <Thebar />
    </div>
  );
}

export default App;
