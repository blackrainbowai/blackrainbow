var t={getElement:async(o,a=document)=>a.querySelectorAll(o)};var i=async()=>{clearInterval(window.interval),window.interval=setInterval(async()=>{let o=await t.getElement(".most-tracked-item"),a=Math.floor(Math.random()*o.length);(await t.getElement(".map-control-button.zoom-button.plus")).forEach(e=>setTimeout(()=>{e?.click(),setTimeout(()=>e?.click(),1e3)},1e3)),o.item(a)?.click(),(await t.getElement(".ui-icon.ui-icon-closethick")).forEach(e=>{e?.click()}),(await t.getElement("#follow-aircraft:not(.active)")).item(0)?.click(),(await t.getElement('.setting.hide-aircraft .toggle[data-action="hideAircraft"]:not(.on)')).forEach(e=>e?.parentElement?.click()),(await t.getElement(".overlay-views-panel,.section.search-overlay")).forEach(e=>e.remove())},3e4)};await i();
