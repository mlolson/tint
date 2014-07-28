/**
 * Component for video tile
 */
define(function(require) {

    var React = require('react'),
        VideoModal = require('jsx!./VideoModal'),
        modalRegion = document.getElementById('modal-region');

    return React.createClass({

        getInitialState: function() {
            return {
                played:false
            };
        },

        /**
         * Reset the control icon to 'fa-play' if the component
         * is to display a new video
         * @param nextProps
         */
        componentWillReceiveProps: function(nextProps) {
            if(this.state.played && nextProps.video.id !== this.props.video.id) {
                this.setState({played: false});
            }
        },

        /**
         * Launch the video player modal
         */
        launchVideo: function() {
            modalRegion.innerHTML = '';
            React.renderComponent(VideoModal({video: this.props.video}), modalRegion);
            this.setState({played:true});
        },

        render: function() {
            return (
                <div className="video-tile">
                    <h5 className="video-title">{this.props.video.title}</h5>
                    <div className="thumbnail-container" onClick={this.launchVideo}>
                        <img src={this.props.video.thumbnail} className="video-thumb"/>
                    {this.state.played ?
                        <i className="fa fa-3x control-icon fa-repeat"></i> :
                        <i className="fa fa-3x control-icon fa-play"></i>
                        }
                    </div>
                    <a href={'https://www.youtube.com/channel/' + this.props.video.channelId} target="_blank">
                        <strong>{this.props.video.channelTitle}</strong>
                    </a>
                </div>
            );
        }
    });
});