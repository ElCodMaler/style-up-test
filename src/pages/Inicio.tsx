import { Post, CarruselUsers } from "../components/gen"

// imagenes de ropa
import image_ropa1 from '../../public/img_ropa1.jpg'
import image_ropa2 from '../../public/img_ropa2.jpg'
import image_ropa3 from '../../public/img_ropa3.jpg'
import image_ropa4 from '../../public/img_ropa4.jpg'
import image_ropa5 from '../../public/img_ropa5.jpg'
import image_ropa6 from '../../public/img_ropa6.jpg'

export function Inicio(){
    //base de datos de los usuarios
    const posts = [
        {user: 'UserStyleUp_1', text: 'Colection Japan Streets Style Up 2024', image: image_ropa1},
        {user: 'UserStyleUp_2', text: 'Colection Japan Streets Style Up 2024', image: image_ropa2},
        {user: 'UserStyleUp_3', text: 'Colection Japan Streets Style Up 2024', image: image_ropa3},
        {user: 'UserStyleUp_4', text: 'Colection Japan Streets Style Up 2024', image: image_ropa4},
        {user: 'UserStyleUp_5', text: 'Colection Japan Streets Style Up 2024', image: image_ropa5},
        {user: 'UserStyleUp_6', text: 'Colection Japan Streets Style Up 2024', image: image_ropa6}
    ]
    //base de datos del post de cada usaurio
    const users = [
        { name: 'UserStyleUp_1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6E6pA9bmHyr9_DfV8iF-jzMY6H29AmIAjQ&s'},
        { name: 'UserStyleUp_2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1rZW7V5iIEsH7bcxoS4wBXS13C5RTmivYA&s'},
        { name: 'UserStyleUp_3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVuBDepXpQiG277OPGfsor__C5ktlMkTfbg&s'},
        { name: 'UserStyleUp_4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQGBzFaWKrb708NVmYh6n6k4jeDlRMq_Xgg&s'},
        { name: 'UserStyleUp_5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVWwqKRFouKRZHNg-PgZ9U8iNg85wtBAXXw&s'},
        { name: 'UserStyleUp_6', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPSmmKm0bH3mabimaLCdzQ388vVui1iVdUw&s'},
        { name: 'UserStyleUp_7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0usYA3fV5AQGwhIx-UqCQrO5x8nG3GAq2A&s'},
        { name: 'UserStyleUp_8', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTl3j_9bPKzvUcxxOVngh-1WE0vGAC7VtwQ&s'},
        { name: 'UserStyleUp_9', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_a9I-AkqF9EXOPbRQ5LLQT8jYvQClcycWQ&s'},
        { name: 'UserStyleUp_10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jULxyGL1Ylo6ARxtiPtbksZPiUKi-KPofQ&s'},
        { name: 'UserStyleUp_11', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4B5rxKwG5ce-sS1UBdkx586i9lIevtbiCg&s'},
        { name: 'UserStyleUp_12', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKpkkOyD3T5ABULBihOhWv1YuC1lgUYrJDw&s'},
    ]

    return (
        <>
            {/**Carrusel de usuarios */}
            <CarruselUsers users={users}/>
            {/**seccion de Post de ropa */}
            <section>
                {posts.map(post => (
                    <Post key={post.user} post={post}/>
                ))}
            </section>
        </>
    )
}