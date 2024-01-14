import { projects } from "@/app/api/project-list/data";

//Get a specific project
export async function GET( 
    //request: Request, { params }: { params: { id: string } })
    //If you not using request parameter, we can prefix it with underscore
    _request: Request, { params }: { params: { id: string } })
{

     const project = projects.find(
        (project) => project.id === parseInt(params.id)
     );   
    //return Response.json("new response");
    return Response.json(project);
}


//PUT update or create if not exist, UPSERT
//PATCH update the item
export async function PATCH(
    request: Request, {params}: { params: {id: string}})
{
    const body = await request.json();
    const { img } = body;
    const index = projects.findIndex(
        (project) => project.id === parseInt(params.id)
    );
    projects[index].img = img;
    return Response.json(projects[index]);
}


//DELETE REQUEST
export async function DELETE(
    request: Request, {params}: { params: {id: string} })
{
    const index = projects.findIndex(
        (project) => project.id == parseInt(params.id)
    );
    const deleteProject = projects[index] //use to notify user this is the one deleted
    projects.splice(index, 1) // this is actual deletion
    return Response.json(deleteProject);
}