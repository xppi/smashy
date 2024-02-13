import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  text-align: center;
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
      <div>
        <h1>$SMSH Airdrop Tutorial</h1>
        <h2>Earn Airdrop Points on smashy.gg!</h2>

        <p>
          Welcome to the $SMSH Airdrop program on smashy.gg! Play and wager to
          collect more Airdrop points and earn fantastic rewards.
        </p>

        <h3>How to Earn Airdrop Points:</h3>
        <ol>
          <li>Play games on smashy.gg and complete challenges.</li>
          <li>
            Wager on your favorite games to earn additional Airdrop points.
          </li>
          <li>Participate in special events and promotions on the platform.</li>
        </ol>

        <h3>How Does the Airdrop Work?</h3>
        <p>
          The more you play and wager, the more Airdrop points you accumulate.
          These points can be redeemed for various rewards, such as exclusive
          in-game items, discounts, and much more!
        </p>

        <h3>Tips for Maximum Airdrop Points:</h3>
        <ul>
          <li>
            Explore different games and challenges to maximize your points.
          </li>
          <li>Don't miss out on special promotions and events on smashy.gg.</li>
          <li>
            Stay active and engaged to continuously collect Airdrop points.
          </li>
        </ul>

        <p>
          Ready to get started? Visit smashy.gg now and earn your Airdrop
          points!
        </p>

        <p>Have fun and happy gaming!</p>
      </div>
    </>
  );
}
