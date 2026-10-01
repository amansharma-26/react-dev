import Card from './components/Card/Card.jsx'

const App = () => {

  const jobOpenings = [
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      company_name: "BrightPath Technologies",
      posted_days: "5 days ago",
      role: "Frontend Developer",
      job_type: "Full time",
      job_level: "Mid level",
      pay_based_on_hour: "70",
      city_in_india: "Bengaluru"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      company_name: "NovaCore Systems",
      posted_days: "2 days ago",
      role: "Senior Backend Engineer",
      job_type: "Full time",
      job_level: "Senior level",
      pay_based_on_hour: "89",
      city_in_india: "Hyderabad"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      company_name: "GreenOrbit",
      posted_days: "1 day ago",
      role: "Data Analyst",
      job_type: "Part time",
      job_level: "Mid level",
      pay_based_on_hour: "76",
      city_in_india: "Pune"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      "company_name": "Vertex Labs",
      "posted_days": "7 days ago",
      "role": "Product Designer",
      "job_type": "Full time",
      "job_level": "Mid level",
      "pay_based_on_hour": "54",
      "city_in_india": "Mumbai"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      "company_name": "CloudHarbor",
      "posted_days": "3 days ago",
      "role": "Cloud Solutions Architect",
      "job_type": "Full time",
      "job_level": "Senior level",
      "pay_based_on_hour": "79",
      "city_in_india": "Chennai"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      "company_name": "FinBridge",
      "posted_days": "4 days ago",
      "role": "QA Automation Engineer",
      "job_type": "Full time",
      "job_level": "Mid level",
      "pay_based_on_hour": "59",
      "city_in_india": "Gurugram"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      "company_name": "LearnNest",
      "posted_days": "6 days ago",
      "role": "Content Strategist",
      "job_type": "Part time",
      "job_level": "Mid level",
      "pay_based_on_hour": "80",
      "city_in_india": "Jaipur"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      "company_name": "RapidCart",
      "posted_days": "1 day ago",
      "role": "Mobile App Developer",
      "job_type": "Full time",
      "job_level": "Senior level",
      "pay_based_on_hour": "₹110",
      "city_in_india": "Noida"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      "company_name": "BluePeak Analytics",
      "posted_days": "8 days ago",
      "role": "Machine Learning Engineer",
      "job_type": "Full time",
      "job_level": "Senior level",
      "pay_based_on_hour": "65",
      "city_in_india": "Bengaluru"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      "company_name": "UrbanLeaf",
      "posted_days": "2 days ago",
      "role": "Social Media Manager",
      "job_type": "Part time",
      "job_level": "Mid level",
      "pay_based_on_hour": "90",
      "city_in_india": "Kochi"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      "company_name": "KineticWorks",
      "posted_days": "5 days ago",
      "role": "Engineering Manager",
      "job_type": "Full time",
      "job_level": "Senior level",
      "pay_based_on_hour": "104",
      "city_in_india": "Delhi"
    },
    {
      "company_image_logo_link": "https://www.bing.com/th/id/OIP.RuaMW1P_yFrRbrANRqQchAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
      "company_name": "Silverline Health",
      "posted_days": "3 days ago",
      "role": "UX Researcher",
      "job_type": "Part time",
      "job_level": "Mid level",
      "pay_based_on_hour": "49",
      "city_in_india": "Ahmedabad"
    }
  ];

  return (<div className="parent">
    {jobOpenings.map(function (elem,idx) {
      return <div key={idx}>
        <Card Salary={elem.pay_based_on_hour} 
        logo={elem.company_image_logo_link} 
        name={elem.company_name} 
        postedDays={elem.posted_days} 
        role={elem.role} 
        jobType={elem.job_type} 
        jobLevel={elem.job_level}
        city={elem.city_in_india} />
      </div>
    })}
  </div>)
}

export default App