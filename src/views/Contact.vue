<template>
  <div>
    <MobileNavbar class="block md:hidden" />
    <Navbar class="hidden md:block" />
    <div class="py-6">
      <h1 class="text-center font-bold md:text-4xl text-xl text-gray-700">
        Feel free to drop us a message
      </h1>
      <p class="text-gray-300 opacity-90 text-center">
        Get in touch, contact us
      </p>
    </div>
    <div>
      <form action="">
        <div class="flex flex-col space-y-10 md:px-20 px-6">
          <div>
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
    };
  },
};
</script>
