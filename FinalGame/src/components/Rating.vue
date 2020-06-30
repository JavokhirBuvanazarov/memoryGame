<template>
    <div class="overall">
        <div class="container">
            <div class="rating">
                <div class="rating__title">List of players</div>
                <ul class="rating__list">
                    <li :key="index" :class="[curPosition === index ? 'rating__active':'', 'rating__item']"
                        v-for="(item, index) in rating">
                        <span class="rating__element rating__index">{{index+1}}</span>
                        <span class="rating__element rating__name">{{ item.nameUser }}</span>
                        <span class="rating__element rating__time">{{ formattedTime(item.timeUser)}}</span>
                    </li>
                </ul>
            </div>
            <button @click="returnHome" class="btn">Back to Home</button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import * as util from '../JS/util'

    export default {
        name: 'rating',
        computed: {
            ...mapState(['rating', 'curPosition']),
        },
        methods: {
            //вывести отформитированное время минуты и секунды
            formattedTime: function (num) {
                return util.getFormattedTime(num)
            },
            returnHome(){
                this.$router.back();
            }
        },

    }
</script>

<style scoped>
    tr{
        width: 100%!important;
    }
    .rating__list {
        color: black;
        font-size: 18px;
        list-style-type: none;
        padding: 0 20px;
        display: block;
        margin:0 auto;
    }

    .rating__title {
        font-size: 22px;
        text-align: center;
        margin-bottom: 30px;
        color: black;
        font-weight: 700;
    }
    .rating__item:first-child{
        border-top:1px solid black;
    }
    .rating__item {
        text-align: center;
        width: 600px;
        display: flex;
        padding-bottom: 5px;
        margin:0 auto;
        font-size: 20px;
        border-bottom:1px solid black;
    }

    .rating__element {
        padding-left: 10px;
        width: 33.3%;
        font-weight: 400;
    }

    .rating__active .rating__element {
        color: rebeccapurple;
        font-weight: 700;
    }
    .btn{
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        background-color: transparent;
        color: darkblue;
        border: 2px solid #008ABA;
        float: right;
    }
    .overall{
        height: 800px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        /*background: linear-gradient(to top, #1fa2ff, #12d8fa, #a6ffcb)!important;*/

    }

    .btn:hover {

        background-color: #008CBA;
        color: white;
    }
</style>
