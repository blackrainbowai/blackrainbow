var t={getElement:async(a,e=document)=>e.querySelectorAll(a)};var l=async()=>{clearInterval(window.interval),window.interval=setInterval(async()=>{clearInterval(window.interval),(await t.getElement(".js-column")).forEach(async a=>{let e=await t.getElement(".js-stream-item",a),n=e.length,o=Math.floor(Math.random()*n);(await t.getElement(".btd-content-warning",e.item(o))).length===0&&(await t.getElement(".js-stream-item-content",e.item(o))).forEach(async i=>{i?.click()}),setTimeout(async()=>{(await t.getElement(".js-column-back")).forEach(c=>{c?.click()}),await l()},24e3+Math.floor(Math.random()*n*1e3)),setTimeout(async()=>{(await t.getElement(".column-type-icon")).forEach(c=>{c?.click()}),await l()},24e3+Math.floor(Math.random()*n*1e3))})},3e4)};setInterval(async()=>{(await t.getElement(".btd-clear-column-link")).forEach(a=>{a?.click()})},55e3);setInterval(async()=>{let a=await t.getElement(".js-translate-call-to-action"),e=0;a.forEach(n=>{e<=5&&(n?.click(),e++)}),setTimeout(async()=>(await t.getElement(".js-tweet-detail.tweet-detail-wrapper .js-tweet-translation-text.tweet-translation-text")).forEach(n=>{let o=n.getBoundingClientRect();o.top>=0&&o.bottom<=window.innerHeight&&n.scrollIntoView()}),3e3)},15e3);await l();
