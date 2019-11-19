import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        minWidth: "100px",
        backgroundColor: theme.palette.background.paper
    }
}));

const padding = makeStyles({
    pad1: {
        paddingRight: "10px"
    }
});

const lh = makeStyles({
    lineH: {
        lineHeight: 0.35
    }
});

export default function FolderList(props) {
    const classes = useStyles();
    let arr = [];
    for(var i=0; i < props.data; i++){
        arr.push(<ListItemComponent/>);
    }
    return (
        <List className={classes.root}>
            {arr}
        </List>
    );
}
function  ListItemComponent(props) {
    return (
        <ListItem>
            <ListItemText primary={props.day} secondary={props.weather}/>
            <Typography
                variant="h6"
                component="h3"
                color="primary"
                className={padding().pad1}
            >
                {props.humidity}
            </Typography>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <div>
                <p className={lh().lineH}>{props.maxTemp}</p>
                <p className={lh().lineH}>{props.minTemp}</p>
            </div>
            <Divider/>
        </ListItem>
    );
}