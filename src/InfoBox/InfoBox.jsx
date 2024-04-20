import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  const HOT_IMG_URL =
    "https://media.istockphoto.com/id/1290815217/photo/sun-light-and-cloudy.jpg?s=612x612&w=0&k=20&c=1DXfMW3iEv40AsgtwU7A9nu5fKFV9WXPI8Unn35tZ64=";
  const COLD_IMG_URL =
    "https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
  const RAINY_IMG_URL =
    "https://images.unsplash.com/photo-1513172128806-2d00531a9f20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55fGVufDB8fDB8fHww";

  return (
    <div className="infobox">
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_IMG_URL
                : info.temp > 15
                ? HOT_IMG_URL
                : COLD_IMG_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature = {info.temp}&deg;C</div>
              <br />
              <div>Humidity = {info.humidity}</div>
              <br />
              <div>Country = {info.country}</div>
              <br />
              <div>
                The Weather can be describes <i> {info.weather} </i>as Feels
                Like = {info.feelslike}&deg;C
              </div>
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
