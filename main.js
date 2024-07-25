import {
  editProducts,
  // fetchPosts,
  searchData,
} from "./controller/productController.js";

import { ApiLogin, ApiProduct, getData2 } from "./services/Api.js";
var Paginate = 1;
var List = {
  billing: {},
};

function Form(e) {
  e.target.classList.contains("addproducts") &&
    ([...document.querySelectorAll(".addproducts>.inputs")].map((d) => {
      return (
        window.location.pathname === "/pages/products.html" &&
          (List[d.name] = d.value),
        window.location.pathname === "/pages/order.html" &&
          (List.billing[d.name] = d.value)
      );
    }),
    e.preventDefault(),
    console.log(List),
    (window.location.pathname === "/pages/order.html" &&
      ApiProduct("post", "wc/v2/orders", List),
    window.location.pathname === "/pages/products.html" &&
      ApiProduct("post", "wc/v3/products", List)));


  e.target.classList.contains("deleteData") &&
    (window.location.pathname === "/pages/products.html" &&
      ApiProduct("delete", "wc/v3/products", e.target.dataset),
    window.location.pathname === "/pages/order.html" &&
      ApiProduct("delete", "wc/v2/orders", e.target.dataset),
    window.location.pathname === "/pages/user.html" &&
      ApiProduct("delete", "wp/v2/users", e.target.dataset));



  e.target.classList.contains("editData") &&
    window.location.pathname === "/pages/products.html" &&
    editProducts(e);
  e.target.classList.contains("page-numbers") &&
    (window.location.pathname === "/pages/products.html" &&
      getData2("/wc/v3/products", (Paginate += +e.target.dataset.page)),
    window.location.pathname === "/pages/order.html" &&
      getData2("/wc/v2/orders", (Paginate += +e.target.dataset.page)),
    window.location.pathname === "/pages/user.html" &&
      getData2("/wp/v2/users", (Paginate += +e.target.dataset.page)));
  e.target.classList.contains("searchData") && searchData(e);
}
function Main(e) {
  document.querySelector(".Main>*")==null && (document.querySelector(".Main").innerHTML = `<div class="loading">loading... ${navigator.onLine?'online':'offline'}</div>`)

  window.location.pathname === "/pages/order.html" && ApiLogin("/wc/v2/orders");
  window.location.pathname === "/" && ApiLogin("/wc/v1/products");
  window.location.pathname === "/pages/user.html" && ApiLogin("/wp/v2/users");
  window.location.pathname === "/pages/categories.html" &&
    ApiLogin("/wc/v1/products/categories");
  window.location.pathname === "/pages/products.html" &&
    ApiLogin("/wc/v1/products");

  document.addEventListener("input", Form);
  document.addEventListener("submit", Form);
  document.addEventListener("click", Form);
}

document.addEventListener("DOMContentLoaded", Main);
