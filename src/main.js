// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate, {Validator} from 'vee-validate'
import zh_TW from 'vee-validate/dist/locale/zh_TW'

const phoneValidator = {
    getMessage (field) {
        return `${field} 格式不正確`
    },
    validate (value) {
        const rule = /^[09]{2}[0-9]{8}$/
        return rule.test(value)
    }
}

Vue.use(VeeValidate, {
    locale: 'zh_TW',
    classes: true,
    classNames: {
        valid: 'is-valid',
        invalid: 'is-invalid'
    },
    delay: 500
})
Validator.localize('zh_TW', zh_TW)
Validator.extend('phone', phoneValidator)

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
    if (to.meta.fromName !== undefined) {
        to.meta.fromName = from.name
    }
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
