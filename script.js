/*
    I Like Everything
    Description: Like everything on Facebook with this JavaScript Bookmarklet
    Author: Feross Aboukhadijeh
    Read more: http://feross.org/like-everything-on-facebook/
*/
var sad = document.getElementsByClassName('UFILikeLink')
var happy = []
var halt = false

// Select only the Like buttons.
// Convert the sad NodeList to a happy Array.
for (var i = 0; i < sad.length; i++) {
  // Filter liked
  if (!hasClass(sad[i], 'UFILinkBright')) {
    happy.push(sad[i])
  }
}

var happyDiv = document.createElement('div')
happyDiv.innerHTML = '<div id=\'happy\' style=\'background-color:#ddd;font-size:16px;text-align:center;position:fixed;top:40px;right:40px;width:200px;height:100px;border:4px solid black;z-index:9999;padding-top:15px;\'><span>0</span> of ' + happy.length + ' items liked.<div id=\'happyStatus\' style=\'margin-top:30px;\'><a id=\'happyButton\' href=\'#\' style=\'display:block;\' onclick=\'haltFn();\'>Stop it.</a></div></div>'
document.getElementsByTagName('body')[0].appendChild(happyDiv)

function happyFn (happy) {
  if (halt || !happy || !happy.length) {
    document.getElementById('happyStatus').innerHTML = 'Done!'
    return
  }
  happy[0].click()
  happy[0].style.color = '#FF0000'
  var countSpan = document.querySelector('#happy span')
  countSpan.innerHTML = parseInt(countSpan.innerHTML, 10) + 1

  // Wait for each Like to be processed before trying the next.
  // Facebook enforces this requirement.
  window.setTimeout(function () {
    happyFn(happy.splice(1))
  }, 3000)
}

/* eslint-disable no-unused-vars */
function haltFn () {
  halt = true
  return false // prevent default event
}
/* eslint-enable no-unused-vars */

function hasClass (target, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className)
}

happyFn(happy)
