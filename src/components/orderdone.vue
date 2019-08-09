<template>
    <div id="app">
        <div class="header">
            <div class="logo"></div>
            <!-- 三步驟，跟著頁面更換顏色 -->
            <ul class="progress alldone">
                <li class="done">確認購物車</li>
                <li></li>
                <li class="done">選擇配送付款方式</li>
                <li></li>
                <li class="done">確認訂票</li>
            </ul>
        </div>
        <div class="body">
            <!-- 訂購成功頁面 -->
            <div class="orderDone">
                <h2>訂購成功！</h2>
                <p v-html="doneNotice"></p>
                <span></span>

                <div class="listWrap">
                    <h3>訂單資訊 (JC293016)</h3>
                    <div class="listInfo">
                        <ul>
                            <li></li>
                            <li>數量</li>
                            <li>顏色</li>
                            <li></li>
                            <li>價格</li>
                        </ul>
                        <ul>
                            <li>長版無袖洋裝</li>
                            <li>1</li>
                            <li>綠色</li>
                            <li></li>
                            <li>599元</li>
                        </ul>
                        <ul>
                            <li>大球氣質銀飾耳環(針式)</li>
                            <li>1</li>
                            <li>紅色</li>
                            <li></li>
                            <li>281元</li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>運費</li>
                            <li>60元</li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>共2品項，總計</li>
                            <li>NT$ 940</li>
                        </ul>
                    </div>

                    <h3>取貨資訊<span v-if="$route.meta.fromName === 'store'"></span></h3>
                    <div class="destinationInfo">
                        <ul>
                            <li>取貨店名</li>
                            <li>復興</li>
                        </ul>
                        <ul>
                            <li>取貨地址</li>
                            <li>台北市大安區復興路999段99號1巷</li>
                        </ul>
                    </div>

                    <h3>付款資訊</h3>
                    <div class="payInfo" v-html="payInfo">
                    </div>
                </div>

                <div class="buttonWrap">
                    <button class="btn-white">會員專區</button>
                    <button class="btn-green" @click.prevent>返回首頁</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'orderdone',
    data () {
        return {
        }
    },
    computed: {
        doneNotice () {
            if (this.$route.meta.fromName === 'store') {
                return `感謝您的訂購，請您在2019/08/10，am00:00前繳費<br>至超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。`
            } else {
                return `感謝您的訂購，我們將儘速為您出貨！`
            }
        },
        payInfo () {
            if (this.$route.meta.fromName === 'store') {
                return `
                <ul>
                    <li>需付金額：940元</li>
                    <li>繳費代碼：Rh7847213183</li>
                    <li>繳費期限：2019/08/10,am00:00</li>
                    <li>狀態：待付款</li>
                </ul>`
            } else if (this.$route.meta.fromName === 'credit') {
                return `
                <ul>
                    <li>信用卡刷卡：940元</li>
                    <li>手續費：0元</li>
                    <li>狀態：已完成付款</li>
                </ul>`
            } else if (this.$route.meta.fromName === 'webatm') {
                return `
                <ul>
                    <li>Web ATM付款：940元</li>
                    <li>付款銀行：玉山銀行</li>
                    <li>手續費：15元</li>
                    <li>狀態：已完成付款</li>
                </ul>`
            } else {
                return `
                <ul>
                    <li>LINE Pay付款：940元</li>
                    <li>LINE Point折抵：65元</li>
                    <li>手續費：0元</li>
                    <li>狀態：已完成付款</li>
                </ul>`
            }
        }
    }
}
</script>
