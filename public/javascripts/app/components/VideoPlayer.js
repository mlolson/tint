/**
 * Component defining the video player on the right side of the page.
 */
define(function(require) {
    var React = require('react');

    return React.createClass({

        render: function() {
            return (
                <div className="video-container">
                    <h2>{this.props.video.title}</h2>
                    <iframe id="ytplayer" type="text/html" width="540" height="300"
                    src={"http://www.youtube.com/embed/"+this.props.video.id+"?autoplay=1"}
                    frameborder="0"/>
                    <h3>{this.props.video.description}</h3>
                </div>
                );
        }
    });
});