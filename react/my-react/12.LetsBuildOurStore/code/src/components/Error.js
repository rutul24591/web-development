import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(`Error: `, error);
    return (
        <div className="error-container">
            <div>
                <p>Oops Error encountered. Something went wrong</p>
                <h3>{error?.status}</h3>
            </div>
        </div>
    );
};

export default Error;
