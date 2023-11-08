import { useEffect, useState } from "react";
import FetureBlogTabel from "../../Components/FetureBlogTabel/FetureBlogTabel";

const FeatureBlogs = () => {
    const [tabels, setTabel] = useState()
    const url = ('http://localhost:5000/api/v1/all-blogs')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTabel(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Title</th>
                            <th>Blog Owner</th>
                            <th>Blog Owner Profile</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            tabels.map(tabel => <FetureBlogTabel key={tabel._id} tabel={tabel}></FetureBlogTabel>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeatureBlogs;