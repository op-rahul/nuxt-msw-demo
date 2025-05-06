<template>
  <div>
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/user")
</script>
