/*
- UI components (class)
	  - home (subclass)
	  - floor plan view (subclass)
	    - draw mode (element)
	    - erase (element)
	    - save (element)
	    - close (element)
	- canvas (subclass)
	- bottom (subclass)
	  - users (subclass)
	  - VR view (element)
	  - 3D view (element)
<App>
	<HomeNav />

	<DrawNav>
	  <DrawNavControls>
	  	  <Draw />
		  <Erase />
		  <Save />
		  <Close />
	  </DrawNavControls>
	</DrawNav>

	<Canvas />

	<Footer>
	  <Users />
	  <ViewVR />
	  <View3D />
	</Footer>
</App>

*/

var Users = React.createClass({
	render: function() {
		return (
			<div className="users left">
				<button>user1</button>
				<button>user2</button>
			</div>
		)
	}
});

var Footer = React.createClass({
	render: function() {
		return (
			<footer className="footer ui-elements">
				<Users />
				<button className="right">view VR</button>
			</footer>
		)
	}
});

var Canvas = React.createClass({
	componentDidMount: function() {
		draw();
	},
	render: function() {
		return (
			<canvas id="canvas1">
				Please use a browser that supports "canvas"
			</canvas>
		)
	}
});

var DrawNavControls = React.createClass({
	render: function() {
		return (
			<div className="draw-nav-controls">
				<button>Draw</button> 
				<button>Erase</button>
				<button>Save</button>
				<button>Close</button>
			</div>
		)
	}
});

var DrawNav = React.createClass({
	render: function() {
		return (
			<div className="draw-nav right">
				<button>Floor Plan</button>
				<DrawNavControls />
			</div>
		)
	}
});

var HomeNav = React.createClass({
	render: function() {
		return (
			<div className="home-nav left">
				<button>Home</button>
			</div>
		)
	}
});

var Header = React.createClass({
	render: function() {
		return (
			<header className="header ui-elements">
				<HomeNav />
				<DrawNav />
			</header>
		)
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<Header /> 
				<Canvas />
				<Footer />
			</div>
		)
	}
});

ReactDOM.render(
 	<App />,
 	document.getElementById('content')
);

// ReactDOM.render(
//  	<CommentBox url="/api/comments" pollInterval={2000} />,
//  	document.getElementById('content')
// );

