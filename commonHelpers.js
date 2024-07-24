import{i as a,a as d,S as u}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.getElementById("loader"),p=async o=>{l.classList.remove("hidden");try{return(await d.get(f,{params:{key:"45062704-33fd3c82d061d20576d8c3095",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch{return a.error({title:"Error",message:"Something went wrong. Please try again!"}),[]}finally{l.classList.add("hidden")}},y=o=>{if(c.innerHTML="",o.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=o.map(s=>`
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
  `).join("");c.innerHTML=r,new u(".gallery a").refresh()};m.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements.query.value.trim();if(r===""){a.warning({title:"Warning",message:"Please enter a search query!"});return}const n=await p(r);y(n)});
//# sourceMappingURL=commonHelpers.js.map
