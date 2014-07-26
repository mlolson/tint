package models

import com.google.api.services.youtube.model.SearchResult
import play.api.libs.json.{Json, JsValue, Writes}

case class YoutubeResult(val searchResult:SearchResult)

object YoutubeResult {
  implicit val implicitYoutubeWrites = new Writes[YoutubeResult] {
    def writes(youtubeResult: YoutubeResult): JsValue = {
      Json.obj(
        "id" -> youtubeResult.searchResult.getId.getVideoId,
        "channelId" -> youtubeResult.searchResult.getSnippet.getChannelId,
        "description" -> youtubeResult.searchResult.getSnippet.getDescription,
        "thumbnail" -> youtubeResult.searchResult.getSnippet.getThumbnails.getDefault.getUrl,
        "title" -> youtubeResult.searchResult.getSnippet.getTitle
      )
    }
  }
}