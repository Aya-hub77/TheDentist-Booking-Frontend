import './Testimonials.css'
import { testimonials } from '../assets/testimonials';

const Testimonials = () => {
   return (
      <section className='testimonials' id='testimonials'>
        <h2>What Our Patients Think About Us</h2>
        <div className='reviews'>
        {testimonials.map((item, idx) =>(
            <div key={idx} className='item'>
                <p>{item.star}</p>
                <p className='review'>{item.review}</p>
                <h5>{item.name}</h5>
            </div>
        ))}
        </div>
      </section>
   )
}
export default Testimonials