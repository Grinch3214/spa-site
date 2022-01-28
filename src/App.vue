<template>
  <div id="app">
    <router-link :to="`/${$i18n.locale}`"></router-link>
    <router-link :to="`/${$i18n.locale}/employer`"></router-link>
    <router-link :to="`/${$i18n.locale}/registration`"></router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
