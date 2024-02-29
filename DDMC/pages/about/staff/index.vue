
<template>
  <div class="centered-title" style="margin-top: 100px;">
    <h1 style="font-family: 'Hot Mustard BTN', Courier, monospace; color: white; animation: pulse 8s linear infinite">Meet Our Staff!</h1>
  </div>
  <div class="staff">
    <div class="staff-list">
      <div v-for="staffMember in staffMembers" :key="staffMember.id" class="staff-member" :class="{ 'iris-section': staffMember.name === 'IrisCandy' }">
        <img :src="staffMember.image" alt="Staff Image" class="staff-image" />
        <div class="staff-details">
          <h2>{{ staffMember.name }}</h2>
          <p class="position">{{ staffMember.position }}</p>
          <p class="bio">{{ staffMember.bio }}</p>
          <div class="button-group">
            <a v-if="staffMember.youtube" :href="staffMember.youtube" target="_blank" rel="noopener noreferrer">
              <img src="/assets/gui/yt.webp" alt="YouTube" class="youtube-button" />
            </a>
            <a v-if="staffMember.kofi" :href="staffMember.kofi" target="_blank" rel="noopener noreferrer">
              <img src="/assets/gui/kofi.webp" alt="Ko-fi" class="kofi-button" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        staffMembers: [
          {
            id: 0,
            name: 'L4w1i3t',
            position: 'Site Developer, Founder, Site Admin',
            bio: 'Front-end and back-end programmer/designer with an intended double major in Cognitive Science and Computer Science (so, like, CS^2). I know the languages of RenPy, Python, Java, JavaScript, CSS, HTML, C(++/#), and Assembly. I typically like to create random projects in my free time, ranging from DDLC mods to console hardware modification to YouTube videos to Soulsborne builds, but otherwise I am a bored-most-of-the-time university student.',
            image: '/assets/images/lawliet.webp',
            youtube: 'https://www.youtube.com/channel/UCj18pgOsq9bXGddHoSdGWDw',
            kofi: 'https://ko-fi.com/l4w1i3t'
          },
          {
            id: 1,
            name: 'Matsuda Akai',
            position: 'Teacher, Site Manager',
            bio: 'Hi, hi! Matsuda here, entering stage right, ready to spice things up in your life a little! I\'m something of an actor and idol, always trying to make things a little more interesting in my life! I have hobbies like dancing and fitness, but believe it or not, I love me some gaming as well. People may call me overbearing or even somewhat weird, but y\'know what, it\'s hard for most to go full throttle all the time. Vroom vroom, baby!',
            image: '/assets/images/red.webp',
            youtube: 'https://www.youtube.com/channel/UCj18pgOsq9bXGddHoSdGWDw'
          },
          {
            id: 2,
            name: 'Tune Eternal',
            position: 'Founder, Head Discord Admin',
            bio: 'Musician foremost and multimedia artist second. I landed in the DDLC community with commission work for Tropical Rain by PumpkinbrainUS, eventually making ranks with former Team Red Mazda RX-7, making and working on projects such as EGO DEATH, Left Behind, Presents and Poems, SVHS-TAP, Spilt Spaghetti, Sigma Club 2, Triple Trouble, and much more. I have always had the community\'s wellbeing in the forefront of my mind and was kicked out for it. I stand for the equal and moderate treatment of creators and the gifts they wish to present to the world.',
            image: '/assets/images/xavier.webp',
            youtube: 'https://www.youtube.com/@tuneeternal',
            kofi: 'https://ko-fi.com/tuneeternal'
          },
          {
            id: 3,
            name: 'JayQilin',
            position: 'Founder, Content Creator',
            bio: 'What it is, what it do! My name is JayQilin or JQilin on Youtube. I\'ve been a DDLC fan since 2017 and a DDLC content creator since 2020. I\'m a fan of people expressing themselves in new, creative ways and I welcome everyone who wants to put their best foot forward to make incredible content! \n\nTL:DR, I\'m just a guy who\'s a Dokituber for fun. I didn\'t choose the Doki life, the Doki life chose me.',
            image: '/assets/images/qilin.webp',
            youtube: 'https://www.youtube.com/@officialJQilingaming'
          },
          {
            id: 4,
            name: 'Savage Sentral',
            position: 'Founder, Database Manager',
            bio: 'I don\'t care how many people you send my way, Exit Music: Redux is still the worst mod ever made! Now let me goon to Luka Doncic highlights in peace.',
            image: '/assets/images/savage.webp',
            youtube: 'https://www.youtube.com/@SavageSentral'
          },
          {
            id: 5,
            name: 'IrisCandy',
            position: 'Artist',
            bio: 'My name\'s Iris. Artist for three years and is still going strong. I\'ve been part of the DDLC community for less, and I am considering contributing more to the place, but we\'ll see. Art is a passion, and it is what drives me to keep going, and over time, in many ways, I can see how much I have improved. Consider me next time you have a project!',
            image: '/assets/images/iris.webp'
          },
          {
            id: 6,
            name: 'Finn TDK',
            position: 'Reddit Moderator',
            bio: 'Greetings! My name is Finn the Diamond Knight, but you can call me Finn or Finn TDK for short. Been a DDLC fan since 2018 and a DokiTuber/content creator since 2021 as my newfound appreciation of the series. Poetry, stories, history, you name it! It\'s like an empty page for your imagination to take over and run wild, or a new adventure! I stand by to those whom I\'m loyal with to help out in any way I can for a good cause on equal ground. Most importantly, stay awesome and have fun!',
            image: '/assets/images/finn.webp',
            youtube: 'https://www.youtube.com/@OfficialFinnTDK'
          },
          {
            id: 7,
            name: 'MagmaSlasher',
            position: 'Web Staff, Quality Assurance',
            bio: 'The one, the only, MagmaSlasher. Bogeyman to those who shall not be named, but good enough at my job to warrant having around. Member of the late Team Red Mazda RX-7 (STOCK), God rest that team\'s collective soul, and creator of several mods, such as The Deepest Mod Ever, and Sayori Fucks Up, the latter of which you can play here! Proficient in Python, C#, JS, and a whole host of other programming languages that I picked up during my time spent on developing various projects, and I can\'t  wait to use those skills to help out here.',
            image: '/assets/images/magma.webp',
            youtube: 'https://www.youtube.com/channel/UChXVIt0z0Mkx7QlA_eQ5FMg'
          },
        ]
      };
    }
  };
