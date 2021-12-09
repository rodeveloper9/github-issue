import React from "react";
import listingIcon from '../../Images/issuesList.png';
import prIcon from '../../Images/prWhite.png';
import commentIcon from '../../Images/comment.png';
import LazyLoad from "react-lazyload";

const ListingItem = ({ data = [] }) => {

    const getLabels = (labels) => {
        return labels.map((label, index) => {
            const { name = '', color = '' } = label;
            return <span style={{ background: `#${color}` }} key={index}>{name}</span>
        })
    };
    const dateDiff = (d1, d2) => {
        if (!d1 || !d2)
            return '-';

        const date2 = new Date(d1),
            date1 = new Date(d2),
            timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    };

    return (
        <section className="isuesList">
            {data.map((list, index) => {
                const { title = '', number = '', user = {}, comments = 0, labels = [], updated_at = '' } = list;
                const { login = '', avatar_url = '' } = user;
                const allLabels = getLabels(labels);
                const _dateDiff = dateDiff(new Date(), updated_at);

                return (
                    <LazyLoad
                        once={true}
                        placeholder={'Loading....'}
                        key={index}
                    >
                        <div className="isuesList_item" key={index}>
                            <div className="isuesList_item_content">
                                <img src={listingIcon} className="isuesList_item_icon" alt="Issue List Icon" />
                                <div className="isuesList_item_list">
                                    <h1 className="isuesList_item_content_head">
                                        <a href={`https://github.com/facebook/react/issues/${number}`} className='isuesList_item_content_link'>{title}</a>
                                        <span className="isuesList_item_content_status"> {allLabels}</span>
                                    </h1>
                                    <p className="isuesList_item_content_txt">#{number} opened {_dateDiff} hours ago by {login}</p>
                                </div>
                            </div>
                            {/* <div className="isuesList_item_pr">
                                <img src={prIcon} className="isuesList_item_icon" alt="Issue List PR" />
                            </div> */}
                            <div className="isuesList_item_user">
                                <img src={avatar_url} className="isuesList_item_icon" alt="Issue List user profile" title={`Assigned to ${login}`} />
                            </div>
                            {comments > 0 ?
                                <a className="isuesList_item_comment" href={`https://github.com/facebook/react/issues/${number}`}>
                                    <img src={commentIcon} className="isuesList_item_icon" alt="Issue List comment" />
                                    <span className="isuesList_item_comntCount">{comments}</span>
                                </a>
                                : ''
                            }
                        </div>
                    </LazyLoad>
                )
            })
            }
        </section>
    )
}

export default ListingItem
