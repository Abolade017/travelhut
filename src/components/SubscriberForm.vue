<template>
  <!-- Begin Mailchimp Signup Form -->
  <div class="bg-yellow-50 ">
    <div>
      <h1
        class="px-10 text-center text-gray-700 font-bold opacity-90 text-2xl md:text-3xl pt-20 pb-6 md:px-0"
      >
        Subscribe to our Newsletter to get useful traveling information.
      </h1>
      <form
        action="https://app.us9.list-manage.com/subscribe/post?u=7d87eed689271338a7c8e539a&amp;id=95ecceafd9&amp;f_id=00c604e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate pb-20 md:px-0 pl-14"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div class="mc-field-group md:flex-row flex-col flex justify-center">
            <div class="">
              <input
                type="email"
                value=""
                name="EMAIL"
                placeholder="Enter your email"
                class="required w-60 md:w-96 px-6 h-10 md:h-16 rounded-md border border-yellow-300 focus:outline-none placeholder-black"
                id="mce-EMAIL"
                required
              />
            </div>
            <div class="">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="md:h-12 h-8 md:w-full px-2 rounded-md bg-yellow-500 text-white font-bold md:px-4"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
form {
  position: relative;
}
</style>
