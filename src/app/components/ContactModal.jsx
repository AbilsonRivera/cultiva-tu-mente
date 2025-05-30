'use client'
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

// Lista de municipios del Huila
const huilaMunicipalities = [
    "Neiva", "Acevedo", "Agrado", "Aipe", "Algeciras", "Altamira", "Baraya", 
    "Campoalegre", "Colombia", "Elías", "Garzón", "Gigante", "Guadalupe", 
    "Hobo", "Íquira", "Isnos", "La Argentina", "La Plata", "Nátaga", 
    "Oporapa", "Paicol", "Palermo", "Palestina", "Pital", "Pitalito", 
    "Rivera", "Saladoblanco", "San Agustín", "Santa María", "Suaza", 
    "Tarqui", "Tello", "Teruel", "Tesalia", "Timaná", "Villavieja", "Yaguará"
];

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        municipality: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al enviar el formulario');
            }

            setSubmitSuccess(true);
            
            // Reiniciamos el formulario
            setFormData({
                name: '',
                phone: '',
                municipality: ''
            });

            // Cerrar el modal automáticamente después de 2 segundos
            setTimeout(() => {
                onClose();
                setSubmitSuccess(false);
            }, 2000);

        } catch (error) {
            setSubmitError('Hubo un error al enviar tu información. Por favor intenta de nuevo.');
            console.error('Error al enviar el formulario:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" 
            style={{ 
                backgroundImage: 'url(/noise.svg), linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))',
                backgroundBlendMode: 'overlay',
                backdropFilter: 'blur(1px)' 
            }}>
            <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <IoClose size={24} />
                </button>

                <h2 className="text-2xl font-bold text-[#2A8892] mb-4">Contáctanos</h2>

                {submitSuccess ? (
                    <div className="text-green-600 bg-green-100 p-4 rounded-lg mb-4">
                        ¡Tu información ha sido enviada con éxito! Nos pondremos en contacto contigo pronto.
                    </div>
                ) : (
                    <>
                        {submitError && (
                            <div className="text-red-600 bg-red-100 p-4 rounded-lg mb-4">
                                {submitError}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 mb-1">Nombre completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Ingresa tu nombre'
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 text-[#2A8892] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A8892]"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 mb-1">Teléfono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder='+57 3*********'
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full text-[#2A8892] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A8892]"                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="municipality" className="block text-gray-700 mb-1">Municipio</label>
                                <select
                                    id="municipality"
                                    name="municipality"
                                    value={formData.municipality}
                                    onChange={handleChange}
                                    className="w-full p-2 border text-[#2A8892] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A8892] bg-white"
                                    required
                                >
                                    <option value="">Selecciona un municipio</option>
                                    {huilaMunicipalities.map((municipality) => (
                                        <option key={municipality} value={municipality}>
                                            {municipality}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-2 rounded-lg font-medium text-white bg-[#2A8892] hover:bg-[#1e6670] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar información'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactModal;