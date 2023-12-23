<script lang="ts" setup>

</script>

<template>
  <div class="mx-auto my-12 max-w-2xl flex flex-grow flex-col bg-white p-8 shadow-lg">
    <h2 class="mb-8 text-center text-3xl font-semibold">
      Corporate Discount Platform
    </h2>
    <p class="mb-10 text-center text-lg">
      Congratulations! You are eligible for a discount on BukTrips.com
    </p>

    <div class="border-b border-t py-8">
      <h3 class="mb-4 text-xl font-semibold text-blue-600">
        Discount Terms:
      </h3>
      <ul class="mb-6 list-disc list-inside space-y-2">
        <li>Discount: 10%</li>
        <li>Minimum Value of the booking: 100 USD</li>
        <li>Maximum Discount per booking: 100 USD</li>
      </ul>

      <button class="bg-clr hover:bg-clr-re w-full rounded px-6 py-3 font-semibold text-white transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        Mint Discount NFT
      </button>
    </div>

    <p class="mt-8 text-center text-sm italic">
      Your wallet address already holds a discount NFT
    </p>
  </div>

  <p class="mb-12 text-center text-lg">
    Make sure you use the same wallet to book your hotel on buktrips.com
  </p>
</template>

<style>

</style>
