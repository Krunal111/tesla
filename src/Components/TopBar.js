import { React } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="top-bar py-3 px-2 bg-gray-50">
            <div className="container mx-auto">
                <p className="mb-0 text-center text-sm max-lg:text-xs">Until March 2023, new Model 3 and Model Y vehicles qualify for a $7,500 federal tax credit for eligible buyers. <Link to="/" className="underline hover:text-red-600 transition-all">Learn More</Link></p>
            </div>
        </div>
    )
}

export default TopBar;