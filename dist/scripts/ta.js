var e={getElement:async(t,n=document)=>n.querySelectorAll(t)};(async()=>{let t,n=async()=>{clearInterval(t),t=setInterval(async()=>{clearInterval(t),(await e.getElement(".js-column")).forEach(async a=>{let l=await e.getElement(".js-stream-item",a),o=l.length,r=Math.floor(Math.random()*o);(await e.getElement(".btd-content-warning",l.item(r))).length===0&&(await e.getElement(".js-stream-item-content",l.item(r))).forEach(async c=>{c.click()}),setTimeout(async()=>{let c=await e.getElement(".js-column-back"),i=Math.floor(Math.random()*o);c.item(i).click(),await n()},24e3+Math.floor(Math.random()*o*1e3)),setTimeout(async()=>{let c=await e.getElement(".column-type-icon"),i=Math.floor(Math.random()*o);c.item(i).click(),await n()},24e3+Math.floor(Math.random()*o*1e3))})},13e3)};setInterval(async()=>{(await e.getElement(".btd-clear-column-link")).forEach(a=>{a.click()})},36e4),setInterval(async()=>{(await e.getElement(".js-translate-call-to-action")).forEach(a=>{a.click()})},1e3),await n()})();