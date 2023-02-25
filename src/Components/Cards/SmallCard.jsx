import React from 'react';

export function SmallCard(props) {
    return (
        <div className="row">
            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                        <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                            <i className="material-icons opacity-10">weekend</i>
                        </div>
                        <div className="text-start pt-1">
                            <p className="text-sm mb-0 text-capitalize">أموال اليوم</p>
                            <h4 className="mb-0">$53k</h4>
                        </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-3">
                        <p className="mb-0 text-start"><span className="text-success text-sm font-weight-bolder ms-1">+55% </span>من الأسبوع الماضي</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                        <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                            <i className="material-icons opacity-10">leaderboard</i>
                        </div>
                        <div className="text-start pt-1">
                            <p className="text-sm mb-0 text-capitalize">مستخدمو اليوم</p>
                            <h4 className="mb-0">2,300</h4>
                        </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-3">
                        <p className="mb-0 text-start"><span className="text-success text-sm font-weight-bolder ms-1">+33% </span>من الأسبوع الماضي</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                        <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                            <i className="material-icons opacity-10">store</i>
                        </div>
                        <div className="text-start pt-1">
                            <p className="text-sm mb-0 text-capitalize">عملاء جدد</p>
                            <h4 className="mb-0">
                                <span className="text-danger text-sm font-weight-bolder ms-1">-2%</span>
                                +3,462
                            </h4>
                        </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-3">
                        <p className="mb-0 text-start"><span className="text-success text-sm font-weight-bolder ms-1">+5% </span>من الشهر الماضي</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                        <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                            <i className="material-icons opacity-10">person_add</i>
                        </div>
                        <div className="text-start pt-1">
                            <p className="text-sm mb-0 text-capitalize">مبيعات</p>
                            <h4 className="mb-0">$103,430</h4>
                        </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-3">
                        <p className="mb-0 text-start"><span className="text-success text-sm font-weight-bolder ms-1">+7% </span>مقارنة بيوم أمس</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default SmallCard;