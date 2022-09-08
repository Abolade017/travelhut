<template>
    <div class="modal-backdrop fixed flex justify-center items-center">
      <div class="modal  w-96 rounded-md opacity-85 relative">
        <!-- <span class="font-bold text-2xl text-white opacity-70">X</span> -->
        <slot name="body"> </slot>
        <div class="absolute right-4 top-4">
          <button
            @click="close"
            class="close-img font-bold rounded-full h-10 w-10 text-white text-center"
          >
            <p class="flex justify-center items-center text-lg">X</p>
          </button>
        </div>
        <slot name="footer">
         
        </slot>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {};
    },
    methods: {
      close() {
        this.$emit("close");
      },
     
    },
  };
  </script>
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  .modal {
    text-align: center;
    background-color: white;
    margin-top: 3%;
    padding: 200px 0;
    height:200px;
    width:500px;
  }
  .close-img {
    
    background-color:orange;
  }
  </style>