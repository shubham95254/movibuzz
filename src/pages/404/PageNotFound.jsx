import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/contentWrapper";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <div><h1>404</h1></div>
                <div><h3>Page Not Found</h3></div>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;
