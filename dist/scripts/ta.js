var e={getElement:async(t,a=document)=>a.querySelectorAll(t)};(async()=>{let t,a=async()=>{clearInterval(t),t=setInterval(async()=>{clearInterval(t),(await e.getElement(".js-column")).forEach(async n=>{let l=await e.getElement(".js-stream-item",n),o=l.length,r=Math.floor(Math.random()*o);(await e.getElement(".btd-content-warning",l.item(r))).length===0&&(await e.getElement(".js-stream-item-content",l.item(r))).forEach(async c=>{c.click()}),setTimeout(async()=>{let c=await e.getElement(".js-column-back"),i=Math.floor(Math.random()*o);c.item(i).click(),await a()},24e3+Math.floor(Math.random()*o*1e3)),setTimeout(async()=>{let c=await e.getElement(".column-type-icon"),i=Math.floor(Math.random()*o);c.item(i).click(),await a()},24e3+Math.floor(Math.random()*o*1e3))})},13e3)};setInterval(async()=>{(await e.getElement(".btd-clear-column-link")).forEach(n=>{n.click()})},36e4),setInterval(async()=>{(await e.getElement(".js-translate-call-to-action")).forEach(n=>{n.click()})},1e3),await a()})();
