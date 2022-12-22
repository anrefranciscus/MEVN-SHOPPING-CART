<template>
    <div>
        <div id="page-wrap" v-if="product">
            <!-- <h4 v-if="notification" class="notification">Add To Cart Successfully</h4> -->
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
                <button id="add-to-cart" @click="addToCart(product.code)">Add to Cart</button>
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
            product: {},
            notification: false
        }
    },
    methods: {
        addToCart(product){
            axios.post(`http://localhost:8000/api/orders//update/user/1`, {
                product: product
            })
            .then(({data, status}) => {
                if(status === 200) {
                    console.log(data)
                    // this.notification = true
                    this.$swal(
                        'Added',
                        'Add to Cart Successfuly.',
                        'Success'
                    )
                }
            })
        }
    },
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
  .notification {
    text-align: center;
    color: white;
    background-color: #41B883;
    padding: 3%;
    border-radius: 8px;
  }
</style>
  