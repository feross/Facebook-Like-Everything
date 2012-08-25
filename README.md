# Like Everything on Facebook with this JavaScript Bookmarklet

### Read the [original blog post](http://feross.org/like-everything-on-facebook/).

Do you want to like every post and comment that you see on Facebook all at once? Well, it’s your lucky day.

Make a bookmark in your browser's bookmarks bar with the title "Like Everything" and set the URL to be the javascript code in bookmarklet.js. Once your new bookmark is created, head to Facebook, then click it! :)

## Why’d I do this?

Some friends and I were playing around with Facebook’s new comment-on-enter feature and we got a large 70+ comment thread going, then people began to like every comment in the thread. Yay, notification spam! Thus, the idea for this JavaScript bookmarklet was born. I whipped it up in 15 minutes.

![Like Bomb](http://feross.org/images/like-bomb.png)

## Update:

I just updated the bookmarklet to show some UI about the progress of your “like bomb”, as well as a button to stop the liking if you suddenly have a change of heart. Everyone’s bookmarklets should be updated automatically.

## Update 2:

I just fixed a bug in Firefox where clicking the bookmarklet causes the browser to redirect to a page with the message **[object HTMLScriptElement]** shown. You should update your bookmarklet. It turns out that you need to end all JavaScript code within links and bookmarklets with **void(0);** or else the browser will try to follow the link.