<script>
  export default {
    props: {

    },
    data() {
      return {
        categories: ['HOME', 'EXPERIENCE', 'WEB', 'APP/OTHER' ]
      }
    },
    methods: {
      scrollToPage(index, fromNav) {
        this.$store.commit('changeCurrentItemFromNav', {index, fromNav})
      }
    },
    computed: {
      currentItem() {
        return this.$store.state.currentItem
      },
    }
  }
</script>

<template>
    <nav>
      <div class="nav-content">
        <div class="nav-item-column"
        v-for="(category, index) in categories">
          <span
            @click="scrollToPage(index, true)"
            :class="['nav-title', currentItem === index ? 'nav-active' : 'nav-unactive']"
          >
          {{category}}
          </span>
        </div>
      </div>
    </nav>
</template>

<style scoped>
  footer {
    position: fixed;
    z-index: 25;
    width: 100px;
    height: 5rem;
    background-color: black;
    display: flex;
    flex-direction: column;
    padding-left: 15vw;
    padding-top: 10vh;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    /* box-sizing: border-box;
    transition: all 0.1s ease;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0px 80px 0 80px;
    height: 70px;
    color: white;
    transform: translateY(0);
    transition: transform 0.3s ease;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 1rem;
    font-weight: 300;
    z-index: 10; */
  }
  nav {
    text-align: center;
    font-size: 13px;
    position: fixed;
    z-index: 10;
    bottom: 0;
    width: calc(100% - 16px);
    display: flex;
    padding: 0.6rem;
    background-color: #00000043;
    justify-content: center;
  }
  .nav-content {
    display: flex;
    width: 100%;
    /* background-color: green; */
    justify-content: space-around;
  }
  .nav-design {
    /* display: flex;
      flex-direction: column; */
    display: grid;
    /* border: 1px solid green; */
  }
  .nav-item-column {
    display: flex;
  }
  .nav-title {
    display: flex;
    align-self: center;
  }
  .nav-active {
    color: rgb(213, 207, 252);
    cursor: auto;
    pointer-events: none;
    border-top: 1px solid rgb(213, 207, 252, 0.3);
    border-bottom: 1px solid rgb(213, 207, 252, 0.3);
    padding: 3px 5px 2px 5px;;
    border-radius: 4px;
    transition: 0.4s ease;
  }
  .nav-unactive {
    color: #aee5fa;
    cursor: pointer;
    pointer-events: auto;
    border-top: 1px solid rgba(255, 255, 255, 0);
    border-bottom: 1px solid rgba(255, 255, 255, 0);
    padding: 3px 5px 2px 5px;;
    border-radius: 4px;
    transition: 0.4s ease;
  }

  @media (min-width: 580px) {
    nav {
      width: unset;
      border-top-left-radius: 40px;
      text-align: right;
      font-size: 12px;
      position: fixed;
      z-index: 10;
      right: 0;
      display: flex;
      padding: 1rem 1rem 1rem 3rem;
    }
    .nav-content {
      display: flex;
      gap: 10px;
    }
    .nav-item-column {
      display: flex;
    }
    .nav-title {
      display: flex;
      align-self: center;
    }
  }
</style>
