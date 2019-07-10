import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SharedNavbar from './SharedNavbar';
import SharedFooter from './SharedFooter';

type Props = RouteComponentProps;

const SharedMain: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <SharedNavbar />
      {props.children}
      <SharedFooter />
    </React.Fragment>
  );
};

export default withRouter(SharedMain);
