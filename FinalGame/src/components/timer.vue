<template>
    <div class="timer" :key="currentTime">
        <div class="timer__digit">{{ minutes | twoDigits }}</div>
        <div class="timer__digit">:</div>
        <div class="timer__digit">{{ seconds | twoDigits }}</div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'timer',
    computed: {
      //считаем секунды
      seconds () {
        return Math.trunc(this.currentTime) % 60
      },
      //считаем минуты
      minutes () {
        return Math.trunc(this.currentTime / 60) % 60
      },
      ...mapState(['currentTime'])
    },
    filters: {
      //добавление нулей к секундам и минутам
      twoDigits (value) {
        if (value.toString().length <= 1) {
          return '0' + value.toString()
        }
        return value.toString()
      },
    },
  }
</script>

<style scoped >

    .timer {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color: indianred;
        font-weight: 700;
        text-shadow: 0 1px 0 rgb(255, 255, 255), 0 -1px 0 rgb(255, 255, 255), 1px 0 0 rgb(255, 255, 255), -1px 0 0 rgb(255, 255, 255), 1px 1px 0 rgb(255, 255, 255), 1px -1px 0 rgb(255, 255, 255), -1px 1px 0 rgb(255, 255, 255), -1px -1px 0 rgb(255, 255, 255);
        letter-spacing: 2px;
    }

    .timer__digit {
        padding-left: 5px;
    }
</style>
