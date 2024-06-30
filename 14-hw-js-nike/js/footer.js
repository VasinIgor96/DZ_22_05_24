const footer = document.querySelector(".footer");
const footerBox = `
<div class="foooter_container">
<ul class="first_footer_nav">
    <li><a href="#">all</a></li>
    <li><a href="#">woman</a></li>
    <li><a href="#">men</a></li>
</ul>
<p class="footer_logo"><img src="img/footer_logo.png" alt="" /></p>
<ul class="second_footer_nav">
    <li><a href="#">worcout</a></li>
    <li><a href="#">run</a></li>
    <li><a href="#">football</a></li>
</ul>
</div> `;

footer.insertAdjacentHTML('afterend', footerBox);
