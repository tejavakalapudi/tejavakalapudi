import React from "react";
import { Jumbotron, Row, Col, ul, li } from "reactstrap";

const NriLoansTab = () => ( 
    <div> 
        <Jumbotron>
            <Col >
                <div> 
                    <h4 className = "buyersguide_subtitle" >Non Resident Indian Loans</h4>
                    <hr/>
                    <p className = "buyersguide_description">
                        A Non Resident Indian (NRI) is an individual who is an Indian Citizen but has migrated to another country permanently or temporarily for the purpose of Employment, Education etc. NRI must be a graduate. Educational qualification may not be a constraint for resident Indians. Most of the Banks stipulate that the NRI should have a monthly income of $ 2,500 per month. This yard stick may vary from bank to bank. They need to submit certain additional documents like copies of the passport and employment contract etc., A Resident can pay through post dated cheques or through savings bank account. But NRIs should repay the loan through Non Resident External (NRE) or Non Resident Ordinary (NRO) account cheques only. They may not be in position to sign on all papers and enter in to agreements for the purchase of apartments in Hyderabad. So, they need to submit a power of attorney to get a housing loan.
                    </p>

                    <h5 className = "buyersguide_heading" >Checklist for NRI Loans</h5>
                    <p>
                        <ul className = "buyersguide_description">
                            <li>Complete Passport copies</li>
                            <li>Visa stampings on passport</li>
                            <li>Copy of the employment contract</li>
                            <li>Pay checks for the latest 6 months (Should be notarized)</li>
                            <li>Latest Salary Credited Bank Statement for 6 months</li>
                            <li>W2 Returns latest 2 years (Should be notarized)</li>
                            <li>Employer ID card</li>
                            <li>Latest work permit</li>
                            <li>Copy of the local income tax returns</li>
                            <li>Credit Report with Score</li>
                            <li>NRE/NRO Account statement for latest 6 months (Should be notarized)</li>
                            <li>Higher Education proofs</li>
                            <li>Power of Attorney in favor of local representative in India (Should be notarized)</li>
                            <li>Official, Personal Mail ID's and HR mail ID</li>
                        </ul>
                    </p>
                    <p className = "buyersguide_description" >
                        Note: All the documents should be self attested
                    </p>
                </div>
            </Col>
        </Jumbotron>
    </div> 
);

export default NriLoansTab;