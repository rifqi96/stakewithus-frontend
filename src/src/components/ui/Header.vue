<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>{{title}}</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'StakeWithUs',
    };
  },
}
</script>
