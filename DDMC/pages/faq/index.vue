
<template>
  <title>FAQ || Doki Doki Modding Central</title>
  <div class="centered-title" style="color: white; font-family: 'Hot Mustard BTN Regular', monospace; margin-top: 100px;">
    <h2>Frequently Asked Questions</h2>
  </div>
    <div class="content-wrapper" style="color: white">

      <div class="section"  style="margin-top: -80px">
        <strong><u>How do I install a DDLC mod?</u></strong>
        <p>Matsuda will make a tutorial soon on the site, as soon as she's finished having an adventure of her own.</p>
      </div>
  
      <div class="section">
        <strong><u>Is Big Brother Watching?</u></strong>
        <p>Nah, not here. You're safe here.</p>
      </div>

      <div class="section">
        <strong><u>Is Soylent Green people?</u></strong>
        <p>Don't question it. Just eat the Soylent Green.</p>
      </div>
  
      <div class="section">
        <strong><u>Why don't we talk about Fight Club?</u></strong>
        <p>Don't worry about it.</p>
      </div>

      <div class="section centered" style="font-size: 1.5em;">
        <strong><i>Let us know if you have any further questions!</i></strong>
      </div>
    </div>
  </template>

<style>
  body {
    overflow-x: hidden;
  }

  .centered-title {
    text-align: center;
    font-size: 3em;
    margin-top: 5vh;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    animation: pulse 8s linear infinite;
  }

  @keyframes pulse {
    0% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }
    20% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
    }
    40% {
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    }
    60% {
      text-shadow: 0 0 10px rgba(255, 192, 203, 0.8);
    }
    80% {
      text-shadow: 0 0 10px rgba(148, 0, 211, 0.8);
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }
  }

  .centered {
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
  }

  .section {
    margin-bottom: 30px;
    padding: 20px;
    border: 10px solid #ffffff;
    border-radius: 5px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transform: perspective(1000px) rotateX(3deg);
    transition: transform 0.3s ease-in-out;
    opacity: 0.95;
    animation: sectionGlow 8s linear infinite;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top: 30px solid black;
    background: rgba(0, 0, 0, 0.4);
  }

  @keyframes sectionGlow {
    0% {
      border-color: rgba(255, 255, 255, 0.8);
    }
    20% {
      border-color: rgba(255, 128, 128, 0.8);
    }
    40% {
      border-color: rgba(116, 255, 116, 0.8);
    }
    60% {
      border-color: rgba(255, 192, 203, 0.8);
    }
    80% {
      border-color: rgba(213, 114, 255, 0.8);
    }
    100% {
      border-color: rgba(255, 255, 255, 0.8);
    }
  }

  .section:hover {
    transform: perspective(1000px) rotateX(0deg);
  }

  .section strong {
    display: block;
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .section u {
    text-decoration: underline;
  }

  .section i {
    font-style: italic;
  }

  .section p {
    margin-bottom: 15px;
    line-height: 1.6;
  }

  .content-wrapper ol {
    padding-left: 20px;
    margin-bottom: 15px;
  }

  .content-wrapper ol li {
    margin-bottom: 10px;
  }

  .section centered {
    font-size: 1.5em;
  }

  .section centered strong i {
    text-align: center;
    margin-top: 0px;
  }

  .section centered strong i p {
    font-style: italic;
  }

  @media (max-width: 768px) {
    .form-wrapper {
      width: 100%;
    }
  }

  .content-wrapper {
    margin-top: 80px;
  }
</style>