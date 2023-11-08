import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";


const AddBlog = () => {
    const {user} = useAuth()
    const handelFromItem = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const catageroy = form.catageroy.value
        const shortDescription = form.shortDescription.value
        const longDescription = form.longDescription.value
        const photo = form.photo.value
        const email = user.email
        const displayName = user.displayName
        const photoURL = user.photoURL
        const addBlog = {title,catageroy,shortDescription,longDescription,photo,email, displayName,photoURL,"date":new Date(Date.now())}
        axios.post("http://localhost:5000/api/v1/all-blogs",addBlog)
        .then(data =>{
            if(data.data.insertedId){
                toast.success("Blog Created Succesfuly")
                form.reset()
            }
        })
        .catch(err =>{
            console.log(err)
        })
        
    }
    return (
        <div className="bg-[#F4F3F0] p-10">
            <h2 className="text-3xl font-bold text-center">Add Blog</h2>
            <form onSubmit={handelFromItem}>
                {/* form row title and catageroy */}
                <div className="md:flex gap-5 mb-8 ">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Catageroy</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="catageroy" placeholder="catageroy" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from row for short description and photo url */}
                <div className="mb-8">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea className="w-full block" name="shortDescription" cols={20} rows={4}></textarea>
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <label className="input-group">
                            <textarea className="w-full block" name="longDescription" cols={40} rows={4}></textarea>
                        </label>
                    </div>
                </div>
                <div className="form-control mb-8 ">
                    <label className="label">
                        <span className="label-text">Phot Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" className=" px-4 py-4 rounded btn-block bg-blue-600 text-white" value="Add Blog" />
            </form>
        </div>
    );
};

export default AddBlog;