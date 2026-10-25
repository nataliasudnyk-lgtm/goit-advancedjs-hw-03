import{a as m,S as y,i as n}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="58224881-408d5e3d14c615d846923e653",h="https://pixabay.com/api/";function v(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:r}).then(i=>i.data)}const d=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:o,comments:f,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
              loading="lazy"
            />
          </a>

          <div class="gallery-info">
            <div class="info-item">
              <p class="info-label">Likes</p>
              <p class="info-value">${t}</p>
            </div>

            <div class="info-item">
              <p class="info-label">Views</p>
              <p class="info-value">${o}</p>
            </div>

            <div class="info-item">
              <p class="info-label">Comments</p>
              <p class="info-value">${f}</p>
            </div>

            <div class="info-item">
              <p class="info-label">Downloads</p>
              <p class="info-value">${p}</p>
            </div>
          </div>
        </li>
      `).join("");d.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){d.innerHTML=""}function q(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const l=document.querySelector(".form"),c=l.querySelector('button[type="submit"]');l.addEventListener("submit",P);function P(s){s.preventDefault();const r=l.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}S(),q(),c.disabled=!0,v(r).then(i=>{if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}).catch(i=>{n.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{w(),c.disabled=!1})}
//# sourceMappingURL=index.js.map
