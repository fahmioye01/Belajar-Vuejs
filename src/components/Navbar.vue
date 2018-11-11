<template>
<div class="navbar-container">
    <slide>
        <a class="home" href="">
            <span>home</span>
        </a>
        <a class="home" href="">
            <span>home</span>
        </a>
        <a class="home" href="">
            <span>home</span>
        </a>
    </slide>

</div>
</template>
<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide
  }
};
</script>

<style>
.navbar-container {
  width: 100%;
  height: 70px;
  background-color: #f93943;
}
.bm-burger-button {
  top: 30px !important;
}
</style>