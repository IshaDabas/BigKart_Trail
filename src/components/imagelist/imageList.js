import * as React from 'react';
import { Cardd, CardHeader1 } from '../../styles/card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';;

export default function RecipeReviewCard() {

  return (
    <div>
    <Cardd sx={{ maxWidth: 1000 }}>
      <CardHeader1
         title="Who are we?"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        We are the upcoming E-Commerce website for Indian Food and Groceries. BigKartIndia as the name says, IT IS GOING TO BE BIGGG!!!
        </Typography>
      </CardContent>
        <CardContent>
          <Typography paragraph>Chevrolet Description</Typography>
          <Typography paragraph>
          Chevrolet is an iconic American automobile brand founded in 1911 by Louis Chevrolet and William C. Durant
          </Typography>
          <Typography paragraph>
          It is currently the fourth-largest automotive brand in the United States and is a division of General Motors. Chevrolet has become one of America’s most iconic brands, producing reliable and stylish cars, trucks, and SUVs for over a century. Its models range from the economical Spark to the luxurious Corvette.
          </Typography>
          <Typography paragraph>
          Chevrolet is also known for its commitment to safety, providing advanced features like lane departure warning and front crash prevention. (Discard any mussels that don&apos;t open.)
          </Typography>
        </CardContent>
    </Cardd>
    </div>
  );
}
