<template>
  <section class="flex flex-col justify-center py-36">

    <div class="mb-14 flex flex-col 2xl:px-[169px] ">
      <div class="flex flex-col gap-2">
        <h6 class="w-full font-anton text-h3 ">
          Work We've Done
        </h6>
        <span class="w-10 h-1 bg-secondary inline-block"></span>
      </div>
    </div>


    <div class="flex items-center 2xl:px-[169px] ">
      <!-- <div class="p-1 rounded-full bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer">
        <SvgLoader type="mdi" :path="mdiChevronLeft" size="50" />
      </div> -->
      <div 
        ref="fadingContainer"
        class="grid 2xl:grid-cols-3 lg:grid-cols-2 w-full relative"
      >
        <div 
          v-for="(img, i) in images" 
          :key="i"
          ref="content"
          class="max-h-[500px] w-full inline-block relative group"
        >
          <img class="flex-shrink-0 w-full h-full object-cover" :src="img.img" alt="">

          <div class="absolute bg-gradient-to-t from-primary from-5% to-90% top-0 left-0 h-full w-full text-white flex flex-col justify-end items-start pl-4 pb-5 opacity-0 hover:opacity-100 duration-200">
            <div class="font-roboto text-h4">
              {{ img.title }}
            </div>
            <div class="font-roboto text-body1 h-0 opacity-0 transition-all duration-500 group-hover:h-10 group-hover:opacity-100">
              {{ img.location }}
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="p-1 rounded-full bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer">
        <SvgLoader type="mdi" :path="mdiChevronRight" size="50" />
      </div> -->
    </div>
  </section>
</template>

<script>
import GrandPalldiemImg from '@/assets/images/projects/grand-palladiem.jpg'
import MiramarImg from '@/assets/images/projects/miramar.jpg'
import RoyaltonWhiteSandResortImg from '@/assets/images/projects/royalton-white-sand-resort.jpg'
import SandalsWhiteHouseImg from '@/assets/images/projects/sandals-white-house.jpg'
import SecretsHotelImg from '@/assets/images/projects/secrets-hotel.jpg'
import SundownImg from '@/assets/images/projects/sundown.jpg'
import CliffImg from '@/assets/images/projects/cliff-hotel.jpg'
import GrandBahiaPrincipeImg from '@/assets/images/projects/grand-bahia-principe.jpg'

import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';

export default {
  data() {
    return {
      mdiChevronRight,
      mdiChevronLeft,
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      images: [
        {
          title: 'Grand PalldiemImg',
          img: GrandPalldiemImg,
          location: 'Lucea, Hanover'
        },
        {
          title: 'The Grand Bahia Principe Hotel',
          img: GrandBahiaPrincipeImg,
          location: 'W End Rd, Negril'
        },
        {
          title: 'Sandals White House',
          img: SandalsWhiteHouseImg,
          location: 'Whitehouse, Westmoreland'
        },
        {
          title: 'Secrets Wild Orchid Resort & Spa',
          img: SecretsHotelImg,
          location: 'Montego Bay ,St James'
        },
        {
          title: 'The Cliff Hotel',
          img: CliffImg,
          location: 'W End Rd, Negril'
        },
        {
          title: 'Royal White Sand Resort',
          img: RoyaltonWhiteSandResortImg,
          location: 'Falmouth, Trelawny',
        },
        {
          title: 'Miramar',
          img: MiramarImg,
          location: 'Miramar Montego Bay'
        },
        {
          title: 'Sundown',
          img: SundownImg,
          location: 'Fortlands Rd, Discovery Bay'
        }
      ]
    }
  },

  methods: {

  }
}
</script>

<style scoped>

.fading-container::before,
.fading-container::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;
}

.fading-container::before {
  left: 0px;
  width: 150px;
  background: linear-gradient(to right, white 50%, rgba(255, 255, 255, 0));
}

.fading-container::after {
  right: 0px;
  width: 150px;
  background: linear-gradient(to left, white 50%, rgba(255, 255, 255, 0));
}
</style>