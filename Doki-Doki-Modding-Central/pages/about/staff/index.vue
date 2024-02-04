
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
          <div v-if="staffMember.name !== 'IrisCandy'">
            <div class="button-group">
              <a :href="staffMember.youtube" target="_blank" rel="noopener noreferrer">
                <img src="/assets/gui/yt.png" alt="YouTube" class="youtube-button" />
              </a>
              <a v-if="staffMember.name == 'L4w1i3t'" :href="staffMember.kofi" target="_blank" rel="noopener noreferrer">
                <img src="/assets/gui/kofi.png" alt="Ko-fi" class="kofi-button" />
              </a>
            </div>
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
            position: 'Site Developer, Founder, Head Admin',
            bio: 'Intermediate-level programmer and designer with an intended double major in Cognitive Science and Computer Science. I know the languages of RenPy, Python, Java, JavaScript, CSS, HTML, C(++/#), and Assembly. I typically like to create random projects in my free time, ranging from DDLC mods to console hardware modification to YouTube videos to Soulsborne builds, but otherwise I am a bored-most-of-the-time university student.',
            image: '/assets/images/lawliet.png',
            youtube: 'https://www.youtube.com/channel/UCj18pgOsq9bXGddHoSdGWDw',
            kofi: 'https://ko-fi.com/l4w1i3t'
          },
          {
            id: 1,
            name: 'Matsuda Akai',
            position: 'Teacher, Data Manager, Site Manager',
            bio: 'Hi, hi! Matsuda here, entering stage right, ready to spice things up in your life a little! I\'m something of an actor and idol, always trying to make things a little more interesting in my life! I have hobbies like dancing and fitness, but believe it or not, I love me some gaming as well. People may call me overbearing or even somewhat weird, but y\'know what, it\'s hard for most to go full throttle all the time. Vroom vroom, baby!',
            image: '/assets/images/red.png',
            youtube: 'https://www.youtube.com/channel/UCj18pgOsq9bXGddHoSdGWDw'
          },
          {
            id: 2,
            name: 'Tune Eternal',
            position: 'Founder, Content Creator',
            bio: 'Musician foremost and multimedia artist second. I landed in the DDLC community with commission work for Tropical Rain by PumpkinbrainUS, eventually making ranks with former Team Red Mazda RX-7, making and working on projects such as EGO DEATH, Left Behind, Presents and Poems, SVHS-TAP, Spilt Spaghetti, Sigma Club 2, Triple Trouble, and much more. I have always had the community\'s wellbeing in the forefront of my mind and was kicked out for it. I stand for the equal and moderate treatment of creators and the gifts they wish to present to the world.',
            image: '/assets/images/xavier.png',
            youtube: 'https://www.youtube.com/@tuneeternal'
          },
          {
            id: 3,
            name: 'JayQilin',
            position: 'Founder, Content Creator',
            bio: 'What it is, what it do! My name is JayQilin or JQilin on Youtube. I\'ve been a DDLC fan since 2017 and a DDLC content creator since 2020. I\'m a fan of people expressing themselves in new, creative ways and I welcome everyone who wants to put their best foot forward to make incredible content! \n\nTL:DR, I\'m just a guy who\'s a Dokituber for fun. I didn\'t choose the Doki life, the Doki life chose me.',
            image: '/assets/images/qilin.png',
            youtube: 'https://www.youtube.com/@officialJQilingaming'
          },
          {
            id: 4,
            name: 'Savage Sentral',
            position: 'Founder, Content Creator',
            bio: 'I don\'t care how many people you send my way, Exit Music: Redux is still the worst mod ever made! Now let me goon to Luka Doncic highlights in peace.',
            image: '/assets/images/savage.png',
            youtube: 'https://www.youtube.com/@SavageSentral'
          },
          {
            id: 5,
            name: 'IrisCandy',
            position: 'Artist',
            bio: 'My name\'s Iris. Artist for three years and is still going strong. I\'ve been part of the DDLC community for less, and I am considering contributing more to the place, but we\'ll see. Art is a passion, and it is what drives me to keep going, and over time, in many ways, I can see how much I have improved. Consider me next time you have a project!',
            image: '/assets/images/iris.png'
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
    color: white
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
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow to the white background */
    transition: transform 0.3s ease; /* Add transition property */
  }

  .staff-member:hover {
    transform: scale(1.05); /* Enlarge the section on hover */
  }

  .staff-image {
    width: 300px; /* Half of the original width */
    height: 300px; /* Half of the original height */
    margin-right: 20px;
    object-fit: cover; /* Crop the image to cover the defined dimensions */
    border-radius: 20px; /* Apply rounded corners */
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5); /* Yellow glowing border */
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
    height: auto; /* Adjust the height to match the button size */
    display: inline-flex; /* Ensure proper inline alignment */
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
    background-color: transparent; /* Make the background transparent */
    border: none;
    margin-top: 10px;
    cursor: pointer; /* Show cursor on hover to indicate clickability */
  }

  .kofi-button {
    width: 50px;
    height: auto; /* Adjust the height to match the button size */
    display: inline-flex; /* Ensure proper inline alignment */
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
    background-color: transparent; /* Make the background transparent */
    border: none;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer; /* Show cursor on hover to indicate clickability */
  }

  .staff-member:nth-child(1) {
    border: 4px solid rgba(0, 0, 0, 0.4); /* Black border */
    border-top: 30px solid black; /* Thin black border on top */
    background: linear-gradient(135deg, rgba(0, 119, 255, 0.4), rgba(255, 165, 0, 0.4)); /* Cerulean blue to orange gradient with transparency */
  }

  .staff-member:nth-child(2) {
  border: 4px solid rgba(0, 0, 0, 0.4); /* border color */
  border-top: 30px solid black; /* Thin black border on top */
  background-color: rgba(34, 139, 34, 0.2); /* Lighter shade of pine green */
}

  .staff-member:nth-child(3) {
    border: 4px solid rgba(0, 0, 0, 0.4); /* Border color */
    border-top: 30px solid black; /* Thin black border on top of each staff member's section */
    background-color: rgba(255, 105, 180, 0.2); /* Lighter shade of the same pink */
  }

  .staff-member:nth-child(4) {
    border: 4px solid rgba(0, 0, 0, 0.4); /* border color */
    border-top: 30px solid black; /* Thin black border on top of each staff member's section */
    background-color: rgba(0, 119, 255, 0.2); /* Lighter shade of the same green */
  }

  .staff-member:nth-child(5) {
    border: 4px solid rgba(0, 0, 0, 0.4); /* Translucent black for IrisCandy */
    border-top: 30px solid black; /* Thin black border on top of each staff member's section */
    background: linear-gradient(270deg, rgba(255, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }

  .staff-member:nth-child(6) {
    border: 4px solid rgba(0, 0, 0, 0.4); /* Translucent red for Matsuda Akai */
    border-top: 30px solid black; /* Thin black border on top of each staff member's section */
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.4), rgba(73, 219, 255, 0.4));
  }

  .iris-section h2,
  .iris-section .bio {
    color: rgb(255, 255, 255);
  }
  
</style>