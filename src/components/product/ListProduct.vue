<template>
  <div>
    <div class="chamcong_con task">
      <div class="input-group mb-3">
        <button type="button" class="btn btn-primary">Search</button>
        <input
          type="text"
          class="form-control"
          placeholder="Search for name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          v-model="searchText"
        />
        <button
          type="button"
          class="btn btn-primary width_add"
          value="-1"
          v-on:click="addEdit($event.target.value)"
        >
          Add Product
        </button>
      </div>
    </div>
    <div class="chamcong_con">
      <table class="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>ma sp</th>
            <th>ten san pham</th>
            <th>so luong</th>
            <th>ngay nhap hang</th>
            <th>gia san pham</th>
            <th>chinh sua</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in initItem.filter((item) =>
              item.name.includes(log.toLowerCase())
            )"
            v-bind:key="index"
          >
            <th>{{ index + 1 }}</th>
            <th>{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.qty }}</td>
            <td>{{ item.date.split("-").reverse().join("/") }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="addEdit(item.id)"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                v-on:click="$emit('handleDeleteItem', item.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      openModal: false,
    };
  },
  methods: {
    addEdit(value) {
      const isopen = !this.openModal
      this.$emit('openModalAddEdit', value , isopen )
    },
  },
  computed: {
    log() {
      const data = this.searchText;
      return data;
    },
  },
  name: "ListProduct",
  props: { initItem: Array, },
};
</script>

<style scoped>
.chamcong_con {
  display: flex;
  width: 90%;
  margin: auto;
}

.task {
  height: 30px;
  margin: 30px auto;
}

.header_task {
  padding: 20px;
  width: 90%;
  display: flex;
  margin: auto;
  margin-bottom: 20px;
}

.button_task {
  width: 90%;
  margin: auto;
}
.table thead th:nth-child(1) {
  width: 0;
}
.whiteColor {
  color: aliceblue;
}
.whiteColor:hover {
  color: aliceblue;
}
.button_list {
  margin-right: 10px;
}
.span1 {
  font-size: 1rem;
  background-color: #0d6efd;
  padding: 6px 12px;
  color: aliceblue;
  border-radius: 2px;
}
.span1:hover {
  color: aliceblue;
}
</style>