<template>
  <div>
    <div class="row" v-if="showIntro">
      <search-form class="col-md-6" pr-wrap-class="col-md-12" v-on:submit="search"></search-form>

      <div class="col-md-6">
        <div class="home-intro">
          <p>Hello, this is my small online shop. Just for fun. You still can download without 'Add to cart', 'Checkout'.
            Just need to click to download button and get shareable download links.</p>
          <p>I would be happy If you can spend a little bit of time to test some feature of this website (add to cart, checkout, get shareable download link, love, sharing ...)</p>
          <p>Have fun!! :)</p>
        </div>
        <p class="notice-txt">
          This box only appears once in the first time you visit
        </p>

      </div>
    </div>

    <div v-if="!showIntro">
      <search-form v-on:submit="search"></search-form>
    </div>


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
        showIntro: false,
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
            vm.popularEBooks = res.data.eBooks ? res.data.eBooks : [];
            vm.lastAddedEBooks = res.data.eBooks ? res.data.eBooks : [];
          }
          this.isLoading = false;
        }, () => {
          this.isLoading = false;
        })

      if (!this.$localStorage.get('saw_intro')) {
        this.showIntro = true;
        this.$localStorage.set('saw_intro', true)
      }
    }

  }
</script>

