import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/Styles"
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        "button": {
            backgroundColor:"#4dd0e1",
            color: '#000',
            fontSize: 16,
            height: 48,
            marginBottom: 16,
            width: 256,
            "&:hover": {
                backgroundColor: "#88ffff",
            }
        }
    })
)

const PrimaryButton = (props) => {
    const classes = useStyles()

    return (
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
    );
};

export default PrimaryButton;