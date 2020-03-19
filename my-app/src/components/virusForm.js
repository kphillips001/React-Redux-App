import React from 'react';
import {connect} from 'react-redux';
import { getData } from '../actions/index'; 
import Button from '@material-ui/core/Button';

const VirusForm = props => {

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return ( 
  <>
    {props.isFetchingData ? (
      <div>we are fetching data</div> 
    ) : (
      <Button 
        onClick={handleGetData}
        variant="contained"
        color="primary"
        >
          Get Cases
      </Button>
    )}
  </>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mapStateToProps, 
    { getData },
)(VirusForm);
