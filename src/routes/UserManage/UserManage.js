import React from 'react';
import { connect } from 'dva';
import styles from './UserManage.css';

const UserManage = ({
	dispatch
}) => {
	return (
		<div className="page-manage-content user-manage">
			<div className="clearfix operation-wrap">
				<div className="operation"></div>
				<div className="search">
					<input type="text" id="textbox-search" />
					<span className="btn-search" id="btn-search"><span className="fa fa-search"></span></span>
				</div>
			</div>
			<div className="list">
				<ul className="clearfix" id="grid-wrap"></ul>
			</div>
			<div className="paging" id="paging-wrap">
				<ul>
					<li className="total">Total: <span data-field="total"></span></li>
					<li className="records"><span data-field="current">1</span>/<span data-field="records">10</span></li>
					<li className="page first" data-action="first"><i className="fa fa-angle-double-left"></i></li>
					<li className="page prev" data-action="prev"><i className="fa fa-angle-left"></i></li>
					<li className="page next" data-action="next"><i className="fa fa-angle-right"></i></li>
					<li className="page last" data-action="last"><i className="fa fa-angle-double-right"></i></li>
				</ul>
			</div>
		</div>
	);
};

export default connect(({
	users
}) => ({
	users
}))(UserManage);