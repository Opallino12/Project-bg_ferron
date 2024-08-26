let form = document.getElementById("form");
let nama = document.getElementById("nama");
let suku = document.getElementById("suku");
let tgl = document.getElementById("tgl");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button Clicked")
    formValidation();
});

let formValidation = () => {
    if(nama.value === "" && suku.value === "" && tgl.value === "" && tmpt.value === ""){
        msg.innerHTML = "Data Harus Di isi";
        console.log("failure");
    }
    else{
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["nama"] = nama.value;
    data["suku"] = suku.value;
    data["tgl"] = tgl.value;
    data["tmpt"] = tmpt.value;
    console.log(data);
    createPost();
};

let createPost = () =>{
    posts.innerHTML +=`
    <tr>
        <td>${data.nama}</td>
        <td>${data.suku}</td>
        <td>${data.tmpt},${data.tgl}</td>
        <td><i onclick="editPost(this)"></i></td>
        <td><i onclick="deletePost(this)"></i></td>
    </tr>`;
    nama.value = "";
    suku.value = "";
    tgl.value = "";
    tmpt.value = "";
};


