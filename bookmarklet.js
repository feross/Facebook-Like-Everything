// Make a bookmark with this as the URL

javascript:var s=document.getElementById('happyScript');if(s){s.parentNode.removeChild(s);} s=document.createElement('script');s.setAttribute('src','http://www.feross.org/hacks/like_everything/like_everything.js'); s.setAttribute('type','text/javascript');s.setAttribute('id','happyScript');document.body.appendChild(s);void(0);