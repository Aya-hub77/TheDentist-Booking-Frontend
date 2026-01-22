import './Services.css'
import { services } from '../assets/services'

const Services = () => {
   return (
      <section className='services' id='services'>
        <h2>We Can Help You With</h2>
        <div className='services-list'>
            {services.map((service, idx) =>(
            <div className='services-item' key={idx}>
                <img src={service.img} alt={service.title} loading='lazy'/>
                <h3>{service.title}</h3>
                <p>{service.descriprion}</p>
            </div>
            ))}
        </div>
      </section>
   )
}
export default Services