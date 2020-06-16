<template>
	<div class="instagram">
		<ul class="grid grid-cols-2 lg:grid-cols-5">
			<li v-for="posts in instagram.data" :key="posts.id">
				<a :href="posts.link" target="_blanck">
					<!-- <img :src="posts.images.standard_resolution.url" alt=""> -->
					<div
						:style="{
							backgroundImage:
								'url(' + posts.images.standard_resolution.url + ')',
						}"
						class="bg-center bg-cover image"
					></div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			instagram: '',
		}
	},

	created() {
		axios
			.get(
				'https://api.instagram.com/v1/users/self/media/recent?access_token=2105340134.1677ed0.52d17f9dd46a42d3851e48e4688f31e6&count=10',
			)
			.then(res => {
				this.instagram = res.data
			})
	},
}
</script>

<style>
.image {
	padding-top: 100%;
}
</style>
