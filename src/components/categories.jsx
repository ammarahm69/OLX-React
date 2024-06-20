import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import '../App.css';
import Mobiles from "../assets/mobiles.png";
import Bike from "../assets/bike.png";
import Rent from "../assets/rent.png";
import Vehicles from "../assets/vehcles.png";
import Chicken from '../assets/chicken.png';
import Jobs from '../assets/jobs.png'
import Property from '../assets/property.png'
import Fashion from '../assets/fashion.png'

const categories = [
  { id: 1, name: 'Mobiles', image: Mobiles },
  { id: 2, name: 'Bike', image: Bike },
  { id: 3, name: 'Rent', image: Rent },
  { id: 4, name: 'Vehicles', image: Vehicles },
  { id: 5, name: 'Chicken', image: Chicken },
  { id: 6, name: 'Jobs', image: Jobs },
  { id: 7, name: 'Property', image: Property },
  { id: 7, name: 'Fashion', image: Fashion },
];

function Category() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              padding: "2rem 1.5rem",
              letterSpacing: "0.2rem",
              fontFamily: "sans-serif",
            }}
          >
            <div className="category">All Categories</div>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          '--Grid-borderWidth': '1px',
          // borderTop: 'var(--Grid-borderWidth) solid',
          // borderLeft: 'var(--Grid-borderWidth) solid',
          // borderColor: 'divider',
          '& > div': {
            // borderRight: 'var(--Grid-borderWidth) solid',
            // borderBottom: 'var(--Grid-borderWidth) solid',
            // borderColor: 'divider',
          },
        }}
      >
        {categories.map((category) => (
          <Grid key={category.id} item xs={6} sm={3} md={2} lg={1} minHeight={160}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0.5rem",
                }}
              >
                <img
                  className="set-category"
                  src={category.image}
                  alt={`Image ${category.id}`}
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "relative",
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                style={{ fontSize: 12, textAlign: "center", marginTop: 10 }}
              >
                {category.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Category;
