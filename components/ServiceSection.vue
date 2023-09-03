<template>
  <section class="flex flex-col gap-10">
    
    <div class="mb-14 flex flex-col text-center font-anton">
      <h6 class="w-full text-centers text-h3 text-primary">
        What We Offer
      </h6>
    </div>

    <div class="w-full h-[auto] 2xl:grid 2xl:grid-cols-12 sm:flex sm:flex-row sm:flex-wrap sm:justify-center 2xl:px-[169px] gap-8">
      <div 
        v-for="(service, i) in services" 
        :key="i"
        class=" min-w-[300px] max-w-[350px] col-span-3 flex flex-col items-center gap-8 py-7 border border-primary bg-primary rounded-md border-tips relative"
        :class="[
          i == 4 ? '2xl:col-start-4' : '',
          i == 5 ? '2xl:col-start-7' : ''
        ]"
      >
        <div class="w-fit max-h-[250px] flex justify-center items-center bg-secondary text-primary p-4 rounded-full">
          <!-- <img class="flex-shrink-0 max-h-full max-w-full" :src="service.imgUrl"/> -->
          <SvgLoader type="mdi" :path="service.svg" size="40"/>
        </div>
        <h6 class="font-roboto text-body1 text-secondary h-12 w-full text-center flex items-center justify-center">
          {{ service.title.toUpperCase() }}
        </h6>
        <ul class="text-secondary flex flex-col gap-2 text-center">
          <li v-for="(listItem, i) in service.list" :key="i">{{ listItem }}</li>
        </ul>
      </div>
    
    </div>
  </section>
</template>

<script>
import RoofingImg from '@/assets/images/roof.jpg'
import MaintenanceImg from '@/assets/images/worker-3.jpg'
import ToolsImg from '@/assets/images/tools.jpg'
import RefurbishingImg from '@/assets/images/refurbish.jpg'
import PaintingImg from '@/assets/images/paint.jpg'
import MasonImg from '@/assets/images/mason.jpg' 

import { mdiMarkerCheck , mdiHammerScrewdriver, mdiFloorPlan, mdiAccountHardHat   } from '@mdi/js';

export default {
  data() {
    return {
      services: [
        { 
          title: 'Pre-construction Services',
          list: [
            'Consultation and Design',
            'Budget Estimation',
            'Permitting'
          ],
          svg: mdiFloorPlan
        },
        { 
          title: 'Construction Services',
          list: [
            'Roofing',
            'Plumbing',
            'Site Preparation',
            'Construction Management',
            'General Contracting',
            'Concrete Construction',
            'Steel Construction',
            'Electrical Work',
            'Painting and Finishing'
          ],
          svg: mdiHammerScrewdriver
        },
        { 
          title: 'Specialized Services',
          svg: mdiAccountHardHat,
          list: [
            'Renovation',
            'Demolition'
          ]
        },
        { 
          title: 'Post-construction Services',
          list: [
            'Quality Checks',
            'Building Handover',
            'Maintenance',
            'Warranty Services'
          ],
          svg: mdiMarkerCheck 
        },
        // { 
        //   text: 'Repair', 
        //   imgUrl: ToolsImg
        // },
        // { 
        //   text: 'Refurbishing', 
        //   imgUrl: RefurbishingImg
        // },
        // { 
        //   text: 'Painting', 
        //   imgUrl: PaintingImg
        // },
        // { 
        //   text: 'Masonry Works', 
        //   imgUrl: MasonImg
        // },
      ]
    }
  },

  beforeMount() {
    console.log(this.services[0].svg);
  }
}
</script>

<style>
.border-tips::before,
.border-tips::after,
.border-tips > div::before,
.border-tips > div::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 4px solid rgb(255 214 51);
  border-radius: 5px;
}

.border-tips::before {
  top: 0;
  left: 0;
  border-bottom: none;
  border-right: none;
}

.border-tips::after {
  bottom: 0;
  right: 0;
  border-top: none;
  border-left: none;
}

.border-tips > div::before {
  top: 0;
  right: 0;
  border-bottom: none;
  border-left: none;
}

.border-tips > div::after {
  bottom: 0;
  left: 0;
  border-top: none;
  border-right: none;
}
</style>