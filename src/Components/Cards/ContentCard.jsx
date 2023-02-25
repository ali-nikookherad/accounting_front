import React, { Component } from 'react';
import "./ContentCard.css"

export class ContentCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3 mr-3">{this.props.title}</h6>
                            </div>
                        </div>
                        <div className="card-body">
                            {this.props.body}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
ContentCard.defaultProps = {
    title: "",
    body: "",
}
// export default ContentCard;