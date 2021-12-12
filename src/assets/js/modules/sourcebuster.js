import sbjs from 'sourcebuster';

const currentUrl =  window.location
// const currentUrl =  window.location.origin;

sbjs.init({
domain: currentUrl,
lifetime: 1,
isolate: true
// callback: logSource
});

const sourcebusterData = [
    sbjs.get.current.typ,
    sbjs.get.current.src,
    sbjs.get.current.mdm,
    sbjs.get.current.cmp,
    sbjs.get.current.cnt,
    sbjs.get.current.trm,
    sbjs.get.first.typ,
    sbjs.get.first.src,
    sbjs.get.first.mdm,
    sbjs.get.first.cmp,
    sbjs.get.first.cnt,
    sbjs.get.first.trm
]

export const [
    currentTraffic,
    currentSource,
    currentMedium, 
    currentCampaign, 
    currentContent, 
    currentKeyword,
    firstTraffic,
    firstSource,
    firstMedium, 
    firstCampaign, 
    firstContent, 
    firstKeyword,
] = sourcebusterData;

/*
Object.keys(sbjs.get).forEach(key=>{
	console.log(key)
	console.log(JSON.stringify(sbjs.get[key]))
})
*/

/*
console.log('CURRENT SESSION:')
console.log('Traffic type: sbjs.get.current.typ: ', sbjs.get.current.typ)
console.log('Source: sbjs.get.current.src: ', sbjs.get.current.src)
console.log('Medium: sbjs.get.current.mdm: ', sbjs.get.current.mdm)
console.log('Campaign: sbjs.get.current.cmp: ', sbjs.get.current.cmp)
console.log('Content: sbjs.get.current.cnt: ', sbjs.get.current.cnt)
console.log('Keyword: sbjs.get.current.trm: ', sbjs.get.current.trm)
console.log('FIRST SESSION:')
console.log('Traffic type: sbjs.get.first.typ: ', sbjs.get.first.typ)
console.log('Source: sbjs.get.first.src: ', sbjs.get.first.src)
console.log('Medium: sbjs.get.first.mdm: ', sbjs.get.first.mdm)
console.log('Campaign: sbjs.get.first.cmp: ', sbjs.get.first.cmp)
console.log('Content: sbjs.get.first.cnt: ', sbjs.get.first.cnt)
console.log('Keyword: sbjs.get.first.trm: ', sbjs.get.first.trm)
*/