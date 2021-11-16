import React from 'react'
import '../../css/Admin/Reports.css'
import CollegeList from '../../components/Admin/Reports/CollegesList'
import Header from '../../components/Admin/Header_admin'
import Navbar from '../../components/Admin/Navbar_admin'

//images
import overAllServices from '../../images/overall/over-all-services.png'
import overAllGoddMoral from '../../images/overall/good moral.png'
import overAllSii from '../../images/overall/sii pinaka maraming nag enroll.png'

import overAllGenderPreference from '../../images/overall/sii gender preference.png'
import overAllGenderGay from '../../images/overall/sii gender (gay).png'
import overAllGenderBisexual from '../../images/overall/sii gender (bisexual).png'
import overAllGenderLesbian from '../../images/overall/sii gender (lesbian).png'
import overAllGenderTrans from '../../images/overall/sii gender (transgender).png'

import overAllMaritalStatus from '../../images/overall/sii marital status.png'
import overAllMaritalStatusAbrorad2 from '../../images/overall/sii living together but both in abroad.png'
import overAllMaritalStatusAbroad1 from '../../images/overall/sii living together one in abroad.png'
import overAllmaritalStatusPh2 from '../../images/overall/sii living together in ph.png'
import overAllMaritalStatusSeperated from '../../images/overall/sii seperated but not legally.png'
import overAllMaritalStatusSeperatedLegal from '../../images/overall/sii legally seperated.png'

import overAllShifting from '../../images/overall/rate of shifting.png'
import overAllShiftingTerm from '../../images/overall/shifting 1st term.png'
import overAllTransferring from '../../images/overall/rate of transferring.png'
import overAllTransferringTerm from '../../images/overall/transferring 1st sem.png'
import overAllStopSchooling from '../../images/overall/rate of stop schooling.png'
import overAllStopSchoolingTerm from '../../images/overall/stop schooling 1st sem.png'



function Reports() {
    return (
        <div className="reports-wrapper">
            <Header />
            <Navbar />
            <div>
                <div className="reports-name">
                    <h1>Reports</h1>
                </div>
                <div className="reports-colleges">
                    <div className="colleges-card">
                        <div className="colleges-title">
                            <h2>colleges</h2>
                        </div>
                        <CollegeList />
                    </div>
                </div>
                <div className="over-all-stats">
                    <div className="overview-title">
                        <h1>Overview</h1>
                    </div>
                    <div className="over-all-charts">
                        <div className="over-all-services">
                            <div className="over-all-services-chart">
                                <div>
                                    <span id="over-all-services-name">Most Used Services</span>
                                </div>
                                <img id="img-services-overall" src={overAllServices} />
                            </div>
                        </div>

                        <div className="over-all-goodmoral">
                            <div className="over-all-goodmoral-chart">
                                <div>
                                    <span id="over-all-goodmoral-name">Goodmoral</span>
                                </div>
                                <img id="img-goodmoral-overall" src={overAllGoddMoral} />
                            </div>
                        </div>

                        <div className="over-all-goodmoral">
                            <div className="over-all-goodmoral-chart">
                                <div>
                                    <span id="over-all-goodmoral-name">Student Individual Inventory</span>
                                </div>
                                <img id="img-goodmoral-overall" src={overAllSii} />
                            </div>
                        </div>

                        <div className="over-all-gender">
                            <div className="over-all-gender-chart">
                                <div>
                                    <span id="over-all-gender-name">Gender Preference</span>
                                </div>
                                <div className="over-all-gender-images">
                                    <div className="gender-over-all">
                                        <img id="img-gender-overall" src={overAllGenderPreference} />
                                    </div>
                                    <div className="gender-types">
                                        <span id="gender-gay-label">College Gay</span>
                                        <img id="gender-gay" src={overAllGenderGay} />
                                    </div>
                                </div>
                                <div className="gender-types2">
                                    <span id="gender-lesbian-label">College Lesbian</span>
                                    <img id="gender-lesbian" src={overAllGenderLesbian} />

                                    <span id="gender-trans-label">College Transgender</span>
                                    <img id="gender-trans" src={overAllGenderTrans} />

                                    <span id="gender-bisexual-label">College Bisexual</span>
                                    <img id="gender-bisexual" src={overAllGenderBisexual} />
                                </div>
                            </div>
                        </div>

                        <div className="over-all-maritalstatus">
                            <div className="over-all-maritalstatus-chart">
                                <div>
                                    <span id="over-all-maritalstatus-name">Marital Status</span>
                                </div>
                                <div className="over-all-maritalstatus-images">
                                    <div className="maritalstatus-over-all">
                                        <img id="img-maritalstatus-overall" src={overAllMaritalStatus} />
                                    </div>
                                    <div className="maritalstatus-types">
                                        <span id="maritalstatus-living-together-label">Living together in Philippines</span>
                                        <img id="maritalstatus-together" src={overAllmaritalStatusPh2} />
                                    </div>
                                </div>
                                <div className="maritalstatus-types2">
                                    <span id="maritalstatus-philippines-label">Living Together in Philippines</span>
                                    <img id="maritalstatus-ph" src={overAllmaritalStatusPh2} />

                                    <span id="maritalstatus-bothabroad-label">Living Together but both in abroad</span>
                                    <img id="maritalstatus-bothabroad" src={overAllMaritalStatusAbrorad2} />

                                    <span id="maritalstatus-oneabroad-label">Living Together but one in abroad</span>
                                    <img id="maritalstatus-oneabroad" src={overAllMaritalStatusAbroad1} />

                                    <span id="maritalstatus-legally-label">Legally Seperated</span>
                                    <img id="maritalstatus-legally" src={overAllMaritalStatusSeperatedLegal} />

                                    <span id="maritalstatus-notlegal-label">Seperated but not legally</span>
                                    <img id="maritalstatus-notelegal" src={overAllMaritalStatusSeperated} />
                                </div>
                            </div>
                        </div>

                        <div className="over-all-shifting">
                            <div className="over-all-shifting-chart">
                                <div>
                                    <span id="over-all-shifting-name">Reason of Shifting</span>
                                </div>
                                <div className="over-all-shifting-images">
                                    <div className="shifting-types">
                                        <span id="shifting-living-together-label">Shifting in 1st term of a.y. 2020</span>
                                        <img id="shifting-firstyr" src={overAllShiftingTerm} />
                                    </div>
                                    <div className="shifting-over-all">
                                        <img id="img-shifting-overall" src={overAllShifting} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="over-all-transfer">
                            <div className="over-all-transfer-chart">
                                <div>
                                    <span id="over-all-transfer-name">Reason of transfer</span>
                                </div>
                                <div className="over-all-transfer-images">
                                    <div className="transfer-types">
                                        <span id="transfer-living-together-label">transfer in 1st term of a.y. 2020</span>
                                        <img id="transfer-firstyr" src={overAllTransferring} />
                                    </div>
                                    <div className="transfer-over-all">
                                        <img id="img-transfer-overall" src={overAllTransferringTerm} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="over-all-loa">
                            <div className="over-all-loa-chart">
                                <div>
                                    <span id="over-all-loa-name"></span>
                                </div>
                                <div className="over-all-loa-images">
                                    <div className="loa-types">
                                        <span id="loa-living-together-label">Leave of Absence in 1st term of a.y. 2020</span>
                                        <img id="loa-firstyr" src={overAllStopSchooling} />
                                    </div>
                                    <div className="loa-over-all">
                                        <img id="img-loa-overall" src={overAllStopSchoolingTerm} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports
