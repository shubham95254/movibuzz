import React, { useState } from "react";

import Carousel from "../../components/carousel/Carousel";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";

import fetchData from "../../hooks/fetchData";

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = fetchData(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default Popular;
