const nav = document.querySelector('nav');
const main = document.querySelector('main');
nav.innerHTML = `<a href="index.html" class="nav-logo">Kosoken</a>
    <ul class="navbar">
      <li><a class="nav-link" href="info1.html">会社案内</a></li>
      <li><a class="nav-link" href="#">事業内容</a></li>
      <li><a class="nav-link" href="#">弊社代表より</a></li>
      <li><a class="nav-link" href="#">教育情報発信</a></li>
    </ul>
    <i class="col-button fas fa-bars"></i>
`;

const colNav = document.querySelector('.col-navbar');
colNav.innerHTML = `<li><a class="nav-link" href="info1.html">会社案内</a></li>
    <li><a class="nav-link" href="#">事業内容</a></li>
    <li><a class="nav-link" href="#">弊社代表より</a></li>
    <li><a class="nav-link" href="#">教育情報発信</a></li>
`;
const menu = document.querySelector('.col-navbar');
const colBut = document.querySelector('.col-button');

function toggleNav() {
    if (menu.style.display === "block") menu.style.display = "none";
    else menu.style.display = "block";
    if (main.style.top === "33vh") main.style.top = "8vh";
    else main.style.top = "33vh";
}

colBut.addEventListener('click', toggleNav);

const footer = document.querySelector('.footer');
footer.innerHTML = `    <p>株式会社高等教育総合研究所　Tel 03-5214-0524　Fax:03-5214-0784 E-mail info@kosoken.jp</p>
    <p>Copyright &#169; 2008 KOSOKEN Co.,Ltd. All Rights Reserved.</p>
`;
