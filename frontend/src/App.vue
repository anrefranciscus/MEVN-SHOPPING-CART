<template>
  <div id="app">
    <div id="nav-bar">
      <router-link :to="{ name: 'product'}" id="products-link">Product</router-link>
      <router-link :to="{ name: 'productdetail', params: {id: 123}}" id="products-link">Detail</router-link>
      <router-link :to="{ name: 'cart'}" id="products-link">Cart</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

</script>
<style>
* {
  box-sizing: border-box;
  font-family: Arial;
}
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;
}
#products-link {
  text-align: center;
  display: block;
  color: #41B883;
  font-size: 22px;
  left: 32px;
  position: absolute;
  top: 16px;
  text-decoration: none;
}
#products-link h1 {
    margin: 0;
}
#cart-link {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>
