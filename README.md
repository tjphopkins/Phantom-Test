# Phantom-Test

Can be run in terminal with phantom hello.js

Uses PhantomJS to open the analytics page in a headless browser with a user session (given by the cookie information set with phantom.addCookie - this data was just taken from the developer console and will have expired by the time you are reading this). The onCallback property on range listens for window.callPhantom('takeShot') being called on the page and renders the page to pdf when it is called.

The following branch of conversocial calls window.callPhantom('takeShot') only when all the widgets on the main analytics page have loaded:
https://github.com/tjphopkins/conversocial/tree/render-print

Without the cookies, django middleware complains and throws a 401 Unauthorized when the app makes a request for widget data. 

### Gotchas
* page properties e.g. onCallback, onConsoleMessage etc. must be set before opening the page, obviously.
* the npm-phantom module is rubbish



