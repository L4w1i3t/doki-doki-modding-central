
<template>
    <div style="color: white; margin-top: 100px; margin-left: 50px">
      <h1>Patch Notes -</h1>
      
      <div v-for="version in versions" :key="version.version">
        <h2 style="font-style: italic; margin-left: 50px">Version {{ version.version }}:</h2>
        <ul style="margin-left: 100px">
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



</style>