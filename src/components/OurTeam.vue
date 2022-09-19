<template>
    <div class="pt-6 ">
            <h1 class="capitalize font-bold text-3xl text-gray-700 text-center">Our team</h1>
            <div class="flex space-x-0 md:space-x-6 py-10">
                <div v-for="i in team" :key="i" class="w-1/4">
                    <img :src="i.picture" alt="" class="rounded-full md:w-12 md:h-12 w-10 h-10">
                    <div>
                    <p class=" pt-4 md:text-lg font-bold text-base text-left ">{{i.name}}</p>
                    <p class="text-left  pt-2 md:text-lg text-sm break-words">{{i.role}}</p>
                </div>
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