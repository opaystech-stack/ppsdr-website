const { chromium } = require("C:/Users/lamsa/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright");
const fs=require("node:fs");
(async()=>{const b=await chromium.launch({headless:true});const p=await b.newPage();for(const [route,w,h,name] of [["/",1440,1000,"home-desktop"],["/",390,844,"home-mobile"],["/domaines/sante",1440,1000,"health-desktop"],["/faire-un-don",390,844,"donate-mobile"]]){await p.setViewportSize({width:w,height:h});await p.goto(`http://localhost:3000${route}`,{waitUntil:"networkidle"});await p.screenshot({path:`artifacts/${name}.png`});}await b.close()})()
