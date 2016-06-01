var React = require("react");
var Navigation = require('Navigation');

var Main = (props) => {
	return (
		<div>
			<div className="row">
				<div className="col s8">
					{props.children}
				</div>
				<div className="col s4">
					<Navigation/>
				</div>
			</div>
		</div>
	)
};

module.exports = Main;
