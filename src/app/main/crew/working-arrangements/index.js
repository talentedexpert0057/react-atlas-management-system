import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import BodyContent from './BodyContent';
import HeaderContent from './HeaderContent';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function WorkingArrangementsPage(props) {
	const classes = useStyles(props);
	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h4>Crew Working Arrangements</h4>
				</div>
			}
			content={
				<div className="p-24 h-full">
					<BodyContent />
				</div>
			}
		/>
	);
}

export default WorkingArrangementsPage;
