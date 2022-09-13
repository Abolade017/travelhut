<template>
    <button @click="$emit('join')" class=" rounded-md capitalize"><slot></slot></button>
</template>
<script>
export default {
}
</script>