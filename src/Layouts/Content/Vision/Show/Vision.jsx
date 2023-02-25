import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import collect from 'collect.js';
import { InfoModal } from '../../../../Components';
import { Price, Plan } from '../../Vision';

export class Vision extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            plans: {

            }
        }
        this.prepareDate();
        this.preparePrices();
        this.preparePlans();
        this.calculatePlanProgress();
    }

    prepareDate() {
        this.activeDate = this.props.vision.dates.filter(date => {
            return date.is_active === 1
        })[0];
    }

    preparePrices() {
        this.prices = this.props.vision.prices.map((price) => <Price key={price.id} price={price} />)
    }

    preparePlans() {
        let plans = collect(this.props.vision.plans).sortBy("order")
        this.plans = plans.map((plan) => <Plan key={plan.id} vision={this.props.vision} plan={plan} />)
    }

    calculatePlanProgress() {
        let plans = this.props.vision.plans.reduce((component, item) => {
            if (typeof (component) !== "number") {
                let oldValue = component;
                component = { count: 1, is_done: 0 };
                if (oldValue.is_done) {
                    component.is_done += 1;
                }
            }

            if (item.is_done) {
                component.is_done += 1;
            }
            component.count += 1;
            return component;
        })
        this.planProgress = plans.is_done !== 0 ? (plans.is_done / plans.count * 100) : 0;
    }

    render() {
        return (
            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{this.props.vision.title}</h6>
                            <p className="text-xs text-secondary mb-0">{this.props.vision.wish_title}</p>
                        </div>
                    </div>
                </td>
                <td className="align-middle text-center">
                    <div className="d-flex align-items-center justify-content-start">
                        <span className="me-2 text-xs font-weight-bold">{this.planProgress}%</span>
                        <div>
                            <div className="progress">
                                <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow={this.planProgress} aria-valuemin="0" aria-valuemax="100" style={{ "width": this.planProgress + "%" }}></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <InfoModal
                        button="info"
                        body={<ListGroup as="ol" numbered className='p-0'>{this.plans}</ListGroup>}
                        title="نقشه راه"
                        closeButtonTitle="متوجه شدم"
                    />
                </td>
                <td>
                    <InfoModal
                        button="info"
                        body={<ListGroup as="ol" numbered className='p-0'>{this.prices}</ListGroup>}
                        title="بهائی که باید بپردازم"
                        closeButtonTitle="متوجه شدم"
                    />
                </td>
                <td className="align-middle text-center text-sm">
                    <span className="badge badge-sm bg-gradient-success">{this.props.vision.status}</span>
                </td>
                <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">{this.activeDate.will_achieve_at}</span>
                    <p className="text-xs text-secondary mb-0">{this.activeDate.type}</p>
                </td>
                <td className="align-middle text-center">
                    <Link className="btn btn-link text-dark px-3 mb-0" to="/javascript"><i className="material-icons text-sm me-2">edit</i>ویرایش</Link>
                    <Link className="btn btn-link text-danger text-gradient px-3 mb-0" to="/"><i className="material-icons text-sm me-2">delete</i>حذف</Link>
                </td>
            </tr >
        );
    }
}

// export default Vision;