<template>
  <div v-if="posts && posts.length" class="row">
        <div v-for="post in posts" v-bind:key="post.id" class="card col-lg-3 col-sm-4 col-md-3">
          <img class="card-img-top" :src="post.imageurl" alt="Card image cap">
          <div class="card-body text-center">
            <h5 class="card-title">{{post.name}}</h5>
            <p class="card-text describe-text">{{post.description}}</p>
            <label><i class="fab fa-ethereum"></i>{{post.price}}</label><br>
            <a :href="'/buy/'+ post.id" class="btn btn-success btn-product"><span class="fa fa-shopping-cart"></span> 購買</a>
          </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ViewProduct',
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.getProductList()
  },
  methods: {
    getProductList: function () {
      axios.get('/api/user/ViewProduct/' + this.$route.params.page)
        .then((response) => {
          this.posts = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.card-img-top {
    min-width: 100%;
    width: auto;
    height: 150px;
}
.card-title{
    overflow:hidden;
    white-space:nowrap;
}
.describe-text{
    width:auto;
    height: 50px;
    overflow:hidden;
    text-overflow:ellipsis;
}
</style>
