<template>
	<div class="mt-6 flex-none mr-5 w-90 lg:w-full">
		<img
			class="object-center rounded-lg w-full card-h"
			:src="this.img"
			alt=""
		/>
		<h4 class="mt-2 text-gray-600 text-lg">{{ this.date }}</h4>
		<h1 class="font-bold leading-none text-3xl text-gray-900">
		{{ this.name }}
		</h1>
		<!-- <div class="flex items-center justify-between mt-2">
      <h3 class=" bg-brand-acccentLight border border-brand-primary px-3 py-1 rounded-md text-gray-700 text-sm">7,000 Families Fed</h3>
      <h5>40 Volunteers</h5>
    </div> -->
	</div>
</template>

<script>
export default {
	props:['name','date','img','link']
}
</script>

<style scoped>
.card-h {
	height: 225px;
}
@screen lg {
	.card-h {
		height: 255px;
	}
}
</style>
