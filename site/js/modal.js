// modal code ...

 const container = document.querySelector(`[mainContainer="content"]`);
 const buttonOpen = container.querySelector(".openBtn")
 const closeBtn =  container.querySelector(".closeBtn");

//  buttonOpen.onclick  = ()=>{
//     let modal = container.querySelector(".modalWindow")
//     modal.classList.add('active');
//  }

closeBtn.onclick = ()=>{
    let modal = container.querySelector(".modalWindow")
    modal.classList.remove('active');
 }

