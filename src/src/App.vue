<template>
  <v-app>
    <!-- Header -->
    <HeaderCom />

    <!-- Main Content -->
    <v-content>
      <ValidatorsList/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/ui/Header';
import ValidatorsList from './components/ValidatorsList';

export default {
  name: 'App',
  components: {
    HeaderCom: Header,
    ValidatorsList,
  },
};
</script>
