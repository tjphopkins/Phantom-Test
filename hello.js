var page = require('webpage').create();
page.open('http://localhost:8000/analytics/render/', function() {
  page.render('analytics.pdf');
  phantom.exit();
});
