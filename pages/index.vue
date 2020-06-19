<template>
	<div>
		<Nav />
		<div class="container lg:mt-8 lg:mb-16">
			<div class="flex flex-col-reverse items-center lg:flex-row">
				<div class="lg:pr-6 lg:w-60">
					<h6
						class="leading-tight py-1 px-2 w-80 font-normal inline-block bg-yellow-400 lg:font-normal lg:inline-block lg:p-2 lg:px-4 text-black lg:text-xs lg:w-auto rounded text-gray-800 text-xs lg:w-auto"
					>
						LFBI’s COVID-19 Emergency Food Intervention Plan (CEFIP)
					</h6>
					<h1
						class="capitalize font-bold leading-tight lg:text-4xl mt-1 text-3xl text-gray-800 xl:text-5xl"
					>
						Together We Can Reduce The Economic Impact Of Covid-19 By Feeding
						Vulnerable Families.
					</h1>
					<p
						class="font-light leading-snug lg:text-xl mt-1 text-gray-600 text-lg xl:text-2xl"
					>
						You can join us in supporting vulnerable women, children and
						families in Nigeria suffering from the economic impact and
						consequences of COVID-19.
					</p>
					<button
						v-scroll-to="'#money'"
						class="bg-brand-accent focus:outline-none focus:shadow-outline lg:mt-6 mt-5 px-8 py-3 rounded-lg text-brand-primary text-white tracking-wide w-full lg:w-auto"
					>
						Make a Donation
					</button>
				</div>
				<div class="mb-4 relative lg:w-40 lg:mb-0">
					<img
						class="hero1 object-center object-cover rounded-xl shadow-lg w-75 lg:w-85 xl:w-80"
						src="/hero1.jpg"
						alt
					/>
					<img
						class="absolute hero2 mt-5 object-center object-cover right-0 rounded-xl shadow-2xl top-60 w-45 lg:-mr-16 lg:w-50"
						src="/hero2.jpg"
						alt
					/>
				</div>
			</div>
		</div>
		<Impact />
		<h1 class="font-bold text-3xl text-brand-accent text-center lg:text-4xl">
			Communities Reached
		</h1>
		<div
			class="mt-6 h-full container flex flex-no-wrap gap-5 lg:grid lg:grid-cols-3 mb-20 overflow-x-auto relative touch lg:overflow-hidden"
		>
			
				<Community name = "Obalende,Lagos Island" date="16th of April 2020" img="/oban.jpg" link="https://drive.google.com/drive/folders/13KGUKKZfL7fA_4OFN5hYvm62sWXYTBge?usp=sharing"/>
				<Community name = "Lekki, Itedo" date="17th of April 2020" img="lek-itedo.jpg" link="https://drive.google.com/drive/folders/1qFB9HbpnTlcOZprlT0IkYCuELrWPRUQd?usp=sharing"/>
				<Community name = "Alpha Beach" date="17th of April 2020" img="alpha.jpg" link="https://drive.google.com/drive/folders/1pTmcn6F5-yJl4OmWeYwffHAVn3YN2TAM?usp=sharing"/>
				<Community name = "Akoka, Bariga" date="9th of May, 2020" img="bariga.jpg" link="https://drive.google.com/drive/folders/1-wd0NudN84NcnFm8EUzIZY_SWCnToKlo?usp=sharing"/>
				<Community name = "Ayobo Ipaja" date="10th of May, 2020" img="ayobo.jpg" link="https://drive.google.com/drive/folders/1Vwlqlcdpu7uZWX5_QtoVTfT-kAa4didY?usp=sharing"/>
				<Community name = "Old Apapa Rd Ebute Metta" date="24th of May, 2020" img="ebutte.jpg" link="https://drive.google.com/drive/folders/1y9GpNSQH6uRdEI05oyCcxTonAmiTg4KY?usp=sharing"/>
				<Community name = "Esa/ Eyin Igbeti, Isolo" date="28th of April 2020" img="isolo.jpg" link="https://drive.google.com/drive/folders/1GXyHLCJVweMh7S2JXp3vLi0igjTc_RY7?usp=sharing"/>
				<Community name = "Ebun Otti Maryland, Ikeja" date="13th of May, 2020" img="mary.jpg" link="https://drive.google.com/drive/folders/1AUO56YROF-o4GppuHChe9s7Asxkzm5h6?usp=sharing"/>
				<Community name = "Otto Ilogbo Ebutte metta" date="23rd of May, 2020" img="otto.jpg" link="https://drive.google.com/drive/folders/1gQ1J61REjfQWPz4qFz2Bx5UH-gN0IxoP?usp=sharing"/>
				<Community name = "Isheri community" date="22nd of April, 2020" img="isheri.jpg" link="https://drive.google.com/drive/folders/1nE0eCZL8Y7ovoDGygbzT_yGJTeaNp10_?usp=sharing"/>
				<Community name = "NCDC Office" date="8th of April 2020" img="ncdc.jpg" link="https://drive.google.com/drive/folders/1Ut4WUyBg15Xry8E9aQVBPlzAJRxiCNvj?usp=sharing"/>
				<Community name = "Ogolonto-Majidun, Ikorodu" date="20th of April 2020" img="ogolo.jpg" link="https://drive.google.com/drive/folders/1N8AvrCPYV0rezdnZ4mwMIEn12HGnSVu2?usp=sharing"/>
				<Community name = "Lone Street, Oworonsoki, Lagos" date="6th of May, 2020" img="lone.jpg" link="https://drive.google.com/drive/folders/1U2qEsUz2wf6lyPLxenhr3HiOiRxAs3fb?usp=sharing"/>
				<Community name = "Shasha, Alimosho" date="22nd of April 2020" img="shasha.jpg" link="https://drive.google.com/drive/folders/1gJtNvbfRCIjdyns2gHY3XC2WsTRJi6VB?usp=sharing"/>
				<Community name = "Cement, Agege" date="27th of April 2020" img="cement.jpg" link="https://drive.google.com/drive/folders/1c1N6w_8SP2KfwYSdHwpkZnvfvy72W-DM?usp=sharing"/>
				<Community name = "Dustbin Estate, Ajegunle" date="3rd of May, 2020" img="dustbin.jpg" link="https://drive.google.com/drive/folders/1rWJXYJ0DQvd3E1HLQ5y3aC6Me0LlvxsH?usp=sharing"/>
				<Community name = "Gbagada" date="30th of April 2020" img="gbagada.jpg" link="https://drive.google.com/drive/folders/1UJO5O83PV1CQ6JvlSHPxWNAWKs6HlThj?usp=sharing"/>
				<Community name = "Iwaya community, Yaba" date="11 th April, 2020" img="iwaya.jpg" link="https://drive.google.com/drive/folders/1UBXDX6F89vPWbkPdYf4FWtENA6Q9htDu?usp=sharing"/>
				<Community name = "Awori, Agege" date="7th of May, 2020" img="awori.jpg" link="https://drive.google.com/drive/folders/1XGiZEfB5Pee1Be3Iqv8Lpjgolk4_3bWz?usp=sharing"/>
				<Community name = "Ijora Badia" date="26th March, 2020" img="ijora.jpg" link="https://drive.google.com/drive/folders/13Y8WRIUHXyvTamJ1pQPLNrJHhg9QJz0G?usp=sharing"/>
				<Community name = "Aboyi Ketu" date="9th April, 2020" img="aboyi.jpg" link="https://drive.google.com/drive/folders/1fLqfaAXU8PHA76gRfLN2fyFhs8-OZeV6?usp=sharing"/>
				<Community name = "Fagba, Iju" date="17th of May, 2020" img="fagba.jpg" link="https://drive.google.com/drive/folders/1WjScmLOXkisI3J4M0pGVy4TEjMtEjzP6?usp=sharing"/>
				<Community name = "Mushin Idiko" date="27th of March,2020" img="mushin.jpg" link="https://drive.google.com/drive/folders/1tWR5taqDHfgrnSAc62WDxAIABb_ugIv6?usp=sharing" />
				<Community name = "Agala Community" date="24th of May, 2020" img="agala.jpg" link="https://drive.google.com/drive/folders/1DKsLbBcpW5ACc_9bLeqb9xixH3_oN5VY?usp=sharing" />
				<Community name = "Ilaja Ogudu Community" date="31st of May, 2020" img="ogudu.jpg" link="https://drive.google.com/drive/folders/1pIecBfcHY8aoXhvnqxxpmvzFjjUN4BsE?usp=sharing" />
				<Community name = "Ojo-Ajangbadi" date="29th April, 2020" img="ojo.jpg" link="https://drive.google.com/drive/folders/1RGcWF3jHNRVjjIybbJ8knf88wJygRjrr?usp=sharing" />
				<Community name = "Dopemu Agege" date="29th April, 2020" img="dopemu.jpg" link="https://drive.google.com/drive/folders/1ixuYsWffryBmu2rUzXhrO8ArCz1p48jb?usp=sharing" />
				<Community name = "Ikotun, Egbe Community" date="7th June, 2020" img="egbe.jpg" link="https://drive.google.com/drive/folders/1GKeys_LnKs4djFgtOVXaPilYE45AbEXq?usp=sharing" />
				<Community name = "Ikotun, Ijegun Community" date="7th June, 2020" img="ijegun.jpg" link="https://drive.google.com/drive/folders/1ipCloQ3_0bT3odnSzliZTB2b8vA-2luH?usp=sharing" />
				<Community name = "Aguda, Surulere" date="14 th June 2020" img="suru.jpg" link="https://drive.google.com/drive/folders/1vrbwrAzpYqayfGMhBGWb6Nv3HJIXlS6d?usp=sharing"/>
			
		</div>
		<div class="relative">
			<Donations />
			<div class="background"></div>
		</div>
		<Partners />
		<div class="container mb-3 lg:mb-12">
			<h1
				class="font-extrabold text-2xl lg:text-3xl lg:text-center text-gray-800"
			>
				What our mission is beyond Covid 19?
			</h1>
			<p
				class="font-light mt-4 mx-auto lg:text-center text-gray-800 text-lg lg:w-85"
			>
				Our mission beyond COVID-19 is in two parts. a. To act as a frontline
				agency assisting those struggling with malnutrition and hunger across
				the country. b. To act as a food warehouse with branches in all the 20
				Local Governments in Lagos and to work with other agencies that assist
				people in need.
			</p>
			<!-- <div>
				<div>
					<img src="" alt="">
					<h1></h1>
					<p></p>
					<button></button>
				</div>
			</div> -->
		</div>
		<div class="bg-brand-primaryLight cursor-pointer" @click="openImpact">
			<div class="flex items-center justify-center p-5 w-90 lg:w-fit mx-auto">
				<div class="impacticon">
					<svg
						viewBox="0 0 79 96"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M73.3 0H19.3C16.4 0 14 2.4 14 5.3V14H5.3C2.4 14 0 16.4 0 19.3V89.8C0 92.7 2.4 95.1 5.3 95.1H59.3C62.2 95.1 64.6 92.7 64.6 89.8V81.1H73.3C76.2 81.1 78.6 78.7 78.6 75.8V5.3C78.5 2.4 76.2 0 73.3 0ZM60.3 89.7C60.3 90.2 59.9 90.6 59.3 90.6H5.3C4.8 90.6 4.4 90.2 4.4 89.7V19.2C4.4 18.7 4.8 18.3 5.3 18.3H14V75.8C14 78.7 16.4 81.1 19.3 81.1H60.3V89.7ZM74.2 75.8C74.2 76.3 73.8 76.8 73.2 76.8H19.3C18.8 76.8 18.3 76.4 18.3 75.8V5.3C18.3 4.8 18.7 4.3 19.3 4.3H73.3C73.8 4.3 74.3 4.7 74.3 5.3V75.8H74.2Z"
							fill="white"
						/>
						<path
							d="M62.3 50.7H30.2C29 50.7 28 51.7 28 52.9C28 54.1 29 55.1 30.2 55.1H62.3C63.5 55.1 64.5 54.1 64.5 52.9C64.5 51.7 63.5 50.7 62.3 50.7Z"
							fill="white"
						/>
						<path
							d="M62.3 63.7H30.2C29 63.7 28 64.7 28 65.9C28 67.1 29 68.1 30.2 68.1H62.3C63.5 68.1 64.5 67.1 64.5 65.9C64.5 64.7 63.5 63.7 62.3 63.7Z"
							fill="white"
						/>
						<path
							d="M62.3 37.8H30.2C29 37.8 28 38.8 28 40C28 41.2 29 42.2 30.2 42.2H62.3C63.5 42.2 64.5 41.2 64.5 40C64.5 38.7 63.5 37.8 62.3 37.8Z"
							fill="white"
						/>
						<path
							d="M34 29.5H37.8999C38.3999 29.5 38.7 29.1 38.7 28.7V22.5C38.7 22 38.2999 21.7 37.8999 21.7H34C33.5 21.7 33.2 22.1 33.2 22.5V28.7C33.2 29.1 33.6 29.5 34 29.5Z"
							fill="white"
						/>
						<path
							d="M43.6999 29.5H47.5999C48.0999 29.5 48.3999 29.1 48.3999 28.7V18C48.3999 17.5 47.9999 17.2 47.5999 17.2H43.6999C43.1999 17.2 42.8999 17.6 42.8999 18V28.6C42.8999 29.1 43.2999 29.5 43.6999 29.5Z"
							fill="white"
						/>
						<path
							d="M53.4001 29.5H57.3001C57.8001 29.5 58.1001 29.1 58.1001 28.7V13.7C58.1001 13.3 57.7001 12.9 57.3001 12.9H53.4001C52.9001 12.9 52.6001 13.3 52.6001 13.7V28.7C52.6001 29.1 53.0001 29.5 53.4001 29.5Z"
							fill="white"
						/>
					</svg>
				</div>
				<h1 class="font-black ml-4 lg:ml-16 text-xl lg:text-4xl text-white">
					View 2019 Impact Report
				</h1>
			</div>
		</div>
		<!-- <Instagram /> -->
		<Footer />
	</div>
