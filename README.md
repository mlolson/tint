##Youtube/Twitter instant search


###About

A web app that allows the user to search for and watch YouTube videos, and view Tweets that mention the video they have selected.

![](https://raw.githubusercontent.com/mlolson/tint/master/appcap.png)

###Technologies used

The back end app is written in Scala using the [Play Framework](http://www.playframework.com/). The front end uses [React.js](http://facebook.github.io/react/).

The app makes queries against the [Youtube Data API](https://developers.google.com/youtube/v3/) using [Google's Java client library](https://developers.google.com/api-client-library/java/apis/youtube/v3), and against the [Twitter search API](https://dev.twitter.com/docs/api/1.1/get/search/tweets) using the [twitter4j](http://twitter4j.org/en/) library

###Install

1. Install [Play framework 2.3](http://www.playframework.com/documentation/2.3.x/Installing)
2. Clone this repository
3. Obtain a [YouTube Data API access key](https://developers.google.com/youtube/registering_an_application), and [Twitter search API access keys and Auth token](https://dev.twitter.com/docs/auth). These must be specified in conf/application.conf

4. Run at `localhost:9000` using the command `activator compile run` ([more information on using Play](http://www.playframework.com/documentation/2.3.x/Home))


###Twitter API rate limit

Note that the Twitter search API enforces a limit of 450 request/15 minutes/App/