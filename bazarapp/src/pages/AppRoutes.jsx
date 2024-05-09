import {BrowserRouter,Routes,Route} from "react-router-dom"
import MainPage from "./MainPage/MainPage"
import MyPosts from "./MyPosts/MyPosts"
import CreatePost from "./CreatePost/CreatePost"
import SeePost from "./SeePost/SeePost"
import Login from "./Login/Login"
import Register from "./Register/Register"
import NotFound from "./NotFound/NotFound"

export default function AppRoutes(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/myposts" element={<MyPosts/>}/> 
            <Route path="/createpost" element={<CreatePost/>}/>
            <Route path="/seepost" element={<SeePost/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/notfound" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    )
}