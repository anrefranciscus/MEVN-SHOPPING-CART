<template>
    <div class="change-language">
        <!-- <img src="" alt="" class="change-icon"/> -->
        <select class="select" v-model="selectedLanguage">
            <option value="EN">English</option>
            <option value="ID">Indonesia</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'ChangeLanguage',
    data(){
        return {
            selectedLanguage: 'EN'
        }
    },
    watch: {
        selectedLanguage(payload){
            this.$i18n.locale = payload
        }
    }
}
</script>
<style scoped>
  .change-icon {
    width: 40px;
    height: 40px;
  }
  .select {
    margin-left: 16px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #42b983;
    padding: 8px;
    color: #2c3e50;
    font-weight: bold;
  }
</style>