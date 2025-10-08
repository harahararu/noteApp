import { FC } from "react"
import ProjectRegist from "./projectRegist"
import TaskRegist from "./taskRegist"
// import ProjectDetail from "./projectDetail"
import TaskDetail from "./taskDetail"

export type ViewType = 'projectRegist' |
                'taskRegist' |
                'progectDetail' |
                'taskDetail'

type DetailType = {
    viewType : ViewType,
    close : () => void
}

const DetailView:FC<DetailType> = ({viewType, close}) => {
    return (
        <>
            {viewType == 'projectRegist' &&
                <ProjectRegist close={close}/>
            }
            {viewType == 'taskRegist' &&
                <TaskRegist close={close}/>
            }
            {viewType == 'taskDetail' &&
                <TaskDetail close={close}/>
            }
        </>
    )
}

export default DetailView;