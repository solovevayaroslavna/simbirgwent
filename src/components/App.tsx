import React from 'react';
import './App.css';
import createCards from '../utils/Images.utils';
import { Card } from './Card';

function App() {
  const cards = createCards();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {cards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              text={card.text}
              header={card.header}
            />
          ))}
        </p>
      </header>
    </div>
  );
}

export default App;
