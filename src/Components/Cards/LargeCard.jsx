import React from 'react';

export function LargeCard(props) {
    return (
        <div className="row my-4">
            <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                <div className="card">
                    <div className="card-header pb-0">
                        <div className="row mb-3">
                            <div className="col-6">
                                <h6>المشاريع</h6>
                                <p className="text-sm">
                                    <i className="fa fa-check text-info" aria-hidden="true"></i>
                                    <span className="font-weight-bold ms-1">30 انتهى</span> هذا الشهر
                                </p>
                            </div>
                            <div className="col-6 my-auto text-start">
                                <div className="dropdown float-start ps-4">
                                    <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-ellipsis-v text-secondary"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-n4" aria-labelledby="dropdownTable">
                                        <li><a className="dropdown-item border-radius-md" href="#">عمل</a></li>
                                        <li><a className="dropdown-item border-radius-md" href="#">عمل آخر</a></li>
                                        <li><a className="dropdown-item border-radius-md" href="#">شيء آخر هنا</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0 pb-2">
                        <div className="table-responsive">
                            <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">المشروع</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">أعضاء</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ميزانية</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">إكمال</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/small-logos/logo-xd.svg" className="avatar avatar-sm ms-3" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Material XD الإصدار</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                    <img alt="Image placeholder" src="../assets/img/team-1.jpg" />
                                                </a>
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                    <img alt="Image placeholder" src="../assets/img/team-2.jpg" />
                                                </a>
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                    <img alt="Image placeholder" src="../assets/img/team-3.jpg" />
                                                </a>
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                    <img alt="Image placeholder" src="../assets/img/team-4.jpg" />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $14,000 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">60%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/small-logos/logo-atlassian.svg" className="avatar avatar-sm ms-3" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">أضف مسار التقدم إلى التطبيق الداخلي</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                    <img alt="Image placeholder" src="../assets/img/team-2.jpg" />
                                                </a>
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                    <img alt="Image placeholder" src="../assets/img/team-4.jpg" />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $3,000 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">10%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/small-logos/logo-slack.svg" className="avatar avatar-sm ms-3" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">إصلاح أخطاء النظام الأساسي</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                    <img alt="Image placeholder" src="../assets/img/team-3.jpg" />
                                                </a>
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                    <img alt="Image placeholder" src="../assets/img/team-1.jpg" />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> غير مضبوط </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">100%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm ms-3" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">إطلاق تطبيق الهاتف المحمول الخاص بنا</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                    <img alt="Image placeholder" src="../assets/img/team-4.jpg" />
                                                </a>
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                    <img alt="Image placeholder" src="../assets/img/team-3.jpg" />
                                                </a>
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                    <img alt="Image placeholder" src="../assets/img/team-4.jpg" />
                                                </a>
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                    <img alt="Image placeholder" src="../assets/img/team-1.jpg" />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $20,500 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">100%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/small-logos/logo-jira.svg" className="avatar avatar-sm ms-3" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">أضف صفحة التسعير الجديدة</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                    <img alt="Image placeholder" src="../assets/img/team-4.jpg" />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $500 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">25%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/small-logos/logo-invision.svg" className="avatar avatar-sm ms-3" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">إعادة تصميم متجر جديد على الإنترنت</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                    <img alt="Image placeholder" src="../assets/img/team-1.jpg" />
                                                </a>
                                                <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                    <img alt="Image placeholder" src="../assets/img/team-4.jpg" />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $2,000 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">40%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-info w-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card h-100">
                    <div className="card-header pb-0">
                        <h6>نظرة عامة على الطلبات</h6>
                        <p className="text-sm">
                            <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                            <span className="font-weight-bold">24%</span> هذا الشهر
                        </p>
                    </div>
                    <div className="card-body p-3">
                        <div className="timeline timeline-one-side">
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="material-icons text-success text-gradient">notifications</i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, تغييرات في التصميم</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="material-icons text-danger text-gradient">code</i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">طلب جديد #1832412</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="material-icons text-info text-gradient">shopping_cart</i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">مدفوعات الخادم لشهر أبريل</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="material-icons text-warning text-gradient">credit_card</i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">تمت إضافة بطاقة جديدة للطلب #4395133</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="material-icons text-primary text-gradient">key</i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">فتح الحزم من أجل التطوير</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                                </div>
                            </div>
                            <div className="timeline-block">
                                <span className="timeline-step">
                                    <i className="material-icons text-dark text-gradient">payments</i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">طلب جديد #9583120</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default LargeCard;