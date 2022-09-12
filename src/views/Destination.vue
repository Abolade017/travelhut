<template>
  <div class="bg-gray-200">
    <div class="px-20">
        <div class="">
            <!-- <h1 class="text-3xl font-yellow-500 font-bold text-center">Our Services</h1> -->
        </div>
    <!-- <div class="py-20 flex space-x-10">
        <div>

        </div>
    </div> -->
</div>
  </div>
</template>

<script>
  import Destination from '../components/layout/Destination.vue';
export default {
  components:{},
  data() {
    return {
        services:[
            {id:1, name:'', photo:'', details:''},
            {id:2, name:'', photo:'', details:''},
            {id:3, name:'', photo:'', details:''},
            {id:4, name:'', photo:'', details:''},
            {id:5, name:'', photo:'', details:''},
            {id:6, name:'', photo:'', details:''},
        ],
    };
  },
  methods: {
   
  },
};
</script>
