import React from 'react';
import styled from 'styled-components'
import PinkLogo from '../../../src/assets/svg/logo_pink.svg'
import './style.css'

import { KEK, ISLA, PENGUINSWAPURL,VERSION } from '../../constants'


export default function ShowTeamPage() {
  const PenguinParty = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -10%;
  background: rgba(0, 0, 0, 0.6);
  border-radius:20% 20% 0% 0%;
  `
  const AboutText = styled.div`
  align-self: center;
  color: white;
  margin: 5%;
  padding: 2%;
  `

  const PenguinArea = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  border-radius:0% 0% 10% 10%;
  background: rgba(0, 0, 0, 0.6);
  `

  const Hiturunk = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  `
  const Devs = styled.div`
  background-position: cover;
  color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  place-items: center;
  text-align: center;
  margin: 0 auto;
  `
  const Partners = styled.div`
  background-position: cover;
  color: white;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
  `
  const KEKTRADE = PENGUINSWAPURL.concat(KEK.address)
  const ISLATRADE = PENGUINSWAPURL.concat(ISLA.address)
  const VERSION_TEXT = "V.".concat(VERSION)

  return (
    <>
      <PenguinParty className='penguin-party'>
      <img width={'35%'} height={'35%'} src={'https://miro.medium.com/max/1200/1*fYXGqcTgQldOd7687sHDag.gif'} alt="logo" style={{'margin': "5%", 'paddingLeft': "2%"}} />
      <AboutText>
        <h2><b>Penguin Party</b> is a Decentralized Governance Token Delegation focused on software deliverables to improve decentralized protocols and ensure protocol interoperability.</h2>
        <h2><b>Penguin Swap</b> is our front-end interface which interacts with the Uniswap trading Protocol contracts using Penguin Swap's preferred token list and custom token / routing pairs.  </h2>
      </AboutText>
    </PenguinParty>
    <PenguinArea>
    <h2><b>PenguinSwap { VERSION_TEXT }</b></h2>
    <h1>
    Made with 💖 at PanArka Blockchain Laboratories, Inc. - A Delaware Corporation
    </h1>
    <Hiturunk>
    <h1>The 🐧 Team</h1>
      <img className='hiturunk' src="https://pbs.twimg.com/profile_images/1316829704868040707/wZd46uDZ_400x400.jpg" alt=""/>
      <h2>Hiturunk</h2>
      <h3>Senior Developer / CEO</h3>
    </Hiturunk>
    <Devs className='devs'>
      <div className='dev'>
    <img className='team-photo' src={PinkLogo} alt=""/>
    <h2>Dwi</h2>
    <h3>Senior Developer / CTO</h3>
      </div>
      <div className='dev'>
    <img className='team-photo' src={PinkLogo} alt=""/>
    <h2>Pancake</h2>
    <h3>Senior Developer</h3>
      </div>
      <div className='dev'>
    <img className='team-photo' src={PinkLogo} alt=""/>
    <h2>Stephen</h2>
    <h3>Senior Developer</h3>
      </div>
      <div className='dev'>
    <img className='team-photo' src={PinkLogo} alt=""/>
    <h2>Pooryia</h2>
    <h3>Graphics and Logo Designer</h3>
      </div>
      <div className='dev'>
    <img className='team-photo' src={PinkLogo} alt=""/>
    <h2>Davey</h2>
    <h3>Statistics/Machine Learning</h3>
      </div>
      <div className='dev'>
    <img className='team-photo' src={PinkLogo} alt=""/>
    <h2>RyanG</h2>
    <h3>Junior Developer</h3>
      </div>
      <div className='dev'>
    <img className='team-photo' src={PinkLogo} alt=""/>
    <h2>Finagle</h2>
    <h3>Junior Developer</h3>
      </div>
      <div className='dev'>
    <img className='team-photo' src={PinkLogo} alt=""/>
    <h2>Dreadful</h2>
    <h3>Developer</h3>
      </div>
    </Devs>
    <Partners>
    <h1>Our 🐧 Partners</h1>
    <div className='lid-cryptoKek'>
    <div className='lid-div'>
    <a href="https://lid.sh/"><img className='lid-pic' src="https://cryptoslate.com/wp-content/uploads/2020/08/lid-social.jpg" alt=""/></a>
      <h2><a href="https://lid.sh/">Liquidity Dividends Protocol</a></h2>
      <h3>The LID token by Liquidity Dividends Protocol allowed stakers to earn rewards from bots trading on Uniswap while gaining exposure to the wide variety of assets paired against LID as locked liquidity. </h3>
      <div>
      <h4> ❗❗❗Penguin Party is currently in the process of taking over control of LID/LIFTOFF in an acquisition.❗❗❗</h4>
      </div>
    </div>
    <div className='crypto-kek-div'>
    <a href="https://cryptokek.com/"><img className='crypto-kek-pic' src="https://pbs.twimg.com/profile_images/1353739226748223488/-J29E6vO_400x400.png" alt=""/></a>
      <h2><a href="https://cryptokek.com/">CryptoKek</a></h2>
      <h2><a href={ KEKTRADE } >Trade</a></h2>
      <h3>CryptoKek is an analytics platform for decentralized exchanges designed to offer cutting edge insight to support its users in their endeavors. </h3>
    </div>
    <div className='defiville-div'>
    <a href="https://defiville.finance/"><img className='defiville-pic' src="https://defiville.finance/img/SVG/logo.svg" alt=""/></a>
      <h2><a href="https://defiville.finance/">DEFIVILLE</a></h2>
      <h2><a href={ ISLATRADE } >Trade</a></h2>
      <h3>Defiville is a 100% community-led gamified social experiment focused on incentivizing participation in yield-farming protocols.</h3>
    </div>
    </div>
    </Partners>
    </PenguinArea>
    </>
  )
}
