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


const dateToDay = (dateFromAPI)=>{
    let date = new Date(dateFromAPI);
    // console.log(date.getDate())
    const dict = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thrusday",
        5: "Friday",
        6: "Saturday",
    };
    const months = ["Jan", "Feb", "Mar", "April", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let todayDate = new Date();
    // console.log(todayDate)
    // console.log(date.getUTCDate() === todayDate.getUTCDate());
    // console.log("check", (todayDate.getUTCDate()+1))
    if(todayDate.getDate() === date.getDate())
    return "Today";
    else if((todayDate.getDate()+1) === (date.getDate()))
    return "Tomorrow";
    else
    return dict[date.getDay()]+", "+date.getDate()+" "+months[date.getMonth()];
    
};
const addUTC = (dateDataFromAPI)=>{
    return dateDataFromAPI+" UTC";
}
const fetchDistinctDates = (dateDataFromAPI)=>{
    let AllDate = [];
    dateDataFromAPI.forEach(element => {
        // console.log(new Date(element.dt_txt).getDate())
        AllDate.push(new Date(`${element.dt_txt} UTC`).getDate());
    });
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    
    // // usage example:

    let unique = AllDate.filter(onlyUnique);
    return unique;
};
const FolderList = props => {
    const classes = useStyles();
    let arr = [];
    let to = 1;
    if(props.days==='tomorrow'){
        to = 2;
    }
    else if(props.days==='five'){
        to = 5;
    }
    // console.log(props.data);
    if(props.data){
        const AllFiveDays = fetchDistinctDates(props.data.list);
        let j = 0;
        for(let i=0; i < to;){
            let utcDate = addUTC(props.data.list[j].dt_txt);
            let day = dateToDay(utcDate);
            if(AllFiveDays[i]===new Date(props.data.list[j].dt_txt).getDate()){
                arr.push(<ListItemComponent
                    day={day}
                    weather={props.data.list[j].weather[0].main}
                    humidity={props.data.list[j].main.humidity+"%"}
                    iconUrl={"http://openweathermap.org/img/w/" + props.data.list[j].weather[0].icon + ".png"}
                    maxTemp={props.data.list[j].main.temp_max}
                    minTemp={props.data.list[j].main.temp_min}
                />);
                i++;
            }
            j++;
        }
        if(props.days==='tomorrow'){
            arr.shift();
        }
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