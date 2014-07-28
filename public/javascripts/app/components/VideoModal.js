/**
 * Component defining the video player modal.
 */
define(function(require) {
    var React = require('react'),
        $ = require('jquery');

    return React.createClass({

        componentDidMount: function() {
            $(this.getDOMNode()).modal({ show: true});
            $(this.getDOMNode()).on('hidden.bs.modal', function() {
                $(this.getDOMNode()).html('');
            }.bind(this));
        },

        hide: function() {
            $(this.getDOMNode()).modal('hide');
        },

        renderCloseButton: function() {
            return <button
                    type="button"
                    className="close"
                    onClick={this.hide}
                    dangerouslySetInnerHTML={{__html: '&times'}}
                    />
        },

        render: function() {
            return (
                <div className="modal fade video-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <strong>{this.props.video.title}</strong>
                                {this.renderCloseButton()}
                            </div>
                            <div className="modal-body">
                                <div className="video-container">
                                    <iframe id="ytplayer" type="text/html" width="560" height="300" frameBorder="0"
                                    src={"http://www.youtube.com/embed/" + this.props.video.id + "?autoplay=1"}/>
                                    <a href={'https://www.youtube.com/channel/' + this.props.video.channelId} target="_blank">
                                        <strong>{this.props.video.channelTitle}</strong>
                                    </a>
                                    <p>{this.props.video.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
        }
    });
});