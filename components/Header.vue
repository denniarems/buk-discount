<script lang="ts" setup>
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/vue'
import { polygonMumbai } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '949f8c18edffea8cd6f61e444ec3d137'

const chains = [polygonMumbai]
const wagmiConfig = defaultWagmiConfig({ chains, projectId })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })
// 4. Use modal composable
// const modal = useWeb3Modal()
</script>

<template>
  <div class="bg-clr flex flex-none items-center justify-between px-4 py-4 text-center text-xl text-white">
    <span>BukTrips</span>
    <w3m-button />
  </div>
</template>

<style>

</style>
