import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './InfoLeague.css';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: '20px',
        marginTop: '20px'
    },
});

const InfoLeague = (props) => {
    const { strSport, strLeague, idLeague } = props.league;
    const classes = useStyles();
    return (

        <Card className={classes.root} id="card">
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {strLeague}
                    </Typography>
                    <Typography variant="body2"component="p">
                        Sport Type:   {strSport}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link style={{ textDecoration: 'none' }} to={`/aboutLeague/${idLeague}`}>
                    <Button variant="contained" size="small" color="primary">
                        Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </Button></Link>
            </CardActions>
        </Card>

    );
};

export default InfoLeague;