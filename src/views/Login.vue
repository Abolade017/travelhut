<template>
  <div class="mx-auto max-w-xl">
    <div>
      <div
        class="h-96 w-96 bg-white rounded-lg my-48 border-2"
        style="height: 400px; width: 600px"
      >
        <div class="text-center text-2xl pt-10 font-bold text-yellow-500">Login</div>
        <div class="flex justify-center items-center">
          <form action="" class="">
            <div class="py-4 px-10">
              <label for="email" class="font-semibold text-lg pb-2">Email</label
              ><br />
              <input
                type="email"
                name=""
                id=""
                class="w-80 h-12 rounded-md border border-yellow-500 focus:outline-none"
              />
            </div>
            <div class="px-10">
              <label for="Password" class="font-semibold text-lg pb-2"
                >Password</label
              ><br />
              <input
                type="password"
                name=""
                id=""
                class="w-80 h-12 rounded-md border border-yellow-500 focus:outline-none"
              />
            </div>
            <div class="flex justify-end pt-4 px-10">
              <button
                type="submit"
                class="bg-yellow-500 text-white font-bold rounded-md w-24 h-8 hover:opacity-90"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods:{
    login(){
        
    }
  }
};
</script>
