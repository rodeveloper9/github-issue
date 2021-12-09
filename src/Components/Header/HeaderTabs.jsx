import React from "react";
import code from '../../Images/code.png';
import issueIcon from '../../Images/issues.png';
import pullRequest from '../../Images/pr.png';
import action from '../../Images/actions.png';
import project from '../../Images/projects.png';
import wiki from '../../Images/wiki.png';
import security from '../../Images/security.png';
import insights from '../../Images/insights.png';

const HeaderTabs = ({ issues = 0 }) => {
    return (
        <section className="issueTabs">
            <div className="issueTabs_list">
                <img src={code} className="issueTabs_list_icon" alt="Code icon" />
                <span className="issueTabs_list_label">Code</span>
            </div>
            <div className="issueTabs_list active">
                <img src={issueIcon} className="issueTabs_list_icon" alt="Issues icon" />
                <span className="issueTabs_list_label">Issues</span>
                <span className="issueTabs_list_data">{issues}</span>
            </div>
            <div className="issueTabs_list">
                <img src={pullRequest} className="issueTabs_list_icon" alt="PR icon" />
                <span className="issueTabs_list_label">Pull Requests</span>
                <span className="issueTabs_list_data">208</span>
            </div>
            <div className="issueTabs_list">
                <img src={action} className="issueTabs_list_icon" alt="Actions icon" />
                <span className="issueTabs_list_label">Actions</span>
            </div>
            <div className="issueTabs_list">
                <img src={project} className="issueTabs_list_icon" alt="Projects icon" />
                <span className="issueTabs_list_label">Projects</span>
            </div>
            <div className="issueTabs_list">
                <img src={wiki} className="issueTabs_list_icon" alt="Wiki icon" />
                <span className="issueTabs_list_label">Wiki</span>
            </div>
            <div className="issueTabs_list">
                <img src={security} className="issueTabs_list_icon" alt="Security icon" />
                <span className="issueTabs_list_label">Security</span>
            </div>
            <div className="issueTabs_list">
                <img src={insights} className="issueTabs_list_icon" alt="Insights icon" />
                <span className="issueTabs_list_label">Insights</span>
            </div>
        </section>
    )
}

export default HeaderTabs
