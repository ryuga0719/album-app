import React from 'react';
import classNames from 'classnames';
import Close from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import photo1 from '../image/p_1.jpg';
import photo2 from '../image/p_2.jpg';
import photo3 from '../image/p_3.jpg';
import photo4 from '../image/p_4.jpg';
import photo5 from '../image/p_5.jpg';
import photo6 from '../image/p_6.jpg';
import photo7 from '../image/p_7.jpg';
import photo8 from '../image/p_8.jpg';
import photo9 from '../image/p_9.jpg';
import photo10 from '../image/p_10.jpg';
import photo11 from '../image/p_11.jpg';
import photo12 from '../image/p_12.jpg';
import Modal from './GridWithModal';


class GridWithClass extends React.Component {
  render() {
    const photoList = [
      {image:photo1},
      {image:photo2},
      {image:photo3},
      {image:photo4},
      {image:photo5},
      {image:photo6},
      {image:photo7},
      {image:photo8},
      {image:photo9},
      {image:photo10},
      {image:photo11},
      {image:photo12},
    ];



    return (
      <div className="GridWith_box">
        <Grid container spacing={3}>
        {photoList.map((Item) => {
            return (

                <Modal
                  image={Item.image}
                  />

            );
          })}
        </Grid>
      </div>
    );
  }
}

export default GridWithClass;
