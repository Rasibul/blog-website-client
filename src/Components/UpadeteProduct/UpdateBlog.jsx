import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const UpdateBlog = () => {
    const blogs = useLoaderData()
    const { _id, title, photo, shortDescription, longDescription, catageroy } = blogs || {}
    const handelUpdateBlog = e => {
        const form = e.target
        const title = form.title.value
        const catageroy = form.catageroy.value
        const shortDescription = form.shortDescription.value
        const longDescription = form.longDescription.value
        const photo = form.photo.value
        const updateBlog = { title, catageroy, shortDescription, longDescription, photo }
        console.log(updateBlog)

        axios.put(`https://blog-server-store.vercel.app/api/v1/all-blogs/${_id}`, updateBlog)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    toast.success("Update Blog Sucessfully")
                    form.reset()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-10">
            <h2 className="text-3xl font-bold text-center">Update Blog</h2>
            <form onSubmit={handelUpdateBlog}>
                {/* form row title and catageroy */}
                <div className="md:flex gap-5 mb-8 ">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" defaultValue={title} placeholder="title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Catageroy</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="catageroy" defaultValue={catageroy} placeholder="catageroy" className="input input-bordered w-full" />
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
                            <textarea className="w-full block" name="shortDescription" defaultValue={shortDescription} cols={20} rows={4}></textarea>
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <label className="input-group">
                            <textarea className="w-full block" name="longDescription" defaultValue={longDescription} cols={40} rows={4}></textarea>
                        </label>
                    </div>
                </div>
                <div className="form-control mb-8 ">
                    <label className="label">
                        <span className="label-text">Phot Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" />
                    </label>
                </div>
                    <input type="submit" className=" px-4 py-4 rounded btn-block bg-blue-600 text-white" value="Update Blog" />
            </form>
        </div>
    );
};

export default UpdateBlog;