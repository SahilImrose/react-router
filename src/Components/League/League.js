import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom:'20px',
      marginTop:'20px'
    },
  });

const League = () => {
  const [league, setLeague] = useState([false]);
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => res.json())
      .then(data => setLeague(data.leagues))
      
  }, []);
    const classes = useStyles();
    return (
        <div className="div">
      {
        league.map(league => <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {league.strLeague}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Sport Type:   {league.strSport}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link style={{textDecoration:'none'}} to={`/aboutLeague/${league.idLeague}`}>
            <Button variant="contained" size="small" color="primary">              
              Learn More                              <FontAwesomeIcon icon={faArrowRight}/>
            </Button></Link>
          </CardActions>
        </Card>)
      }
      </div>
    );
};
export default League;