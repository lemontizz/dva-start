import React from 'react';
import styles from './Tip.css';



let methods = {
	buildEl() {
		console.log('sdfjhsjdfhj', this);
		this.$target = document.getElementById(this.props.id);
		this.$tip = document.getElementById(`page-tip-${this.props.id}`);
		this.privateMethods.setStyle.call(this);
	},
	setStyle() {
		let winWidth = window.innerWidth,
			targetWidth = this.$target.offsetWidth;

		this.$tip.setAttribute('style', `left: ${targetWidth + 10}px;bottom: 0px;`)
	}
}

class Tip extends React.Component {
	constructor(props) {
		super(props);
		console.log('[[[[', this);
		this.$target = null;
		this.$tip = null;
		this.state = {
			text: props.text,
			id: props.id
		};
		this.privateMethods = methods;
	}

	componentDidMount() {
		this.privateMethods.buildEl.call(this);
	}

	render() {
		console.log('render');
		return (
			<div className="page-tip" id={`page-tip-${this.props.id}`}>
				<div className="content">
					<span className="text">{this.props.text}</span>
					<i className="triangle"></i>
				</div>
			</div>
		)
	}
}

export default Tip;