
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<!--DEFINITIONS GO HERE-->
<style>
.nav-links li {
  display: inline;
  margin-right: 10px; /* Adjust the spacing between links */
}

.nav-links li:last-child {
  margin-right: 0; /* Remove margin from the last link */
}

.nav-links li NuxtLink {
  border-right: 1px solid #ccc; /* Add a border between links */
  padding-right: 10px; /* Add padding to the right of each link */
}

.nav-links li:last-child NuxtLink {
  border-right: none; /* Remove border from the last link */
}
</style>
