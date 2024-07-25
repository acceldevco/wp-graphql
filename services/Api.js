import { showData } from "../controller/productController.js";

const loginMutation = `
mutation LoginUser {
    login( input: {
      clientMutationId: "uniqueId",
      username: "develop-admin",
      password: "phRt8D4yOBl^gMR02h"
    } ) {
      authToken
      user {
        id
        name
      }
    }
  }
`;

export const getData2 = (endpoint, page, search) => {
  fetch(
    `https://testdev01.ir/wp-json${endpoint}?page=${
      page || 1
    }&&per_page=20&&search=${search || ""}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.jwt}`,
      },
    }
  )
    .then((d) => d.json())
    .then((d) => ((window.data = d),(console.log(d)),
     showData(d)));
  // console.log(document.querySelector(".showData"));
};

// export const getData = (page,search) => {

//   document.querySelector(".showData").innerHTML = `<div class="loading">loading... ${navigator.onLine?'online':'offline'}</div>`
//   fetch(`https://testdev01.ir/wp-json/wc/v1/products?page=${page||1}&&per_page=20&&search=${search||""}`, {
//     method: "get",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${window.jwt}`,
//     },
//   })
//     .then((d) => d.json())
//     .then((d) => (showData(d),console.log(d)));

// };
export const ApiLogin = (endpoint) => {
  console.log(endpoint);
  fetch("https://testdev01.ir/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: loginMutation,
      variables: {
        clientMutationId: "uniqueId",
        username: "develop-admin",
        password: "phRt8D4yOBl^gMR02h",
      },
    }),
  })
    .then((response) => response.json())
    .then(
      (data) => ((window.jwt = data.data.login.authToken), getData2(endpoint))
    );
};

export const ApiProduct = (method, endpoint, data) => {
  fetch(
    `https://testdev01.ir/wp-json/${endpoint}${
      method === "delete" ? `/${+data.id}` : ""
    }`,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.jwt}`,
      },
      body: method === "post" && JSON.stringify(data),
    }
  )
    .then((d) => d.json())
    .then(
      (d) => (
        // ((window.data = d),console.log(window.data), showData())
        window.location.pathname === "/pages/products.html" &&
          getData2("/wc/v1/products"),
        window.location.pathname === "/pages/order.html" &&
          getData2("/wc/v2/orders"),
        window.location.pathname === "/pages/user.html" &&
          getData2("/wp/v2/users")
      )
      // getData2(
      //   (window.location.pathname === "/pages/products.html" &&
      //     "/wc/v1/products",
      //   window.location.pathname === "/pages/order.html" && "/wc/v2/orders",
      //   window.location.pathname === "/pages/user.html" && "/wp/v2/users")
      // )
    );
};
