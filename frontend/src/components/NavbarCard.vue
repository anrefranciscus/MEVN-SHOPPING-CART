<template>
    <div id="nav-bar">
        <router-link :to="{ name: 'product'}" id="products-link">
          <h1>{{ $t('highlight.versatile.value') }}</h1>
        </router-link>
        <router-link :to="{ name: 'cart'}" id="cart-link">
            <button>{{ $t('textbutton.textcart.value') }}</button>
        </router-link>
        <!-- <ChangeLanguage/> -->
    </div>
</template>
<script>
// import ChangeLanguage from './ChangeLanguage.vue'
export default { 
    name: 'NavbarCard',

}
</script>
<style scoped>
#nav-bar {
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
    display: flex;
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
