import React, { Component } from 'react';
class Reservation extends Component {
    render() {
        return (
            <div id="reservation" className="light-wrapper">
        <section className="ss-style-top"></section>
        <div className="container inner">
            <h2 className="section-title text-center">Reservation</h2>
            <p className="lead main text-center">Reserve your table &amp; enjoy lorem Ipsum</p>
            <div className="row">
                <div className="col-md-6">
                    <form className="form form-table" method="post" name="">
                        <div className="form-group">
                            <h4>Fill the form for table reservation (all fields required)</h4>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 col-md-6 form-group">
                            <label className="sr-only" htmlFor="first_name1">first name</label>
                            <input className="form-control hint" type="text" id="first_name1" name="first_name" placeholder="First name" required="" />
                          </div>
                          <div className="col-lg-6 col-md-6 form-group">
                            <label className="sr-only" htmlFor="last_name1">last name</label>
                            <input className="form-control hint" type="text" id="last_name1" name="last_name" placeholder="Last name" required="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 form-group">
                            <label className="sr-only" htmlFor="email1">email</label>
                            <input className="form-control hint" type="email" id="email1" name="email" placeholder="Email@domain.com" required="" />
                          </div>
                          <div className="col-lg-6 col-md-6 form-group">
                            <label className="sr-only" htmlFor="phone1">phone</label>
                            <input className="form-control hint" type="text" id="phone1" name="phone" placeholder="Phone" required="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 form-group">
                            <label className="sr-only" htmlFor="reserv_date1">reservation date</label>
                            <input className="form-control datepicker hasDatepicker hint" type="text" id="reserv_date1" name="reserv_date" placeholder="Reservation date" required="" />
                          </div>
                          <div className="col-lg-6 col-md-6 form-group">
                            <label className="sr-only" htmlFor="numb_guests1">number of guests</label>
                            <input className="form-control hint" type="text" id="numb_guests1" name="numb_guests" placeholder="Number of guests" required="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 form-group">
                            <label className="sr-only" htmlFor="alt_reserv_date1">time from</label>
                            <input className="form-control datepicker hasDatepicker hint" type="text" id="alt_reserv_date1" name="alt_reserv_date" placeholder="Time from" required="" />
                          </div>
                          <div className="col-lg-6 col-md-6 form-group">
                            <label className="sr-only" htmlFor="time1">time</label>
                            <input className="form-control timepicker ui-timepicker-input hint" type="text" id="time1" name="time" placeholder="Time to" required="" autoComplete="off" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <button type="submit" className="btn btn-danger btn-lg">Reserve!</button>
                          </div>
                        </div>
                      </form>
                </div>
                <div className="col-md-5 col-md-offset-1">
                    
                    <h3><i className="fa fa-clock-o fa-fw"></i>Hours</h3>
                    <h4>Breakfast</h4>
                    <p>Mon to Fri: 7:30 AM - 11:30 AM<br />Sat &amp; Sun: 8:00 AM - 9:00 AM</p>
                    <h4>Lunch</h4>
                    <p>Mon to Fri: 12:00 PM - 5:00 PM</p>
                    <h4>Dinner</h4>
                    <p>Mon to Sat: 6:00 PM -  1:00 AM<br />Sun: 5:30 PM - 12:00 AM</p>

                    <h3><i className="fa fa-map-marker fa-fw"></i>Directions</h3>
                    <p>4120 Lenox Avenue, New York, NY, 10035 76 Saint Nicholas Avenue</p>

                    <h3><i className="fa fa-mobile fa-fw"></i>Contacts</h3>
                    <p>Email: <a href="mailto:yourname@meatking.com">yourname@meatking.com</a></p>
                    <p>Phone: +234 3456 678</p>

                </div>
            </div>
        </div>
        <section className="ss-style-bottom"></section>
    </div>
        );
    }
}

export default Reservation;