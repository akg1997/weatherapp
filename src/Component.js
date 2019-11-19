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

const FolderList = props => {
    const classes = useStyles();
    let arr = [];
    let to = 1;
    if(props.days==='five'){
        to = 5;
    }console.log(props.data);
    for(let i=0; i < to; i++){
        arr.push(<ListItemComponent
           day={props.data.list[0].dt_txt}

        />);
    }
    return (
        <List className={classes.root}>
            {arr}
        </List>
    );
};
export default FolderList

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