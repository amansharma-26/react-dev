import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (
        <div className='card'>
            <div>
                <div className="top">
                    <img src={props.logo} alt="" />
                    <button>Save <Bookmark size={12} /></button>
                </div>
                <div className="center">
                    <h3>{props.name}<span> {props.postedDays}</span></h3>
                    <h2>{props.role}</h2>
                    <div className="tag">
                        <h4>{props.jobType}</h4>
                        <h4>{props.jobLevel}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>${props.Salary}/hour</h3>
                    <p>{props.city}, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card