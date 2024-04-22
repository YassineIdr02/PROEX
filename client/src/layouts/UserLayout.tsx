import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'


const UserLayout = () => {
  return (

     <div className="grid grid-cols-5">
      <div className="col-span-1 sticky top-0 left-0">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout