<template>
  <div>
    <search-form v-on:submit="cbSubmit" :prKeyword="keyword"></search-form>

    <div v-if="!isLoading && eBooks.length">
      <book-grid :prEBooks="eBooks"></book-grid>
    </div>

    <div v-if="!isLoading && !eBooks.length">
      Nothing Found
    </div>

    <div class="loading-container" v-show="isLoading">
      <icon-loading></icon-loading>
    </div>
  </div>
</template>

<script>
  import IconLoading from '@/components/IconLoading'
  import BookGrid from '@/components/BookGrid'
  import SearchForm from '@/components/SearchForm'

  export default {
    name: 'Search',
    components: {
      IconLoading, BookGrid, SearchForm
    },
    data() {
      return {
        keyword: '',
        eBooks: [],
        isLoading: false
      }
    },

    methods: {
      cbSubmit(data) {
        this.keyword = data.keyword
        this.search();
      },

      search() {
        var vm = this
        if (!vm.keyword || vm.isLoading) {
          return
        }

        // Call api to search
        vm.isLoading = true;
        vm.$http.post(vm.$mcf.baseApiUrl, {
          action: 'get_eBooks',
          key: vm.$mcf.key,
          keyword: vm.keyword
        })
          .then(res => {
            if (res.data.success) {
              vm.eBooks = res.data.eBooks ? res.data.eBooks : [];

            }
            this.isLoading = false;
          }, () => {
            this.isLoading = false;
          })
      },

    },

    created() {
      if (this.$route.query.s) {
        this.keyword = this.$route.query.s;
        this.search();
      }
    }

  }
</script>

