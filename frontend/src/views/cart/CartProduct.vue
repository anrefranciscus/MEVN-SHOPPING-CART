<template>
    <div>
        <div id="page-wrap">
            <h1>Your Cart</h1>
            <ItemCart
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            v-on:remove-item="removeFromCart($event)"
            />
            <h3 id="total-price">Total: {{ new Intl.NumberFormat("id", {
                style: "currency",
                currency: "IDR"
            }).format(totalPrice) }}</h3>
            <button id="checkout-button">Checkout</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import ItemCart from '@/components/ItemCart.vue';
export default {
    name: 'CartProduct',
    components: {ItemCart},
    data(){
        return {
            cartItems: []
        }
    },
    computed: {
        totalPrice(){
            // get data satu persatu
            return this.cartItems.reduce(
                (sum, item ) => sum + Number(item.price),
                0
            )
        }
    },
    methods: {
        removeFromCart(product){
            // console.log(product)
            axios.delete(`http://localhost:8000/api/orders/delete/user/1/product/${product}`,)
            .then(({status}) => {
                if (status === 200) {
                    let indexCart = this.cartItems.map(function(item) {
                        return item.code
                    }).indexOf(product)

                    this.cartItems.splice(indexCart, 1)
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    async created(){
        const result = await axios.get(`http://localhost:8000/api/orders/user/1`)
        let data = Object.assign({}, 
            ...(result.data.map(
                result => ({
                    cart_items: result.products
                })
            ))
        )
        this.cartItems = data.cart_items
        console.log(this.cartItems)
        // axios.get(`http://localhost:8000/api/orders/user/1`)
        // .then(({data, status}) => {
        //     if (status === 200) {
        //         this.cartItems = data
        //         console.log('DATA_CART_ITEM', data)
        //     }
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }
}

</script>
<style scoped>
h1 {
    border-bottom: 1px solid #41B883;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }
  #total-price {
    padding: 16px;
    text-align: right;
  }
  #checkout-button {
    width: 100%;
  }

</style>
  