import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const paragraphs = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", bg: "#ffd700" }, // Gold
    { text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", bg: "#90ee90" }, // LightGreen
    { text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", bg: "#87cefa" }, // LightSkyBlue
    { text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.", bg: "#ffb6c1" }, // LightPink
    { text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.", bg: "#ffa500" }, // Orange
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", padding: "20px" }}>
      {paragraphs.map((p, index) => (
        <p
          key={index}
          style={{
            backgroundColor: p.bg,
            color: "#000",
            padding: "8px",
          }}
        >
          {p.text}
        </p>
      ))}
    </div>
  );
}

export default App;
