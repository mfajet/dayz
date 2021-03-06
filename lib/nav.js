'use strict';

var React = require('react');
var moment = require('moment');
var Nav = React.createClass({
    displayName: 'Nav',
    render: function render() {

        return React.createElement(
            'div',
            { className: 'dayz-nav' },
            React.createElement(
                'button',
                { className: 'dayz-prev', onClick: this.props.prev },
                '\u2039'
            ),
            React.createElement(
                'h1',
                { className: 'nav-title' },
                moment.months(this.props.date.get('month')),
                ' ',
                this.props.date.get('year')
            ),
            React.createElement(
                'button',
                { className: 'dayz-next', onClick: this.props.next },
                '\u203A'
            )
        );
    }
});

module.exports = Nav;