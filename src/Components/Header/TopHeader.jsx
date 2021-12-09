import React from "react";
import topHeadIcon from '../../Images/topHeadIcon.png';
import notification from '../../Images/notifications.png';
import star from '../../Images/star.png';
import fork from '../../Images/fork.png';

const TopHeader = () => {
    return (
        <section className="issueHeader_top">
            <div className="issueHeader_top_breadcumb">
                <h1 className="issueHeader_top_breadcumb_heading"> <img src={topHeadIcon} alt="Head Icon"
                    className="issueHeader_top_icon" /> <span className="issueHeader_top_breadcumb_txt">facebook /
                        react</span> <span className="issueHeader_top_breadcumb_status">Public</span></h1>
            </div>
            <div className="issueHeader_top_details">
                <h1 className="issueHeader_top_details_list">
                    <img src={notification} className="issueHeader_top_icon" alt="Notification Icon" />
                    <span className="issueHeader_top_details_list_label">Notifications</span>
                </h1>
                <h1 className="issueHeader_top_details_list">
                    <img src={star} className="issueHeader_top_icon" alt="Notification Icon" />
                    <span className="issueHeader_top_details_list_label">Star</span>
                    <span className="issueHeader_top_details_list_data">175K</span>
                </h1>
                <h1 className="issueHeader_top_details_list">
                    <img src={fork} className="issueHeader_top_icon" alt="Notification Icon" />
                    <span className="issueHeader_top_details_list_label">Fork</span>
                    <span className="issueHeader_top_details_list_data">35.3K</span>
                </h1>
            </div>
        </section>
    )
}

export default TopHeader
