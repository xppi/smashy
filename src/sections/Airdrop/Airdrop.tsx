import React from "react";
import styled, { css } from "styled-components";
import { GameSlider } from "../Dashboard/Dashboard";
import { useToast } from "../../hooks/useToast"; // Adjust the path as necessary

const baseTextStyles = css`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #f1f1f1;

`;

const Wrapper = styled.div`
  text-align: center;
  border-radius: 14px;
  padding: 20px 0 20px 0;
  ${baseTextStyles};
  background: #33333361; /* Subtle background for depth, replace with desired non-color style if needed */
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
  margin: 10px;
  padding-left: 20px; /* Ensure alignment */
`;

const List = styled.ul`
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
const ClaimButton = styled.button`
margin: 20px;
font-size: 30px;
background: #0b3d3830;
color: #ffe182;
font-weight: 1000;
border: 2px solid #29cbbe14;
border-bottom: 4px solid #0b161c;
border-radius: 5px;
cursor: pointer;
`;

export default function Airdrop() {
  const toast = useToast(); // Initialize the useToast hook

  // Function to call when CLAIM AIRDROP button is clicked
  const handleClaimClick = () => {
    // Use the toast function from useToast hook to display the notification
    toast({
      title: '📋 AIRDROP STILL ONGOING!',
      description: 'Wager or take part in our Zealay & Discord quests!',
    })
  };
  return (
    <>
      <Wrapper>
        <Title>$SMSH Airdrop Details</Title>
        <Subtitle>Earn Airdrop Points on smashy.gg while playing your favorite games!</Subtitle>

        <Text>
          Welcome to the $SMSH Airdrop program on smashy.gg <br /> Play and wager to
          collect more Airdrop points and earn fantastic rewards.
        </Text>

        <Subtitle>How to Earn Airdrop Points:</Subtitle>
        <List>
          <ListItem>Play games on smashy.gg</ListItem>
          <ListItem>
            Complete Zealay quests <a href="https://zealay.io"> here</a>
          </ListItem>
          <ListItem>Participate in special events and promotions on our discord.</ListItem>
        </List>

        <Subtitle>How Does the Airdrop Work?</Subtitle>
        <Text>
          More informations will be announced soon, stay tuned!
        </Text>
        <ClaimButton onClick={handleClaimClick}>CLAIM AIRDROP</ClaimButton>
      </Wrapper>
      <GameSlider />
    </>
  );
}
