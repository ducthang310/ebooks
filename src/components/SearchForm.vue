<template>
  <div>
    <form class="search-form row" @submit.prevent="submit()">
      <div class="form-group col-md-5">
        <button type="submit" class="btn btn-search"><span class="icon-search"></span></button>
        <input type="text" name="keyword" placeholder="Search for eBooks" class="form-control" v-model="keyword"/>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'SearchForm',
    props: [
      'prKeyword'
    ],
    data() {
      return {
        keyword: ''
      }
    },

    methods: {
      submit() {
        this.$emit('submit', {keyword: this.keyword})
      }
    },

    created() {
      this.keyword = this.prKeyword
    },


    watch: {
      'prKeyword': function () {
        this.keyword = this.prKeyword
      }
    }

  }
</script>

