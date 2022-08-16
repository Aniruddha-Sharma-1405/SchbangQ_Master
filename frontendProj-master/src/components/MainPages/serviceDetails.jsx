import React from "react";
import laptop from '../Icons/laptop.png';
// import polygon1 from './Polygon1.svg'
// import polygon2 from './Polygon2.svg'
// import statsLine from './line-stats.svg'
// import statsSolid from './solid-stats.svg'
// import homeSolid from './filled-home.svg'
// import homeLine from './line-home.svg'
// import claritySolid from './clarity_help-solid.svg'
// import clarityLine from './clarity_help-line.svg'
// import logOut from './log-out.svg'
import arrow from '../Icons/bi_arrow-down.svg'
export default function ServiceDetails(props) {
    return (<div className="main">
        {/* <img src={polygon1} alt="" className="polygon1"></img> */}
        {/* <img src={polygon2} alt="" className="polygon2"></img> */}
        {/* <div className="sideBar">
        <img src={homeLine} className="home" alt="" onMouseOver={e => (e.currentTarget.src = {homeSolid})}></img>
        <img src={statsLine} alt="" className="stats" onMouseOver={e => (e.currentTarget.src = {statsSolid})}></img>
        <img src={clarityLine} alt="" className="clarity" onMouseOver={e => (e.currentTarget.src = {claritySolid})}></img>
        <img src={logOut} className="logOut" alt=""></img>
        </div> */}
        <div className="c"> 
            <div class="info">
                <img  className="arrow" src={arrow} alt=""></img>
                <h1>SECURITY AUDITING</h1>
                <button className="price">$12,000</button>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                    risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
                    eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
                    auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
                    ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
                    lacinia. Aliquam in elementum tellus.
                </p>
                <button className="Request" variant="outlined" onClick={props.handleClick}>Request</button>
            </div>
                <img src={laptop} alt="" className="laptop"></img>
        </div>
        <div className="col-span-3">
            <div className="fixed px-6 pt-4 h-full text-sm bg-gray-150">
                <div className="w-full flex flex-col gap-y-3">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-x-2 items-center">
                            <img src={require("../Icons/notifications.png")} />
                            <img src={require("../Icons/bell.png")} />
                        </div>
                        <img className="profilePicImg" src={require("../Profiles/Ayush.png")} />
                    </div>
                    <h1 className="font-bold text-base">Recent Updates</h1>
                    <p>Service Request from <span className="text-blue-600">Rahul Thakar</span> Assign now</p>
                    <button className="px-4 py-2 bg-violetCustom rounded-md text-white font-bold w-fit">
                    Assign
                    </button>
                    <p>
                    esse magna dolore luptatum consequat, amet, vel nisl molestie hendrerit nulla laoreet et feugait aliquam
                    </p>
                    <p>
                    ex Duis velit feugiat ut nibh ullamcorper in laoreet consequat. dignissim nulla Lorem ad esse
                    </p>
                    <p>ut lobortis hendrerit consequat, quis at dolore minim</p>
                    <a className="underline decoration-dotted text-xs text-blue-600">See all</a>
                </div>
            </div>
        </div>
    </div>
    )
}