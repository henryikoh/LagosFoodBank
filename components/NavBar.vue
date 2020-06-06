<template>
	<div class="w-85 mx-auto flex justify-between py-5">
		<div>
			Logo
		</div>
		<div>
			<ul class="flex items-center menu hidden lg:flex">
				<li class="">Home</li>
				<li class="">About</li>
				<li class="">Donations</li>
				<li class="">
					<button v-scroll-to="'#money'" class="btn bg-brand-accent text-brand-primary tracking-wide">
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
</style>
