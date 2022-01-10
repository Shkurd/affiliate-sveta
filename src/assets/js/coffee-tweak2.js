import '../scss/coffee-tweak2.scss'

import './modules/vanilla-lazyload';
// import './modules/sourcebuster';
import './modules/trackerUTM';
// import { trackerUTM } from './modules/trackerUTM';
import Vue from 'vue';

var app = new Vue({
    el: '#survey',
    data: {
        step: 1,
        title: "QUESTION 1:",
        affilateLink: "https://hop.clickbank.net/?vendor=javaburn&affiliate=lanabel&lid=3"
    },

    // mounted(){

    // },

    methods: {

        stepChange: function () {
            if (this.step < 4) {
                this.step = this.step + 1;
                this.title = `QUESTION ${this.step}:`;
            } else {
                this.step = 5;
                this.title = `processing responses`;
                
                setTimeout(() => {
                    this.step = 6;
                    this.title = `YOUR RESULT`;
                    this.surveyTrackerUTM();
                }, 2500);
                
            }
        },

        surveyTrackerUTM: function () {

            let params = new URLSearchParams(document.location.search);
            let UTMCampaign = params.get('utm_campaign');

            if(UTMCampaign) {
                this.affilateLink = this.affilateLink + (this.affilateLink.match(/\?/) ? '&' : '?') + 'tid' + '=' + UTMCampaign;
            };
        }
    }

  })