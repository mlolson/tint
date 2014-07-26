package controllers

import models.TweetStatus
import play.api.Play
import twitter4j.conf.ConfigurationBuilder
import twitter4j.{Query, TwitterFactory}

import scala.collection.JavaConversions._

object TwitterAPI {

  val count = 20

  val cb = new ConfigurationBuilder();
  cb.setDebugEnabled(true)
    .setOAuthConsumerKey(Play.current.configuration.getString("twitter.consumerKey").get)
    .setOAuthConsumerSecret(Play.current.configuration.getString("twitter.consumerSecret").get)
    .setOAuthAccessToken(Play.current.configuration.getString("twitter.accessToken").get)
    .setOAuthAccessTokenSecret(Play.current.configuration.getString("twitter.accessTokenSecret").get);

  val twitterFactory = new TwitterFactory(cb.build)

  def search(query:String , maxId:Long) = {

    val q = new Query("\""+query+"\"")
    q.setMaxId(maxId-1)
    q.setCount(count)

    twitterFactory.getInstance.search(q)
      .getTweets.map(tweet => new TweetStatus(tweet))
  }
}