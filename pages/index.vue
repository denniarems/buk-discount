<template>
  <div class="flex flex-grow flex-col items-center justify-center">
    <div class="mb-6 text-4xl font-semibold">
      Corporate Discount Platform
    </div>
    <div class="mb-4 text-lg">
      Avail discount on your hotel stays while you book on BukTrips.com
    </div>
    <div class="flex">
      <input type="email" placeholder="Email address" class="border-2 border-gray-300 rounded-l px-4 py-2 focus:border-blue-500 focus:outline-none">

      <button class="bg-clr hover:bg-clr-re rounded-r px-6 py-2 text-white focus:outline-none">
        Submit
      </button>
    </div>
    <p class="mb-4 text-center text-sm text-red-600">
      Your organization is not eligible for Corporate Discount.<br>Reach out to <a href="mailto:hello@buk.technology" class="text-blue-800">hello@buk.technology</a> for corporate partnership
    </p>

    <div>
      <p class="mb-6 text-lg">
        Please v
        erify your email address with the OTP received
      </p>
      <div class="mb-10 max-w-md w-full">
        <input class="otp-input focus:shadow-outline w-full appearance-none border rounded px-3 py-2 text-center leading-tight text-gray-700 shadow focus:outline-none" type="text" placeholder="• • • • •">
      </div>
      <div class="max-w-md w-full">
        <button class="bg-clr hover:bg-clr-re focus:shadow-outline w-full rounded px-4 py-2 font-bold text-white focus:outline-none">
          Verify
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.otp-input::placeholder {
  letter-spacing: 1.25em;
  color: transparent;
  text-shadow: 0 0 0 gray;
}
.otp-input::-webkit-input-placeholder {
  letter-spacing: 1.25em;
  color: transparent;
  text-shadow: 0 0 0 gray;
}
.otp-input:-ms-input-placeholder {
  letter-spacing: 1.25em;
  color: transparent;
  text-shadow: 0 0 0 gray;
}
</style>
