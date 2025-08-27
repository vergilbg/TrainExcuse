import React from 'react';

export const excuses = [
  "Signal failure caused by stray sheep on the tracks.",
  "Driver delayed after stopping to rescue a royal corgi.",
  "Leaves on the line formed into a protest march.",
  "Points frozen by an unexpected ice cream truck.",
  "Train held up while staff made a perfect cup of tea.",
  "Delay due to a pigeon refusing to vacate the driver's seat.",
  "Tardis parked on platform 9 blocking departure.",
  "Conductor stuck in queue at the chippy.",
  "Unexpected detour to scenic countryside for photo ops.",
  "Tracks temporarily borrowed by the Hogwarts Express."
];

export default function App() {
  const [excuse, setExcuse] = React.useState('');

  const generateExcuse = () => {
    const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
    setExcuse(randomExcuse);
  };

  return (
    <div className="container">
      <header>
        <span className="icon" role="img" aria-label="train">🚆</span>
        <h1>UK Train Excuse Generator</h1>
      </header>
      <button onClick={generateExcuse}>Generate Excuse</button>
      {excuse && <p className="excuse" data-testid="excuse">{excuse}</p>}
    </div>
  );
}
