<template>
    <div>
        <div id="page-wrap" v-if="products">
            <div class="grid-wrap">
              <ProductItem v-for="product in products" :key="product.id" :product="product"/>
            </div>
        </div>
        <NotFound v-else/>
    </div>
</template>
<script>
import axios from "axios"
import ProductItem from "../../components/ProductItem.vue"
import NotFound from '../errors/NotFound.vue'

export default {
    name: 'ListProduct',
    components: {
      NotFound, ProductItem
    },
    data(){
        return {
            products: []
        }
    },
    created(){
        axios.get(`http://localhost:8000/api/products`)
        .then(({data, status}) => {
            if(status === 200) {
                this.products = data
                console.log(this.products)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>
<style scoped>
.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

</style>
  