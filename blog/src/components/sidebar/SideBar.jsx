import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME </span>
            <img className="sidebarImg" src="https://images.unsplash.com/photo-1643379840406-ab382274409d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi aliquam quia qui in nisi magnam sunt minima magni quae explicabo aspernatur ad expedita beatae at fuga eligendi, nam distinctio, quibusdam fugit repudiandae laboriosam nobis?</p>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>  
        <div className="sidebarSocial">
         <i class="sidebarIcons fab fa-facebook-square "></i>
         <i class="sidebarIcons fab fa-instagram "></i>
         <i class="sidebarIcons fab fa-twitter "></i>
        </div>
        </div>
    </div>
  )
}
