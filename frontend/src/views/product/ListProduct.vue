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
import {products} from "../../data-seed"
import ProductItem from "../../components/ProductItem.vue"
import NotFound from '../errors/NotFound.vue'

export default {
    name: 'ListProduct',
    components: {
      NotFound, ProductItem
    },
    data(){
        return {
            products
        }
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
  