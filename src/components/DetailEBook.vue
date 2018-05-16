<template>
  <div>

    <div v-if="!isLoading && !eBook" class="text-center">
      Can not get detail of the eBook
    </div>

    <div v-if="isLoading" class="loading-container">
      <icon-loading></icon-loading>
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
      getDetail () {
        var vm = this
        vm.isLoading = true

      }
    },

    created () {

    }

  }
</script>