</script>
  
<style scoped>
  .staff {
    text-align: center;
    padding: 20px;
    color: white;
    overflow: hidden;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 50px;
  }
  
  .staff-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
  }
  
  .staff-member {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .staff-member:hover {
    transform: scale(1.05);
  }

  .staff-image {
    width: 300px;
    height: 300px;
    margin-right: 20px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5);
  }

  .staff-details {
    margin-top: 20px;
    text-align: left;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  .position {
    font-style: italic;
    color: #bbbbbb;
    margin-bottom: 5px;
  }

  .bio {
    color: #ffffff;
  }

  .button-group {
    display: flex;
    align-items: center;
  }

  .youtube-button {
    width: 50px;
    height: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    margin-top: 10px;
    cursor: pointer;
  }

  .kofi-button {
    width: 50px;
    height: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
  }

  .staff-member:nth-child(1) {
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top: 30px solid black;
    background: linear-gradient(135deg, rgba(0, 119, 255, 0.4), rgba(255, 165, 0, 0.4));
  }

  .staff-member:nth-child(2) {
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top: 30px solid black;
    background-color: rgba(34, 139, 34, 0.2);
  }

  .staff-member:nth-child(3) {
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top: 30px solid black;
    background-color: rgba(255, 105, 180, 0.2);
  }

  .staff-member:nth-child(4) {
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top: 30px solid black;
    background-color: rgba(0, 119, 255, 0.2);
  }

  .staff-member:nth-child(5) {
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top: 30px solid black;
    background: linear-gradient(270deg, rgba(255, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }

  .staff-member:nth-child(6) {
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top: 30px solid black;
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.4), rgba(73, 219, 255, 0.4));
  }

  .staff-member:nth-child(7) {
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top: 30px solid black;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(73, 219, 255, 0.4));
  }

  .staff-member:nth-child(8) {
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top: 30px solid black;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.4));
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
