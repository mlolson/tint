package models

/**
 * Model for serializing Youtube search results
 */

import com.google.api.services.youtube.model.SearchResult
import play.api.libs.json.{Json, JsValue, Writes}

case class YoutubeResult(val searchResult:SearchResult)

object YoutubeResult {

  implicit val implicitYoutubeWrites = new Writes[YoutubeResult] {
    def writes(youtubeResult: YoutubeResult): JsValue = {
      val searchResult = youtubeResult.searchResult
      Json.obj(
        "id" -> searchResult.getId.getVideoId,
        "channelId" -> searchResult.getSnippet.getChannelId,
        "description" -> searchResult.getSnippet.getDescription,
        "thumbnail" -> searchResult.getSnippet.getThumbnails.getDefault.getUrl,
        "title" -> searchResult.getSnippet.getTitle,
        "channelTitle" -> searchResult.getSnippet.getChannelTitle,
        "channelId" -> searchResult.getSnippet.getChannelId
      )
    }
  }
}