</template>

<script>
import Nav from '~/components/NavBar.vue'
import Impact from '~/components/OurImpact.vue'
import Community from '~/components/CommunityCard.vue'
import Donations from '~/components/Donations.vue'
import Partners from '~/components/Partners.vue'
// import Instagram from '~/components/Instagram.vue'
import Footer from '~/components/Footer.vue'

export default {
	components: {
		Nav,
		Impact,
		Community,
		Donations,
		Partners,
		Footer,
	},
	data() {
		return {}
	},
	methods: {
		openImpact() {
			window.open(
				'https://www.lagosfoodbank.org/wp-content/uploads/2019/09/2019-Impact-Report-2-1.pdf',
				'_blanck',
			)
		},
	},
}
</script>

<style>
.touch {
	-webkit-overflow-scrolling: touch;
}
.hero1 {
	height: 305px;
}
.hero2 {
	height: 190px;
}
.impacticon{
	width: 30px;
}
@screen lg {
	.background {
		height: 500px;
		position: absolute;
		width: 100%;
		bottom: -100px;
		z-index: -1;
		background: linear-gradient(
				180deg,
				rgba(255, 255, 255, 0) 91.62%,
				#ffffff 100%
			),
			linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.63) 10.42%,
				rgba(255, 255, 255, 0) 100%
			),
			url(/lfb.png);
	}
	/* Sample `apply` at-rules with Tailwind CSS */
	/* .container {
  @apply  mx-auto bg-red-900 p-2;
} */

	.hero2 {
		/* top: 64px;
    right: -48px; */
		height: 215px;
	}
	.hero1 {
		height: 400px;
	}
	.impacticon{
		width: 79px;
	}
}
@screen xl {
	.background {
		height: 500px;
		position: absolute;
		width: 100%;
		bottom: -100px;
		z-index: -1;
		background: linear-gradient(
				180deg,
				rgba(255, 255, 255, 0) 91.62%,
				#ffffff 100%
			),
			linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.63) 10.42%,
				rgba(255, 255, 255, 0) 100%
			),
			url(/lfb.png);
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
	.impacticon{
		width: 79px;
	}
}
</style>
