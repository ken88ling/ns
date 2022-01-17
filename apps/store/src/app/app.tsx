import styled from '@emotion/styled';
import { Route, Link } from 'react-router-dom';
import { Global, css } from '@emotion/react';

import { getAllGames } from '../fake-api';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const color = 'white';

const StyledApp = styled.div``;

const styles = css`
  .container {
    //background-color: blue;
  }
  .game-card {
    display: flex;
    border: 1px solid red;
  }
`;

export function App() {
  return (
    <>
      <Global styles={styles} />
      <div>
        <div className="container">
          <div className="games-layout">
            {getAllGames().map((x) => (
              <Card key={x.id} className="game-card">
                <CardActionArea>
                  <CardMedia
                    className="game-card-media"
                    image={x.image}
                    title={x.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {x.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {x.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="game-rating"
                    >
                      <strong>Rating:</strong> {x.rating}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
