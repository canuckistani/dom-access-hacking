
let tabs = require('sdk/tabs'),
  data = require('sdk/self').data;

require('sdk/widget').Widget({
  id: 'some-id',
  label: 'My Button',
  contentURL: 'http://www.mozilla.org/favicon.ico',
  onClick: function() {
      tabs.activeTab.attach({
        contentScriptFile: [data.url('cs.js')]
      });
  }
});
