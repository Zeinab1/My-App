import React , {useState} from "react";
import {AppBar,Tabs ,Tab , makeStyles} from '@material-ui/core';


const styles = makeStyles({
    root:{
        backgroundColor:"#e7f0ff",
        color:"#000"
    },
    default_tabStyle:{
        backgroundColor: "#e7f0ff",
        color:"#0964fe",
    },
    active_tabStyle:{
        backgroundColor: '#0064fe',
        color:"#fff"
    },
    tabsIndicator:{
        display:"none"
    }
});

export const TabsCom = () => {
    const classes = styles();
    const [value,setvalue] = useState(0);
    const handleChange = (e,newValue)=>{
        if(newValue===0){
            setvalue(0)
        }else if (newValue === 1){
            setvalue(1)
        }
        console.log(newValue)
    }

    return(
        <div>
            <AppBar position="static" className={classes.root}>
                <Tabs  
                value={value} 
                centered
                variant="fullWidth"
                onChange={handleChange}
                classes={{ indicator: classes.tabsIndicator }}
                >
                    <Tab 
                    label="Reservation"
                    className={value === 0 ? classes.active_tabStyle : classes.default_tabStyle}
                    />
                    <Tab 
                    className={value === 1 ? classes.active_tabStyle : classes.default_tabStyle}
                    label="History"
                    />
                </Tabs>
                </AppBar>
        </div>
    )
    
};

