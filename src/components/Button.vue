<template>
    <button @click="$emit('join')" class="h-10 w-40 rounded-md capitalize"><slot></slot></button>
</template>
<script>
export default {
}
</script>