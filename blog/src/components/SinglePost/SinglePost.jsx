import "./singlePost.css"

export const SinglePost = () => {
  return (
    <div className="singlePost">
   <div className="singlePostWrapper">
        
        <img src="https://images.unsplash.com/photo-1632669075475-c47661c2d9a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80" alt="" className="singlePostImg" />

    <h1 className="singlePostTitle">
      Lorem ipsum dolor sit amet consectetur.
      <div className="singlePostEdit">
      <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i class="singlePostIcon fa-solid fa-trash-can"></i>
      </div>
    </h1>
    <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Lorem</b></span>
        <span className="singlePostDate">1 hour ago</span>
    </div>
     <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum quam vitae labore deleniti reprehenderit inventore harum ad mollitia perferendis accusamus obcaecati, cumque sed necessitatibus non explicabo, autem repellat, veniam praesentium magnam! Eaque, quasi praesentium! Velit magni culpa incidunt tempore at, sequi reiciendis odio similique optio mollitia ipsam. Sit illum animi eveniet consequuntur atque magni ad corporis praesentium voluptates similique numquam nemo, dolorum tenetur saepe facere adipisci quaerat vero. Sunt ex error nemo quasi temporibus, aspernatur corporis expedita autem consectetur reiciendis odio asperiores ea quaerat atque cumque. Ea similique iusto a veniam corrupti perspiciatis animi vitae ipsa, nisi debitis assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur veniam, excepturi a autem magni alias nobis totam omnis asperiores numquam rerum deserunt animi vitae nihil sequi explicabo non voluptatum velit sint, accusamus, doloribus blanditiis soluta. Recusandae tenetur nisi harum adipisci sequi doloremque ea atque, aspernatur illo vitae similique ipsa.
     </p>
   </div>
    </div>
  )
}
