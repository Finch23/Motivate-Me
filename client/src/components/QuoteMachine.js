import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../pages/Profile/Profile.css"


const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent className="random-quote">
      <Typography id="text">
        {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button className="button" size="large" onClick={assignNewQuoteIndex}>Next Quote</Button>
    </CardActions>
  </Card>
);

export default QuoteMachine;