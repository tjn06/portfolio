<script>
  import ContactButton from './svg/ContactButton.vue'

  export default {
    components: {
      ContactButton
    },
    created() {
      window.addEventListener('resize', this.windowResizeHandler)
      this.windowInnerWidth = window.innerWidth
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
    },
    mounted() {},
    data() {
      return {
        contactOpenMediaQ: false,
        contactOpenUser: false,
        windowInnerWidth: window.innerWidth
      }
    },
    watch: {
      hasTriggeredPagePagination(newV, oldV) {
        if (newV != oldV) {
          window.removeEventListener('resize', this.windowResizeHandler)
        }
      }
    },
    methods: {
      windowResizeHandler(e) {},
      getWindowWidth() {
        this.windowInnerWidth = window.innerWidth
        if (window.innerWidth >= 790 && this.contactOpenUser) {
          this.contactOpenMediaQ = true
          this.contactOpenUser = false
        } else if (window.innerWidth <= 790 && !this.contactOpenUser) {
          this.contactOpenMediaQ = false
          this.contactOpenUser = false
        }
      },
      openCloseHeader() {
        this.contactOpenUser = !this.contactOpenUser
      }
    },
    computed: {
      currentItem() {
        return this.$store.state.currentItem
      },
      isFirstItem() {
        if (this.currentItem != 0 && this.windowInnerWidth >= 790) {
          return {
            opacity: '0.2'
            /* color: 'red' */
          }
        } else {
          return {
            opacity: '1'
          }
        }
      },
      isFullscreen() {
          if (this.contactOpenUser) {
            return {
              'background-color' : '#13001A',
              'padding-top': '30%',
              'padding-left': '20%',
              'height': '100%'
            }
          } else {
            return {
              'padding-top': 'unset',
              'padding-left': '10px',
            }
          }
        if (this.contactOpenUser) {
          return {
            'background-color': '#13001A',
            'padding-top': '30%',
            'padding-left': '20%',
            height: '100%'
          }
        } else {
          return {
            'padding-top': 'unset',
            'padding-left': '10px'
          }
        }
      },
      hasTriggeredPagePagination() {
        return this.$store.state.changedPageOnce
      }
    },
    destroyed() {
      window.removeEventListener('resize', this.windowResizeHandler)
      window.removeEventListener('resize', this.getWindowWidth)
    }
  }
</script>

<template>
  <!-- v-if="!contactOpenMediaQ" -->
  <header
    :class="[hasTriggeredPagePagination ? 'header-default' : 'initial-header']"
    :style="isFullscreen"
  >
    <!--     {{ currentItem }}
    {{ hasTriggeredPagePagination }} -->
    <div class="top-contact">
      <img
        ref="logo"
        :class="hasTriggeredPagePagination ? 'logo-size' : 'logo-size-initial'"
        :style="isFirstItem"
        src="/assets/tj-icon.svg"
      />
      <ContactButton
        v-if="this.windowInnerWidth <= 790"
        @openCloseHeader="openCloseHeader"
        :contactOpenUser="contactOpenUser"
      />
    </div>

    <div
      v-if="this.windowInnerWidth >= 790 || contactOpenUser"
      :class="'logo-message ' + 'direction-flex'"
      :style="isFirstItem"
    >
      <span class="presentation">TOBIAS JOHNSSON</span>
      <span class="presentation">DEVELOPER APP | WEB</span>
    </div>
    <div
      v-if="this.windowInnerWidth >= 790 || contactOpenUser"
      class="in-columns mail"
      :style="isFirstItem"
    >
      <span>E-MAIL</span><span><a href="mailto:">tobb-on@hotmail.com</a></span>
    </div>

    <!-- <div v-if="(this.windowInnerWidth >= 790 || contactOpenUser)" class="in-columns tel" :style="isFirstItem">
        <span>PHONE</span><span>0704249358</span>
      </div> -->
    <div v-if="(this.windowInnerWidth >= 790 || contactOpenUser)" class="in-columns tel" :style="isFirstItem">
        <span>GITHUB</span><a href="https://github.com/tjn06" target="_blanc">github.cm/tjn06</a>
    </div>

    <div
      v-if="this.windowInnerWidth >= 790 || contactOpenUser"
      class="in-columns tel"
      :style="isFirstItem"
    >
      <img
        :class="!hasTriggeredPagePagination ? 'toppi' : ''"
        :style="{ 'border-radius': '50%', width: '40px' }"
        src="/assets/port.jpg"
      />
    </div>
  </header>
