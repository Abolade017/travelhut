<template>
  <div class="">
    <MobileNavbar class="block md:hidden" />
    <Navbar class="hidden md:block" />
    <div class="px-6 md:px-20">
      <div class="py-6">
        <h1 class="text-center font-bold md:text-4xl text-xl text-gray-700">
          Feel free to drop us a message
        </h1>
        <p class="text-gray-300 opacity-90 text-center">
          Get in touch, contact us
        </p>
      </div>
      <div class="flex md:space-x-0">
        <div class="md:w-2/3 w-full">
          <form action="" @submit.prevent="addMessage">
            <div class="w-full flex flex-col space-y-10 md:px-20 px-6">
              <div class="">
                <input
                  type="text"
                  name=""
                  class="rounded-md border border-yellow-500 md:h-12 md:w-full w-56 h-8"
                  id=""
                  v-model="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name=""
                  class="rounded-md border border-yellow-500 md:h-12 md:w-full w-56 h-8"
                  id=""
                  v-model="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  class="rounded-md border border-yellow-500 md:h-12 md:w-full w-56 h-8"
                  id=""
                  v-model="subject"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  name=""
                  class="rounded-md border border-yellow-500 md:h-48 md:w-full w-56 h-8"
                  id=""
                  cols=""
                  rows=""
                  v-model="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="pb-10">
                <Button
                  class="bg-yellow-500 text-white font-bold h-10 w-32 rounded-md hover:opacity-90"
                  >Subnit Now</Button
                >
              </div>
            </div>
          </form>
        </div>
        <div class="md:w-1/3">
          <img
            src="../assets/images/customer-care.jpg"
            alt="customer-care"
            class="md:pr-14 md:h-96 w-auto rounded-md md:block hidden"
          />
        </div>
      </div>
      <div
        class="flex md:flex-row flex-col md:justify-between justify-start md:space-y-0 space-y-6 md:space-x-20 space-x-0 pb-10 md:px-20"
      >
        <div
          class="bg-black rounded-md text-white opacity-90 md:w-96 md:h-40 w-auto h-auto"
          v-for="i in contacts"
          :key="i.id"
        >
          <div class="flex justify-center items-center space-x-2 py-14">
            <div class="border rounded-full h-10 w-10">
              <div class="items-center flex justify-center space-x-2 py-2">
                <font-awesome-icon :icon="i.icon" class="h-5 w-5" />
              </div>
            </div>
            <div>
              <p class="text-white capitalize">{{ i.text1 }}</p>
              <p class="text-white capitalize">{{ i.text2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MobileFooter class="block md:hidden" />
    <Footer class="hidden md:block" />
  </div>
</template>
<script>
import Navbar from "../components/layout/Navbar.vue";
import MobileNavbar from "../components/layout/MobileNavbar.vue";
import MobileFooter from "../components/layout/MobileFooter.vue";
import Footer from "../components/layout/Footer.vue";
import Button from "../components/Button.vue";
export default {
  components: { Navbar, MobileNavbar, MobileFooter, Footer, Button },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      contacts: [
        {
          id: 1,
          icon: "fa-solid fa-location-dot",
          text1: "123, new nexox",
          text2: " chicago r, 606060",
        },
        {
          id: 2,
          icon: "fa-solid fa-envelope",
          text1: "info@travelhutwebsite.com",
          text2: "",
        },
        {
          id: 3,
          icon: "fa-solid fa-phone",
          text1: "0124356778",
          text2: "0163773496",
        },
      ],
      newMessage:'',
    };
  },
  methods: {
    // const addMessage=()=>{
    //   const newMessage={
    //     id:'1d1',
    //     name: this.name.value,
    //     email: this.email.value,
    //     message: this.message.value,
    //     subject: this.subject.value,
    //   }
    // }
    // addMessage() {
      
    //   setDoc(doc(db, "messages"), {
    //     id:'1d1',
    //     name: this.name.value,
    //     email: this.email.value,
    //     message: this.message.value,
    //     subject: this.subject.value,
       
    //   });
    //   console.log("newMessage");
    // },
  },
};
</script>
