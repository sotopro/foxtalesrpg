import Head from 'next/head'
import Page from '../components/Page'
import * as fbq from '../lib/fpixel'
export default function Home() {
  const handleClick = (value) => {
    fbq.event('OpenSea', { url: 'https://opensea.io/collection/foxtalesrpg', value: 1, currency: 'USD', comeFrom: value})
  }
  return (
    <Page>
      <div className="container">
        <div className="home-slider" />
        <Head className="header">
          <title>Fox Tales - Pixel RPG Adventure - NFT Play to Earn</title>
          <meta content="Fox Tales - Pixel RPG Adventure - NFT Play to Earn" property="og:title" />
          <meta content="It is a unique collection of NFT characters that will allow you to participate in the world and lore of Fox Tales - RPG Adventure. Each of the characters is unique generated on the Ethereum blockchain" property="og:description" />
          <meta content="/foxtalerpg-rpg-adventure-nft-play-to-earn.jpg" property="og:image" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://foxtalesrpg.com/" rel="canonical" />
          <meta content="It is a unique collection of NFT characters that will allow you to participate in the world and lore of Fox Tales - RPG Adventure. Each of the characters is unique generated on the Ethereum blockchain" name="description"></meta>
          <link rel="preload" as="image" href="/original-fox-000-social-network.png" />
        </Head>

        <main>
          <div className="header">
            <h1 className="title">
              Welcome to <a href="https://opensea.io/collection/foxtalesrpg" onClick={() => handleClick('title')}>Fox Tales - RPG Adventure!</a>
            </h1>
          </div>
          <button id="opensea-button" className="pixel-button" href="https://opensea.io/collection/foxtalesrpg"  onClick={() => handleClick('button')}>Buy on Open Sea</button>
          <p className="description">
          It is a unique collection of NFT characters that will allow you to participate in the world and lore of Fox Tales - RPG Adventure.
          Fox Tales - RPG Adventure comes with an exclusive collection. 
          Each of the characters is unique generated on the Ethereum blockchain. 
          Each character is a gateway to the community and the world of Fox Tales - RPG Adventure.

          Character stories, dungeons and events in this world will progressively evolve after interacting with the community.
          In an RPG Adventure. It will be a creative, artistic and playable project for all people who have a NFT on.
          Be the fox you want to be.
          </p>
        </main>
        <section className="roadmap">
          <h2 className="content-title">
            Roadmap
          </h2>
          <p><b>STAGE 1</b></p>
          <p>Project Concept</p>
          <p>Determine Game Mechanics</p>
          <p>Characters Design Concepts</p>
          <p>Beta Website Launch</p>
          <p>Social Media Presence <b>(current...)</b></p>
          <p>Instagram/Facebook Ads</p>
          <h2 className="subtitle">
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
          .container {
            box-sizing:border-box;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .header{
            position: absolute;
            top: 5%;
          }
          .home-slider{
            width:100%;
            min-height: 650px;
            background-image: url("/foxtalerpg-rpg-adventure-nft-play-to-earn.jpg");
            background-repeat:no-repeat;
            background-position:center center;
            background-size: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .roadmap {
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
          }

          .content-title {
            margin: 0;
            line-height: 1.11;
            font-size: 2.5rem;
          }

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
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #37946e;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
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

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            width: 85%;
            text-align: justify;
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
          @keyframes animate {
            0% {
              background-position-y: 0;
            }
            100% {
              background-position-y: -480px;
            }
          }
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 411px) {
            .home-slider{
              margin-top: 9rem;
              min-height: 300px;
              background-size: contain;
              background-image: url("/original-fox-000-social-network.png");

            }
            .header {
                width: 95%;
            }
            main {
              padding: 0;
              margin: 0 auto;
            }
            .title {
              font-size: 2.5rem;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
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
