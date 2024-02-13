import React from "react";
import styled, { css } from "styled-components";
import { GameSlider } from "../Dashboard/Dashboard";

const baseTextStyles = css`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #f1f1f1;
  margin: 0;
  padding: 0.25em 0;
`;

const Wrapper = styled.div`
  text-align: center;
  border-radius: 14px;
  padding: 20px;
  ${baseTextStyles};
  background: #333; /* Subtle background for depth, replace with desired non-color style if needed */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
`;

const Title = styled.h1`
  ${baseTextStyles};
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.h4`
  ${baseTextStyles};
  font-weight: normal;
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-size: 1.2em;
`;

const Text = styled.p`
  ${baseTextStyles};
  line-height: 1.6;
  margin-top: 1em;
`;

const listStyles = css`
  text-align: left;
  display: inline-block;
  margin: auto;
  padding-left: 20px; /* Ensure alignment */
`;

const List = styled.ol`
  ${listStyles};
`;

const ListItem = styled.li`
  ${baseTextStyles};
  margin-bottom: 10px;
`;

const TipsList = styled.ul`
  ${listStyles};
`;

const TipsItem = styled.li`
  ${baseTextStyles};
  margin-bottom: 10px;
`;

export default function Airdrop() {
  return (
    <>
      <Wrapper>
        <Title>$SMSH Airdrop Tutorial</Title>
        <Subtitle>Earn Airdrop Points on smashy.gg!</Subtitle>

        <Text>
          Welcome to the $SMSH Airdrop program on smashy.gg! Play and wager to
          collect more Airdrop points and earn fantastic rewards.
        </Text>

        <Subtitle>How to Earn Airdrop Points:</Subtitle>
        <List>
          <ListItem>Play games on smashy.gg and complete challenges.</ListItem>
          <ListItem>
            Wager on your favorite games to earn additional Airdrop points.
          </ListItem>
          <ListItem>Participate in special events and promotions on the platform.</ListItem>
        </List>

        <Subtitle>How Does the Airdrop Work?</Subtitle>
        <Text>
          The more you play and wager, the more Airdrop points you accumulate.
          These points can be redeemed for various rewards, such as exclusive
          in-game items, discounts, and much more!
        </Text>

        <Subtitle>Tips for Maximum Airdrop Points:</Subtitle>
        <TipsList>
          <TipsItem>
            Explore different games and challenges to maximize your points.
          </TipsItem>
          <TipsItem>Don't miss out on special promotions and events on smashy.gg.</TipsItem>
          <TipsItem>
            Stay active and engaged to continuously collect Airdrop points.
          </TipsItem>
        </TipsList>

        <Text>
          Ready to get started? Visit smashy.gg now and earn your Airdrop
          points!
        </Text>

        <Text>Have fun and happy gaming!</Text>
      </Wrapper>
      <GameSlider />
    </>
  );
}
