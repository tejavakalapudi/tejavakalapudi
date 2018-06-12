import React from "react";
import { Jumbotron, Row, Col, ul, li } from "reactstrap";

const HomeLoansTab = () => ( 
    <div> 
        <Jumbotron>
            <Col >
                <div> 
                    <h4 className = "buyersguide_subtitle" >Home Loans Eligibility Check</h4>
                    <hr/>
                    <p className = "buyersguide_description">
                        All category employees whose salary is credited in account directly are eligible to get the home loan.
                    </p>

                    <h5 className = "buyersguide_heading" >Simple Steps Of A Home Loan</h5>
                    <p className = "buyersguide_description" >
                        So naturally, getting home loan involves many steps. They are:
                    </p>
                    <p>
                        <ul className = "buyersguide_description">
                            <li>Selection of banks</li>
                            <li>Submission of Application</li>
                            <li>Personal Discussion with banker</li>
                            <li>KYC and Loan Processing</li>
                            <li>Issuing of Offer Letter</li>
                            <li>Loan agreement signing</li>
                            <li>Disbursement</li>
                        </ul>
                    </p>

                    <h5 className = "buyersguide_heading" >Home Loan Offer Letter</h5>
                    <p className = "buyersguide_description" >
                        It contains loan amount, rate of interest, tenure, EMI per month and other terms and conditions. If you agree with the details mentioned in home loan offer letter, you will have to sign a duplicate letter of the same for the purpose of bank's records.
                    </p>

                    <h5 className = "buyersguide_heading" >Signing The Home Loan Agreement</h5>
                    <p className = "buyersguide_description" >
                        In this phase, you will be requested to sign the  bank agreement and also will have to submit post-dated cheques as required by the banker. This agreement will contain a condition binding on the builder to hand over the documents after the Registration.
                    </p>

                    <h5 className = "buyersguide_heading" >Disbursement</h5>
                    <p className = "buyersguide_description" >
                        At this stage, the banker will disburse the required loan amount based on the pricing information given by the builder as per the construction stage along with the supporting report which will already been submitted by the bank technical officer.
                    </p>

                    <h5 className = "buyersguide_heading" >Personal Documents</h5>
                    <p>
                        <ul className = "buyersguide_description">
                            <li >Passport size photographs - 3 No's</li>
                            <li >Copy of your passport/PAN card/Driving License/Aadhar/Voter Id</li>
                        </ul>
                    </p>
                </div>
            </Col>
        </Jumbotron>
    </div> 
);

export default HomeLoansTab;

//https://github.com/nkbt/react-collapse
//https://github.com/springload/react-accessible-accordion
//https://www.giken.com/en/vision/five_construction_principles/

