import React from "react";
import { useSelector, useDispatch } from "react-redux";

const LoadingPage = (props) => {
  return (
    <div className="loading">
      <div className="loading--spinner"></div>
    </div>
  )
}
export default LoadingPage;