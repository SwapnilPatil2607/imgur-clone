var count=1;
window.addEventListener("load", () => {
var next=document.getElementById("next");
next.addEventListener("click",()=>{apiload("next")});
var prev=document.getElementById("prev");
prev.addEventListener("click",()=>{apiload("prev")})
  apiload();
});

// apikey-563492ad6f91700001000001613b5bf950f749a7911abe86ca3fe50a
function apiload(str) {
   if(str=="next" ){
       count=count+1;
   }else if(str=="prev" && count>1){
    count=count-1;
   }
  fetch("https://api.pexels.com/v1/curated?per_page=40&page="+count,{
      headers:{
          "Content-Type":"application/json",
          "Authorization":"563492ad6f91700001000001613b5bf950f749a7911abe86ca3fe50a"
      }

  })
    .then((res) => res.json())
    .then((data) => imageload(data.photos));
}

function imageload(data){
    var container=document.getElementById("container");
    container.innerHTML="";
    var block1=document.createElement("div");
    var block2=document.createElement("div");
    var block3=document.createElement("div");
    var block4=document.createElement("div");
    for(var i=0;i<9;i++){
        var post=document.createElement("div");
        post.setAttribute("class","post");
        var post_img=document.createElement("img");
        var detail=document.createElement("div");
        detail.setAttribute("class","details");
        var h4=document.createElement("h4");
        h4.textContent=data[i].photographer;
        detail.append(h4);
        post_img.setAttribute("src",data[i].src.medium);
        post_img.setAttribute("class","post_img");
        post.append(post_img,detail);
        block1.appendChild(post);
    }
    for(var i=10;i<20;i++){
        var post=document.createElement("div");
        post.setAttribute("class","post");
        var post_img=document.createElement("img");
        var detail=document.createElement("div");
        detail.setAttribute("class","details");
        var h4=document.createElement("h4");
        h4.textContent=data[i].photographer;
        detail.append(h4);
        post_img.setAttribute("src",data[i].src.medium);
        post_img.setAttribute("class","post_img");
        post.append(post_img,detail);
        block2.appendChild(post);
    }
    for(var i=21;i<28;i++){
        var post=document.createElement("div");
        post.setAttribute("class","post");
        var post_img=document.createElement("img");
        var detail=document.createElement("div");
        detail.setAttribute("class","details");
        var h4=document.createElement("h4");
        h4.textContent=data[i].photographer;
        detail.append(h4);
        post_img.setAttribute("src",data[i].src.medium);
        post_img.setAttribute("class","post_img");
        post.append(post_img,detail);
        block3.appendChild(post);
    }
    for(var i=30;i<39;i++){
        var post=document.createElement("div");
        post.setAttribute("class","post");
        var post_img=document.createElement("img");
        var detail=document.createElement("div");
        detail.setAttribute("class","details");
        var h4=document.createElement("h4");
        h4.textContent=data[i].photographer;
        detail.append(h4);
        post_img.setAttribute("src",data[i].src.medium);
        post_img.setAttribute("class","post_img");
        post.append(post_img,detail);
        block4.appendChild(post);
    }
    container.append(block1,block2,block3,block4);
}