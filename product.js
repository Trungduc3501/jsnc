function product() {
    axios.get("http://localhost:3000/products").then((res)=>{
        const html=res.data.map((product)=>{
            return `
           <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${product.id}</td>
              <td class="px-4 py-2 border border-gray-300">${product.name}</td>
              <td class="px-4 py-2 border border-gray-300">${product.price}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>`
        }).join("");
        document.getElementById("products").innerHTML=html;
    })
}
product();