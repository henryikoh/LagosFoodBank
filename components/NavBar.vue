<template>
	<div class="nav bg-white flex items-center justify-between mx-auto py-5 sticky top-0  z-10   ">
		<div>
			<img src="/logo.png" alt="" style="width: 141px;" />
		</div>
		<div>
			<ul class="flex items-center menu hidden lg:flex">
				<li class="">Home</li>
				<li class="">About</li>
				<li class="">Donations</li>
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
