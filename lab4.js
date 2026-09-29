function student(){

    axios.get("http://localhost:3000/students").then((res)=>{
        console.log(res.data);
        
        const html=res.data.map((student)=>{
    return `
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${student.id}</td>
              <td class="px-4 py-2 border border-gray-300">${student.name}</td>
              <td class="px-4 py-2 border border-gray-300">${student.age}</td>
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
document.getElementById("students").innerHTML=html;
});
};
function renderStudents(students) {
    const html = students.map((student) => {
        return `
            <tr class="hover:bg-gray-50">
                <td class="px-4 py-2 border border-gray-300">${student.id}</td>
                <td class="px-4 py-2 border border-gray-300">${student.name}</td>
                <td class="px-4 py-2 border border-gray-300">${student.age}</td>
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
            </tr>
        `;
    }).join("");

    document.getElementById("students").innerHTML = html||
    "Không tìm thấy danh sách ";
}


function search() {
    const keyWord = document.getElementById("searchName").value.trim();

    axios.get("http://localhost:3000/students", {
        params: {
            name_like: keyWord
        }
    })
    .then((res) => {
        renderStudents(res.data);
    });
}
document.getElementById("btnSearch").addEventListener("click",search);
document.getElementById("btnReset").addEventListener("click",()=>{
  document.getElementById("searchName").value="";
  student();
});
student();