// export async function fetchPosts(data, e) {
//     e.preventDefault();
//     ApiProduct("post", "v3", data);
//   }
//   export const PaginateController = (e) => {
//     getData2('/wc/v2/orders',(Paginate += e));
//   };







// import { Main} from "../layout/layout.js";
import { Main } from "../layout/layout.js";
import { ApiProduct,getData2 } from "../services/Api.js";

var Paginate = 1;
export async function fetchPosts(data, e) {
  e.preventDefault();
  ApiProduct("post", "v3", data);
}
export async function showData(d) {
  [...document.querySelectorAll(".showData>div")].map((d) => d.remove());

  Main(d)
  d?.map((data) => {
    document.querySelector(".showData").innerHTML += `
      <div class='flex p-1 [&>*]:w-1/4 searchCart' data-id="${
        data.id
      }" data-name="${data.name}">
      <div>${data.name}</div>
      <div>${data.regular_price}</div>
      <div>${
        data.in_stock
          ? '<span class="bg-green-300 text-sm font-thin rounded-md p-1 text-green-700">فعال</span>'
          : '<span class="bg-red-300 text-sm font-thin rounded-md p-1 text-red-700">غیرفعال</span>'
      }</div>
      <div>
      <button data-id="${
        data.id
      }" class="deleteData bg-red-500 p-1 text-white self-center">حذف</button>
      <button class="bg-blue-500 text-white p-1 editData" data-id="${
        data.id
      }" data-name="${data.name}" data-price="${
      data.regular_price
    }">ویرایش</button>
      </div>
      </div>
      `;
  });
}
export const DeleteProducts = (data) => {
  ApiProduct("delete", "v3", data);
};
export const editProducts = (e) => {
  [...document.querySelectorAll("form>input")].map((d) =>
    (
      d["name"] === Object.keys(e.target.dataset)[1] &&
        (d["value"] = e.target.dataset.name),
      d["name"] === Object.keys(e.target.dataset)[2] &&
        (d["value"] = e.target.dataset.price)
    )
  );
  ApiProduct("delete", "v3", e.target.dataset);
};
export const PaginateController = (e) => {
  getData2('wc/v1/products',(Paginate += e));
  // getData((Paginate += e));
};
export const searchData = (e) => {
  // d.dataset.includes(e.target.value),
  console.log(e.target.value === "");
  [...document.querySelectorAll(".searchCart")].map(
    (d) =>
      (d.dataset.name !== e.target.value
        ? d.classList.add("hidden")
        : d.classList.remove("hidden")) ||
      (e.target.value === "" && d.classList.remove("hidden"))
  );
  console.log(e.target.value, [...document.querySelectorAll(".searchCart")]);
};
