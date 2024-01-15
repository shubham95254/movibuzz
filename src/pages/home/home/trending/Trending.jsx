import React, { useState } from "react";

import Carousel from "../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import fetchData from "../../../hooks/fetchData";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = fetchData(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;
