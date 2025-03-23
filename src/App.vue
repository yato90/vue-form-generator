<template>
  <div>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/demo1">Демо 1</router-link>
      <router-link to="/demo2">Демо 2</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 15px;
  padding: 10px;
}
</style>
