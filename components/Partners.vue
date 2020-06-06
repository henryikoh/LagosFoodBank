<template>
  <div class=" mb-12 lg:mb-20">
    <h1 class="font-bold text-3xl text-brand-accent text-center lg:text-4xl">Our Partners</h1>
    <div class="border border-brand-primary border-l-0 border-r-0 container lg:p-20 mt-6 overflow-hidden p-12 relative">
      <div class="flex animate absolute left-0">
        <div class="flex w-50 justify-around items-center logo">
          <a href="#"><img src="/partners/unilever.jpg" alt=""></a>
          <a href=""><img src="/partners/Three Crowns.jpg" alt=""></a>
          <a href=""><img src="/partners/Andela.jpg" alt=""></a>
          <a href=""><img src="/partners/Bristow logo.png" alt=""></a>
          <a href=""><img src="/partners/Aace foods.png" alt=""></a>
          <a href=""><img src="/partners/Bella-Naija.jpg" alt=""></a>
          <a href=""><img src="/partners/Citi.png" alt=""></a>
          <a href=""><img src="/partners/Bristow uplift.png" alt=""></a>
          <a href=""><img src="/partners/Aquadana.jpg" alt=""></a>
          <a href=""><img src="/partners/Nairabox.png" alt=""></a>
          
          <a href="#"><img src="/partners/Next Gen Farm.png" alt=""></a>
          <a href=""><img src="/partners/Oppo Logo.jpg" alt=""></a>
          <a href=""><img src="/partners/Rensource logo2.png" alt=""></a>
          <a href=""><img src="/partners/Canon Education.jpg" alt=""></a>
          <a href=""><img src="/partners/Aace foods.png" alt=""></a>
          <a href=""><img src="/partners/Empawa.png" alt=""></a>
          <a href=""><img src="/partners/Dano Logo2.jpg" alt=""></a>
          <a href=""><img src="/partners/Pears.png" alt=""></a>
          <a href=""><img src="/partners/Peak.png" alt=""></a>
          <a href=""><img src="/partners/Rotary club Gbagada.png" alt=""></a>
          
        </div>
        <div class="flex w-50 justify-around items-center logo">
           <a href="#"><img src="/partners/unilever.jpg" alt=""></a>
          <a href=""><img src="/partners/Three Crowns.jpg" alt=""></a>
          <a href=""><img src="/partners/Andela.jpg" alt=""></a>
          <a href=""><img src="/partners/Bristow logo.png" alt=""></a>
          <a href=""><img src="/partners/Aace foods.png" alt=""></a>
          <a href=""><img src="/partners/Bella-Naija.jpg" alt=""></a>
          <a href=""><img src="/partners/Citi.png" alt=""></a>
          <a href=""><img src="/partners/Bristow uplift.png" alt=""></a>
          <a href=""><img src="/partners/Aquadana.jpg" alt=""></a>
          <a href=""><img src="/partners/Nairabox.png" alt=""></a>

          <a href="#"><img src="/partners/Next Gen Farm.png" alt=""></a>
          <a href=""><img src="/partners/Oppo Logo.jpg" alt=""></a>
          <a href=""><img src="/partners/Rensource logo2.png" alt=""></a>
          <a href=""><img src="/partners/Canon Education.jpg" alt=""></a>
          <a href=""><img src="/partners/Aace foods.png" alt=""></a>
          <a href=""><img src="/partners/Empawa.png" alt=""></a>
          <a href=""><img src="/partners/Dano Logo2.jpg" alt=""></a>
          <a href=""><img src="/partners/Pears.png" alt=""></a>
          <a href=""><img src="/partners/Peak.png" alt=""></a>
          <a href=""><img src="/partners/Rotary club Gbagada.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@keyframes marquee {
  0% { left: 0; }
  100% { left: -600%; }
}
.animate{
      width: 1200%;
  animation: marquee 20s linear infinite;
  top: 50%;
  transform: translate(0,-50%);
  
}
.logo a {
  width: 80px;
  -webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
@screen lg {
  @keyframes marquee {
  0% { left: 0; }
  100% { left: -250%; }
}
.animate{
      width: 500%;
  animation: marquee 20s linear infinite;
  top: 50%;
  transform: translate(0,-50%);
  
}
.logo a {
  width: 100px;
  -webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
}

.animate:hover{
  animation-play-state: paused;
}

.logo a:hover{
  transform: scale(1.3);
}
</style>