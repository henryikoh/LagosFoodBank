<template>
	<div>
		<h1 class="font-bold text-3xl text-brand-accent text-center lg:text-4xl">
			Make a donation
		</h1>
		<div
			class="bg-white border card-h container flex flex-col mb-12 lg:mb-48 overflow-hidden rounded-lg shadow-lg lg:flex-row mt-4"
		>
			<div
				class="bg-brand-primaryLight hidden lg:flex items-center lg:px-10 lg:w-50 px-3"
			>
				<div class="card-left lg:-mt-12 my-5">
					<h1 class="font-bold leading-tight lg:text-4xl text-2xl text-white">
						Together We Can Reduce The Economic Impact Of Covid-19 By Feeding
						Vulnerable Families.
					</h1>
					<p class="lg:leading-8 mt-4 text-gray-700 lg:text-lg">
						We would love to thank everyone for donating to our fund, each
						amount goes a long way in helping us feed vulnerable families in
						need. Thank you soo much for being a kind Human
						<br />
						<br />
						- LFB Team.
					</p>
				</div>
			</div>
			<div id="money" class="flex items-center lg:px-16 lg:w-50 px-3 py-8">
				<div class="mx-auto">
					<div class="gap-5 grid grid-cols-2">
						<button
							class="btn p-0 py-4 lg:py-4 text-base bg-gray-200 text-gray-800 focus:bg-brand-accent focus:border focus:border-brand-primary  focus:text-brand-primary"
						>
							Naira Payments
						</button>
						<button
							class="btn p-0 py-4 lg:py-4 text-base bg-gray-200 text-gray-800 focus:bg-brand-accent focus:border focus:border-brand-primary  focus:text-brand-primary"
						>
							Dollar Payments
						</button>
					</div>
					<div class="gap-4 grid grid-rows-1 mt-6">
						<div class="grid grid-cols-4">
							<button
								class="border border-gray-400 border-r-0 py-3 rounded-l-md focus:outline-none focus:bg-brand-accent focus:text-brand-primary"
							>
								{{ pay1.toLocaleString('en') }}
							</button>
							<button
								class="border border-gray-400 border-r-0 py-3 focus:outline-none focus:bg-brand-accent focus:text-brand-primary"
							>
								{{ pay2.toLocaleString('en') }}
							</button>
							<button
								class="border border-gray-400 border-r-0 py-3 focus:outline-none focus:bg-brand-accent focus:text-brand-primary"
							>
								{{ pay3.toLocaleString('en') }}
							</button>
							<button
								class="border border-gray-400 py-3 rounded-r-md focus:outline-none focus:bg-brand-accent focus:text-brand-primary"
							>
								{{ pay4.toLocaleString('en') }}
							</button>
						</div>
						<input
							class="border px-2 py-3 rounded-md w-full focus:bg-white focus:border-brand-primary focus:outline-none"
							type="text"
							placeholder="Amount"
						/>
						<div class="gap-4 grid grid-cols-2">
							<input
								v-model="firstname"
								class="border px-2 py-3 py-3 rounded-md w-full focus:bg-white focus:border-brand-primary focus:outline-none"
								type="text"
								placeholder="First Name"
							/>
							<input
								v-model="lastname"
								class="border px-2 py-3 py-3 rounded-md w-full focus:bg-white focus:border-brand-primary focus:outline-none"
								type="text"
								placeholder="Last Name"
							/>
						</div>
						<input
							id=""
							v-model="email"
							class="border px-2 py-3 py-3 rounded-md w-full focus:bg-white focus:border-brand-primary focus:outline-none"
							type="email"
							name=""
							placeholder="Email"
						/>
					</div>
					<button
						class="bg-brand-primary btn py-4 text-white w-full mt-6"
						@click.prevent="payWithPaystack"
					>
						Donate Now
					</button>
					<img class="h-12 mx-auto mt-6" src="/paystack.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			firstname: '',
			lastname: '',
			email: '',
			paymentType: '',
			pay1: 5000,
			pay2: 10000,
			pay3: 50000,
			pay4: 100000,
			amount: '',
		}
	},
	mounted() {
		if (process.browser) {
			const script = document.createElement('script')
			script.onload = this.onScriptLoaded
			script.type = 'text/javascript'
			script.src = 'https://js.paystack.co/v1/inline.js'
			document.head.appendChild(script)
		}
	},
	methods: {
		payWithPaystack() {
			// const self = this
			// eslint-disable-next-line no-undef
			const handler = PaystackPop.setup({
				key: 'pk_test_919aee1b143dc3ff408b56cd722e3157ed237799',
				email: this.email,
				amount: 5000,
				firstname: this.firstname,
				lastname: this.lastname,
				channels: ['card'],
				// currency: 'USD',

				callback(response) {
					// self.cardBtn = ''
					// self.loading = 'lds-dual-ring'
					// self.card = true
				},
				onClose() {},
			})
			handler.openIframe()
		},
	},
}
</script>

<style>
input {
	-webkit-appearance: none;
}
@screen lg {
	.card-h {
		height: 600px;
	}
	.card-left {
		height: fit-content;
	}
}
</style>
