import React from "react";
import styled from "styled-components";
import { WelcomeBanner } from "./WelcomeBanner";

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const Bonus = styled.button`
  width: fit-content !important;
  margin-right: auto !important;
  margin-left: auto !important;
  padding: 10px 30px !important;
  cursor: pointer;
  color: #f9ff08;
  border-radius: 0px;
  border: none;
  background: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.2s;
  &:hover {
    color: #ffa700;
  }
`;

export default function Airdrop() {
  return (
    <>
      <WelcomeBanner />

      <div>
        <h1>$SMSH Airdrop Tutorial</h1>
        <h2>Verdienen Sie Airdrop-Punkte auf smashy.gg!</h2>

        <p>
          Herzlich willkommen zum $SMSH Airdrop-Programm auf smashy.gg! Spielen
          und setzen Sie, um mehr Airdrop-Punkte zu sammeln und tolle
          Belohnungen zu erhalten.
        </p>

        <h3>So verdienen Sie Airdrop-Punkte:</h3>
        <ol>
          <li>
            Spielen Sie Spiele auf smashy.gg und schließen Sie Herausforderungen
            ab.
          </li>
          <li>
            Setzen Sie auf Ihre Lieblingsspiele und verdienen Sie zusätzliche
            Airdrop-Punkte.
          </li>
          <li>
            Teilnahme an speziellen Events und Aktionen auf der Plattform.
          </li>
        </ol>

        <h3>Wie funktioniert der Airdrop?</h3>
        <p>
          Je mehr Sie spielen und setzen, desto mehr Airdrop-Punkte sammeln Sie.
          Diese Punkte können Sie gegen verschiedene Belohnungen einlösen, wie
          z. B. exklusive In-Game-Gegenstände, Rabatte und vieles mehr!
        </p>

        <h3>Tipps für maximale Airdrop-Punkte:</h3>
        <ul>
          <li>
            Erkunden Sie verschiedene Spiele und Herausforderungen, um Ihre
            Punkte zu maximieren.
          </li>
          <li>Verpassen Sie keine Sonderaktionen und Events auf smashy.gg.</li>
          <li>
            Bleiben Sie aktiv und engagiert, um kontinuierlich Airdrop-Punkte zu
            sammeln.
          </li>
        </ul>

        <p>
          Bereit, loszulegen? Besuchen Sie jetzt smashy.gg und verdienen Sie
          Ihre Airdrop-Punkte!
        </p>

        <p>Viel Spaß und gute Jagd!</p>
      </div>
    </>
  );
}
