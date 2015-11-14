var Week = React.createClass({
  render: function () {
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    return (
      <div className="week">
        {
          days.map(function(day) {
            return (
              <Day key={ day } day={ day } currentDay={ this.props.currentDay } onClick={ this.props.onSetDay }/>
            );
          }.bind(this))
        }
      </div>
    )
  }
});
