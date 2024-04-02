<template>
  <div class="hotbar">
    <a href="/">
      <div class="logocorner-container">
        <img src="/assets/images/logo.webp" alt="Logo" class="logocorner">
      </div>
    </a>
    <div class="hamburger" @click="toggleMenu">&#9776;</div>
    <nav :class="{ 'is-active': menuActive }">
      <ul>
        <li><a href="/">Home</a></li>
        <li>
          <span class="non-clickable">About</span>
          <ul class="sub-menu">
            <li><a href="/about/staff">About the Staff</a></li>
            <li><a href="/about/site">About the Site</a></li>
          </ul>
        </li>
        <li><a href="/faq">FAQ</a></li>
        <li>
          <span><a href="/mods">Mods</a></span>
          <ul class="sub-menu">
            <li><a href="/mods/standard">Standard</a></li>
            <li><a href="/mods/archive">Archive</a></li>
            <li><a href="/mods/android">Android</a></li>
          </ul>
        </li>
        <li><a href="/more/assets">Assets</a></li>
        <li><a href="/more/characters">Characters</a></li>
        <li><a href="/more/renpy">RenPy</a></li>
        <li><a href="https://forms.gle/joFU8UqMna8WaqJF7" target="_blank">Mod Form</a></li>
        <li><a href="https://forms.gle/TQe9eUgHQUSMgeJaA" target="_blank">Asset Form</a></li>
        <li><a href="/patchnotes">Patch Notes</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    playHoverSound(event) {
      const hoverSound = new Audio('/assets/sfx/hover.wav');
      hoverSound.play();
    },
  },
  mounted() {
    const redirectButtons = document.querySelectorAll('.logocorner');
    redirectButtons.forEach((button) => {
      button.addEventListener('mouseenter', this.playHoverSound);
    });
  },
};
</script>

<style scoped>
  .hotbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(45deg, #d67ba8, #5ca1cf);
    color: white;
    padding: 10px;
    z-index: 999;
    height: 60px;
  }

  .hamburger {
    position: fixed;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }

    nav {
      display: none;
    }

    nav.is-active {
      display: block;
    }

    .hotbar {
      height: auto;
      padding: 30px;
    }

    .hotbar nav ul {
      flex-direction: column;
      align-items: flex-start;
    }

    .hotbar nav ul li {
      margin: 5px 0;
    }
    .logocorner {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .hamburger {
      display: none;
    }
  }

  .hotbar nav {
    flex-grow: 1;
    justify-content: center;
    margin-right: 40px;
    text-shadow: 1px 1px 0 black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .hotbar nav ul {
    list-style: none;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .hotbar nav ul li {
    margin: 0 10px;
    position: relative;
  }

  .hotbar nav ul li a {
    text-decoration: none;
    color: white;
    position: relative;
  }

  .hotbar nav ul li a::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  .hotbar nav ul li a:hover::after {
    width: 100%;
  }

  .hotbar .sub-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: linear-gradient(45deg, #d67ba8, #5ca1cf);
    padding: 0px 0;
    width: 200px;
  }

  .hotbar nav ul li:hover .sub-menu {
    display: block;
  }

  .hotbar .sub-menu li {
    margin: 0;
    padding: 0;
  }

  .hotbar .sub-menu li a {
    color: white;
    padding: 8px 20px;
    display: block;
  }

  .hotbar .sub-menu li a:hover {
    background-color: #555;
  }

  .logocorner-container {
    display: flex;
    align-items: center;
    pointer-events: auto;
  }

  .logocorner {
    height: 40px;
    margin-right: 10px;
    transition: transform 0.3s ease-in-out;
  }

  .logocorner:hover {
    opacity: 0.8;
    transform: scale(1.05) rotate(0deg);
  }

  .non-clickable {
    cursor: default;
    color: #ffffff;
  }

  .hide-logo {
  display: none;
}
</style>
