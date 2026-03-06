import Hero from "../components/hero"
import Infomation from "../components/info.jsx"
import ReleaseSection from "../components/Release"
import { data } from '../data/data.js'
import { useNavigate } from "react-router"
const HomePage = ({ searchTerm }) => {
  const heroItem = data[0]
  const navigate = useNavigate()

  const filteredData = data.filter(item => 
    item.movieName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>  
      <main className="container">
        <section className="explore">
          <h2 className="section-subtitle">Explore</h2>
          <p className="section-lead">What are you gonna watch today ?</p>
          <Hero
            image={heroItem.image}
            title={heroItem.movieName}
            description={heroItem.description}
          />
        </section>

        <ReleaseSection title="New Release" items={filteredData} onSelect={(item) => navigate(`/viewfilm/${item.id}`)} />
      </main>
      <Infomation/>
      </>
  )
}

export default HomePage