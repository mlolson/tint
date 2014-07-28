/**
 * Component defining the container with video tiles
 */
define(function(require) {

    var React = require('react'),
        VideoTile = require('jsx!./VideoTile');

    return React.createClass({
        render: function() {
            return (
                <div className="video-results-container container" id="video-results-container">
                    {this.props.videos.map(function(video) { return <VideoTile video={video} /> })}
                </div>
                );
        }
    });
});