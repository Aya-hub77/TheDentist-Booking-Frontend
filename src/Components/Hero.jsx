import './Hero.css'
import reviews from '../assets/reviews.png'

const Hero = ({setShow}) => {
   return (
      <main className='hero'>
        <div className='hero-container'>
            <h1>Dental Care for Every Smile</h1>
            <p>Everyone deserves a healthy, confident smile.</p>
            <p>At Dental Care, we believe everyone deserves a healthy, confident smile. Whether you need restoration, orthodontic, or routine check ups.</p>
            <button type='button' onClick={(e) => { e.stopPropagation(); setShow(prev =>!prev);}}>Book Appointment</button>
        </div>
        <img src={reviews} alt="4.9 star google reviews"/>
      </main>
   )
}
export default Hero