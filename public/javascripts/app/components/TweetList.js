/**
 * Component defining a list of tweets on the left side of the page
 */
define(function(require) {

    var React = require('react'),
        $ = require('jquery');

    return React.createClass({

        componentWillMount: function() {
            this.height = $(document).height();
        },

        componentDidMount: function() {
            var $list = $('.tweet-list'), syncing = false;
            this.props.maxId = this.props.tweets[this.props.tweets.length - 1].id;

            /**
             * Pagination control
             */
            $list.scroll(function() {
                if($list.scrollTop() >= $list[0].scrollHeight - $list.height() - 1 && !syncing) {
                    syncing = true;
                    $('i.loading-spinner').removeClass('hidden');
                    $.ajax({
                        method: 'GET',
                        url: '/searchTwitter',
                        dataType: 'json',
                        data: {
                            q: this.props.videoId,
                            maxId: this.props.maxId
                        }
                    })
                        .done(function(data) {
                            if(data.length) {
                                this.getDOMNode().innerHtml = '';
                                this.setProps({
                                    tweets: this.props.tweets.concat(data),
                                    maxId: data[data.length - 1].id
                                });
                                syncing = false;
                                twttr.widgets.load();
                            }
                            $('i.loading-spinner').addClass('hidden');
                        }.bind(this))
                        .fail(function() {
                            $('i.loading-spinner').addClass('hidden');
                        });
                }
            }.bind(this));

        },

        render: function() {
            return (
                <div className="tweets-container">
                    <span className="tweets-label">{this.props.tweets.length > 0 ? "Tweets mentioning this video:" : "No tweets found that mention this video"}</span>
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
                        <li className="spinner-container">
                            <i className="fa fa-spinner fa-spin fa-3x loading-spinner hidden"></i>
                        </li>
                    </ul>
                </div>
                );

        }
    });
});