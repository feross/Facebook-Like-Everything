# Like Everything on Facebook with this JavaScript Bookmarklet

### Read the [original blog post](http://www.feross.org/like-everything-on-facebook/).

Do you want to like every post and comment that you see on Facebook all at once? Well, it’s your lucky day.

Drag the link below to your Bookmarks Bar and click it to automatically like all the posts and comments on the page you’re on.

## <a href="javascript:var s=document.getElementById('happyScript');if(s){s.parentNode.removeChild(s);} s=document.createElement('script');s.setAttribute('src','http://www.feross.org/hacks/like_everything/like_everything.js');s.setAttribute('type','text/javascript');s.setAttribute('id','happyScript');document.body.appendChild(s);void(0);"> I like everything</a>
(drag me to your bookmarks bar, go to Facebook, then click me!)

Why’d I do this? Some friends and I were playing around with Facebook’s new comment-on-enter feature and we got a large 70+ comment thread going, then people began to like every comment in the thread, so the idea for this JavaScript bookmarklet was born. I whipped it up in 15 minutes.

![Like Bomb](http://www.feross.org/wp-content/uploads/2011/03/like_bomb.png)

## Update:

I just updated the bookmarklet to show some UI about the progress of your “like bomb”, as well as a button to stop the liking if you suddenly have a change of heart. Everyone’s bookmarklets should be updated automatically.

## Update 2:

I just fixed a bug in Firefox where clicking the bookmarklet causes the browser to redirect to a page with the message **[object HTMLScriptElement]** shown. You should update your bookmarklet. It turns out that you need to end all JavaScript code within links and bookmarklets with **void(0);** or else the browser will try to follow the link.