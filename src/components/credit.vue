<template>
    <!-- 信用卡付款 -->
    <fieldset class="paybyCredit">
        <ul>
            <li><legend>填寫付款資訊</legend></li>
            <li id="visa"></li>
            <li id="master"></li>
            <li id="jcb"></li>
        </ul>
        <div>
            <label>
                信用卡號
                <input type="text" placeholder="0000 0000 0000 0000" v-validate="'required|credit_card'" name="信用卡" maxlength="19" minlength="16">
                <em>{{ errors.first('信用卡') }}</em>
            </label>
            <br>
            <label>
                有效年月
                <input type="text" placeholder="MM/YY" v-validate="'required|date_format:mm/yy'" name="有效年月" maxlength="5">
                <span class="question">？</span>
                <ul class="creditInfo">
                    <li>請翻至卡片背後，為日期標示之數字</li>
                    <li id="creditImg1"></li>
                </ul>
                <em>{{ errors.first('有效年月') }}</em>
            </label>
            <label>
                驗證碼
                <input type="text" placeholder="CVV" v-validate="'required|digits:3'" name="驗證碼" maxlength="3">
                <span class="question">？</span>
                <ul class="creditInfo">
                    <li>請翻至卡片背後，位於簽名欄旁的三碼數字</li>
                    <li id="creditImg2"></li>
                </ul>
                <em>{{ errors.first('驗證碼') }}</em>
            </label>
            <br>
            <label>
                手機
                <input type="tel" placeholder="刷卡若採簡訊驗證，將發至您發卡銀行的手機號碼" v-validate="'required|phone'" name="手機號碼" maxlength="10">
                <em>{{ errors.first('手機號碼') }}</em>
            </label>
        </div>
    </fieldset>
</template>

<script>
export default {
    name: 'credit',
    // 讓父層也能審核到子組件
    inject: ['$validator'],
    data () {
        return {
        }
    }
}
</script>
