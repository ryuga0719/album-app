import React from 'react';
import Close from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickLesson() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }




  render(){
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <button
              className='modal-close-btn'
              onClick={() => this.handleClickClose()}
            >
              <Close />
            </button>
            <img src={this.props.image} />
          </div>
        </div>
      );
    }
    return(
        <Grid item xs={6} sm={3}>
          <Paper className='paper'>
            <div className='photo-container'>
              <div className="photo-container-inner"
              style={{backgroundImage: `url(${this.props.image})` }}
              onClick={() => {this.handleClickLesson()}}
              >

              </div>
            </div>
          </Paper>
          {modal}
        </Grid>
    );
  };
}
export default Modal;
