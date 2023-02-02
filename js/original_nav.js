const createNav = () => {
    let nav = document.querySelector('.navbar');
    
    nav.innerHTML = `
     <div class="nav">
         <img src="img/Logo.png" class="brand-logo" alt="">
         <div class="nav-items">
             <div class="search">
                 <input type="text" class="search-box" placeholder="search brand, product">
                 <button class="search-btn">search</button>
             </div> 
             <a href="#"><img src="img/wish_list_transp.png" alt=""></a>
             <a href="#"><img src="img/wish_list_transp.png" alt=""></a>
         </div> 
     </div>
     <ul class="links-container">
         <li class="link-item"><a href="index.html" class="link">home</a></li>
         <li class="link-item"><a href="#" class="link">summer tops</a></li>
         <li class="link-item"><a href="#" class="link">festival sets</a></li>
         <li class="link-item"><a href="#" class="link">cardigans</a></li>
     </ul>
     `;
  }
  
  createNav();
 