import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { createRef, useEffect, useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles";

const List: React.FC<{
  places: any;
  childClicked: any;
  isLoading: boolean;
  type: string;
  setType: any;
  rating: number;
  setRating: any;
}> = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill(null)
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places]);
  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Hotels & Attractions</Typography>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) =>
                setType(
                  e.target.value ? (e.target.value as string) : "restaurants"
                )
              }
            >
              <MenuItem value="restaurants">restaurants</MenuItem>
              <MenuItem value="hotels">hotels</MenuItem>
              <MenuItem value="attractions">attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={rating}
              onChange={(e) =>
                setRating(e.target.value ? (e.target.value as number) : 0)
              }
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place: any, i: number) => (
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={+childClicked === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};
export default List;
