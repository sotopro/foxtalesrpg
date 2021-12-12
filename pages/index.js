import React from 'react';
import Head from 'next/head';
import Page from '../components/Page';
import useDeviceDetect from '../hooks/useDeviceDetect'; 
import { motion } from 'framer-motion';
// import * as fbq from '../lib/fpixel'
const Home = () => {
  const { isMobile } = useDeviceDetect();
  const animations = {
    initial: { y: 400, scale: 0, opacity: 0 },
    whileInView: { opacity: 1,  y: 0, scale: 1 },
  }
  // const handleClick = (value) => {
  //   fbq.event('OpenSea', { url: 'https://opensea.io/collection/foxtalesrpg', value: 1, currency: 'USD', comeFrom: value})
  // }
  return (
    <Page>
      <div className="container">
        <Head className="header">
          <title>Fox Tales - Pixel RPG Adventure - NFT Play to Earn</title>
          <meta content="https://foxtalesrpg.com" property="og:url" />
          <meta content="144324121236465" property="fb:app_id" />
          <meta content="Fox Tales - Pixel RPG Adventure - NFT Play to Earn" property="og:title" />
          <meta content="It is a unique collection of NFT characters that will allow you to participate in the world and lore of Fox Tales - RPG Adventure. Each of the characters is unique generated on the Ethereum blockchain" property="og:description" />
          <meta content="https://foxtalesrpg.com/foxtalerpg-rpg-adventure-nft-play-to-earn.jpg" property="og:image" />
          <meta content="Fox Tales - Pixel RPG Adventure - NFT Play to Earn" property="og:image:alt" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://foxtalesrpg.com/" rel="canonical" />
          <meta content="It is a unique collection of NFT characters that will allow you to participate in the world and lore of Fox Tales - RPG Adventure. Each of the characters is unique generated on the Ethereum blockchain" name="description" />
          <link rel="preload" as="image" href="/original-fox-000-social-network.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@foxtalesrpg" />
          <meta name="twitter:creator" content="@foxtalesrpg" />
          <meta name="twitter:title" content="Fox Tales - Pixel RPG Adventure - NFT Play to Earn" />
          <meta name="twitter:description" content="It is a unique collection of NFT characters that will allow you to participate in the world and lore of Fox Tales - RPG Adventure. Each of the characters is unique generated on the Ethereum blockchain" />
          <meta name="twitter:image" content="https://foxtalesrpg.com/foxtalerpg-rpg-adventure-nft-play-to-earn.jpg"/>
        </Head>
        <div className='banner'>
          {isMobile  ? (
            <div className="inner-card">
              <img src="/Card-000.png" alt="Original Fox Card" />
            </div>
          ) : (
            <>
            <div className="container-card">
            <div className="inner-card">
              <img src="/Card-001.png" alt="Winter Fox Card" />
            </div>
          </div>
          <div className="container-card">
            <div className="inner-card">
              <img src="/Card-000.png" alt="Original Fox Card" />
            </div>
          </div>
          <div className="container-card">
            <div className="inner-card">
              <img src="/Card-002.png" alt="Dark Shadow Fox Card" />
            </div>
          </div>
            </>
          )}
        </div>
        <div className="header">
          <motion.div className='social-networks' {...animations}>
            <a href="https://www.twitter.com/foxtalesrpg" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.png" alt='twitter'/>
            </a>
            <a href="https://www.youtube.com/channel/UC6vQ3CfVdnCJ0ilDXlIO7og" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.png" alt='youtube'/>
            </a>
            <a href="https://www.instagram.com/foxtalesrpg" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt='instagram'/>
            </a>
            <a href="https://www.facebook.com/foxtalesrpg" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt='facebook'/>
            </a>
          </motion.div>
          <motion.img src="/fire-purple-animation-1200.gif" alt="Fire Purple Animation" {...animations}/>
          <h1 className="title">
            Welcome to <span>Fox Tales - RPG Adventure!</span>
          </h1>
            {/* <button id="opensea-button" className="pixel-button" onClick={() => handleClick('button')}><a href="https://opensea.io/collection/foxtalesrpg" >Buy on Open Sea</a></button> */}
        </div>
        <motion.section className='about-container' {...animations}>
          <div className="description">
          <h2>Be the fox you want to be</h2>
            It is a unique collection of NFT characters that will allow you to participate in the world and lore of Fox Tales - RPG Adventure.
            Each of the characters is unique generated on the Solana blockchain.  
          </div>
          <div className='image-container'>
            <img
              className='card-image'
              src='/Card-000.png'
              alt='000-original-fox'
            />
          </div>
        </motion.section>
        <motion.section className='join-us-container' {...animations}>
        <div className='image-container'>
            <img
              src='/original-fox-animation.gif'
              alt='Original fox animation'
            />
          </div>
          <div className="description">
          <h2>Why join us?</h2>
          2D universe with unique stories, Fox Tales RPG is destined to be one of the most fun games using blockchain technology. Enter the world of in the Fox such RPG live the adventure. 
          </div>
        </motion.section>
        <motion.section className='about-container' {...animations}>
          <div className="description">
          <h2>Gameplay Mechanic</h2>
          Each NFT has different uses and mechanics within the game, your way of playing will be unique. Adapt and survive in the world of Fox Tales RPG.   
          </div>
          <div className='image-container'>
            <img
              src='/gems-types.gif'
              alt='Types and Gameplay Mechanic'
            />
          </div>
        </motion.section>
        <motion.section className='coin-container' {...animations}>
        <div className='image-container'>
            <img
              className='coin-image'
              src='/fox-tales-coin.png'
              alt='Fox Tales Coin'
            />
          </div>
          <div className="description">
          <h2>Play to Earn</h2>
          There is a proportion of the tokens reserved for user incentives. By completing the main quests, achievement system , side missions, and activities, players could earn profit from the game. 
          </div>
        </motion.section>
        <motion.section className="roadmap" {...animations}>
          <h2 className="content-title">
            Roadmap
            <br />
            <p><b>STAGE 1</b></p>
          </h2>
          <ul>
            <li>Project Concept</li>
            <li>Determine Game Mechanics</li>
            <li>Characters Design Concepts</li>
            <li>Beta Website Launch</li>
            <li>Social Media Presence <b>(current...)</b></li>
            <li>Instagram/Facebook Ads</li>
            <li>Whitepaper</li>
          </ul>
        </motion.section>
        <motion.section className="coming-soon" {...animations}>
          <h2>
            Coming Soon!
          </h2>
        </motion.section>
        <footer>
          <a
            href="https://www.linkedin.com/in/danielsotoguillen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Daniel Soto Guillen
          </a>
        </footer>
      </div>
    </Page>
  )
}

export default Home;