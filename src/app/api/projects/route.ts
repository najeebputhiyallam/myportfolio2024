import { projects } from "@/app/api/projects/data";

//Get all Projects
export async function GET(){
    return Response.json(projects);
}

//Add Items to Array
export async function POST(request: Request){
    const project = await request.json();
    const newProject = {
        id: projects.length + 1,
        img: project.img,
        url: project.url,
        title: project.title,
    };
    projects.push(newProject);
    return new Response(JSON.stringify(newProject),{
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}