</template>

<style scoped>
  .toppi {
    margin-top: 2rem;
  }

  .top-contact {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 0 0rem;
    height: 40px;
  }
  header {
  }
  .in-columns {
    display: flex;
    flex-direction: column;
    font-size: 11px;
  }
  .logo-message {
    display: inline-flex;
    flex-direction: row;
    font-size: 14px;
    color: #6f747e;
  }
  .direction-flex-initial {
    display: inline-flex;
    flex-direction: row;
    color: #6f747e;
  }
  .direction-flex {
    display: inline-flex;
    flex-direction: column;
  }
  .in-columns span:nth-child(1) {
    color: #bfbfbf;
    font-weight: 800;
  }
  .in-columns span:last-child {
    color: #bfbfbf;
    /* color: #ccf4ff; */
    font-weight: 800;
  }
  .in-columns a {
    text-decoration: none;
    color: #bfbfbf;
    font-weight: 800;
  }
  .in-columns a:hover {
    color: #ffffff;
  }
  .presentation {
    color: #ffffff;
    font-weight: 800;
  }
  .adress,
  .tel,
  .mail {
    font-size: 14px;
  }
  .adress:hover span {
    opacity: 1;
  }
  .logo-size {
    /* max-height: 100%; */
    width: 90px;
    /* border: 1px solid white; */
    transition: 0.3s ease;
  }
  .logo-size-initial {
    margin-top: 0vh;
    width: 90px;
    /* border: 1px solid white; */
    transition: 0.3s ease;
  }
  .initial-header {
    position: fixed;
    z-index: 15;
    width: 100%;
    top: 0;
    /* height: 100%; */
    /* background-color: green; */
    gap: 10px;
    display: flex;
    flex-direction: column;
    /* padding-left: 30% */
  }
  .header-default {
    position: fixed;
    z-index: 15;
    top: 0;
    /* background-color: blue; */
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 790px) {
    .top-contact {
      display: unset;
      flex-direction: unset;
      justify-content: unset;
      align-items: unset;
      margin: unset;
      width: unset;
      height: unset;
    }
    .direction-flex-initial {
      display: inline-flex;
      flex-direction: column;
    }
    .logo-size {
      max-height: 100%;
      margin-left: 2vw;
      transition: 0.3s ease;
    }
    .logo-size-initial {
      margin-top: calc(16vh + 10px);
      width: 300px;
      height: 170px;
      /* border: 1px solid white; */
      transition: 0.3s ease;
    }
    .logo-message {
      font-size: 12px;
    }
    .logo-messag:hover {
      opacity: 1;
    }
    .adress,
    .tel,
    .mail {
      display: flex;
      font-size: 12px;
    }
    .initial-header {
      box-sizing: border-box;
      transition: all 0.1s ease;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 38%;
      text-align: right;
      gap: 11px;
      margin: 0 0px 0 0px;
      height: unset;
      color: white;
      transform: translateY(0);
      transition: 0.3s linear;
      font-size: 1rem;
      font-weight: 300;
      z-index: 10;
    }
    .header-default {
      box-sizing: border-box;
      transition: all 0.1s ease;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0px 30px 0 30px;
      height: 60px;
      color: white;
      transform: translateY(0);
      transition: 0.3s ease;
      font-size: 1rem;
      font-weight: 300;
      z-index: 10;
      flex-direction: unset;
      padding-left: unset;
      padding-top: unset;
    }
  }
</style>
