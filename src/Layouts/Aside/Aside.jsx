import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Aside extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-end me-3 rotate-caret  bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute start-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <NavLink to={"/dashboard"} className="navbar-brand m-0">
            <img src="../assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="me-1 font-weight-bold text-white">سرزمین ثروت</span>
          </NavLink>
          {/* <a className="navbar-brand m-0" href="#">
                <img src="../assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo"/>
                <span className="me-1 font-weight-bold text-white">سرزمین ثروت</span>
              </a> */}
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse px-0 w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/dashboard"} className="nav-link ">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text me-1">دشبورد</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/visions"} className="nav-link">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text me-1">لیست اهداف</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/tables"} className="nav-link">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">table_view</i>
                </div>
                <span className="nav-link-text me-1">جداول</span>
              </NavLink>
            </li>
            {/* <li className="nav-item">
                  <a className="nav-link " href="../pages/virtual-reality.html">
                    <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons-round opacity-10">view_in_ar</i>
                    </div>
                    <span className="nav-link-text me-1">الواقع الافتراضي</span>
                  </a>
                </li> */}
            {/* <li className="nav-item">
                  <a className="nav-link active" href="../pages/rtl.html">
                    <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons-round opacity-10">format_textdirection_r_to_l</i>
                    </div>
                    <span className="nav-link-text me-1">RTL</span>
                  </a>
                </li> */}
            <li className="nav-item">
              <NavLink to={"/notifications"} className="nav-link">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text me-1">اعلانات</span>
              </NavLink>
              {/* <a className="nav-link " href="../pages/notifications.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text me-1">اعلانات</span>
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink to={"/account"} className="nav-link">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">person</i>
                </div>
                <span className="nav-link-text me-1">حساب شخصی</span>
              </NavLink>
              {/* <a className="nav-link " href="../pages/profile.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">person</i>
                </div>
                <span className="nav-link-text me-1">حساب شخصی</span>
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink to={"/exit"} className="nav-link">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">login</i>
                </div>
                <span className="nav-link-text me-1">تسهیل در خروج</span>
              </NavLink>
              {/* <a className="nav-link " href="../pages/sign-in.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">login</i>
                </div>
                <span className="nav-link-text me-1">تسهیل در خروج</span>
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink to={"/subsciption"} className="nav-link">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">assignment</i>
                </div>
                <span className="nav-link-text me-1">اشتراک</span>
              </NavLink>
              {/* <a className="nav-link " href="../pages/sign-up.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">assignment</i>
                </div>
                <span className="nav-link-text me-1">اشتراک</span>
              </a> */}
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}


export default Aside;