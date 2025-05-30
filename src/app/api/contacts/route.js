import { NextResponse } from 'next/server';
import pool from '../../config/db';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, municipality } = body;

        // Validar datos
        if (!name || !phone || !municipality) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        // Insertar en la base de datos
        const [result] = await pool.execute(
            'INSERT INTO contacts (name, phone, municipality) VALUES (?, ?, ?)',
            [name, phone, municipality]
        );

        return NextResponse.json({ 
            message: 'Contacto guardado exitosamente',
            id: result.insertId 
        });

    } catch (error) {
        console.error('Error al guardar contacto:', error);
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
        );
    }
}
