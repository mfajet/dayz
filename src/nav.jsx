const React  = require('react');
const moment    = require('moment');
const Nav = React.createClass({

    render() {



        return (
            <div className="dayz-nav">
                <button className="dayz-prev" onClick={this.props.prev}>&#8249;</button>
                <h1 className="nav-title">{moment.months(this.props.date.get('month'))} {this.props.date.get('year')}</h1>
                <button className="dayz-next" onClick={this.props.next}>&#8250;</button>
            </div>
        );

    }

});

module.exports = Nav;
