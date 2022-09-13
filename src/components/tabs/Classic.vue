<template>
  <div class="md:pl-20  md:py-20 py-10">
    <div class="rounded-md md:h-96 md:w-96 h-96 w-52 border border-yellow-500 bg-white">
      <slot></slot>
      <div class="pt-10">
        <h1 class="md:text-xl text-base md:px-6 px-3  py-2  text-gray-500 capitalize">
          price: $200
        </h1>
        <h1 class="md:text-xl text-base md:px-6 px-3 py-2  capitalize text-gray-500">
          Accomodation: 3 star Hotel
        </h1>
        <h1 class="md:text-xl text-base md:px-6 px-3 py-2  text-gray-500 capitalize">
          No of Days spent: 7 days
        </h1>
        <h1 class="text-base md:text-xl md:px-6 px-3 py-2  text-gray-500 capitalize">
          tourist center: beach, museum, airport
        </h1>
      </div>
    </div>
  </div>
</template>
