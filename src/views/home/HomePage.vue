<script setup lang="ts"></script>

<template>
  <c-flex
    centered
    class="q-pa-xs bg-blue"
  >
    <c-item
      v-for="item in 12"
      :key="item"
      class="q-pa-xs"
      cols="3"
    >
      <div class="bg-red text-center">Item {{ item }} z</div>
    </c-item>
  </c-flex>
</template>
