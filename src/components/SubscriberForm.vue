<template>
  <!-- Begin Mailchimp Signup Form -->
  <div class="bg-yellow-50">
    <h1
      class=" px-10 text-center text-gray-700 font-bold opacity-90 text-2xl md:text-3xl pt-20 pb-6 md:px-0"
    >
      Subscribe to our Newsletter to get<br />
      useful traveling information.
    </h1>
    <form
      action="https://app.us9.list-manage.com/subscribe/post?u=7d87eed689271338a7c8e539a&amp;id=95ecceafd9&amp;f_id=00c604e1f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate pb-20 md:px-0 px-10 "
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <div class="mc-field-group">
          <div class="">
            <input
              type="email"
              value=""
              name="EMAIL"
              placeholder="Enter your email"
              class="required w-full h-16 rounded-md border border-yellow-300 focus:outline-none placeholder-black"
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
              class="h-12 w-full rounded-md bg-yellow-500 text-white font-bold px-4"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
form {
  position: relative;
  display: flex;
  justify-content: center;
}
.mc-field-group {
  width: 800px;
}
#mc-embedded-subscribe {
  position: absolute;
  bottom: 88px;
  right: 21%;
}
@media only screen  and(max-width:600px) {

  .mc-field-group{
    width:240px;
    height: 20px;
  }
  #mc-embedded-subscribe {
  position: absolute;
  bottom: 88px;
  right: 21%;
}
}
</style>
<!-- -->
