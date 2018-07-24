<template>
  <div>
    <div v-if="!isLoading && !eBook" class="text-center">
      Can not get detail of the eBook
    </div>

    <div v-if="isLoading" class="loading-container">
      <icon-loading></icon-loading>
    </div>

    <div v-if="!isLoading && eBook">
      <h2 class="ed-heading">{{eBook.name}}</h2>

      <div class="row">
        <div class="col-md-3">
          <img class="ed-image" v-if="eBook.eb_image && eBook.eb_image.url" :src="eBook.eb_image.url" alt="eBook.name" title="eBook.name"/>
        </div>

        <div class="col-md-6">
          <div class="ed-description">
            <h5>DESCRIPTION</h5>
            <div v-html="eBook.eb_description"></div>
          </div>

          <div class="ed-author">
            <h5>ABOUT THE AUTHOR</h5>
            <div v-html="eBook.eb_author"></div>
          </div>

          <div class="ed-btn row">
            <div class="col-md-6">
              <button type="button" class="btn btn-primary" @click="addToCart">Add to cart</button>
            </div>
            <div class="col-md-6">
              <button type="button" class="btn btn-line-primary" @click="downloadNow">Download now</button>
            </div>
          </div>

          <div class="ed-btn row" v-if="eBook.eb_buy_online">
            <div class="col-md-6">
              <a :href="eBook.eb_buy_online" target="_blank" class="btn btn-primary btn-x">Buy online</a>
            </div>
            <div class="col-md-12">
              <p class="notice-txt">I'm sorry, this book is not free</p>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box-actions">
            <p>
              <a href="https://shiroad.com/contact" target="_blank" class="btn btn-line-primary btn-width-100 text-left">
                <span class="icon icon-envelop"></span>Contact me
              </a>
            </p>
            <p>
              <a href="https://paypal.me/ducthang310" target="_blank" class="btn btn-line-primary btn-width-100 text-left">
                <span class="icon icon-mug"></span>Buy me a coffee
              </a>
            </p>
            <p>
              <a href="https://shiroad.com/facebook-pages" target="_blank" class="btn btn-line-primary btn-width-100 text-left">
                <span class="icon icon-facebook2"></span>Like my pages
              </a>
            </p>
          </div>
          <div class="left-box">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IconLoading from '@/components/IconLoading'

  export default {
    name: 'DetailEBook',
    components: {
      IconLoading
    },
    data() {
      return {
        eBook: null,

        isLoading: false
      }
    },

    methods: {
      getDetail() {
        var vm = this

        vm.isLoading = true
        vm.$http.post(vm.$mcf.baseApiUrl, {
          action: 'get_eBook',
          key: vm.$mcf.key,
          id: vm.$route.params.id
        })
          .then(res => {
            if (res.data.success) {
              vm.eBook = res.data.eBook;
            }
            vm.isLoading = false;
          }, () => {
            vm.isLoading = false;
          })

      },

      addToCart() {
        console.log('cart')
      },

      downloadNow() {
        console.log('download')
      },

      buyOnline() {
        console.log('buy online')
      }
    },

    created() {
      this.getDetail()
    }

  }
</script>

