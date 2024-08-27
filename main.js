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

let data = [];

let acceptData = () => {
    data.push({
        namas: nama.value,
        sukus: suku.value,
        tmpts: tmpt.value,
        tgls: tgl.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    
    console.log(data);
    createPost();
};

let createPost = () =>{
    data.map((x) => {
        return (posts.innerHTML +=`
            <tr>
                <td>${x.namas}</td>
                <td>${x.sukus}</td>
                <td>${x.tmpts}</td>
                <td>${x.tgls}</td>
                <td><button onclick="editPost(this)">Edit</button></td>
                <td><button onclick="deletePost(this)">Hapus</button></td>
            </tr>`);
    });
    
    resetForm();
};

let resetForm = () => {
    nama.value = "";
    suku.value = "";
    tgl.value = "";
    tmpt.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();

    data.splice(e.parentElement.parentElement.id, 1);

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
};
let editPost = (e) => {
    let selectedPost = e.parentElement.parentElement;

    nama.value = selectedPost.children[0].innerHTML;
    suku.value = selectedPost.children[1].innerHTML;
    tmpt.value = selectedPost.children[2].innerHTML;
    tgl.value = selectedPost.children[3].innerHTML;
    
    deletePost(e);
};

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createPost();
})();
