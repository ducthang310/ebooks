<template>
  <div>
    <search-form v-on:submit="search"></search-form>

    <div class="" v-if="!isLoading">
      <div class="row-header">
        Most popular eBooks
      </div>

      <div v-if="popularEBooks.length">
        <book-grid :prEBooks="popularEBooks"></book-grid>
      </div>

      <div class="mgb-30" v-if="!popularEBooks.length">
        Has no eBooks
      </div>

      <div class="row-header">
        Last Added eBooks
      </div>

      <div v-if="lastAddedEBooks.length">
        <book-grid :prEBooks="lastAddedEBooks"></book-grid>
      </div>

      <div class="mgb-30" v-if="!lastAddedEBooks.length">
        Has no eBooks
      </div>
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
    name: 'Index',
    components: {
      IconLoading, BookGrid, SearchForm
    },
    data() {
      return {
        popularEBooks: [],
        lastAddedEBooks: [],

        isLoading: false,
      }
    },

    methods: {
      search(data) {
        this.$router.push({name: 'search', query: {s: data.keyword}})
      },

    },

    created() {
      var vm = this

      // Call api to get eBooks
      vm.isLoading = true;
      vm.$http.post(vm.$mcf.baseApiUrl, {
        action: 'get_ebooks_dashboard',
        key: vm.$mcf.key,
      })
        .then(res => {
          if (res.data.success) {
            vm.popularEBooks = res.data.popularEBooks ? res.data.popularEBooks : vm.$mcf.eBooks;
            vm.lastAddedEBooks = res.data.lastAddedEBooks ? res.data.lastAddedEBooks : vm.$mcf.eBooks;
          }
          this.isLoading = false;
        }, () => {
          this.isLoading = false;
        })
    }

  }
</script>

