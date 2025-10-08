import { FC, FormEventHandler } from "react"

type datailType = {
    close:()=>void
}

const ProjectRegist:FC<datailType> = ({close}) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        debugger
        const form = new FormData(event.currentTarget);
        const projectName = form.get("project-name") || "";
        const projectOverview = form.get("project-overview") || "";
        
        
        close();
      };
      
    return (
        <div className="w-[600px] h-[700px] bg-white">
            <div className="w-full text-center p-5 text-[20px] font-bold">新規プロジェクト</div>
            <div className="w-full">
                <form onSubmit={handleSubmit}>
                    <div className="m-6">
                        <label htmlFor="project-name" className="text-sm block">
                            プロジェクト名
                        </label>
                        <input 
                            id="project-name"
                            name="project-name"
                            type="text"
                            className="border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
                        />
                    </div>
                    <div className="m-6">
                        <label htmlFor="project-overview" className="text-sm block">
                            プロジェクト概要
                        </label>
                        <textarea 
                            id="project-overview"
                            name="project-overview"
                            rows={5}
                            className="border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500 resize-none"
                        />
                    </div>
                    <div className="m-6">
                        <input type='submit' className="w-full inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110" value='Add'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProjectRegist;