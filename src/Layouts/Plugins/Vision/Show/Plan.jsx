import React from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import { updatePlanStatusEndPoint } from '../../../../EndPoints';
import { visionPlanStore/*, togglePlanAction */ } from '..';

export class Plan extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleToggleStatus(event) {
        updatePlanStatusEndPoint(this.props.plan.id).then(response => {
            visionPlanStore.dispatch({
                "type": "vision/togglePlanStatus",
                "payload": {
                    ...this.props.vision, "plans": this.props.vision.plans.map(plan => {
                        if (plan.id === this.props.plan.id) {
                            return { ...plan, "is_done": event.target.checked }
                        }
                        return plan;
                    })
                }
            })
        });

        // visionPlanStore.dispatch(togglePlanAction(this.props.vision.id, this.props.plan.id))
    }

    render() {
        return (
            <ListGroup.Item as="li" className='d-flex justify-content-start'>
                <div className='d-flex'>
                    <span>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" defaultChecked={this.props.plan.is_done} label="" onChange={this.handleToggleStatus.bind(this)} />
                        </Form.Group>
                    </span>
                    <div className="d-flex flex-wrap">
                        <span className='text-nowrap'>
                            {this.props.plan.title}:
                        </span>
                        <span className='opacity-5'>
                            {this.props.plan.description}
                        </span>
                    </div>


                </div>
            </ListGroup.Item>
        );
    }

}

// export default CustomLi;