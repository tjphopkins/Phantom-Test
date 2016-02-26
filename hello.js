var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
        console.log(msg);
    };

page.onCallback = function(data) {
    console.log('CALLBACK: ' + JSON.stringify(data));
    phantom.exit();
};

page.open('http://localhost:8000/analytics/render/', function() {
    page.render('analytics.pdf');
});
