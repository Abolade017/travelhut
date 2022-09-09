<template>
    <button @click="$emit('join')" class="h-10 md:w-40 w-32 rounded-md capitalize"><slot></slot></button>
</template>
<script>
export default {
}
</script>