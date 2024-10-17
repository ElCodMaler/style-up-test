// cuerpo de la informacion que debe registrar el usuario para logearse
export type usuario = {
    id?: number,
    first_name: string,
    last_name: string,
    phone: number,
    email: string,
    date_birth: string,
    picture?: string,
    password: string,
    date_create: string,
};