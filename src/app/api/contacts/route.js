import { NextResponse } from 'next/server';
import pool from '../../config/db';

// Configuración para Next.js
export const dynamic = 'force-dynamic';

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

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    return NextResponse.json(
      { error: 'Error al obtener contactos' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'ID del contacto es requerido' },
                { status: 400 }
            );
        }

        // Eliminar el contacto
        const [result] = await pool.execute(
            'DELETE FROM contacts WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return NextResponse.json(
                { error: 'Contacto no encontrado' },
                { status: 404 }
            );
        }

        return NextResponse.json({ 
            message: 'Contacto eliminado exitosamente' 
        });

    } catch (error) {
        console.error('Error al eliminar contacto:', error);
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
        );
    }
}
