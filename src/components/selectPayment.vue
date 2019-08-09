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
            <!-- 選擇付款方式 -->
            <div class="selectPayment">
                <ul class="payment">
                    <li class="store" @click="payment='store'" :class="{'selected' : payment === 'store'}">
                        <a href="#" class="select" @click.prevent></a>
                        <div id="storeIcon"></div>
                        <h3>
                            超商取貨 付款
                            <a href="#" @click.prevent>24隔日取貨說明</a>
                        </h3>
                    </li>
                    <li class="credit" @click="payment='credit'" :class="{'selected' : payment === 'credit'}">
                        <a href="#" class="select" @click.prevent></a>
                        <div id="creditIcon"></div>
                        <h3>
                            信用卡 付款
                            <a href="#" @click.prevent>VISA, Master, JCB, 聯合信用卡</a>
                        </h3>
                    </li>
                    <li class="linepay" @click="payment='linepay'" :class="{'selected' : payment === 'linepay'}">
                        <a href="#" class="select" @click.prevent></a>
                        <div id="linepayIcon"></div>
                        <h3>
                            LINE Pay 付款
                            <a href="#" @click.prevent>使用line point折抵消費</a>
                        </h3>
                    </li>
                    <li class="union unselect">
                        <a href="#" class="select" @click.prevent></a>
                        <div id="unionIcon"></div>
                        <h3>
                            銀聯卡 付款
                            <a href="#" @click.prevent>支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準</a>
                        </h3>
                    </li>
                    <li class="webatm" @click="payment='webatm'" :class="{'selected' : payment === 'webatm'}">
                        <a href="#" class="select" @click.prevent></a>
                        <div id="webatmIcon"></div>
                        <h3>
                            Web ATM 付款
                            <a href="#" @click.prevent>網路銀行ATM操作說明</a>
                        </h3>
                    </li>
                </ul>
                <ul class="notice">
                    <li>請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</li>
                    <li>使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。</li>
                    <li>每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！</li>
                    <li>若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
                    <li>若您對取貨或付款的方式有疑問，請詳閱<a href="#" @click.prevent>「購買說明」</a>。</li>
                    <li>請確認您已詳閱並瞭解本站<a href="#" @click.prevent>「購買說明」</a>內容，訂單完成即表示您已同意其中的各項說明。</li>
                </ul>
                <div class="buttonWrap">
                    <button class="btn-white">上一步</button>
                    <button class="btn-green" @click="gostep2">下一步</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selectPayment',
    data () {
        return {
            payment: 'store'
        }
    },
    methods: {
        gostep2 () {
            let vm = this
            this.$router.push({name: vm.payment})
        }
    }
}
</script>
