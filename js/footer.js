const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/Logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">About my little shop</p>
    <p class="info">My name is Aida, I am 27 years old and as you might have guessed by now, crocheting is my passion! <br>The story of my beginning as a crocheter is not very pleasant as I started crocheting right after my father passed away. Back then, I needed to fill my time and get distracted. A close good friend of my mum introduced us both to crocheting and I have not stopped ever since! Crocheting has become my passion and I truly enjoy being able to be so creative with something I really like to do. <br>At the beginning I only crocheted for myself, family and friends. However, after being convinced that I had talent, I decided to open this little shop and start the journey of a small business owner. <br> In my shop, all products are handmade with lots of love, which means each item is unique! I usually spend between 3-10 hours (depending on the product) on the making of each item. I use either 100% cotton, or very soft acrylic yarn for all my pieces. You can always find the materials, as well as the care information in the item's description.</p>
    <p class="info">support email - aidasdetail@gmail.com</p>
    <!-- p class="info">telephone - 180 00 00 001</p -->
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
        </div>
    </div>
    <p class="footer-credit">Aida's Detail Crochet Shop</p>
    `;
}

createFooter();