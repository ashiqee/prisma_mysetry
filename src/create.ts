import { PrismaClient, UserRole } from "@prisma/client";


const prisma = new PrismaClient();


const main = async()=>{
    const createUser = await prisma.user.create({
        data:{
            username:"user4",
            email:"user4@ph.com",
            age:28,
            role: UserRole.user
        }
    })

    console.log(createUser);
    

    const createProfile = await prisma.profile.create({
        data:{
            bio:"This is a bio",
            userId:4
        }
    })

    // const createCategory = await prisma.category.create({
    //     data:{
    //         name:"Python"
    //     }
    // })


    // const createPost = await prisma.post.create({
    //     data:{
    //         title:"This is title",
    //         content:"This is content of the post",
    //         authorId:1,
    //         postCategory:{
    //               create:[
    //                 {
    //                     categoryId:1
    //                 },
    //                 {
    //                     categoryId: 2
    //                 },
    //                 {
    //                 categoryId:3
    //         //     category:{
    //         //         connect:{
    //         //             id: 1
    //         //         }
    //         //     }
    //           }]
    //         }

    //     },
    //     include:{
    //         postCategory:true
    //     }
    // })

    // console.log(createPost);
    

    

}


main()