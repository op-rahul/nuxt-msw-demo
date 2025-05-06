<template>
    <div>
        /api/user: {{ data }}
        <br />
        /api/user2: {{ data2 }}
    </div>
</template>

<script lang="ts" setup>
const [{ data }, { data: data2 }] = await Promise.all([
    useFetch("/api/user"),
    useFetch("/api/user2")
])
</script>