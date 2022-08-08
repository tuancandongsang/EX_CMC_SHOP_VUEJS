<template>
  <div class="modal" tabIndex="-1" v-bind:class="{ modal11: openModal }">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ status }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            v-on:click="$emit('closeModal')"
          ></button>
        </div>
        <div class="label_title">
          <label
            htmlFor="basic-url"
            class="htmlForm-label label_paddingLeft_20px"
            >ten san pham:</label
          >
          <div class="input-group">
            <input
              type="text"
              class="form-control input_Full"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-bind:value="inforItem.name"
              v-on:input="handleInputName"
            />
          </div>
          <!-- <span
                                        style={{ color: 'red', paddingLeft: '20px' }}
                                    >{errorName}</span> -->
        </div>
        <div class="label_title">
          <label
            htmlFor="basic-url"
            class="htmlForm-label label_paddingLeft_20px"
            >so luong:</label
          >
          <div class="input-group">
            <input
              type="text"
              class="form-control input_Full"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-bind:value="inforItem.qty"
              v-on:input="handleInputQty"
            />
          </div>
          <!-- <span
                                        style={{ color: 'red', paddingLeft: '20px' }}
                                    >{errorEamil}</span> -->
        </div>
        <div class="nameModal">
          <div class="label_title_2">
            <label htmlFor="basic-url" class="htmlForm-label"
              >ngay nhap hang:</label
            >
            <div class="input-group">
              <input
                type="date"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              v-bind:value="inforItem.date"
              v-on:input="handleInputDate"
              />
            </div>
            <!-- <span
                                            style={{ color: 'red' }}
                                        >{errordate}</span> -->
          </div>
          <div class="label_title_2">
            <label htmlFor="basic-url" class="htmlForm-label"
              >gia san pham:</label
            >
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              v-bind:value="inforItem.price"
              v-on:input="handleInputPrice"
              />
            </div>
            <!-- <span
                                            style={{ color: 'red' }}
                                        >{errordate}</span> -->
          </div>
        </div>
        <div class="label_title">
          <label
            htmlFor="basic-url"
            class="htmlForm-label label_paddingLeft_20px"
            >ma san pham:</label
          >
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control input_Full"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-bind:value="inforItem.id"
              v-on:input="handleInputId"
            />
          </div>
        </div>
        <div class="nameModal">
          <div class="label_title_2">
            <label htmlFor="basic-url" class="htmlForm-label">Password:</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="inputPassWord"
                value="{input.inputPassWord}"
                onChange="{onChangeInput}"
              />
            </div>
          </div>
          <div class="label_title_2">
            <label htmlFor="basic-url" class="htmlForm-label"
              >Repeat Password:</label
            >
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="inputRepeatPassWord"
                value="{input.inputRepeatPassWord}"
                onChange="{onChangeInput}"
              />
            </div>
          </div>
        </div>
        <!-- <span
          class="errorPassWord_margin"
          style={{ color: 'red' }}
        >{errorPassWord}</span> -->
        <div class="button_margin_top">
          <button
            type="button"
            class="btn btn-primary width_button"
            v-on:click="handleSave"
          >
            Save
          </button>
          <button
            type="button"
            class="btn btn-danger width_button"
            v-on:click="$emit('closeModal')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSave(){
      const data = this.inforItem
      this.$emit("handleInputx", data)
      this.$emit('closeModal')
    },
    handleInputName(e){
      this.inforItem.name = e.target.value
    },
    handleInputPrice(e){
      this.inforItem.price = e.target.value
    },
    handleInputQty(e){
      this.inforItem.qty = e.target.value
    },
    handleInputDate(e){
      this.inforItem.date = e.target.value
    },
    handleInputId(e){
      this.inforItem.id = e.target.value
    },
  },
  data() {
    return {
      status: "alo",
      // addEditProduct:{
      //   id: '',
      //   name: "",
      //   email: "",
      //   date: "",
      //   price: "",
      //   code: "",
      // }
    };
  },
  props: { openModal: Boolean, inforItem: Object, indexItem:[Number, String] },
  name: "AddProduct",
};
</script>

<style scoped>
.modal {
  /* padding: 10px; */
  /* display: block; */
}
.modal11 {
  display: block;
}

.nameModal {
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
}

.input_Full {
  width: 90%;
  /* background-color: aqua; */
  margin: 0 20px;
}

.label_title {
  text-align: left;
}

.label_paddingLeft_20px {
  padding-left: 20px;
}

.label_title_2 {
  text-align: left;
  width: 200px;
}

.width_button {
  width: 150px;
  margin-bottom: 10px;
}

.width_add {
  width: 300px;
}

.input_error {
  margin: 0 !important;
}

.button_margin_top {
  margin: 10px auto;
  display: flex;
}

.errorPassWord_margin {
  display: flex;
  margin: auto;
}

.price__block {
  display: flex;
}

.select_price {
  width: 65px;
  padding: 0;
}

.select_price__block {
  margin-left: 5px;
}

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