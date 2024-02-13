import React from "react";
import styled from "styled-components";
import { GameSlider } from "../Dashboard/Dashboard";

const Wrapper = styled.div`
  color: #f1f1f1;
  text-align: center;
  border-radius: 14px;
  padding: 20px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Title = styled.h1`
  color: #f1f1f1; /* Bright blue for emphasis */
`;

const Subtitle = styled.h2`
  color: #f1f1f1; /* Slightly darker blue for depth */
`;

const Text = styled.p`
  line-height: 1.6;
`;

const List = styled.ol`
  text-align: left;
  display: inline-block;
  margin: auto;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const TipsList = styled.ul`
  text-align: left;
  display: inline-block;
  margin: auto;
`;

const TipsItem = styled.li`
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
