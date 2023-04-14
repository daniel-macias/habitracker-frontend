import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export function TaskView(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>

        <Typography variant="h5" component="div">
        {props.taskName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Half Credit: {props.halfCredit}
        </Typography>
        <Typography variant="body2">
        Full Credit: {props.fullCredit}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}