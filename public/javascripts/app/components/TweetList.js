/**
 * Component defining a list of tweets on the left side of the page
 */
define(function(require) {

    var React = require('react'),
        $ = require('jquery');

    return React.createClass({

        componentWillMount:function() {
            this.height = $(document).height();
        },

        componentDidMount:function() {
            var $list = $('.tweet-list');
            this.props.maxId = this.props.tweets[this.props.tweets.length -1].id;

            /**
             * Pagination control
             */
            $list.scroll(function(){
                if($list.scrollTop() == $list[0].scrollHeight - $list.height() - 1){
                    $('.loading-spinner').removeClass('hidden');

                    $.ajax({
                        method: 'GET',
                        url: '/searchTwitter',
                        dataType: 'json',
                        async:false,
                        data: {
                            q: this.props.videoId,
                            maxId: this.props.maxId
                        }
                    }).done(function(data){
                        this.getDOMNode().innerHtml = '';
                        this.setProps({
                            tweets: this.props.tweets.concat(data),
                            maxId: data[data.length-1].id
                        });
                        twttr.widgets.load();
                        $('.loading-spinner').addClass('hidden');

                    }.bind(this));
                }
            }.bind(this));

        },

        render: function() {
            return (
                <div className="tweets-container">
                    <span className="tweets-label">{this.props.tweets.length >= 20 ? "More than 20 tweets found about this video" : this.props.tweets.length+ "  tweets found about this video"}</span>
                    <ul className="tweet-list">
                    {
                    this.props.tweets.map(function(result) {
                        return <li>
                            <blockquote className="twitter-tweet" data-cards="hidden" lang="en">
                                <a href={'https://twitter.com/' + result.username + '/status/' + result.id}>{result.date}</a>
                            </blockquote>
                        </li>;
                    })
                    }
                        <li>
                            <i className="fa fa-spinner fa-spin fa-3x hidden loading-spinner"></i>
                        </li>
                    </ul>
                </div>
                );

        }
    });
});