
import {Route, Routes} from 'react-router-dom';
import Profile from './pages/Profile';
import Collage from './pages/Collage';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import VerifyEmail from './pages/VerifyEmail';
import Navbar from './common/topdesign/Navbar';
import Home from './pages/Home';
import StudentProfile from './component/profilecomp/studentpro/StudentProfile';
import DocInfo from './component/profilecomp/studentpro/DocInfo';
import CollageInfo from './component/profilecomp/studentpro/CollageInfo';
import StudentUpdateForm from './component/profilecomp/studentpro/StudentUpdateForm';
import ProctedRoutes from './component/core/ProctedRoutes';
import OpenRoutes from './component/core/OpenRoutes';
import CollageStudentDetails from './pages/CollageStudentDetails';
import CollageAllstudent from './component/profilecomp/collagepro/CollageAllstudent';
import CseStudent from './component/profilecomp/collagepro/CseStudent';
import Mestudent from './component/profilecomp/collagepro/Mestudent';
import Eestudent from './component/profilecomp/collagepro/Eestudent';
import CeStudent from './component/profilecomp/collagepro/CeStudent';
import AiStudent from './component/profilecomp/collagepro/AiStudent';
import UpdateProfile from './component/profilecomp/studentpro/UpdateProfile';
import InternetAvable from './component/setting/InternetAvable';
import CollageProfile from './component/collage/CollageProfile';
import CollagePage from './component/collage/CollagePage';

function App() {
  
  return (
    <div className="flex-row justify-center mt-16  min-h-screen">
      
    <Routes>
    <Route path="/login" element={<Signin />} /> 
          <Route path="/signup" element={<SignUp />} />  
          <Route path="/verify-email" element={<VerifyEmail />} /> 
    </Routes>
      <ProctedRoutes> <Navbar/>
     
        <Routes>
          
          <Route path="/" element={<Home /> }/>
          <Route path="/collage" element={<Collage/>} >
            <Route index element={<CollagePage/>}/>
            <Route path='collage_profile' element={<CollageProfile/>} />
          </Route>
          {/* <Route path='/collage-student-details' element={<CollageStudentDetails/>} >


           <Route index element={<CollageAllstudent/>}/>

           <Route path="/all" element={<CollageAllstudent/>}/>
            <Route path="/cselink" element={<CseStudent/>}/>
            <Route path="/melink" element={<Mestudent/>}/>
            <Route path="/eelink" element={<Eestudent/>}/>
            <Route path="/celink" element={<CeStudent/>}/>
            <Route path="/ailink" element={<AiStudent/>}/>
          </Route>  */}


          <Route path="/profile" element={<Profile /> }>
    
            <Route index element={<StudentProfile/>}/>
            <Route path="infolink" element={<StudentProfile/>}/>
            <Route path="collageinfo" element={<CollageInfo/>}/>
            <Route path="docinfo" element={<DocInfo/>}/>
            <Route path="updateform" element={<StudentUpdateForm/>}/>
            <Route path="updateprofile" element={<UpdateProfile/>}/>
            
          </Route>
          <Route path='/internet' element={<InternetAvable/>}/>
        </Routes>
      </ProctedRoutes>

      </div>
  );
}
export default App;