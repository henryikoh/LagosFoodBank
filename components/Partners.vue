<template>
	<div id="partners" class=" mb-12 lg:mb-20">
		<h1 class="font-bold text-3xl text-brand-accent text-center lg:text-4xl">
			Our Partners
		</h1>
		<div
			class="border border-brand-primary border-l-0 border-r-0 container lg:p-20 mt-6 overflow-hidden p-12 relative"
		>
			<div class="flex animate absolute left-0">
				<div class="flex w-50 justify-around items-center logo">
					<a href="#"><img src="/partners/unilever.jpg" alt="" /></a>
					<a href=""><img src="/partners/Three Crowns.jpg" alt="" /></a>
					<a href=""><img src="/partners/Andela.jpg" alt="" /></a>
					<a href=""><img src="/partners/Bristow logo.png" alt="" /></a>
					<a href=""><img src="/partners/Aace foods.png" alt="" /></a>
					<a href=""><img src="/partners/Bella-Naija.jpg" alt="" /></a>
					<a href=""><img src="/partners/Citi.png" alt="" /></a>
					<a href=""><img src="/partners/Bristow uplift.png" alt="" /></a>
					<a href=""><img src="/partners/Aquadana.jpg" alt="" /></a>
					<a href=""><img src="/partners/Nairabox.png" alt="" /></a>

					<a href="#"><img src="/partners/Next Gen Farm.png" alt="" /></a>
					<a href=""><img src="/partners/Oppo Logo.jpg" alt="" /></a>
					<a href=""><img src="/partners/Rensource logo2.png" alt="" /></a>
					<a href=""><img src="/partners/Canon Education.jpg" alt="" /></a>
					<a href=""><img src="/partners/Aace foods.png" alt="" /></a>
					<a href=""><img src="/partners/Empawa.png" alt="" /></a>
					<a href=""><img src="/partners/Dano Logo2.jpg" alt="" /></a>
					<a href=""><img src="/partners/Pears.png" alt="" /></a>
					<a href=""><img src="/partners/Peak.png" alt="" /></a>
					<a href=""><img src="/partners/Rotary club Gbagada.png" alt="" /></a>

					<a href="#"><img src="/partners/Kellogg_s logo.png" alt="" /></a>
					<a href=""><img src="/partners/GFN-Full-Color-Logo.png" alt="" /></a>
					<a href=""><img src="/partners/nirankari_logo.png" alt="" /></a>
					<a href=""><img src="/partners/Sunlight.jpg" alt="" /></a>
					<a href=""><img src="/partners/Trojan.png" alt="" /></a>
					<a href=""><img src="/partners/Vaseline.jpg" alt="" /></a>
					<a href=""><img src="/partners/LEAP-Africa.jpg" alt="" /></a>
					<a href=""><img src="/partners/Knorr.png" alt="" /></a>
					<a href=""><img src="/partners/krispy-kreme-logo.png" alt="" /></a>
					<a href=""><img src="/partners/Oando Foundation.jpg" alt="" /></a>
				</div>
				<div class="flex w-50 justify-around items-center logo">
					<a href="#"><img src="/partners/unilever.jpg" alt="" /></a>
					<a href=""><img src="/partners/Three Crowns.jpg" alt="" /></a>
					<a href=""><img src="/partners/Andela.jpg" alt="" /></a>
					<a href=""><img src="/partners/Bristow logo.png" alt="" /></a>
					<a href=""><img src="/partners/Aace foods.png" alt="" /></a>
					<a href=""><img src="/partners/Bella-Naija.jpg" alt="" /></a>
					<a href=""><img src="/partners/Citi.png" alt="" /></a>
					<a href=""><img src="/partners/Bristow uplift.png" alt="" /></a>
					<a href=""><img src="/partners/Aquadana.jpg" alt="" /></a>
					<a href=""><img src="/partners/Nairabox.png" alt="" /></a>

					<a href="#"><img src="/partners/Next Gen Farm.png" alt="" /></a>
					<a href=""><img src="/partners/Oppo Logo.jpg" alt="" /></a>
					<a href=""><img src="/partners/Rensource logo2.png" alt="" /></a>
					<a href=""><img src="/partners/Canon Education.jpg" alt="" /></a>
					<a href=""><img src="/partners/Aace foods.png" alt="" /></a>
					<a href=""><img src="/partners/Empawa.png" alt="" /></a>
					<a href=""><img src="/partners/Dano Logo2.jpg" alt="" /></a>
					<a href=""><img src="/partners/Pears.png" alt="" /></a>
					<a href=""><img src="/partners/Peak.png" alt="" /></a>
					<a href=""><img src="/partners/Rotary club Gbagada.png" alt="" /></a>

					<a href="#"><img src="/partners/Kellogg_s logo.png" alt="" /></a>
					<a href=""><img src="/partners/GFN-Full-Color-Logo.png" alt="" /></a>
					<a href=""><img src="/partners/nirankari_logo.png" alt="" /></a>
					<a href=""><img src="/partners/Sunlight.jpg" alt="" /></a>
					<a href=""><img src="/partners/Trojan.png" alt="" /></a>
					<a href=""><img src="/partners/Vaseline.jpg" alt="" /></a>
					<a href=""><img src="/partners/LEAP-Africa.jpg" alt="" /></a>
					<a href=""><img src="/partners/Knorr.png" alt="" /></a>
					<a href=""><img src="/partners/krispy-kreme-logo.png" alt="" /></a>
					<a href=""><img src="/partners/Oando Foundation.jpg" alt="" /></a>
				</div>
			</div>
		</div>
		<div class="all-partners container mt-12">
			<div v-if="showAll" class="grid grid-cols-3 lg:grid-cols-5 mb-8">
				<div
					v-for="partner in this.partners"
					:key="partner"
					class="text-sm bg-brand-acccentLight border-brand-primary border p-1  text truncate"
					:title="partner"
				>
					{{ partner }}
				</div>
			</div>
			<div
				class="cursor-pointer font-bold text-brand-primary text-center text-lg"
				@click="showPartners"
			>
				<h3>{{ view }}</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			partners: [
				'Syracruse Africa/ OPPO',
				'Global Food Banking Network(GFN)',
				'Rensource',
				'Arami Essentials',
				'Arla Foods',
				'Next Generation',
				'Nifemi Brown Foundation',
				'Saturday Night Fever (SNF)',
				'Owambe UK',
				'Aristocrat',
				'Peak/Three Crowns milk',
				'Haanofoods',
				'William Grants and Sons LTD',
				'Andela',
				'Aquadana',
				'The fishshop Nigeria',
				'Mobile Coldroom NG',
				'Unilever Nigeria Plc',
				'Somgeo Foods Ltd',
				'AACE foods',
				'Sympli Natural Nigeria',
				'Canon Education',
				'Zippy Logistics',
				'Bristow Helicopters',
				'The Rotary Club of Gbagada',
				'Kuda Bank',
				'Leap Africa',
				'Sanitary Aid ng',
				'Olivia Anakwe Foundation',
				'Karflexfisheries ltd',
				'Oando Foundation',
				'Itel Mobile Nigeria',
				'krispy crème',
				'Blue Mahogany',
				'Kindred Africa Community Development Foundation',
				'Bella Naija',
				'Krasks TV',
				'Empawa Africa',
				'Jewel Jemila Clothing Brand',
				'Learn2feed',
				'Trojan',
				'Nairabox',
				'The Wheelers Motorcycle Club',
				'RMB',
				'Nutzy Peanut Butter',
				'OmniLife',
				'General Electric',
				'Pears Unilever',
				'Mr Chef',
				'Malta Guinness',
				'Lady Care',
				'H&E Gourmet café and dining',
				'Trojan Estate Limited',
				'Imaginarium Creative Global Limited',
				'Estee Lauder Companies (PTY) LTD',
				'oloni',
				'AA GreenBox',
				'UNIFE Law Class ’87',
				'Canadian Association of Nigerian Lawyers',
				'Queensbury Farm Eggs',
			],
			view: 'View All',
			showAll: false,
		}
	},
	methods: {
		showPartners() {
			if (!this.showAll) {
				this.showAll = true
				this.view = 'Show Less'
			} else {
				this.showAll = false
				this.view = 'View All'
			}
		},
	},
}
</script>

<style>
@keyframes marquee {
	0% {
		left: 0;
	}
	100% {
		left: -900%;
	}
}
.animate {
	width: 1800%;
	animation: marquee 20s linear infinite;
	top: 50%;
	transform: translate(0, -50%);
}
.logo a {
	width: 80px;
	-webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
@screen lg {
	@keyframes marquee {
		0% {
			left: 0;
		}
		100% {
			left: -375%;
		}
	}
	.animate {
		width: 750%;
		animation: marquee 20s linear infinite;
		top: 50%;
		transform: translate(0, -50%);
	}
	.logo a {
		width: 100px;
		-webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	}
}

.animate:hover {
	animation-play-state: paused;
}

.logo a:hover {
	transform: scale(1.3);
}
</style>
