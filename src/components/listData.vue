<template>
    <div id="app">
        <div class="header">
            <div class="logo"></div>
            <!-- 三步驟，跟著頁面更換顏色 -->
            <ul class="progress">
                <li class="done">確認購物車</li>
                <li></li>
                <li class="active">選擇配送付款方式</li>
                <li></li>
                <li class="undo">確認訂票</li>
            </ul>
            <!-- 漸層區塊(訂購完成時隱藏) -->
            <div class="pageInfo">
                <ul class="order">
                    <li class="listName">
                        <h2>訂單明細</h2>
                        <p>(JC293016)</p>
                    </li>
                    <li class="product">商品小計<span> NT$ 880</span></li>
                    <li class="freight">運費<span> NT$ 60</span></li>
                    <li class="total">
                        總金額
                        <span>NT$ 940</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="body">
            <!-- 填寫訂購資料 -->
            <div class="listData">
                <div class="paymentTitle">
                    <h2 :class="{'linepaytitle': $route.name === 'linepay'}"><span :id="$route.name+'Icon'"></span>{{ paymentTitle }} 付款</h2>
                    <!-- LINE PAY 付款 -->
                    <h3 v-if="$route.name === 'linepay'">將於下一步跳轉至LINE Pay進行付款</h3>
                </div>
                <form action="">
                    <!-- 付款方式 -->
                    <router-view>
                    </router-view>
                    <!-- 訂購人資訊 -->
                    <fieldset class="buyer">
                        <legend>填寫訂購人資訊</legend>
                        <div>
                            <label class="form-name">
                                姓名
                                <input type="text" placeholder="請填寫真實姓名" v-validate="'required'" name="b-name" data-vv-as="姓名">
                                <em>{{ errors.first('b-name') }}</em>
                            </label>
                            <label class="form-phone">
                                手機
                                <select>
                                    <option value="">886</option>
                                    <option value="">81</option>
                                    <option value="">852</option>
                                    <option value="">853</option>
                                    <option value="">86</option>
                                </select>
                                <input type="tel" v-validate="'required'" name="b-phone" data-vv-as="手機號碼">
                                <em>{{ errors.first('b-phone') }}</em>
                            </label>
                            <br>
                            <label class="form-address">
                                地址
                                <input type="text" placeholder="郵遞區號" v-validate="'required|digits:3'" name="地址" maxlength="3">
                                <input type="text" placeholder="例：新北市信義區復興路999段99號1巷8樓" v-validate="'required'" name="b-address" data-vv-as="地址">
                                <em>{{ errors.first('b-address') }}</em>
                            </label>
                            <br>
                            <label class="form-email">
                                Email
                                <input type="email" v-validate="'required|email'" name="Email">
                                <em>{{ errors.first('Email') }}</em>
                            </label>
                        </div>
                    </fieldset>
                    <!-- 收件人資訊 -->
                    <fieldset class="recipient">
                        <legend>填寫收件人資訊</legend>
                        <div>
                            <label class="form-checkbox">
                                <input type="checkbox" v-model="sameData">
                                <span id="check-btn"></span>
                                同購物人資料
                                <span class="arrow"></span>
                            </label>
                            <br v-if="!sameData">
                            <label class="form-name" v-if="!sameData">
                                姓名
                                <input type="text" placeholder="請填寫真實姓名" v-validate="'required'" name="r-name" data-vv-as="姓名">
                                <em>{{ errors.first('r-name') }}</em>
                            </label>
                            <label class="form-phone" v-if="!sameData">
                                手機
                                <select>
                                    <option value="">886</option>
                                    <option value="">81</option>
                                    <option value="">852</option>
                                    <option value="">853</option>
                                    <option value="">86</option>
                                </select>
                                <input type="tel" v-validate="'required'" name="r-phone" data-vv-as="手機號碼">
                                <em>{{ errors.first('r-phone') }}</em>
                            </label>
                            <br v-if="!sameData">
                            <label class="form-address" v-if="!sameData">
                                地址
                                <input type="text" placeholder="郵遞區號" v-validate="'required|digits:3'" name="r-address" data-vv-as="地址" maxlength="3">
                                <input type="text" placeholder="例：新北市信義區復興路999段99號1巷8樓" v-validate="'required'" name="r-address" data-vv-as="地址">
                                <em>{{ errors.first('r-address') }}</em>
                            </label>
                            <br>
                            <label class="form-email" v-if="!sameData">
                                Email
                                <input type="email" v-validate="'required|email'" name="r-email" data-vv-as="Email">
                                <em>{{ errors.first('r-email') }}</em>
                            </label>
                        </div>
                    </fieldset>
                    <!-- 注意事項 -->
                    <ul class="notice">
                        <li>請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</li>
                        <li>若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
                        <li>若您對取貨或付款的方式有疑問，請詳閱<a href="#">「購買說明」</a>。</li>
                        <li>請確認您已詳閱並瞭解本站<a href="#">「購買說明」</a>內容，訂單完成即表示您已同意其中的各項說明。</li>
                        <li>
                            <label class="form-checkbox">
                                <input type="checkbox" v-validate="'required'" name="checkbox">
                                <span id="check-btn"></span>
                                確認，我已瞭解
                            </label>
                        </li>
                    </ul>
                    <div class="buttonWrap">
                        <button type="button" class="btn-white" @click="goback">上一步</button>
                        <button type="submit" class="btn-green" @click.prevent="validateAll">下一步</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'listData',
    data () {
        return {
            sameData: ''
        }
    },
    methods: {
        goback () {
            this.$router.go(-1)
        },
        validateAll () {
            let vm = this
            this.$validator.validateAll().then((result) => {
                if (result) {
                    vm.$router.push({name: 'orderdone'})
                } else {
                    console.log('madmada')
                    return false
                }
            })
        }
    },
    computed: {
        paymentTitle () {
            switch (this.$route.name) {
            case 'store':
                return '超商取貨'
            case 'credit':
                return '信用卡'
            case 'webatm':
                return 'Web ATM'
            case 'linepay':
                return 'LINE PAY'
            }
        }
    }
}
</script>
