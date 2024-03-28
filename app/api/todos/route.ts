// export async function GET(request: Request){
//     return Response.json("GET request sent")
// }
// export async function POST(request: Request){
//     return Response.json("POST request sent")
// }
// export async function PUT(request: Request){
//     return Response.json("PUT request sent")
// }
// export async function DELETE(request: Request){
//     return Response.json("DELETE request sent")
// }
// export async function PATCH(request: Request){
//     return Response.json("PATCH request sent")
// }

import { createTodo, getTodos } from "./db";

export async function GET() {
    return Response.json(getTodos())
}

export async function POST(request: Request) {
    const body = await request.json()

    createTodo(body.text);
    return Response.json("Created")
}
