/**
 * Component defining the search box at the top of the page
 */
define(function(require) {

    var React = require('react'),
        $ = require('jquery'),
        VideoResults = require('jsx!./VideoResults');

    return React.createClass({

        getInitialState: function() {
            return {
                videoResults: []
            }
        },

        /**
         * Make a call to the server for video search,
         * or clear results if query is empty
         * @param query
         */
        searchVideos: function(query) {
            if(query.length > 1) {
                $.ajax({
                    method: 'GET',
                    url: '/search',
                    dataType: 'json',
                    data: {
                        q: query
                    }
                }).done(function(data) {
                    this.setState({
                        videoResults:data
                    });
                }.bind(this));
            }else {
                this.setState({videoResults:[]});
            }

        },

        /**
         * Called after component is mounted
         */
        componentDidMount: function() {
            $('#search-box').on('input', function(e) {
                this.searchVideos(e.target.value);
            }.bind(this));
        },

        render: function() {
            return (
                <div>
                    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                        <div id="search-box-container" class="container-fluid">
                            <input type="text" className="form-control" id="search-box" placeholder="Search Youtube Videos..."/>
                        </div>
                    </div>
                    <VideoResults videos={this.state.videoResults} nextPageToken={this.props.nextPageToken}/>
                </div>
                );
        }
    });
});