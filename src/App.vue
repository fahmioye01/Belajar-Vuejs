<template>
  <div >
   <Navbar/>
    <Slider animation='fade'>
      <SliderItem v-for="(i, index) in list" :key="index">
        <img :src="i.src" class="image-item" />
      </SliderItem>
    </Slider>
    <vue-picture-swipe :items="list" />
    <accordion title="Accordion component #1" />
    <accordion title="Accordion component #2" />
    <accordion title="Accordion component #3" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { Slider, SliderItem } from "vue-easy-slider";
import VuePictureSwipe from "vue-picture-swipe";
import Accordion from "./components/Accordion";
export default {
  name: "app",
  components: {
    Navbar,
    Slider,
    SliderItem,
    VuePictureSwipe,
    Accordion
  },
  data() {
    return {
      list: [
        {
          src: require("./assets/foto/bike.jpg"),
          thumbnail: require("./assets/foto/bike.jpg"),
          w: 150,
          h: 150
        },
        {
          src: require("./assets/foto/bike1.jpg"),
          thumbnail: require("./assets/foto/bike.jpg"),
          w: 150,
          h: 150
        }
      ]
    };
  }
};
</script>

<style>
.image-item {
  width: auto;
  height: 100%;
  margin-left: 40%;
}
img {
  height: 20%;
  width: 20%;
}
</style>
