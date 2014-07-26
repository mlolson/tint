package controllers

import models.TweetStatus
import twitter4j.{Query, TwitterFactory}

import scala.collection.JavaConversions._

object TwitterAPI {

  val count = 20

  def search(query:String , maxId:Long) = {
    val q = new Query(query)
    q.setMaxId(maxId-1)
    q.setCount(count)

    TwitterFactory.getSingleton.search(q)
      .getTweets.map(tweet => new TweetStatus(tweet))
  }
}