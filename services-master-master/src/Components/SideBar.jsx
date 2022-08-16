import React from 'react';
import { Link } from 'react-router-dom';
const scrollUp=()=>{
    window.scrollTo(0,0)
}
const Sidebar = () => {
    const SidebarData = [
        "projects","employee","superadmin" //Team is to be added
]
const iconClass = "hover:bg-gray-400 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dsfadfasfas:text-white hover:bg-gray-100 dsfadfasfas:hover:bg-gray-700"
const iconArray = SidebarData.map(x => {
    let path
    if (x == "projects") {path ="/Request"}
    else{path = `/${x}`}
    return (
    <li>
                <Link to={path} id={x} >
                    <button onClick={scrollUp}>

                <img className='p-4 hover:bg-blue-300 rounded-md hover:filter-invert' src={require(`../Icons/${x}.png`)} />
                    </button>
                </Link>
    </li>
    )
})        
return (
        <aside className=" w-fit drop-shadow-lg border-r-2 border-r-gray-200 fixed" aria-label="Sidebar">
    <div className="overflow-y-auto flex flex-row md:flex-col justify-between py-10 px-6 h-screen bg-gray-150 rounded ">
        <div>
        <ul className="space-y-10 flex flex-row md:flex-col h-3/4 justify-between items-center">
        <li  className='hover:bg-gray-700'>
                <Link to="/" id="/" className='p-4 hover:bg-blue-300     hover:filter-invert rounded-md'>
                    <button onClick={scrollUp}>

                <img src={require(`../Icons/home.png`)} />
                    </button>
                </Link>
    </li>
            {iconArray}
        </ul>
    </div>
                <a href="#" className = {iconClass}>
                    <img src={require(`../Icons/logout.png`)} />
                </a>
    </div>
        </aside>    
)
}

export default Sidebar