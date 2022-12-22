<template>
    <div>
        <div id="page-wrap">
            <div id="img-wrap">
                <img :src="`http://localhost:8000${product.imageUrl}`" alt="" />
            </div>
            <div id="product-details">
                <h1>{{ product.name }}</h1>
                <h3 id="price">{{ new Intl.NumberFormat("id", {
                    style: "currency",
                    currency: "IDR"    
                }).format(product.price)}}</h3>
                <p>{{ product.averageRating }}</p>
                <button id="add-to-cart">Add to Cart</button>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "DetailProduct",
    data(){
        return {
            product: {}
        }
    },
    // computed: {
    //     product(){
    //         return this.products.find((p) => {
    //             return p.id === this.$route.params.id
    //         })
    //     }
    // },
    created(){
        const code = this.$route.params.id
        axios.get(`http://localhost:8000/api/products/${code}`)
        .then(({data, status}) => {
            if(status === 200){
                this.product = data
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>
<style scoped>
#page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>
  