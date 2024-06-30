const header = document.querySelector('.header');
const headerBox = `<div class="header_container">
<ul class="nav"><li><a href="woman.html">woman</a></li><li><a href="#">man</a></li><li><a class="." href="#">all</a></li></ul>
<a href="index.html">
<p class="logo">
  your<span>SNEAKER</span>
</p>
</a>
<ul class="header_icon">
    <li>
    <button class="register"> 
        <svg>
            <use href="./img/symbol-defs.svg#icon-user"></use>
        </svg>
    </button>
    </li>
    <li>
    <button  class="search">
    <svg>
      <use href="./img/symbol-defs.svg#icon-search"></use>
    </svg>
  </button>
    </li>

    <li>
       <button class="cart">
        <svg>
          <use href="./img/symbol-defs.svg#icon-cart"></use>
        </svg>
        </button>
    </li>
</ul>
</div>`;
header.insertAdjacentHTML("afterbegin", headerBox);




