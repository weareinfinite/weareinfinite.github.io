import Head from 'next/head'

export default () => (
  <div>
    <Head>

      <title>WeAreInfinite</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"/>
    </Head>
    <style jsx global>{`
     *{
          padding:0;
          margin:0;
          box-sizzing: border-box;
      }
      html {
        height: 100%;
      }
      body { 
        display: flex;
        align-items: center;
        font-family: monospace;
        justify-content: center;
        background-color:#1d212b;
      }

      ::-moz-selection { /* Code for Firefox */
        color: #7e0fff;
        background: #0fffc1;
    }
    
    ::selection {
        color: #7e0fff; 
        background: #0fffc1;
    }
      .thebox {
        position: relative;
        width: 30vw;
        min-width:300px;
        height: 30vw;
        min-height:300px;
        color: #252B37;
        background-color: #151823;
        animation: textColor 10s ease infinite;
        color: #ddd;
        font-size:2.5em;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .about__box {
        color: #7e0fff;
        margin-top: 10px;
        text-align: center;
        font-size:1.2em;
        width: 30vw;
        min-width:300px;
      }

      @keyframes textColor {
        0% {
          color: #7e0fff;
        }
        50% {
          color: #0fffc1;
        }
        100% {
          color: #7e0fff;
        }
      }
    `}</style>
  </div>
)