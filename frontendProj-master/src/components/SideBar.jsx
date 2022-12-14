import { Link } from 'react-router-dom';
const scrollUp=()=>{
    window.scrollTo(0,0)
}
const Sidebar = () => {
    const SidebarData = [
        "home","team","projects","employee","superadmin",
]
const iconClass = "hover:bg-gray-400 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
// const svgClass = "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
const iconArray = SidebarData.map(x => {
    let path
    if (x == "projects") {path ="/Request"}
    else{path = `/${x}`}
    return (
    <li>
                <Link to={path} id={x}>
                    <button onClick={scrollUp}>

                <img src={require(`./Icons/${x}.png`)} />
                    </button>
                </Link>
    </li>
    )
})        
return (
       
        <aside className="w-fit drop-shadow-lg border-r-2 border-r-gray-200 fixed" aria-label="Sidebar">
    <div className="overflow-y-auto flex flex-col justify-between py-10 px-6 h-screen bg-gray-150 rounded dark:bg-gray-800">
        <div>
        <ul className="space-y-10 flex flex-col h-3/4 justify-between items-center">
            {iconArray}
        </ul>
    </div>
                <a href="http://127.0.0.1:8080/Client_L.html" className = {iconClass}>
                    <img src={require(`./Icons/logout.png`)} />
                </a>
    </div>
        </aside>    
)
}

export default Sidebar