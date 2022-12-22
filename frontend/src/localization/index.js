import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)

import EN from "./en"
import ID from "./id"

export default new VueI18n({
    locale: 'EN',
    messages: {
        ID,
        EN
    }
})