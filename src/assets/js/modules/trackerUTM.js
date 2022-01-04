
// data from sourcebuster
// import { currentTraffic, currentSource, currentMedium, currentCampaign, currentContent, currentKeyword, firstTraffic, firstSource, firstMedium, firstCampaign, firstContent, firstKeyword }  from './sourcebuster';

document.addEventListener('DOMContentLoaded', trackerUTM());

export function trackerUTM() {
    console.log('trackerUTM: ', data)
    let params = new URLSearchParams(document.location.search);
    let UTMCampaign = params.get('utm_campaign');
    let allLinksList = document.querySelectorAll('a[data-link="true"]');

    if(UTMCampaign && allLinksList) {
        allLinksList.forEach((elem) => {
            elem.href = elem.href + (elem.href.match(/\?/) ? '&' : '?') + 'tid' + '=' + UTMCampaign;
        });
    }
}
