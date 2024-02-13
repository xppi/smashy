import React from "react";
import styled from "styled-components";
import { GameSlider } from '../Dashboard/Dashboard'

const Wrapper = styled.div`
  text-align: center;
`;

export default function Airdrop() {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
      <GameSlider />
    </>
  );
}
