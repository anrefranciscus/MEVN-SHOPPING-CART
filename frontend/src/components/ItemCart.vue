<template>
    <div class="product-container">
        <img :src="`http://localhost:8000${item.imageUrl}`" alt="" class="product-image">
        <div class="details-wrap">
            <h3>{{ item.name }}</h3>
            <h3>{{ new Intl.NumberFormat("id",{
                style: "currency",
                currency: "IDR"    
            }).format(item.price) }}</h3>
        </div>
        <button class="remove-button" @click="$emit('remove-item', item.code)">{{ $t('highlight.textremove.value') }}</button>
    </div>
</template>
<script>
export default {
    name: 'ItemCart',
    props: {
      item: []
    }
}
</script>
<style scoped>
.product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }
  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }
  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }
  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>