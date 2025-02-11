import React from 'react';
import './App.css';

function Footer1() {
  return (
    <>
    <footer className="row  lastone pt-4 back-foot ">
    <div class="col-12 col-md footer-text">
      <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24"
        height="24"/>
      <small class="d-block mb-3 last text">© 2017-2018</small>
    </div>
    <div className="col-6 col-md">
      <h5 className="last footer-text">Features</h5>
      <ul className="list-unstyled last text-small">
        <li><a className="text last " href="#">Cool stuff</a></li>
        <li><a className="text last" href="#">Random feature</a></li>
        <li><a className="text last" href="#">Team feature</a></li>
        <li><a className="text last" href="#">Stuff for developers</a></li>
        <li><a className="text last" href="#">Another one</a></li>
        <li><a className="text last" href="#">Last time</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5 className='footer-text'>Resources</h5>
      <ul className="list-unstyled last text-small">
        <li><a className="text last " href="#">Resource</a></li>
        <li><a className="text last" href="#">Resource name</a></li>
        <li><a className="text last" href="#">Another resource</a></li>
        <li><a className="text last" href="#">Final resource</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5 className='footer-text' >About</h5>
      <ul className="list-unstyled last text-small">
        <li><a className="text last" href="#">Team</a></li>
        <li><a className="text last" href="#">Locations</a></li>
        <li><a className="text last" href="#">Privacy</a></li>
        <li><a className="text last" href="#">Terms</a></li>
      </ul>
    </div>
  </footer>
    </>
  );
}

export default Footer1;
