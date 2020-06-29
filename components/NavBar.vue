<template>
	<div class="nav bg-white flex items-center justify-between mx-auto py-5 sticky top-0  z-10   ">
		<div>
			<img src="/logo.png" alt="" style="width: 120px;" />
		</div>
		<div>
			<ul class="flex items-center menu hidden lg:flex">
				<li class=""><a class=" text-gray-800 hover:text-brand-accent" href="https://www.lagosfoodbank.org/our-gallery/" target="_blank">Home</a></li>
				<li class=""><a class=" text-gray-800 hover:text-brand-accent" href="https://www.lagosfoodbank.org/about-us/" target="_blank">About</a></li>
				<li class=""><a class=" text-gray-800 hover:text-brand-accent" href="https://www.lagosfoodbank.org/donations/" target="_blank">Donations</a></li>
				<li class="">
					<button
						v-scroll-to="'#money'"
						class="btn bg-brand-accent text-brand-primary tracking-wide"
					>
						Donate
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style s>
.menu li {
	@apply ml-10;
}
.menu li:first-child {
	@apply m-0;
}
.nav{
	padding-left: 3.75%;
	padding-right: 3.75%;
}
</style>
