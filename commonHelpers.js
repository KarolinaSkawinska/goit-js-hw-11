import{i as l,a as d,S as u}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m=document.querySelector(".search-form"),i=document.querySelector(".gallery"),c=document.getElementById("loader"),p=async o=>{c.classList.remove("hidden");try{const t=await d.get(f,{params:{key:"4506270433fd3c82d061d20576d8c3095",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return t.status!==200?(console.error("Błąd: Nieudane żądanie",t.status),[]):t.data.hits}catch(t){return console.error("Something went wrong. Please try again",t),[]}finally{c.classList.add("hidden")}},y=o=>{if(i.innerHTML="",o.length===0){l.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=o.map(s=>`
    <li>
      <a href="${s.largeImageURL}">
        <img src="${s.webformatURL}" alt="${s.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${s.likes}</p>
        <p>Views: ${s.views}</p>
        <p>Comments: ${s.comments}</p>
        <p>Downloads: ${s.downloads}</p>
      </div>
    </li>
  `).join("");i.innerHTML=t,new u(".gallery a").refresh()};m.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.query.value.trim();if(t===""){l.warning({title:"Warning",message:"Please enter a search query!"});return}const n=await p(t);y(n)});
//# sourceMappingURL=commonHelpers.js.map
