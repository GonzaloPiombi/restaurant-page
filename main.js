(()=>{"use strict";function e(e){const t=document.createElement("a");t.setAttribute("href",""),t.textContent=e;const n=document.createElement("li");return n.appendChild(t),n}function t(e){const t=document.createElement("p");return t.textContent=e,t}function n(){const e=document.createElement("span");return e.classList.add("material-icons-outlined"),e.style="font-size: 35px",e.textContent="restaurant_menu",e}(function(){const t=document.createElement("div");t.classList.add("header"),document.querySelector("#content").appendChild(t),t.appendChild(function(e){const t=document.createElement("h1");return t.textContent="Pastas",t}());const n=document.createElement("ul");t.appendChild(n),n.appendChild(e("Home")),n.appendChild(e("Menu")),n.appendChild(e("Contact"))})(),function(){const e=document.createElement("main");document.querySelector("#content").appendChild(e);const d=document.createElement("h2");d.textContent="Best pasta in town!",e.appendChild(d),e.appendChild(n()),e.appendChild(t("We have the most delicious pasta and sauces you will ever taste!")),e.appendChild(n()),e.appendChild(t("What are you waiting for?")),e.appendChild(n());const a=document.createElement("button");a.textContent="Order now!",e.appendChild(a)}()})();