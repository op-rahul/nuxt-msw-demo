<template>
  <div>
      <h1>SSR</h1>
      /api/user: {{ data }}
      <br />
      /api/user2: {{ data2 }}

      <h1>CSR</h1>
      <client-only>
        <MyCompo />
      </client-only>
  </div>
</template>

<script lang="ts" setup>
const [{ data }, { data: data2 }] = await Promise.all([
  useFetch("/api/user"),
  useFetch("/api/user2"),
])
</script>