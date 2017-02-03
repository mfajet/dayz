const React  = require('react');
const moment    = require('moment');
const Nav = React.createClass({

    render() {



        return (
            <div className="dayz-nav">
                <button className="dayz-prev" onClick={this.props.prev}>Previous</button>
                <h1 className="nav-title">{moment.months(this.props.date.get('month'))} {this.props.date.get('year')}</h1>
                <button className="days-next" onClick={this.props.next}>Next</button>
            </div>
        );

    }

});

module.exports = Nav;
