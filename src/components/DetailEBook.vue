<template>
  <div>
    <div v-if="!isLoading && !eBook" class="text-center">
      Can not get detail of the eBook
    </div>

    <div v-if="isLoading" class="loading-container">
      <icon-loading></icon-loading>
    </div>

    <div v-if="!isLoading && eBook">
      <h2>{{eBook.name}}</h2>
      <h5>{{eBook.subHeading}}</h5>

      <div class="row">
        <div class="col-md-3">
          Image
        </div>

        <div class="col-md-6">
          <div v-html="eBook.description"></div>

          <div class="ed-btn">
            <p></p>
            <button type="button" class="btn btn-primary" @click="addToCart">Add to cart</button>
            <button type="button" class="btn btn-line-primary" @click="downloadNow">download now</button>
          </div>
        </div>

        <div class="col-md-3">
          <p>You can try 'Add to cart' feature</p>

          <p>Buy me a coffee</p>

          <p>Help me to like my pages</p>
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
          action: 'get_ebook',
          key: vm.$mcf.key,
          id: vm.$route.params.id
        })
          .then(res => {
            if (res.data.success) {
              vm.eBook = res.data.eBook;
            }
            vm.eBook = {
              name: "Learning Python",
              description: "Master the essential skills needed to recognize and solve complex problems with machine learning and deep learning. Using real-world examples that leverage the popular Python machine learning ecosystem, this book is your perfect companion for learning the art and science of machine learning to become a successful practitioner. The concepts, techniques, tools, frameworks, and methodologies used in this book will teach you how to think, design, build, and execute machine learning systems and projects successfully.\n" +
              "Practical Machine Learning with Python follows a structured and comprehensive three-tiered approach packed with hands-on examples and code."
            }
            vm.isLoading = false;
          }, () => {
            vm.eBook = {
              name: "Learning Python",
              description: "Master the essential skills needed to recognize and solve complex problems with machine learning and deep learning. Using real-world examples that leverage the popular Python machine learning ecosystem, this book is your perfect companion for learning the art and science of machine learning to become a successful practitioner. The concepts, techniques, tools, frameworks, and methodologies used in this book will teach you how to think, design, build, and execute machine learning systems and projects successfully.\n" +
              "Practical Machine Learning with Python follows a structured and comprehensive three-tiered approach packed with hands-on examples and code."
            }
            vm.isLoading = false;
          })

      },

      addToCart() {
        console.log('cart')
      },

      downloadNow() {
        console.log('download')
      }
    },

    created() {
      this.getDetail()
    }

  }
</script>

