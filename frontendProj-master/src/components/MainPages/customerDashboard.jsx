import React from 'react'
import data from '../CustomerPages/data'
import services from '../CustomerPages/services'
import arrow from '../Icons/ic_round-navigate-next.svg'
import RecentUpdates from "../recentUpdates"


const members =['mem1'];

const images = members.map(image => {
    return <img key={image} src={require(`../Icons/${image}.png`)} className="img-responsive" />
 });

export default function CustomerDashboard() {
    return (
        <div className="grid grid-cols-9 gap-3">
            <div class="flex flex-col gap-y-10 pt-7 col-span-6">
                <div className="projectBox">
                    <h2 className="intro">Welcome Back, <span style={{color:"#3F4AAF"}}>Customer 1</span></h2>
                    <p className="title">Ongoing Projects</p>
                    {data.map(projects => {
                        return (
                            <div className='projectBar'>
                                <div className="projectName">
                                    <span style={{fontWeight:"700"}}>Project</span> {projects.name}
                                    <div className='Bar'></div>
                                </div>x
                                <div class="date">
                                    <p style={{fontWeight:"700"}}>Due By:</p>
                                    <p style={{fontWeight:"400"}}>{projects.date}</p>
                                </div>
                                <p className='status'>{projects.status}</p>
                                <div className='verticalBar'></div>
                                <div className="MemberChat">
                                    <div className="memberName">
                                        Team members
                                        <div>
                                            {images}
                                        </div>
                                    </div>
                                    <button className="chat">
                                        Chat
                                    </button>
                                </div>
                            </div>)
                    })}
                </div>
                <div>
                    <p className="title">Services</p>
                    <div className="serviceBox">
                        {services.map(service => {
                            return (
                                <div className="serviceTab" id={service.class} ><p>{service.name}</p>
                                    <div className="align"> 
                                        <a href="./service">View Details</a>
                                        <button className="customerPrice">{service.price}</button>
                                    </div>
                                </div>
                            )
                        })}
                        <button className="more"><img src={arrow} alt=""></img></button>
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <RecentUpdates name="Client 1"/>
            </div>
        </div>)
}