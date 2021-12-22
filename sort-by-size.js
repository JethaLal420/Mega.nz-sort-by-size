// ==UserScript==
// @name         Sort Mega.nz files by size
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       JethaLal_420
// @match        https://mega.nz/folder/*
// @icon         https://www.google.com/s2/favicons?domain=mega.nz
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var listViewBtn, blockViewBtn

    function checkDataLoaded() {
        listViewBtn = document.getElementsByClassName('listing-view')[0]
        blockViewBtn = document.getElementsByClassName('block-view')[0]
    }
    function clickBtn() {
        clearInterval(intervalId)
        setTimeout(() => {
            listViewBtn.click()
            console.log('List View btn Clicked')
            var sizeBtn = document.getElementsByClassName('size')[0]
            setTimeout(()=>{
                sizeBtn.click()
                sizeBtn.click()
                console.log('Sort By Size btn Clicked')
            },1200)
            setTimeout(()=>{
                blockViewBtn.click()
                console.log('Block View btn Clicked')
            },2100)

        }, 4500)
    }
    let intervalId = setInterval(() => {
        checkDataLoaded()

        if (listViewBtn && blockViewBtn){
            clickBtn()
        }
    }, 1000)
    })();
