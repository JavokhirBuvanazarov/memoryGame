<template>
    <transition name="fade"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut" mode="out-in">
        <div :class="['card__item', card.item]" v-if="card.isShow" @click="onClick(card.id)">
            <div :class="['card', card.isFlip ? 'flip' : '' ]">
                <img class="card__front-face" :src=card.url>
                <img class="card__back-face" src="../assets/face.png">
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'card',
    props: {
      card: {
        type: Object,
      },
      onClick: {
        type: Function,
      },
    },
  }
</script>

<style scoped>
    .card__item-0-0 {
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .card__item-0-1 {
        position: absolute;
        left: 106px;
        top: 0px;
    }

    .card__item-0-2 {
        position: absolute;
        left: 212px;
        top: 0px;
    }

    .card__item-0-3 {
        position: absolute;
        left: 318px;
        top: 0px;
    }

    .card__item-0-4 {
        position: absolute;
        left: 424px;
        top: 0px;
    }

    .card__item-0-5 {
        position: absolute;
        left: 530px;
        top: 0px;
    }

    .card__item-1-0 {
        position: absolute;
        left: 0px;
        top: 106px;
    }

    .card__item-1-1 {
        position: absolute;
        left: 106px;
        top: 106px;
    }

    .card__item-1-2 {
        position: absolute;
        left: 212px;
        top: 106px;
    }

    .card__item-1-3 {
        position: absolute;
        left: 318px;
        top: 106px;
    }

    .card__item-1-4 {
        position: absolute;
        left: 424px;
        top: 106px;
    }

    .card__item-1-5 {
        position: absolute;
        left: 530px;
        top: 106px;
    }

    .card__item-2-0 {
        position: absolute;
        left: 0px;
        top: 212px;
    }

    .card__item-2-1 {
        position: absolute;
        left: 106px;
        top: 212px;
    }

    .card__item-2-2 {
        position: absolute;
        left: 212px;
        top: 212px;
    }

    .card__item-2-3 {
        position: absolute;
        left: 318px;
        top: 212px;
    }

    .card__item-2-4 {
        position: absolute;
        left: 424px;
        top: 212px;
    }

    .card__item-2-5 {
        position: absolute;
        left: 530px;
        top: 212px;
    }

    .card__item-3-0 {
        position: absolute;
        left: 0px;
        top: 318px;
    }

    .card__item-3-1 {
        position: absolute;
        left: 106px;
        top: 318px;
    }

    .card__item-3-2 {
        position: absolute;
        left: 212px;
        top: 318px;
    }

    .card__item-3-3 {
        position: absolute;
        left: 318px;
        top: 318px;
    }

    .card__item-3-4 {
        position: absolute;
        left: 424px;
        top: 318px;
    }

    .card__item-3-5 {
        position: absolute;
        left: 530px;
        top: 318px;
    }

    .card__item-4-0 {
        position: absolute;
        left: 0px;
        top: 424px;
    }

    .card__item-4-1 {
        position: absolute;
        left: 106px;
        top: 424px;
    }

    .card__item-4-2 {
        position: absolute;
        left: 212px;
        top: 424px;
    }

    .card__item-4-3 {
        position: absolute;
        left: 318px;
        top: 424px;
    }

    .card__item-4-4 {
        position: absolute;
        left: 424px;
        top: 424px;
    }

    .card__item-4-5 {
        position: absolute;
        left: 530px;
        top: 424px;
    }

    .card__item-5-0 {
        position: absolute;
        left: 0px;
        top: 530px;
    }

    .card__item-5-1 {
        position: absolute;
        left: 106px;
        top: 530px;
    }

    .card__item-5-2 {
        position: absolute;
        left: 212px;
        top: 530px;
    }

    .card__item-5-3 {
        position: absolute;
        left: 318px;
        top: 530px;
    }

    .card__item-5-4 {
        position: absolute;
        left: 424px;
        top: 530px;
    }

    .card__item-5-5 {
        position: absolute;
        left: 530px;
        top: 530px;
    }
    .card {
        width: 100px;
        height: 100px;
        margin: 5px;
        position: relative;
        transform: scale(1);
        transform-style: preserve-3d;
        transition: transform .5s;
        border-radius: 10px;
        cursor: pointer;
    }

    .card:active {
        transform: scale(0.97);
        transition: transform .2s;
    }

    .card.flip {
        transform: rotateY(180deg);
    }

    .card.flip .card__back-face {
        display: none;
    }

    .card.flip .card__front-face {
        transform: rotateY(180deg);
    }

    .card__front-face,
    .card__back-face {
        top: 0;
        left: 0;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        padding: 10px;
        position: absolute;
        border-radius: 10px;
        background: transparent;
        border: white solid 1px;
    }

</style>
