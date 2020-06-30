<template>
    <div id="app">
        <div class="main">
            <div class="text">
                <h1  data-heading="Game">Game</h1>
            </div>
            <div class="d-flex">
                <button class="btn btn__start" @click="startGame">Start</button>
                <button class="btn btn__start" @click="checkRating">Check your rating</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Rating from './Rating.vue'
    import { mapMutations, mapState } from 'vuex'

    export default {
        name: 'Home',
        components: {Rating},
        computed: {
            ...mapState(['curPosition']),
        },
        methods: {
            ...mapMutations(['setUserName']),
            startGame: function () {
                if (this.curPosition === 99) {
                    this.$swal({
                        title: 'Enter your name',
                        input: 'text',
                        inputValue: 'Name',
                        inputAttributes: {
                            autocapitalize: 'off',
                        },
                        inputValidator: (value) => {
                            if (!value) {
                                return 'Введите непустое имя'
                            }
                        },
                        confirmButtonColor: '#FF9C13',
                        showLoaderOnConfirm: true,
                        preConfirm: (userName) => {
                            this.setUserName(userName);
                            this.$router.push({name: 'Game'})
                        },
                    })
                } else {
                    this.$router.push({name: 'Game'})
                }
            },
            checkRating(){
                this.$router.push({name:'Rating'});
            }
        },
    }
</script>

<style scoped>
    .btn{
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 22px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        background-color: transparent;
        color: darkblue;
        border: 2px solid #008ABA;
    }

    .btn:hover {
        background-color: #008CBA;
        color: white;
    }

    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }

    .text {
        color: white;
        font-size: 18px;
        padding-bottom: 20px;
    }

    .text__title {
        font-size: 28px;
        font-weight: 700;
    }
    html { height: 100%; }

       #app {
           font-family: 'Roboto', sans-serif;
           height: 100%;
           display: flex;
           align-items: center;
           justify-content: center;
           align-content: center;
           background: linear-gradient(to top, #1fa2ff, #12d8fa, #a6ffcb)!important;
       }

       h1 {
           text-align: center;
           font-size: 14vw;
           position: relative;
           font-weight: 900;
           text-transform: uppercase;
           line-height: 1;
           color: transparent;

       }
    h1:focus {
         outline: none;
     }


    h1::before, h1::after {
        content: attr(data-heading);
        position: absolute;
        top: 0;
        left: 0;
    }

       h1::before {
           color: cyan;
           clip-path: polygon(0% 100%, 100% 100%, 100% 40%, 0 60%)
       }

    h1::after {
        color: white;
        clip-path: polygon(0 0, 100% 0%, 100% 36%, 0 56%);
        animation: slide 5s infinite;
    }


    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translate(-20px, 2%);
        }
    }
</style>
