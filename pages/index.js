import Head from 'next/head'
import Page from '../components/Page'
export default function Home() {
  return (
    <Page>
      <div className="container">
        <div className="home-slider" />
        <Head className="header">
          <title>Fox Tales - Pixel RPG Adventure - Play to Earn</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="header">
            <h1 className="title">
              Welcome to <a href="https://opensea.io/collection/foxtalesrpg">Fox Tales - RPG Adventure!</a>
            </h1>
          </div>
          <a className="pixel-button" href="https://opensea.io/collection/foxtalesrpg">Buy on Open Sea</a>
          <p className="description">
          Fox Tales - RPG Adventure comes with an exclusive collection. <br />Each character is a gateway to the community and the world of Fox Tales - RPG Adventure.
          </p>
          <h1 className="subtitle">
            Coming Soon!
          </h1>
        </main>

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
            font-size: 2.5rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
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
