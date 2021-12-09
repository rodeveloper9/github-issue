import React, { Fragment, useEffect, useState } from "react";
import Header from "../Header/Header";
import ListingItem from "./ListingItem";

const IssueListing = () => {
    const [listData, setListData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/repos/facebook/react/issues')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response
            })
            .then(data => {
                setListData(data)
            })
            .catch(error => {
                console.log('error feting issues lisitng : ', error);
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    return (
        <Fragment>
            <Header issues={listData.length} />
            {loading ? 'Loading.....'
                :
                error ?
                    'Please try again'
                    :
                    <ListingItem data={listData} />
            }
        </Fragment>
    )
}

export default IssueListing
