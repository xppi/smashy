import React from 'react'
import styled from 'styled-components'
import { SlideSection } from '../../components/Slider'
import { GAMES } from '../../games'
import { GameCard } from './GameCard'
import { WelcomeBanner } from './WelcomeBanner'
import { TokenValue, useCurrentPool, useUserBalance } from 'gamba-react-ui-v2'
import { Modal } from '../components/Modal'

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
  width: fit-content!important;
  margin-right: auto!important;
  margin-left: auto!important;
  padding: 10px 30px!important;
  cursor: pointer;
  color: #f9ff08;
  border-radius: 0px;
  border: none;
  background: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  transition: color .2s;
  &:hover {
    color: #ffa700;
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
  const balance = useUserBalance()
  const [bonusHelp, setBonusHelp] = React.useState(false)
  const [jackpotHelp, setJackpotHelp] = React.useState(false)

  return (
    <>
      {jackpotHelp && (
    <Modal onClose={() => setJackpotHelp(false)}>
      <h1>Jackpot</h1>
      <p>There{'\''}s <TokenValue amount={pool.jackpotBalance} /> in the Jackpot.</p>
    </Modal>
      )}
      <WelcomeBanner />

      <h2 style={{ textAlign: 'center' }}>Games</h2>
      <Bonus>
      🏆 JACKPOT: <TokenValue amount={pool.jackpotBalance} />
      </Bonus>
      <GameGrid />
    </>
  )
}
