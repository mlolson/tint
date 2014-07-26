package controllers

import play.api.libs.json.Json
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index("YouTube/Twitter cross search"))
  }

  def searchYouTube(q:String) = Action {
    if(q.isEmpty) {
      BadRequest("Empty parameter q")
    } else {
      Ok(Json.toJson(YoutubeAPI.search(q)))
    }
  }

  def searchTwitter(q:String, maxId:Long) = Action {
    if(q.isEmpty) {
      BadRequest("Empty parameter q")
    } else {
      Ok(Json.toJson(TwitterAPI.search(q, maxId)))
    }
  }
}