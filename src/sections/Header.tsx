import { TokenValue, useUserBalance } from 'gamba-react-ui-v2'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Modal } from '../components/Modal'
import TokenSelect from './TokenSelect'
import { UserButton } from './UserButton'

const Bonus = styled.button`
  all: unset;
  cursor: pointer;
  color: #003c00;
  border-radius: 10px;
  background: #03ffa4;
  padding: 2px 10px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  transition: background .2s;
  &:hover {
    background: white;
  }
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: #00000047;
  position: fixed;
  backdrop-filter: blur(20px);
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);
`

const Logo = styled(NavLink)`
  height: 35px;
  margin: 0 10px;
  & > img {
    height: 100%;
  }
`

export default function Header() {
  const balance = useUserBalance()
  const [bonusHelp, setBonusHelp] = React.useState(false)

  return (
    <>
      {bonusHelp && (
        <Modal onClose={() => setBonusHelp(false)}>
          <h1>You have a bonus!</h1>
          <p>
            You have <b><TokenValue amount={balance.bonusBalance} /></b> worth of free plays. This bonus will be applied automatically when you play.
          </p>
        </Modal>
      )}
      <StyledHeader>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Logo to="/">
            <img alt="Gamba logo" src="/logo.png" />
          </Logo>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', position: 'relative' }}>
          {balance.bonusBalance > 0 && (
            <Bonus onClick={() => setBonusHelp(true)}>
              +<TokenValue amount={balance.bonusBalance} />
            </Bonus>
          )}
          <TokenSelect />
          <UserButton />
        </div>
      </StyledHeader>
    </>
  )
}
