<template>
    <div class="product-item">
        <img :src="`http://localhost:8000${product.imageUrl}`" alt="image product"/>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ new Intl.NumberFormat("id", {
            style: "currency",
            currency: "IDR"
        }).format(product.price) }}</p>
        <router-link :to="{ name: 'productdetail', params: {id: product.code}}">
            <button>{{ $t('textbutton.textdetail.value') }}</button>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'ProductItem',
    props: ['product']
}
</script>
<style scoped>
.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 5%;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>