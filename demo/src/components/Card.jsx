import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (
        <div className='card'>
            <div>
                <div className="top">
                    <img src="https://th.bing.com/th/id/OIP.hxicUSZHVQjYFqSSe3BHMgHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    <button>Save <Bookmark size={12} /></button>
                </div>
                <div className="center">
                    <h3>Amazon<span> 5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div className="tag">
                        <h4>Part Time</h4>
                        <h4>Senior Level</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>${props.price}/hr</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card