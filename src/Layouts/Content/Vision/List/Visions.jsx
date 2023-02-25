import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner'
import { getVisonsEndPoint } from '../../../../EndPoints';
import { Vision, visionPlanStore, togglePlanAction } from '../../Vision';
import './Visions.css'
import collect from 'collect.js';

export class Visions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visions: [],
            is_vision_loaded: false
        }
    }

    componentDidMount() {
        if (this.state.is_vision_loaded === false) {
            let promis = getVisonsEndPoint()
            promis.then((result) => {
                this.setState({
                    visions: result.data,
                    is_vision_loaded: true
                })
            });
        }

        this.unsubscribe = visionPlanStore.subscribe(() => {
            let reduxState = collect(visionPlanStore.getState())
            // console.log("state", this.state.visions);
            let visions = [...this.state.visions].map(vision => {
                let reduxVision = reduxState.where("id", vision.id).first();
                if (reduxVision) {
                    return reduxVision;
                }

                return vision;
            })

            // let visions = state.map((vision) => {
            //     let visionPlan = reduxState.where("vision_id", vision.id).first();
            //     if (visionPlan) {
            //         vision = {
            //             ...vision, "plans": vision.plans.map(plan => {
            //                 if (plan.id === visionPlan.plan.id) {
            //                     return visionPlan.plan
            //                 }

            //                 return plan;
            //             })
            //         }
            //         return vision;
            //     }
            //     return vision;
            // });
            // console.log("visions", visions);
            this.setState({
                visions
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    prepareVisions() {
        return this.state.visions.map((vision) => <Vision key={vision.id} vision={vision} />)
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3 mr-3">لیست اهداف</h6>
                                </div>
                            </div>
                            <div className="px-3 my-2">
                                <button className='btn btn-outline-success'><Link to="/visions/create" className='text-decoration-none'>ساخت هدف جدید</Link></button>
                            </div>
                            <div className="card-body px-0 pb-2">
                                <div className="table-responsive p-0">
                                    {
                                        this.state.is_vision_loaded &&
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">هدف</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">پیشرفت</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">برنامه</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">بها</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">وضعیت</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">تاریخ سر رسید</th>
                                                    <th className="text-secondary opacity-7 text-center">عملیات</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.prepareVisions()}
                                            </tbody>
                                        </table>
                                    }
                                    {
                                        !this.state.is_vision_loaded &&
                                        <div className='d-flex justify-content-center my-4'>
                                            <ThreeCircles
                                                height="50"
                                                width="50"
                                                color="#4fa94d"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                                visible={true}
                                                ariaLabel="three-circles-rotating"
                                                outerCircleColor=""
                                                innerCircleColor=""
                                                middleCircleColor=""
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </React.Fragment>
        );
    }
}

// export default Visions;