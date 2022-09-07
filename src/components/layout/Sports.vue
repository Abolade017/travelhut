<template>
    <div class="flex space-x-10 items-center pt-10">
        <div v-for="sport in sports" :key="sport.id">
            <img :src="sport.pic" alt="" class="h-12 w-12">
            <p class="capitalize text-gray-700 pt-2">{{sport.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            sports:[
                {id:1, name:'tracking', pic:require('../../assets/images/tracking.png')},
                {id:2, name:'kayaking', pic:require('../../assets/images/kayaking.png')},
                {id:3, name:'surfing', pic:require('../../assets/images/surfing-board.png')},
                {id:4, name:'camping', pic:require('../../assets/images/camping.jpg')},
            ]
        }
    }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Noto+Serif&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
.capitalize{
    font-family: Quicksand sans-serif;
}
</style>