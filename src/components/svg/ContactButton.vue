<script>
  export default {
    props: {
      contactOpenUser: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      openCloseHeader() {
          this.$emit('open-close-header')
      },
    }
  }
</script>

<template>
  <div class="fixed" @click="openCloseHeader">
    <svg v-if="contactOpenUser" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_24_60)">
    <path d="M29.4 15.5C29.4 23.1768 23.1768 29.4 15.5 29.4C7.82321 29.4 1.59995 23.1768 1.59995 15.5C1.59995 7.82321 7.82321 1.59995 15.5 1.59995C23.1768 1.59995 29.4 7.82321 29.4 15.5Z" stroke="#AEE5FA" stroke-width="1.45"/>
    <path d="M23.1266 7.87343L15.5 15.5M15.5 15.5L7.87343 23.1266M15.5 15.5L7.87344 7.87343M15.5 15.5L23.1266 23.1266" stroke="#AEE5FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_24_60">
    <rect width="31" height="31" fill="white"/>
    </clipPath>
    </defs>
    </svg>

    <svg v-if="!contactOpenUser" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_24_62)">
    <path d="M23.5 23.9073V22.9073C23.5 21.8027 22.6046 20.9073 21.5 20.9073H17.5C16.3954 20.9073 15.5 21.8027 15.5 22.9073V23.9073M12.5 13.9073H7.49998M23.5 11.9073V9.90726C23.5 8.80269 22.6046 7.90726 21.5 7.90726H9.49998C8.39542 7.90726 7.49998 8.80269 7.49998 9.90726V21.9073C7.49998 23.0118 8.39542 23.9073 9.49998 23.9073H11.5M18.5 5.90726V9.90726M12.5 5.90726V9.90726M21.5 15.9073C21.5 17.0118 20.6046 17.9073 19.5 17.9073C18.3954 17.9073 17.5 17.0118 17.5 15.9073C17.5 14.8027 18.3954 13.9073 19.5 13.9073C20.6046 13.9073 21.5 14.8027 21.5 15.9073Z" stroke="#AEE5FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M29.4 15.5C29.4 23.1768 23.1768 29.4 15.5 29.4C7.8232 29.4 1.59994 23.1768 1.59994 15.5C1.59994 7.82321 7.8232 1.59995 15.5 1.59995C23.1768 1.59995 29.4 7.82321 29.4 15.5Z" stroke="#AEE5FA" stroke-width="1.45"/>
    </g>
    <defs>
    <clipPath id="clip0_24_62">
    <rect width="31" height="31" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  </div>
</template>

<style scoped>
.fixed {
  position: fixed;
  top: 5px;
  right: 5px;
  transition:  ease;
  cursor: pointer;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
