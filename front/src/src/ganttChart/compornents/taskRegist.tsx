import { FC } from "react"

type datailType = {
    close:() => void
}

const TaskRegist:FC<datailType> = (close) => {
    return (
        <div className="w-[600px] h-[700px] bg-white">
            <div className="w-full text-center p-5 text-[20px] font-bold">タスク登録</div>
            <div className="w-full">
                <form action="">
                    <div className="m-6">
                        <label htmlFor="task-name" className="text-sm block">
                            タスク名
                        </label>
                        <input 
                            id="task-name"
                            type="text"
                            className="border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
                        />
                    </div>
                    <div className="m-6 flex">
                        <div className="w-2/5">
                            <label htmlFor="start-date" className="text-sm block">
                                開始日
                            </label>
                            <input 
                                id="start-date"
                                type="date"
                                className="border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            />
                        </div>
                        <div className="w-1/5 text-center">
                            <p className="mt-5">～</p>
                        </div>
                        <div className="w-2/5">
                            <label htmlFor="end-date" className="text-sm block">
                                終了日
                            </label>
                            <input 
                                id="end-date"
                                type="date"
                                className="border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="m-6">
                        <label htmlFor="incharge-user" className="text-sm block">
                            担当
                        </label>
                        <input 
                            id="incharge-user"
                            type="text"
                            className="border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
                        />
                    </div>
                    <div className="m-6">
                        <div className="w-full inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110">Add</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskRegist;