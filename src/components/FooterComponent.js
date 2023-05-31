import React from "react";
import "../footer.css";
function FooterComponent() {
  return (
    <>
      <div className="copyright text-center" style={{marginTop:"300px"}}>
        <div className="container-fluid ">
          <p className="">
            Copyrights &copy; 2023 - <a href="#">Jarvis Systems</a>, All Rights
            Reserved.<br></br>
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
