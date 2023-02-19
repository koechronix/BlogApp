import Post from "../../components/post/Post"
import SideBar from "../../components/sidebar/SideBar"
import { SinglePost } from "../../components/SinglePost/SinglePost"
import "./single.css"

export const Single = () => {
  return (
    <div className="single">
        {/* <Post/> */}
        <SinglePost/>
        <SideBar/>
        </div>
  )
}
