import React, {useEffect} from 'react'
import AdminNav from '../Components/AdminNav'
import AdminHero from '../Components/AdminHero'
import AdminSections from '../Components/AdminSections'

const Admin = () => {
  useEffect(() => { document.title = "TheDentist - Admin"; }, []);
   return (
      <div>
        <AdminNav/>
        <AdminHero/>
        <AdminSections/>
      </div>
   )
}
export default Admin