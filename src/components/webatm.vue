<template>
    <!-- Web ATM 付款 -->
    <fieldset class="paybywebatm">
        <legend>付款資訊</legend>
        <div>
            <label>
                付款銀行
                <select name="bank" v-validate="'required'">
                    <option value="" disabled>請選擇銀行</option>
                    <option value="004">004 臺灣銀行</option>
                    <option value="005">005 臺灣土地</option>
                    <option value="006">006 合作金庫</option>
                    <option value="007">007 第一銀行</option>
                    <option value="008">008 華南銀行</option>
                    <option value="009">009 彰化銀行</option>
                    <option value="011">011 上海銀行</option>
                    <option value="012">012 台北富邦</option>
                    <option value="013">013 國泰世華</option>
                    <option value="017">017 兆豐銀行</option>
                    <option value="021">021 花旗銀行</option>
                    <option value="053">053 台中銀行</option>
                    <option value="054">054 京城銀行</option>
                    <option value="081">081 匯豐銀行</option>
                    <option value="102">102 華泰銀行</option>
                    <option value="147">147 三信銀行</option>
                    <option value="803">803 聯邦銀行</option>
                    <option value="806">806 元大銀行</option>
                    <option value="807">807 永豐銀行</option>
                    <option value="808">808 玉山銀行</option>
                    <option value="812">812 台新銀行</option>
                    <option value="816">816 安泰銀行</option>
                    <option value="822">822 中國信託</option>
                </select>
            </label>
            <ul class="atmNotice">
                <li>請先準備好晶片讀卡機與金融卡，以利作業</li>
                <li>請選擇您常用的銀行網路ATM，依步驟將金融卡插進讀卡機後進行轉帳</li>
                <li>使用台新銀行轉帳免費，他行將酌收15元手續費用/筆</li>
            </ul>
        </div>
    </fieldset>
</template>

<script>
export default {
    name: 'webatm',
    inject: ['$validator'],
    data () {
        return {
        }
    }
}
</script>
