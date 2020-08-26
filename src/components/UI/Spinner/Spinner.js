import React, {Component} from 'react';

import classes from './Spinner.css';

class spinner extends Component {
  render () {
    return (
      <div className={classes.Loader}>Loading</div>
    )
  }
}

// const spinner = () => {
//    // eslint-disable-next-line 
//   <div className={classes.Loader}>Loading</div>
// }

export default spinner;