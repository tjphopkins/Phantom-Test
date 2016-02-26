var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
        console.log(msg);
    };

page.open('http://localhost:8000/analytics/render/', function() {
    page.render('analytics.pdf');
    phantom.exit();
});
