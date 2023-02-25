import React from 'react';

export function MedCard(props) {
    return (
        <div className="row mt-4">
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card z-index-2 ">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                        <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                            <div className="chart">
                                <canvas id="chart-bars" className="chart-canvas" height="170"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="mb-0 ">مشاهدات الموقع</h6>
                        <p className="text-sm ">آخر أداء للحملة</p>
                        <hr className="dark horizontal" />
                        <div className="d-flex ">
                            <i className="material-icons text-sm my-auto ms-1">schedule</i>
                            <p className="mb-0 text-sm"> الحملة أرسلت قبل يومين </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card z-index-2  ">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                        <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                            <div className="chart">
                                <canvas id="chart-line" className="chart-canvas" height="170"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="mb-0 "> المبيعات اليومية </h6>
                        <p className="text-sm "> (<span className="font-weight-bolder">+15%</span>) زيادة في مبيعات اليوم. </p>
                        <hr className="dark horizontal" />
                        <div className="d-flex ">
                            <i className="material-icons text-sm my-auto ms-1">schedule</i>
                            <p className="mb-0 text-sm"> تم التحديث منذ 4 دقائق </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mt-4 mb-3">
                <div className="card z-index-2 ">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                        <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                            <div className="chart">
                                <canvas id="chart-line-tasks" className="chart-canvas" height="170"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="mb-0 ">المهام المكتملة</h6>
                        <p className="text-sm ">آخر أداء للحملة</p>
                        <hr className="dark horizontal" />
                        <div className="d-flex ">
                            <i className="material-icons text-sm my-auto me-1">schedule</i>
                            <p className="mb-0 text-sm">تم تحديثه للتو</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default MedCard;