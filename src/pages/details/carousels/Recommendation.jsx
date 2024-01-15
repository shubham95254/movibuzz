import React from "react";

import Carousel from "../../../components/carousel/Carousel"
import fetchData from "../../../hooks/fetchData";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = fetchData(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;
