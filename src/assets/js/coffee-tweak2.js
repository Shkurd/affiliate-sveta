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
        title: "QUESTION 1:"
    },

    // mounted(){}

    methods: {

        stepChange: function () {
            if (this.step < 4) {
                this.step = this.step + 1;
                this.title = `QUESTION ${this.step}:`;
                console.log(this.step)
            } else {
                this.step = 5;
                this.title = `processing responses`;
                setTimeout(() => {
                    this.step = 6;
                    this.title = `YOUR RESULT`;
                }, 3500);
            }
        },
    }

  })