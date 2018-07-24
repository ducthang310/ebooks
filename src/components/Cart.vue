<template>
  <div>
    <h3>
      Your cart
    </h3>

    <ul class="cart" v-if="already">
      <li class="cart__item">
        <div class="col-md-2">
          Image
        </div>
        <div class="col-md-7">
          Ebook name
        </div>
        <div class="col-md-2">
          Price
        </div>
        <div class="col-md-2">
          Delete
        </div>
      </li>
      <li class="cart__item" v-for="item in items">
        <div class="col-md-2">
          <div class="cart__item-img" :style="item.bkgStyles"></div>
        </div>
        <div class="col-md-7">
          {{item.name}}
        </div>
        <div class="col-md-2">
          Free
        </div>
        <div class="col-md-1">
          <button type="button" class="btn btn-delete" @click="deleteItem(item)"><span class="icon icon-bin"></span></button>
        </div>
      </li>
    </ul>

    <router-link :to="{name: 'checkout'}" class="btn btn-line-primary">Checkout</router-link>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      already: false,
      items: [
        {
          id: 1,
          name: "Book name",
          imageUrl: 'https://shiroad.com/wp-content/uploads/2018/05/Mastering-TypeScript.png'
        },
        {
          id: 1,
          name: "Book name",
          imageUrl: 'https://shiroad.com/wp-content/uploads/2018/05/Mastering-TypeScript.png'
        },
        {
          id: 1,
          name: "Book name",
          imageUrl: 'https://shiroad.com/wp-content/uploads/2018/05/Mastering-TypeScript.png'
        }
      ]
    }
  },


  methods: {
    format() {
      var vm = this

      vm.items.map(item => {
        item.bkgStyles = {
          'background-image': 'url(' + item.imageUrl + ')'
        }

        return item
      })

    },

    deleteItem(item) {

    },

    checkout() {

    }
  },

  created() {
    this.format()
    this.already = true
  }
}
</script>

