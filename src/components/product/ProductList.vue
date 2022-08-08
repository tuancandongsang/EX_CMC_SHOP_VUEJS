<template>
  <div>
    <AddProductVue
      v-bind:openModal="openModal"
      v-on:closeModal="closeModal"
      v-bind:inforItem="inforItem"
      v-on:handleInputx="handleInputx"
    />
    <!-- v-bind:indexItem="indexItem" -->
    <ListProductVue
      v-on:handleDeleteItem="handleDeleteItem"
      v-bind:initItem="initItem"
      v-on:openModalAddEdit="openModalAddEdit"
    />
  </div>
</template>

<script>
import AddProductVue from "./AddProduct.vue";
import ListProductVue from "./ListProduct.vue";
export default {
  data() {
    return {
      initItem: [
        {
          id: 1,
          name: "giay da",
          qty: 16,
          date: "2022-01-03",
          price: 120000,
          code: "1",
          userName: "tuancandongsang",
          passWord: "03011993",
          repeatPassWord: "03011993",
        },
        {
          id: 2,
          name: "ao somi",
          qty: 16,
          date: "2021-10-05",
          price: 160000,
          code: "2",
          userName: "thanhhoa",
          passWord: "05101994",
          repeatPassWord: "03011993",
        },
        {
          id: 3,
          name: "vest",
          qty: 16,
          date: "2020-12-26",
          price: 180000,
          code: "3",
          userName: "phuongnga",
          passWord: "28122001",
          repeatPassWord: "03011993",
        },
      ],
      openModal: false,
      indexItem: 0,
      addItem: {
        id: "",
        name: "",
        qty: "",
        date: "",
        price: "",
      },
    };
  },
  computed: {
    inforItem() {
      if (this.indexItem == -1) {
        return this.addItem;
      }
      return this.initItem[this.indexItem];
    },
  },
  methods: {
    handleInputx(data) {
      if (this.indexItem == -1) {
        this.initItem.push(data);
      } else this.initItem.splice(this.indexItem, 1, data);
    },
    handleDeleteItem(id) {
      const index = this.initItem.findIndex((item) => item.id == id);
      this.initItem.splice(index, 1);
    },
    openModalAddEdit(id, isopen) {
      if (id == -1) {
        this.addItem = {
          id: "",
          name: "",
          qty: "",
          date: "",
          price: "",
          code: "",
        };
      }
      this.openModal = isopen;
      const index = this.initItem.findIndex((item) => item.id == id);
      this.indexItem = index;
    },
    closeModal() {
      this.openModal = false;
    },
  },
  name: "ProductListVue",
  components: { ListProductVue, AddProductVue },
};
</script>

<style>
</style>