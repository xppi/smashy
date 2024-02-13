import React from 'react'
import styled from 'styled-components'
import { SlideSection } from '../../components/Slider'
import { GAMES } from '../../games'
import { GameCard } from './GameCard'
import { WelcomeBanner } from './WelcomeBanner'
import { TokenValue, useCurrentPool } from 'gamba-react-ui-v2'

export function GameSlider() {
  return (
    <SlideSection>
      {GAMES.map((game) => (
        <div key={game.id} style={{ width: '160px', display: 'flex' }}>
          <GameCard game={game} />
        </div>
      ))}
    </SlideSection>
  )
}

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
`
const Bonus = styled.button`
margin: 
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 30px;
  all: unset;
  cursor: pointer;
  color: #f1f1f1;
  border-radius: 0px;
  border: 1px solid #f5d97e;
  background: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  transition: background .2s;
  &:hover {
    background: white;
  }
`
export function GameGrid() {

  return (
    <Grid>
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  )
}

export default function Dashboard() {
  const pool = useCurrentPool()

  return (
    <>
      <WelcomeBanner />

      <h2 style={{ textAlign: 'center' }}>Games</h2>
      <Bonus>
        <TokenValue amount={pool.jackpotBalance} />
      </Bonus>
      <GameGrid />
    </>
  )
}
