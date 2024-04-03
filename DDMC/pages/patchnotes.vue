<template>
  <div id="patch-notes-container">
    <h1>Patch Notes</h1>
    <h1 style="font-style: italic">This page is primarily for L4w1i3t's bookkeeping.</h1>
    
    <div class="version-section" v-for="version in versions" :key="version.version">
      <h2>Version {{ version.version }}:</h2>
      <ul>
        <li v-for="note in version.notes" :key="note">{{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      versions: [
        {
          version: 'Alpha 1.1.2',
          notes: [
            'Added hamburger menu on hotbar for mobile devices',
            'Fixed an issue where Hot Mustard font was not appearing correctly',
            'Added a separate page for mod demos'
          ]
        },
        {
          version: 'Alpha 1.1.1',
          notes: [
            'Made drastic changes to header',
            'Minor bug fixes',
            'Moved location of the mod and asset submission forms'
          ]
        },
        {
          version: 'Alpha 1.1.0',
          notes: [
            'Implemented assets redirect page',
            'Added redirect buttons for specific assets categories',
            'Slight UI adjustment'
          ]
        },
        {
          version: 'Alpha 1.0.6',
          notes: [
            'Adjusted mod redirect page',
            'Added dynamic resolution to mod redirect page',
            'Completely overhauled the mod catalog pages'
          ]
        },
        {
          version: 'Alpha 1.0.5',
          notes: [
            'Adjusted parameters on home page for better resolution scaling',
            'Added dynamic resolution on staff page and RenPy page',
            'Added flair to patch notes page',
            'Beginning to roll around mod downloads to dedicated Mediafire cloud server'
          ]
        },
        {
          version: 'Alpha 1.0.4',
          notes: [
            'Remade the mod download page layout',
            'Fixed dynamic resolution on mod pages',
            'Fixed YouTube video embedding'
          ]
        },
        {
          version: 'Alpha 1.0.3',
          notes: [
            'Fixed dynamic resolution on home page',
            'Added patch notes page',
          ]
        },
        {
          version: 'Alpha 1.0.2',
          notes: [
            'Small performance improvements',
            'Reformatted source code',
            'Updated framework',
            'Fixed memory leak',
            'Added Subreddit links to home page'
          ]
        },
        {
          version: 'Alpha 1.0.1',
          notes: [
            'Changed most images from png to webp',
            'Added Triple Trouble to catalog',
            'Changed mod catalog to include standard, archive, and android',
            'Reformatted audio player'
          ]
        },
        {
          version: 'Alpha 1.0.0',
          notes: [
            'Launched site onto host',
            'Entered alpha stage',
          ]
        },
      ]
    }
  }
}
</script>

<style>
#patch-notes-container {
  color: #e0e6f1;
  background-color: #1e3a8a;
  padding: 20px;
  border-radius: 10px;
  margin: 50px auto;
  margin-top: 100px;
  max-width: 800px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

#patch-notes-container h1 {
  text-align: center;
  color: #dbeafe;
  margin-bottom: 30px;
}

.version-section {
  background: #2b6cb0;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.version-section:hover {
  transform: translateY(-5px);
}

.version-section h2 {
  margin-bottom: 10px;
  font-style: italic;
}

.version-section ul {
  list-style-type: none;
  padding: 0;
}

.version-section li {
  background: #3182ce;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.version-section li:hover {
  background: #63b3ed;
}
</style>
