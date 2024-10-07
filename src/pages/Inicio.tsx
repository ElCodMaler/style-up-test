import { Post } from "../components/ui/Post"
import { CarruselUsers } from "../components/gen/CarruselUsers"

export function Inicio(){

    const posts = [
        {user: 'UserStyleUp_1', text: 'Colection Japan Streets Style Up 2024', image: '../../public/img_ropa1.jpg'},
        {user: 'UserStyleUp_2', text: 'Colection Japan Streets Style Up 2024', image: '../../public/img_ropa2.jpg'},
        {user: 'UserStyleUp_3', text: 'Colection Japan Streets Style Up 2024', image: '../../public/img_ropa3.jpg'},
        {user: 'UserStyleUp_4', text: 'Colection Japan Streets Style Up 2024', image: '../../public/img_ropa4.jpg'},
        {user: 'UserStyleUp_5', text: 'Colection Japan Streets Style Up 2024', image: '../../public/img_ropa5.jpg'},
        {user: 'UserStyleUp_6', text: 'Colection Japan Streets Style Up 2024', image: '../../public/img_ropa6.jpg'}
    ]
    const users = [
        { name: 'UserStyleUp_1', image: '../../public/usuario1.jpg'},
        { name: 'UserStyleUp_2', image: '../../public/usuario2.jpg'},
        { name: 'UserStyleUp_3', image: '../../public/usuario3.jpg'},
        { name: 'UserStyleUp_4', image: '../../public/usuario4.jpg'},
        { name: 'UserStyleUp_5', image: '../../public/usuario5.jpg'},
        { name: 'UserStyleUp_6', image: '../../public/usuario6.jpg'},
        { name: 'UserStyleUp_7', image: '../../public/usuario1.jpg'},
        { name: 'UserStyleUp_8', image: '../../public/usuario2.jpg'},
    ]

    return (
        <main id='inicio' className="absolute md:w-[80%] sm:w-full">
            <CarruselUsers users={users}/>
            <section className="relative">
                {posts.map(post => (
                    <Post key={post.user} post={post}/>
                ))}
            </section>
        </main>
    )
}