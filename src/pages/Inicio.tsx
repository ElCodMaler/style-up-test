import { Post } from "../components/ui/Post"
import { CarruselUsers } from "../components/gen/CarruselUsers"
//imagenes de ropa
import image_ropa1 from '../../public/img_ropa1.jpg'
import image_ropa2 from '../../public/img_ropa2.jpg'
import image_ropa3 from '../../public/img_ropa3.jpg'
import image_ropa4 from '../../public/img_ropa4.jpg'
import image_ropa5 from '../../public/img_ropa5.jpg'
import image_ropa6 from '../../public/img_ropa6.jpg'
//imagenes de usuario
import image_user1 from '../../public/usuario1.jpg'
import image_user2 from '../../public/usuario2.jpg'
import image_user3 from '../../public/usuario3.jpg'
import image_user4 from '../../public/usuario4.jpg'
import image_user5 from '../../public/usuario5.jpg'
import image_user6 from '../../public/usuario6.jpg'

export function Inicio(){

    const posts = [
        {user: 'UserStyleUp_1', text: 'Colection Japan Streets Style Up 2024', image: image_ropa1},
        {user: 'UserStyleUp_2', text: 'Colection Japan Streets Style Up 2024', image: image_ropa2},
        {user: 'UserStyleUp_3', text: 'Colection Japan Streets Style Up 2024', image: image_ropa3},
        {user: 'UserStyleUp_4', text: 'Colection Japan Streets Style Up 2024', image: image_ropa4},
        {user: 'UserStyleUp_5', text: 'Colection Japan Streets Style Up 2024', image: image_ropa5},
        {user: 'UserStyleUp_6', text: 'Colection Japan Streets Style Up 2024', image: image_ropa6}
    ]
    const users = [
        { name: 'UserStyleUp_1', image: image_user1},
        { name: 'UserStyleUp_2', image: image_user2},
        { name: 'UserStyleUp_3', image: image_user3},
        { name: 'UserStyleUp_4', image: image_user4},
        { name: 'UserStyleUp_5', image: image_user5},
        { name: 'UserStyleUp_6', image: image_user6},
        { name: 'UserStyleUp_7', image: image_user1},
        { name: 'UserStyleUp_8', image: image_user2},
    ]

    return (
        <main id='inicio' className="md:w-[80%] md:ml-[20%] sm:flex-grow">
            <CarruselUsers users={users}/>
            {/** */}
            <section className="relative">
                {posts.map(post => (
                    <Post key={post.user} post={post}/>
                ))}
            </section>
        </main>
    )
}