import FuseAnimate from '@fuse/core/FuseAnimate';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
// import { selectFilters } from './store/filtersSlice';
// import { selectFolders } from './store/foldersSlice';
// import { selectLabels } from './store/labelsSlice';
import LeftSidebarConfig from "./LeftSidebarConfig";

const useStyles = makeStyles(theme => ({
	listItem: {
		color: 'inherit!important',
		textDecoration: 'none!important',
		height: 40,
		width: 'calc(100% - 16px)',
		borderRadius: '0 20px 20px 0',
		paddingLeft: 24,
		paddingRight: 12,
		'&.active': {
			backgroundColor: theme.palette.secondary.main,
			color: `${theme.palette.secondary.contrastText}!important`,
			pointerEvents: 'none',
			'& .list-item-icon': {
				color: 'inherit'
			}
		},
		'& .list-item-icon': {
			fontSize: 16,
			width: 16,
			height: 16,
			marginRight: 16
		}
	},
	listSubheader: {
		paddingLeft: 24
	}
}));

function LeftSidebarContent(props) {
	const crewId = 1;

	const classes = useStyles();
	return (
		// <FuseAnimate animation="transition.slideUpIn" delay={400}>
			<div className="flex-auto border-l-1">
				<div>
					<List>
						{LeftSidebarConfig &&
							LeftSidebarConfig.map((label, index) => (
								<ListItem
									button
									component={NavLinkAdapter}
									to={`/crew/edit/${crewId}/${label.handle}`}
									key={index}
									className={classes.listItem}
								>
									<Icon className="list-item-icon" color="action">
										label
									</Icon>
									<ListItemText primary={label.title} disableTypography />
								</ListItem>
							))}
					</List>
				</div>
			</div>
		// </FuseAnimate>
	);
}

export default LeftSidebarContent;
