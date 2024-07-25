function* menu() {
  document.querySelector(".Main").innerHTML = ``;
  yield {
    class: "MenuSlide",
    data: `
  <a href="/pages/user.html">کاربران</a>
  <a href="/pages/products.html">محصولات</a>
  <a href="/pages/order.html">خریدها</a>
  <!-- <a href="/pages/theme.html">تم ها</a>
  <a href="/pages/categories.html">دسته بندی</a> -->
`,
  };
}

export function* Main() {
  console.log(window.data);
  yield {
    class: "Main",
    data:
      (window.location.pathname === "/pages/order.html" &&
        `<form
      class="addproducts flex flex-col items-center gap-5 [&>input]:p-2 bg-gray-300 p-2 [&>input]:w-1/2"
    >
      <input type="text" name="first_name" class="inputs" placeholder="نام" />
      <input type="text" name="last_name" class="inputs" placeholder="نام خانوادگی"/>
      <input type="text" name="address_1" class="inputs" placeholder="ادرس"/>
      <input type="text" name="city" class="inputs" placeholder="شهر"/>
      <input type="text" name="state" class="inputs" placeholder="استان"/>
      <input type="number" name="phone" class="inputs" placeholder="موبایل" />
      

      <button type="submit" class="bg-green-400 text-white w-[10%] p-2">
        افزودن
      </button>
    </form>
    <div class="flex flex-col gap-2 items-center [&>*]:w-full text-center" >
      <input type="text" name="" id="" class="searchData" placeholder="جستجو"/>
      <div class="flex gap-5 p-3 [&>*]:w-1/4" >
        <div>نام</div>
        <div>تلفن</div>
        <div>ادرس</div>
        <div>ویرایش</div>
      </div>
      <hr/>
      <div class="showData">
      ${[
        ...window.data?.map(
          (data) =>
            `
            <div class='flex p-1 [&>*]:w-1/4 searchCart' data-id="${data.id}" data-name="${data.billing.first_name}">
            <div>${data.billing.first_name}</div>
            <div>${data.billing.phone}</div>
            <div>${data.billing.address_1}</div>
            <div>
            <button data-id="${data.id}" class="deleteData bg-red-500 p-1 text-white self-center">حذف</button>
            <button class="bg-blue-500 text-white p-1 editData" data-id="${data.id}" data-name="${data.name}" data-price="${data.regular_price}">ویرایش</button>
            </div>
            </div>
            `
        ),
      ]
        .toString()
        .replaceAll(",", "")}
      </div>
    </div>
    <div class="paginate">
    <a class="page-numbers bg-blue-500 text-white p-2 text-center" data-page="1" rel="next" href="#target">بعدی</a>
    <a class="page-numbers bg-blue-500 text-white p-2 text-center" data-page="-1" rel="prev" href="#target">قبلی</a>
    </div>`) ||
      (window.location.pathname === "/" && "<div>داشبورد</div>") ||
      (window.location.pathname === "/pages/user.html" &&
        `<form
      class="addproducts flex flex-col items-center gap-5 [&>input]:p-2 bg-gray-300 p-2 [&>input]:w-1/2"
    >
      <input type="text" class="inputs" name="username" placeholder="نام کاربری" />
      <input type="text" class="inputs" name="name" class="inputs" placeholder="نام" />
      <input type="email" class="inputs" name="email" id="" placeholder="ایمیل"/>
      <input type="password" class="inputs" name="password" id="" placeholder="پسورد"/>

      <button type="submit" class="bg-green-400 text-white w-[10%] p-2">
        افزودن
      </button>
    </form>

    <div class="flex flex-col gap-2 items-center [&>*]:w-full text-center" >
      <input type="text" name="" id="" class="searchData" placeholder="جستجو"/>
      <div class="flex gap-5 p-3 [&>*]:w-1/4" >
        <div></div>
        <div>نام</div>
        <div>ادرس</div>
        <div>ویرایش</div>
      </div>
      <hr/>
      <div class="showData">
      ${[
        ...window.data?.map(
          (data) =>
            `
            <div class='flex p-1 [&>*]:w-1/4 searchCart' data-id="${data.id}" data-name="${data.name}">
            <div> <img src="${data.avatar_urls[24]}"/></div>
            <div>${data.name}</div>
            <div>${data.link}</div>
            
            
            <div>
            <button data-id="${data.id}" class="deleteData bg-red-500 p-1 text-white self-center">حذف</button>
            <button class="bg-blue-500 text-white p-1 editData" data-id="${data.id}" data-name="${data.name}" data-price="${data.regular_price}">ویرایش</button>
            </div>
            </div>
            `
        ),
      ]
        .toString()
        .replaceAll(",", "")}
      </div>
    </div>
    <div class="paginate">
    <a class="page-numbers bg-blue-500 text-white p-2 text-center" data-page="1" rel="next" href="#target">بعدی</a>
    <a class="page-numbers bg-blue-500 text-white p-2 text-center" data-page="-1" rel="prev" href="#target">قبلی</a>
    </div>`) ||
      (window.location.pathname === "/pages/categories.html" &&
        `<form
      class="addproducts flex flex-col items-center gap-5 [&>input]:p-2 bg-gray-300 p-2 [&>input]:w-1/2"
    >
      <input type="text" name="name" class="inputs" placeholder="نام" />
      <input type="number" name="price" class="inputs" placeholder="قیمت" />

      <button type="submit" class="bg-green-400 text-white w-[10%] p-2">
        افزودن
      </button>
    </form>

    <div class="flex flex-col gap-2 items-center [&>*]:w-full text-center" >
      <input type="text" name="" id="" class="searchData" placeholder="جستجو"/>
      <div class="flex gap-5 p-3 [&>*]:w-1/4" >
        <div>نام</div>
        <div>قیمت</div>
        <div>وضعیت</div>
        <div>ویرایش</div>
      </div>
      <hr/>
      <div class="showData">
      ${[
        ...window.data?.map(
          (data) =>
            `
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
            `
        ),
      ]
        .toString()
        .replaceAll(",", "")}
      </div>
    </div>
    <div class="paginate">
    <a class="page-numbers bg-blue-500 text-white p-2 text-center" data-page="1" rel="next" href="#target">بعدی</a>
    <a class="page-numbers bg-blue-500 text-white p-2 text-center" data-page="-1" rel="prev" href="#target">قبلی</a>
    </div>`) ||
      (window.location.pathname === "/pages/products.html" &&
        `<form
        class="addproducts flex flex-col items-center gap-5 [&>input]:p-2 bg-gray-300 p-2 [&>input]:w-1/2"
      >
        <input type="text" name="name" class="inputs" placeholder="نام" />
        <input type="number" name="regular_price" class="inputs" placeholder="قیمت" />
  
        <button type="submit" class="bg-green-400 text-white w-[10%] p-2">
          افزودن
        </button>
      </form>
  
      <div class="flex flex-col gap-2 items-center [&>*]:w-full text-center" >
        <input type="text" name="" id="" class="searchData" placeholder="جستجو"/>
        <div class="flex gap-5 p-3 [&>*]:w-1/4" >
          <div>نام</div>
          <div>قیمت</div>
          <div>وضعیت</div>
          <div>ویرایش</div>
        </div>
        <hr/>
        <div class="showData">
        
        ${[
          ...window.data?.map(
            (data) =>
              `
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
              `
          ),
        ]
          .toString()
          .replaceAll(",", "")}
        </div>
      </div>
      <div class="paginate">
      <a class="page-numbers bg-blue-500 text-white p-2 text-center" data-page="1" rel="next" href="#target">بعدی</a>
      <a class="page-numbers bg-blue-500 text-white p-2 text-center" data-page="-1" rel="prev" href="#target">قبلی</a>
      </div>`),
  };
}

function* generateLayout() {
  yield* menu();
  yield* Main();
}

// Create a layout generator instance
const layoutGenerator = generateLayout();

// Iterate over the layout and output the elements
for (const element of layoutGenerator) {
  document.querySelector(`.${element.class}`).innerHTML += element.data;
}
