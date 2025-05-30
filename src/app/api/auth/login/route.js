import { NextResponse } from 'next/server';
import pool from '../../../config/db';

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Validar datos
        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email y contraseña son requeridos' },
                { status: 400 }
            );
        }

        // Buscar usuario en la base de datos
        const [users] = await pool.execute(
            'SELECT id, nombre, email FROM admin_users WHERE email = ? AND pass = ?',
            [email, password] // En producción deberías usar hash para las contraseñas
        );

        if (users.length === 0) {
            return NextResponse.json(
                { error: 'Credenciales inválidas' },
                { status: 401 }
            );
        }

        const user = users[0];

        return NextResponse.json({
            id: user.id,
            nombre: user.nombre,
            email: user.email
        });

    } catch (error) {
        console.error('Error en login:', error);
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
        );
    }
}
