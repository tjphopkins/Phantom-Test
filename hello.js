var page = require('webpage').create();

phantom.addCookie({
  'name'     : 'csrftoken',   /* required property */
  'value'    : '1LWKuMlbIRIdLK1MPCMHI2zk6ou4koOL',  /* required property */
  'domain'   : 'localhost',
  'path'     : '/',                /* required property */
});

phantom.addCookie({
  'name'     : 'sessionid',   /* required property */
  'value'    : '4e9391095d77b0d953ba1f496cffe285',  /* required property */
  'domain'   : 'localhost',
  'path'     : '/',                /* required property */
});

page.onConsoleMessage = function(msg) {
        console.log(msg);
    };

page.onCallback = function(data) {
    console.log('CALLBACK: ' + JSON.stringify(data));
    page.render('analytics.pdf');
    phantom.exit();
};

page.open('http://localhost:8000/analytics/');
