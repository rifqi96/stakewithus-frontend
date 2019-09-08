<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12 my-3>
        <v-card>
          <v-card-title>
            {{title}}
            <div class="flex-grow-1"></div>
            <v-text-field
              v-model="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            hide-default-actions
            class="elevation-1"
            :loading="isLoading"
            loading-text="Loading... Please wait"
          ></v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'Validators List',
      isLoading: true,
      search: '',
      items: [],
    }
  },
  computed: {
    headers() {
      return this.$store.getters['validators/tableData'].headers;
    },
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      await this.$store.dispatch('validators/fetchValidators');
      const tableDataItems = this.$store.getters['validators/tableData'].items;
      this.items = tableDataItems;
      setTimeout(() => {
        this.isLoading = false;
      }, 800);
    },
  },
}
</script>