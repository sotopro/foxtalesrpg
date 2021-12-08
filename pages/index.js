import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Page from '../components/Page'
// import * as fbq from '../lib/fpixel'
export default function Home({isMobileView}) {
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
          {isMobileView ? (
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
          <img src="/fire-purple-animation-1200.gif" alt="Fire Purple Animation" />
          <h1 className="title">
            Welcome to <span>Fox Tales - RPG Adventure!</span>
          </h1>
            {/* <button id="opensea-button" className="pixel-button" onClick={() => handleClick('button')}><a href="https://opensea.io/collection/foxtalesrpg" >Buy on Open Sea</a></button> */}
        </div>
        <section className='about-container'>
          <div className="description">
          <h2>Be the fox you want to be</h2>
            It is a unique collection of NFT characters that will allow you to participate in the world and lore of Fox Tales - RPG Adventure.
            Each of the characters is unique generated on the Solana blockchain.  
          </div>
          <div className='image-container'>
            <img
              src='/Card-000.png'
              alt='000-original-fox'
            />
          </div>
        </section>
        <section className="roadmap">
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
        </section>
        <section className="coming-soon">
          <h2>
            Coming Soon!
          </h2>
        </section>
        <footer>
          <a
            href="https://www.linkedin.com/in/danielsotoguillen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Daniel Soto Guillen
          </a>
        </footer>
        
        <style jsx>{`
          @font-face {
          font-family: "Pixeled";
          src: url("/fonts/Pixeled.ttf");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          }
          .container {
            font-family: "Pixeled";
            box-sizing:border-box;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
          }
          .banner {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: flex-end;
            width: 100%;
            height: 75vh;
          }
          .banner img {
            width: 325px;
          }
          
          .inner-card {
            height: 486px;
            width: 322px;
            background-color: #ebe1d7;
            box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
            transition: transform 0.5s;
            -webkit-transition: transform 0.5s;
            -moz-transition: transform 0.5s;
            -o-transition: transform 0.5s;
          }
          .container-card {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background: white;
            transition: 1s box-shadow;
          }
          .banner .container-card:nth-of-type(2) {
            margin-bottom: 150px;
          }

          .container-card:hover {
            box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
          }

          .container-card:hover::before, .container-card:hover::after {
            display: block;
            content: '';
            width: 328px;
            height: 486px;
            position: absolute;
            background: #b980ff;
            border-radius: 5px;
            z-index: -1;
            animation: 1s clockwise infinite;
          }
          .banner .container-card:nth-of-type(1):hover::before, .banner .container-card:nth-of-type(1):hover::after {
            background: #d4afb9 !important;
          }
          .banner .container-card:nth-of-type(2):hover::before, .banner .container-card:nth-of-type(2):hover::after {
            background: #00d196 !important;
          }

          .container-card:hover:after {
            background: #4b3f72;
            animation: 2s counterclockwise infinite;
          }
          .banner .container-card:nth-of-type(1):hover:after {
            background: #d592b9 !important;
          }
          .banner .container-card:nth-of-type(2):hover:after {
            background: #37946e !important;
          }
          .header{
            max-width: 1200px;
            margin: 0 auto;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .header img {
            width: 325px;
          }
          
          .roadmap {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
          }

          .content-title {
            margin: 0;
            line-height: 1.11;
            font-size: 2.5rem;
            flex: 0.5;
          }
          .content-title p {
              font-size: 1.5rem;
            } {

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer a {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            text-align: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title span {
            color: #37946e;
            line-height: 2.5em;
          }

          .title {
            margin: 24px 0;
            line-height: 1.15;
            font-size: 2.5rem;
          }
          .subtitle {
            margin: 0;
            line-height: 1.11;
            font-size: 1.5rem;
            margin: 1rem;
          }

          .title,
          .description {
            text-align: center;
          }
          .about-container {
            margin: 0;
            display: flex;
            flex-direction: row;
            flex: 1;
            justify-content: space-around;
          }

          .description {
            display: flex;
            flex-direction: column;
            line-height: 3em;
            font-size: 1rem;
            flex: 0.5 !important;
            text-align: justify;
          }
          .image-container {
            flex: 0.25;
          }
          .image-container img {
            width: 100%;
            object-fit: cover;
            object-position: bottom;         
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }
          .pixel-button {
            cursor: pointer;
            width: 220px;
            height: 60px;
            color: #000;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
            line-height: 60px;
            letter-spacing: 2px;
            margin: 20px;
            transition: 0.5s;
            font-weight: bold;
            font-size: 18px;
            border: 2px solid;
            border-color: #37946e;
          }
          .pixel-button:hover {
            background: #37946e url('/pixel.png');
            transition-delay: 0.8s;
            background-size: 220px;
            color: #fff;
            animation: animate 0.8s steps(8) forwards;
          }
          section {
            padding: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height:70vh;
          }
          @keyframes animate {
            0% {
              background-position-y: 0;
            }
            100% {
              background-position-y: -480px;
            }
          }
          @keyframes clockwise {
          0% {
            top: -5px;
            left: 0;
          }
          12% {
            top: -2px;
            left: 2px;
          }
          25% {
            top: 0;
            left: 5px;    
          }
          37% {
            top: 2px;
            left: 2px;
          }
          50% {
            top: 5px;
            left: 0;    
          }
          62% {
            top: 2px;
            left: -2px;
          }
          75% {
            top: 0;
            left: -5px;
          }
          87% {
            top: -2px;
            left: -2px;
          }
          100% {
            top: -5px;
            left: 0;    
          }
        }

        @keyframes counterclockwise {
          0% {
            top: -5px;
            right: 0;
          }
          12% {
            top: -2px;
            right: 2px;
          }
          25% {
            top: 0;
            right: 5px;    
          }
          37% {
            top: 2px;
            right: 2px;
          }
          50% {
            top: 5px;
            right: 0;    
          }
          62% {
            top: 2px;
            right: -2px;
          }
          75% {
            top: 0;
            right: -5px;
          }
          87% {
            top: -2px;
            right: -2px;
          }
          100% {
            top: -5px;
            right: 0;    
          }
        }
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 411px) {
            .container {
            background: rgb(235 225 215);
              max-width: 100%;
            }
            .description {
              width: 85%;
            }
            .roadmap {
              width: 85%;
            }
            .header {
                width: 90%;
            }
            main {
              padding: 0;
              margin: 0 auto;
            }
            .title {
              font-size: 2rem;
            }
            .about-container {
              margin: 0;
              flex-direction: column;
            }
            .roadmap {
            flex-direction: column;
          }
          .image-container img {
            margin: 24px 0;
          }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0 !important;
            margin: 0 !important;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </Page>
  )
}

Home.getInitialProps = ( ctx ) =>{
  let isMobileView = (ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
    
    //Returning the isMobileView as a prop to the component for further use.
    return {
      isMobileView: Boolean(isMobileView)
    }
}