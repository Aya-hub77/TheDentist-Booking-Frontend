import React, {useState, useEffect} from 'react'
import './Admin.css'
import axios from 'axios';

const AdminHero = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const today = new Date();
    const dateString = today.toDateString();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(`${API_URL}/stats`, { withCredentials: true } );
                const stats = response.data;
                setCards([
                    { id: 1, title: "Today", number: stats.today, description: `we have ${stats.today} patients today` },
                    { id: 2, title: "This Week", number: stats.thisWeek, description: `we have ${stats.thisWeek} patients this week` },
                    { id: 3, title: "This Month", number: stats.thisMonth, description: `we have ${stats.thisMonth} patients this month` },
                    { id: 4, title: "Total", number: stats.total, description: `we have total of ${stats.total} patients` },
                ]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStats();
    }, [API_URL]);
   return (
      <main>
        <div className='admin-hello'>
            <h2>Welcome back, Doctor 👋</h2>
            <p>{dateString}</p>
        </div>
        <div className='admin-cards'>
            {cards.map((card, idx) => (
                <div key= {idx} className='admin-card'>
                    <p>{card.title}</p>
                    <h3>{card.number}</h3>
                    <span>{card.description}</span>
                </div>
            ))}
        </div>
      </main>
   )
}
export default AdminHero