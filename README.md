# ember-cli-google-analytics

[![Greenkeeper badge](https://badges.greenkeeper.io/onehilltech/ember-cli-google-analytics.svg)](https://greenkeeper.io/)

EmberJS add-on for Google Analytics

## Installation

    ember install @onehilltech/ember-cli-google-analytics
    
## Configuration

```javascript

// config/environment.js

let ENV = {
  'ember-cli-google': {
    analytics: {
      trackerId: 'UA-XXXXX-Y',        // tracker id
      trackerName: '',                // [optional] tracker name
      cookieDomain: '',               // [optional] cookie domain; default = 'auto'
    }
  }
}
```