<template>
  <div>
    <div class="row book-grid">
      <div class="col-sm-6 col-md-4 col-lg-3 book-grid__item" v-for="eBook in eBooks">
        <div class="book-grid__item-wrap">
          <div class="book-grid__img">
            <img v-if="eBook.eb_image && eBook.eb_image.url" :src="eBook.eb_image.url" alt="eBook.name" title="eBook.name"/>
          </div>
          <div class="book-grid__name">
            <router-link :to="{name: 'ebook_detail', params: {id: eBook.id}}">{{eBook.name}}</router-link>
          </div>
          <div class="book-grid__btn">
            <button type="button" class="btn" @click.prevent="likeBook(eBook)"><span class="ico icon-heart"></span></button>
            <button type="button" class="btn" @click.prevent="addToCart(eBook)"><span class="ico icon-cart"></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookGrid',
  props: [
    'prEBooks'
  ],
  data () {
    return {
      eBooks: []
    }
  },

  methods: {
    likeBook(eBook) {

    },

    addToCart(eBook) {

    }
  },

  created() {
    this.eBooks = this.prEBooks
  },

  watch: {
    'prEBooks': function () {
      this.eBooks = this.prEBooks
    }
  }

}
</script>

