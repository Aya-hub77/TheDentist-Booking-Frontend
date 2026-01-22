import './About.css'
import team from '../assets/team.webp'
import { aboutValues } from '../assets/about'

const About = () => {
   return (
      <section className='about' id='about'>
        <img src={team} alt="Our Team" loading='lazy'/>
        <div className='about-text'>
            <h2>Your Smile, Our Passion</h2>
            <p>At our practice, we believe great dentistry is about more than healthy teeth, it’s about confidence, comfort, and care. Our experienced team combines advanced technology with a gentle touch to deliver personalized dental solutions for patients of all ages.</p>
            <div className='values'>
                {aboutValues.map((value, idx) =>(
                <div className='item' key={idx}>
                    <div className='icon'><value.icon aria-hidden="true"/></div>
                    <div className='text'>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </section>
   )
}
export default About