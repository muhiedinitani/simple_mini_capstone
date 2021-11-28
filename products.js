/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
    };
  },
  methods: {
    loadProducts: function () {
      axios.get("http://localhost:3000/products");
    },
  },
});
