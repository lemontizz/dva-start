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
			tipWidth = this.$tip.offsetWidth,
			targetHeight = this.$tip.offsetHeight,
			targetWidth = this.$target.offsetWidth,
			viewport = this.$target.getBoundingClientRect(),
			targetLeft = viewport.left;

		this.$target.style.position = 'relative';

		if(targetLeft + targetWidth + tipWidth > winWidth) {
			this.setState({
				tipClass: 'right bottom'
			});
			this.$tip.style.bottom = `${targetHeight + 10}px`;
		} else {
			this.setState({
				tipClass: 'left top'
			});
		}

		
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
			id: props.id,
			show: props.show,
			timer: props.timer || 0,
			tipClass: '',
			left: 0,
		};
		this.privateMethods = methods;
	}

	componentDidMount() {
		this.privateMethods.buildEl.call(this);
	}

	render() {
		console.log('render');
		return (
			<div className={`page-tip ${this.state.tipClass} ${this.props.show ? 'show' : 'hide'}`} id={`page-tip-${this.props.id}`}>
				<div className="content">
					<span className="text">{this.props.text}</span>
					<i className="triangle"></i>
				</div>
			</div>
		)
	}
}

export default Tip;