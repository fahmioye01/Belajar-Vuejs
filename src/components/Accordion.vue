<template>
    <div class="accordion-container">
        <div class="accordion-header">
            <button @click="show" class="toggle-button" >{{title}}</button>
        </div>
        <div v-show-slide="isOpen" class="accordion-content" >
            <p>Lorem ipsum dolor sit amet consectetur ?orem ipsum dolor sit amet consectetur ?orem ipsum dolor sit amet consectetur ?orem ipsum dolor sit amet consectetur ?</p>
        </div>
    </div>
</template>
<script>
export default {
  name: "accordion",
  props: ["title"],
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    show() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style>
.accordion-container {
  width: 100%;
  height: 40px;
  margin: 0px;
  background-color: #f93943;
  border: 1px solid;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.toggle-button {
  font-family: Hermit;
  font-weight: bold;
  font-size: 16px;
  width: fit-content;
  height: 30px;
  background-color: transparent;
  border: none;
  margin-left: 16px;
  cursor: pointer;
}
.accordion-content {
  margin: 0px;
  background-color: white;
  border-bottom-left-radius: 8px;
}
</style>

