// modal code ...

 const container = document.querySelector(`[mainContainer="content"]`);
 const buttonOpen = container.querySelector(".openBtn")
 const closeBtn =  container.querySelector(".closeBtn");
 const InputImage =  container.querySelector("#inputFile");

//  buttonOpen.onclick  = ()=>{
//     let modal = container.querySelector(".modalWindow")
//     modal.classList.add('active');
//  }
InputImage.onchange = ()=>{
   let ckeckImage =  document.querySelector(".ckeckImage");
   ckeckImage.classList.add('active');
}
closeBtn.onclick = ()=>{
    let modal = container.querySelector(".modalWindow")
    modal.classList.remove('active');
 }

