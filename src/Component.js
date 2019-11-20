import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Img from "react-image";
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

const iconComponent = (props) =>{
    return <Img src={props.url} />
}

const FolderList = props => {
    const classes = useStyles();
    let arr = [];
    let to = 1;
    if(props.days==='five'){
        to = 5;
    }console.log(props.data);
    if(props.data){
        console.log("defined");
       // const jsonObject = JSON.parse(props.data);
        for(let i=0; i < to; i++){
            arr.push(<ListItemComponent
                day={props.data.list[i].dt_txt}
                weather={props.data.list[i].weather[0].main}
                humidity={props.data.list[i].main.humidity+"%"}
                iconUrl={"http://openweathermap.org/img/w/" + props.data.list[i].weather[0].icon + ".png"}
                maxTemp={props.data.list[i].main.temp_max}
                minTemp={props.data.list[i].main.temp_min}
            />);
        }
    }
    //const jsonObject = JSON.parse(props.data);

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
                    <Img src={props.iconUrl} />
                </Avatar>
            </ListItemAvatar>
            <div>
                <p className={lh().lineH}>{props.maxTemp}&deg;</p>
                <p className={lh().lineH}>{props.minTemp}&deg;</p>
            </div>
            <Divider/>
        </ListItem>
    );
}