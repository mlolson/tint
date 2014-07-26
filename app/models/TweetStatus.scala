package models

import play.api.libs.json.{Json, Writes, JsValue}
import twitter4j.Status

case class TweetStatus(val status: Status)

object TweetStatus {

  implicit val implicitTweetStatusWrites = new Writes[TweetStatus] {
    def writes(tweet: TweetStatus): JsValue = {
      Json.obj(
        "id" -> String.valueOf(tweet.status.getId),
        "date" -> tweet.status.getCreatedAt,
        "username" -> tweet.status.getUser.getScreenName,
        "name" -> tweet.status.getUser.getName,
        "text" -> tweet.status.getText
      )
    }
  }
}