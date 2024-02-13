import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: rgb(3 6 6);
    transition: background .2s ease;
    &:hover {
      background: #020808;
    }
    border-bottom: 3px solid #01161a;
    color: #f1f1f1;
    cursor: pointer;
  }
`

const Welcome = styled.div`
  @keyframes welcome-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: #00000047!important;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {animation-delay: 0s;}
    &:nth-child(2) {animation-delay: 1s;}
  }


  & > div {
    padding: 0px;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`

export function WelcomeBanner() {
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <Welcome>
      <div>
        <h1>Welcome to SMASHY.GG</h1>
        <p>
          A fair, simple and decentralized casino on Solana.
        </p>
      </div>
      <Buttons>
      <button onClick={() => navigate("/airdrop")}> {/* Update this line */}
          💰 AIRDROP
        </button>
      <button onClick={() => window.open('https://x.com/dXYAnPxY2W', '_blank')}>
          🐦 X.COM
        </button>
        <button onClick={() => window.open('https://discord.gg/dXYAnPxY2W', '_blank')}>
          💬 DISCORD
        </button>

      </Buttons>
    </Welcome>
  )
}
