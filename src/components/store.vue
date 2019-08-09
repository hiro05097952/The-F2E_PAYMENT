<template>
    <!-- 超商取貨付款 -->
    <fieldset class="paybyStore" @click="commonly = true ? false : false">
        <ul>
            <li><legend>選擇取貨門市</legend></li>
            <li class="convenienceIcon"></li>
            <li class="selectBranch"><a href="#" @click.prevent>選擇取貨門市</a></li>
            <li class="selectCommonly" @click.stop="commonly = !commonly">
                <a href="#" @click.prevent>選擇常用門市</a>
                <ul v-if="commonly">
                    <li>
                        <h3>南山</h3>
                        <p>台北市大安區復興路999段99號1巷</p>
                    </li>
                    <li>
                        <h3>台北車站</h3>
                        <p>台北市大安區復興路999段99號1巷</p>
                    </li>
                    <li>
                        <h3>京站</h3>
                        <p>台北市大安區復興路999段99號1巷</p>
                    </li>
                </ul>
            </li>
        </ul>
        <div>
            <ul>
                <li>取貨店名</li>
                <li>復興</li>
                <li><a href="#">儲存至常用門市</a></li>
            </ul>
            <ul>
                <li>取貨地址</li>
                <li>台北市大安區復興路999段99號1巷</li>
            </ul>
        </div>
    </fieldset>
</template>

<script>
export default {
    data () {
        return {
            commonly: false
        }
    }
}
</script>
