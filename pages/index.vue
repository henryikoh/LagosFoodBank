<template>
	<div>
		<Nav />
		<div class="container mt-8 lg:mb-16">
			<div class="flex flex-col-reverse items-center lg:flex-row">
				<div class="lg:pr-6 lg:w-60">
					<h6 class=" leading-tight py-1 px-2 w-80 font-normal inline-block bg-yellow-400 lg:font-normal lg:inline-block lg:p-2 lg:px-4 text-black lg:text-xs lg:w-auto rounded text-gray-800 text-xs lg:w-auto">
						LFB Initiative’s COVID-19 Emergency Food Intervention Plan(CEFIP)
					</h6>
					<h1
						class="capitalize font-bold leading-tight lg:text-5xl mt-1 text-3xl text-gray-800"
					>
						Together We Can Reduce The Economic Impact Of Covid-19 By Feeding Vulnerable Families.
					</h1>
					<p class="font-light leading-snug lg:text-2xl mt-1 text-gray-600 text-lg">
						You can join us in supporting vulnerable women, children and families in Nigeria
						suffering from the economic impact and consequences of COVID-19.
					</p>
					<button v-scroll-to="'#money'"
						class="bg-brand-accent focus:outline-none focus:shadow-outline lg:mt-6 mt-5 px-8 py-3 rounded-lg text-brand-primary text-white tracking-wide w-full lg:w-auto"
					>
						Make a Donation
					</button>
				</div>
				<div class="mb-4 relative lg:w-40 lg:mb-0">
					<img
						class="hero1 object-center object-cover rounded-xl shadow-lg w-75 lg:w-80"
						src="/hero1.jpg"
						alt=""
					/>
					<img
						class="absolute hero2 mt-5 object-center object-cover right-0 rounded-xl shadow-2xl top-60 w-45 lg:-mr-16 lg:w-50 "
						src="/hero2.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
    <Impact/>
		 <h1 class="font-bold text-3xl text-brand-accent text-center lg:text-4xl">Communities Reached</h1>
    <div class="container flex flex-no-wrap gap-5 lg:grid lg:grid-cols-3 mb-20 overflow-x-auto relative touch">
      <div v-for="n in 6" :key="n" class="flex-none mr-5 w-90 lg:w-full">
        <Community/>
      </div>
    </div>
		<div class="relative">	
		<Donations/>
		<div class="background"></div>
		</div>
		<Partners/>
		<div class="container mb-12 lg:mb-32">
			<h1 class="font-extrabold text-2xl lg:text-3xl lg:text-center text-gray-800">What our mission is beyond Covid 19?</h1>
			<p class="font-light mt-4 mx-auto lg:text-center text-gray-800 text-lg lg:w-85">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident consequuntur quia quae minus tempora accusamus vero dicta, facilis quos adipisci! Omnis expedita architecto reiciendis pariatur unde. Mollitia laborum dolores cumque ullam, voluptatibus cum odio itaque praesentium ad. Accusantium consequuntur ullam sapiente quam totam libero! Nisi iste quia ex eos alias.</p>

		</div>
		<Instagram/>
		<Footer/>
	</div>
</template>

<script>
import Nav from '~/components/NavBar.vue'
import Impact from '~/components/OurImpact.vue'
import Community from '~/components/CommunityCard.vue'
import Donations from '~/components/Donations.vue'
import Partners from '~/components/Partners.vue'
import Instagram from '~/components/Instagram.vue'
import Footer from '~/components/Footer.vue'

export default {
	components: {
    Nav,
    Impact,
		Community,
		Donations,
		Partners,
		Instagram,
		Footer
	},
}
</script>

<style>
.touch{
	-webkit-overflow-scrolling: touch;
}
.hero1{
	height: 305px;
}
.hero2{
	height: 190px;
}
@screen lg{
.background{
	    height: 500px;
    position: absolute;
    width: 100%;
    bottom: -100px;
    z-index: -1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 91.62%, #FFFFFF 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.63) 10.42%, rgba(255, 255, 255, 0) 100%), url(/lfb.png);
}
/* Sample `apply` at-rules with Tailwind CSS */
/* .container {
  @apply  mx-auto bg-red-900 p-2;
} */

.hero2 {
	/* top: 64px;
    right: -48px; */
	height: 280px;
}
.hero1 {
	height: 500px;
}
}
</style>
