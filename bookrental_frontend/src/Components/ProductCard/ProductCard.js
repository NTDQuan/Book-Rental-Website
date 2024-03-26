import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ProductCard = (props) => {
    const { id, title, image, price } = props

    return (
        <Card sx={{maxWidth: 345}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/default_cover.jpg"
              alt="book cover"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                {price && (
                    <Typography variant="body2" color="text.secondary">
                        ${price}
                    </Typography>
                )}
            </CardContent>
          </CardActionArea>
        </Card>
    );
};

export default ProductCard;