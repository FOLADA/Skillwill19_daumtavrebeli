import EditPage from "./Pages/EditPage"
import TODO from "./TODO"

const router = [
    {
        element : <TODO/>,
        path: "/"
    },
    {
        element : <EditPage/>,
        path : "/edit"
    }
]
export default router