import React from 'react';
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const PageNotFound = () => {
    const loc = useLocation();
    return (
        <React.Fragment>
            <div id="notFound">
                <div className="notFound">
                    <div className="notFound-404">
                        <h1>404</h1>
                    </div>

                    <h2>
                        We are sorry, Page not found for <code>{loc.pathname}</code>
                    </h2>

                    <p>
                        The page you are looking for might have been removed.
                    </p>

                    <Link to="/">Back to home</Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default PageNotFound;