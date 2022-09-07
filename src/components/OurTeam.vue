<template>
    <div class="pt-6">
            <h1 class="capitalize font-bold text-3xl text-gray-700">Our team</h1>
            <div class="flex space-x-6 py-10">
                <div v-for="i in team" :key="i">
                    <img :src="i.picture" alt="" class="rounded-full w-20 h-20">
                    <p class=" pt-4 text-lg font-bold">{{i.name}}</p>
                    <p class="text-center pt-2 text-lg">{{i.role}}</p>
                </div>
            </div>
          </div>
</template>
<script>
export default {
    computed:{
        team(){
            return this.$store.state.ourTeam;
        }
    }
}
</script>