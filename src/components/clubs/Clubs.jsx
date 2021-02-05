import React, { Component } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'

export class Clubs extends Component {
    render() {
        return (
            <div>
                
    <div class="container-fluid">
        {/* <!-- Begin page --> */}
        <div id="layout-wrapper">
<Header/>
<div class="vertical-menu">

    <div class="h-100">

        <div class="user-wid text-center py-4">
            <div class="user-img">
                <img src="assets/images/users/avatar-2.jpg" alt="" class="avatar-md mx-auto rounded-circle"/>
            </div>

            <div class="mt-3">

                <a href="#" class="text-dark font-weight-medium font-size-16">Patrick Becker</a>
                <p class="text-body mt-1 mb-0 font-size-13">UI/UX Designer</p>

            </div>
        </div>

        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu">
            {/* <!-- Left Menu Start --> */}
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title">Menu</li>

                <li>
                    <a /* href="index.html" */ class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a /* href="inde.html" */ class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <span>Clubs</span>
                    </a>
                </li>

                <li>
                    <a /* href="inde.html" */ class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <span>Club Users</span>
                    </a>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="mdi mdi-file-tree"></i>
                        <span>Cash Games</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li><a href="javascript: void(0);">Point Rummy</a></li>
                        <li><a href="javascript: void(0);">Pool Rummy</a></li>
                        <li><a href="javascript: void(0);">Deal Rummy</a></li>
                    </ul>
                </li>

                <li>
                    <a /* href="inde.html"  */class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <span>Table Rummy</span>
                    </a>
                </li>

            </ul>
        </div>
        {/* <!-- Sidebar --> */}
    </div>
</div>
{/* <!-- Left Sidebar End --> */}

            {/* <!-- ============================================================== --> */}
            {/* <!-- Start right Content here --> */}
            {/* <!-- ============================================================== --> */}
            <div class="main-content">

                <div class="page-content">

                    {/* <!-- start page title --> */}
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="page-title mb-0 font-size-18">Dashboard</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item active">Welcome to ClubRummy</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div class="row">
                        <div class="col-12">
                            <div class="card box-big-shadow">
                                <h4 class="card-header mt-0">Add New Player</h4>
                                <div class="card-body">
                                    
                                    <form class="repeater" enctype="multipart/form-data">
                                        <div data-repeater-list="group-a">
                                            <div data-repeater-item class="row">
                                                <div class="form-group col-lg-2">
                                                    <label for="name">Name</label>
                                                    <input type="text" id="name" name="untyped-input" class="form-control" />
                                                </div>

                                                <div class="form-group col-lg-2">
                                                    <label for="email">Email</label>
                                                    <input type="email" id="email" class="form-control" />
                                                </div>

                                                <div class="form-group col-lg-2">
                                                    <label for="subject">Mobile</label>
                                                    <input type="text" id="subject" class="form-control" />
                                                </div>
                                                <div class="form-group col-lg-2">
                                                    <label for="subject">Username</label>
                                                    <input type="text" id="subject" class="form-control" />
                                                </div>

                                                <div class="col-lg-2 align-self-center">
                                                    <input data-repeater-delete type="button" class="btn btn-primary btn-block" value="Delete" />
                                                </div>
                                            </div>

                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end row --> */}

                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">

                                    <h4 class="card-title mb-4">Club Players</h4>
                                    

                                    <table id="datatable" class="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%"}}>
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>Date</th>
                                                <th>Mobile</th>
                                                <th>Email</th>
                                                <th>Username</th>
                                                <th>Play Chips</th>
                                                <th>Real Chips</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Syta</td>
                                                <td>08/02/2020</td>
                                                <td>+91 9703636209</td>
                                                <td>email@gmail.com</td>
                                                <td>kpavan20</td>
                                                <td>240</td>
                                                <td>200</td>
                                                <td>
                                                    <i class="fa fa-edit"></i>
                                                    <i class="fa fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Syta</td>
                                                <td>08/02/2020</td>
                                                <td>+91 9703636209</td>
                                                <td>email@gmail.com</td>
                                                <td>kpavan20</td>
                                                <td>240</td>
                                                <td>200</td>
                                                <td>
                                                    <i class="fa fa-edit"></i>
                                                    <i class="fa fa-trash"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Syta</td>
                                                <td>08/02/2020</td>
                                                <td>+91 9703636209</td>
                                                <td>email@gmail.com</td>
                                                <td>kpavan20</td>
                                                <td>240</td>
                                                <td>200</td>
                                                <td>
                                                    <i class="fa fa-edit"></i>
                                                    <i class="fa fa-trash"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}


                </div>
                {/* <!-- End Page-content --> */}
<Footer/>
            </div>
            {/* <!-- end main content--> */}

        </div>
        {/* <!-- END layout-wrapper --> */}

    </div>
            </div>
        )
    // <div class="rightbar-overlay"></div>

        
    }
}

export default Clubs
