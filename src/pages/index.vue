<script setup lang="ts">
const appStore = useAppStore()
</script>

<template>
  <div>
    {{ appStore.counter }}
    <button class="btn" @click="appStore.setCounter(appStore.counter + 1)">
      +
    </button>
  </div>
</template>
