/**
 * Component defining the search box at the top of the page
 */
define(function(require) {

    var React = require('react'),
        $ = require('jquery'),
        TweetList = require('jsx!./TweetList'),
        VideoPlayer = require('jsx!./VideoPlayer'),
        tweetContainer = document.getElementById('tweets-col'),
        videoContainer = document.getElementById('video-col');

    require('select2');

    return React.createClass({

        /**
         * Called when a video is selected from the dropdown. Loads the video and
         * corresponding list of tweets
         * @param video
         */
        onSelectVideo: function(video) {
            videoContainer.innerHTML = '';
            React.renderComponent(VideoPlayer({video: video}), videoContainer);

            $.ajax({
                method: 'GET',
                url: '/searchTwitter',
                dataType: 'json',
                data: {
                    q: video.id
                }
            }).done(function(data) {
                tweetContainer.innerHTML = '';
                React.renderComponent(TweetList({tweets: data, videoId: video.id}), tweetContainer);
                twttr.widgets.load();
            }.bind(this));
        },

        /**
         * Called after component is mounted
         */
        componentDidMount: function() {

            var $searchBox = $('#search-box');
            $searchBox.select2({
                minimumInputLength: 2,
                allowClear: true,
                placeholder: 'Search YouTube videos...',
                multiple: true,
                maximumSelectionSize: 1,
                ajax: {
                    url: '/searchYoutube',
                    dataType: 'json',
                    data: function(term) {
                        return {
                            q: term
                        };
                    },
                    results: function(data) {
                        return {results: data};
                    }
                },
                formatResult: function(result) {
                    return "<img class='flag' src='" + result.thumbnail + "'/><span class='video-title'>" + result.title + "</span>";
                },
                formatSelection: function(result) {
                    return result.title;
                }
            });

            $searchBox.on('change', function(e) {
                if(e.val.length > 0) {
                    this.onSelectVideo(e.added);
                }
            }.bind(this));

        },

        render: function() {
            var style = {
                width: '85%',
                'max-width': '750px',
                'margin-left': '5px'
            };

            return (<input type="hidden" id="search-box" multiple style={style} />);
        }
    });
});