import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const FeatureBlogs = () => {
    const { user } = useAuth();
    const [tabels, setTabels] = useState([]);

    const url = `https://blog-server-store.vercel.app/api/v1/all-blogs?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTabels(data))
    }, [url]);
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Blog Owner Profile</th>
                            <th>Blog Owner</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tabels.map((tabel) => {
                                const { title, displayName, photoURL } = tabel
                                return (
                                    <tr key={tabels.id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img
                                                            src={photoURL}
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{displayName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-bold text-gray-600 capitalize">
                                            {title}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeatureBlogs;

// const SubmittedAssignmentsTable = ({ data }) => {
//     const submittedAssignments = data;
//     return (
//         <div className="overflow-x-auto">
//             <table className="table">
//                 {/* head */}
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Examinee</th>
//                         <th>Marks</th>
//                         <th>Give Mark</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* rows*/}
//                     {submittedAssignments.map((submittedAssignment) => {
//                         const { assignment, examineeName } = submittedAssignment;
//                         return (
//                             <tr key={submittedAssignment._id}>
//                                 <td>
//                                     <div className="flex items-center space-x-3">
//                                         <div className="avatar">
//                                             <div className="mask mask-squircle w-12 h-12">
//                                                 <img
//                                                     src={assignment.image}
//                                                     alt="Avatar Tailwind CSS Component"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="font-bold">{assignment.title}</div>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="font-bold text-gray-600 capitalize">
//                                     {examineeName}
//                                 </td>
//                                 <td>{assignment.marks}</td>
//                                 <th>
//                                     <GiveMark submittedAssignment={submittedAssignment} />
//                                 </th>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
