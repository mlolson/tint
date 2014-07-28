##Youtube instant search


###About

A web app that allows the user to search for and watch YouTube videos.

###Technologies used

The back end app is written in Scala using the [Play Framework](http://www.playframework.com/). The front end uses [React.js](http://facebook.github.io/react/).

The app makes queries against the [Youtube Data API](https://developers.google.com/youtube/v3/) using [Google's Java client library](https://developers.google.com/api-client-library/java/apis/youtube/v3).
###Install

1. Install [Play framework 2.3](http://www.playframework.com/documentation/2.3.x/Installing)
2. Clone this repository
3. Obtain a [YouTube Data API access key](https://developers.google.com/youtube/registering_an_application). Your API key and application name must be specified in conf/application.conf

4. Run at `localhost:9000` using the command `activator compile run` ([more information on using Play](http://www.playframework.com/documentation/2.3.x/Home))
