import React from 'react';
import { connect } from 'dva';
import styles from './Prompt.css';

const Prompt = ({
	dispatch,
	globalConfig
}) => {
	let methods = {
		cancel() {
			if(typeof globalConfig.prompt.cancelCallback === 'function') {
				globalConfig.prompt.cancelCallback();
				return;
			}

			dispatch({
				type: 'globalConfig/hidePrompt'
			});
		},
		confirm() {
			if(typeof globalConfig.prompt.confirmCallback === 'function') {
				globalConfig.prompt.confirmCallback();
				return;
			}

			dispatch({
				type: 'globalConfig/hidePrompt'
			});
		}
	};

	return (
		<div className={`page-prompt-wrap ${globalConfig.prompt.show ? 'show' : ''}`} id="page-prompt-wrap">
			<div id="page-prompt">
				<div className="header clearfix">
					<span data-field="title" className="title">{globalConfig.prompt.title}</span>
					<a href="javascript:;" className="close" data-action="close" onClick={methods.cancel}>
						<span className="close-1"></span>
						<span className="close-2"></span>
					</a>
				</div>
				<div className="body">
					<div data-field="content">{globalConfig.prompt.text}</div>
				</div>
				<div className="footer">
					<button data-action="close" className="btn btn-default" onClick={methods.cancel}>{globalConfig.prompt.cancelText}</button>
					<button data-action="confirm" className="btn btn-primary" onClick={methods.confirm}>{globalConfig.prompt.confirmText}</button>
				</div>
			</div>	
		</div>
	);
}

export default connect(({
	globalConfig
}) => ({
	globalConfig
}))(Prompt);