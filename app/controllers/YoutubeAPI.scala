package controllers

import com.google.api.client.http.{HttpRequest, HttpRequestInitializer}
import com.google.api.client.http.javanet.NetHttpTransport
import com.google.api.client.json.jackson2.JacksonFactory
import com.google.api.services.youtube.YouTube
import play.api.Play
import play.api.libs.json.Json
import play.api.Play.current
import models.YoutubeResult

import scala.collection.JavaConversions._

object YoutubeAPI {

  val num_results = 10
  val apikey = Play.current.configuration.getString("youtube.apikey").get
  val appname = Play.current.configuration.getString("youtube.appname").get

  val youtube = new YouTube.Builder(new NetHttpTransport(), new JacksonFactory(), new HttpRequestInitializer() {
    def initialize(request: HttpRequest) {
    }
  }).setApplicationName(appname).build()

  def search(queryTerm:String) = {

    val search = youtube.search().list("id,snippet")
    search.setKey(apikey)
    search.setQ(queryTerm)
    search.setType("video")
    search.setFields("items(id/kind,id/videoId,snippet/title,snippet/thumbnails/default/url)")
    search.setMaxResults(num_results)

    Json.toJson(search.execute().getItems().map(result => YoutubeResult(result)))
  }
}
