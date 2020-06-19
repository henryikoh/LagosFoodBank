<template>
	<div class=" flex-none h-full mr-5 w-90 lg:w-full hit">
		<a :href="this.link" target="_blank">
		<img
			class="object-center object-cover rounded-lg w-full card-h"
			:src="this.img"
			alt=""
		/>
		<h4 class="mt-2 text-gray-600 text-lg lg:text-sm xl:text-lg">{{ this.date }}</h4>
		<h1 class="font-bold leading-none text-3xl lg:text-2xl text-gray-900 xl:text-3xl">
		{{ this.name }}
		</h1>
		<!-- <div class="flex items-center justify-between mt-2">
      <h3 class=" bg-brand-acccentLight border border-brand-primary px-3 py-1 rounded-md text-gray-700 text-sm">7,000 Families Fed</h3>
      <h5>40 Volunteers</h5>
    </div> -->
		</a>
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
.hit{
	height: 325px;
}
@screen lg {
	.hit{
		height: auto;
	}
	.card-h {
		    height: 215px;
	}
}
@screen xl {
	.card-h {
		height: 255px;
	}
}
</style>
