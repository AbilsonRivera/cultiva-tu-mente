'use client'
import { useState, useEffect, Fragment } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { FaFileExcel, FaTrash } from 'react-icons/fa';
import * as XLSX from 'xlsx';

const ROWS_PER_PAGE = 15;

const AdminPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Calcular el total de páginas
  const totalPages = Math.ceil(contacts.length / ROWS_PER_PAGE);
  
  // Obtener los contactos de la página actual
  const getCurrentPageContacts = () => {
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = startIndex + ROWS_PER_PAGE;
    return contacts.slice(startIndex, endIndex);
  };

  // Función para exportar a Excel
  const exportToExcel = () => {
    // Preparar los datos para Excel
    const dataToExport = contacts.map(contact => ({
      'Nombre': contact.name,
      'Teléfono': contact.phone,
      'Municipio': contact.municipality,
      'Fecha de Registro': new Date(contact.created_at).toLocaleDateString()
    }));

    // Crear el libro de Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(dataToExport);

    // Ajustar el ancho de las columnas
    const columnsWidth = [
      { wch: 30 }, // Nombre
      { wch: 15 }, // Teléfono
      { wch: 20 }, // Municipio
      { wch: 20 }  // Fecha
    ];
    ws['!cols'] = columnsWidth;

    // Agregar la hoja al libro
    XLSX.utils.book_append_sheet(wb, ws, 'Contactos');

    // Generar el archivo y descargarlo
    XLSX.writeFile(wb, `contactos_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/contacts');
        if (!response.ok) {
          throw new Error('Error al cargar los contactos');
        }
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Delete handlers
  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setContactToDelete(null);
  };

  const confirmDelete = async () => {
    if (!contactToDelete) return;
    
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/contacts?id=${contactToDelete.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el contacto');
      }

      // Remove the deleted contact from the state
      setContacts(contacts.filter(c => c.id !== contactToDelete.id));
      closeDeleteDialog();
    } catch (err) {
      setError('Error al eliminar el contacto');
      console.error('Error deleting contact:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  // Confirmation Dialog Component
  const DeleteConfirmationDialog = () => {
    if (!deleteDialogOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Confirmar eliminación</h3>
          <p className="text-gray-600 mb-6">
            ¿Estás seguro que deseas eliminar el contacto de {contactToDelete?.name}? Esta acción no se puede deshacer.
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={closeDeleteDialog}
              disabled={isDeleting}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              onClick={confirmDelete}
              disabled={isDeleting}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50 flex items-center"
            >
              {isDeleting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Eliminando...
                </>
              ) : (
                'Eliminar'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Panel de Administración</h1>
        
        {/* Modal de confirmación de eliminación */}
        <DeleteConfirmationDialog />
 

        {/* Contacts Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Contactos Registrados</h2>
              
              {/* Botón de exportar a Excel */}
              <button
                onClick={exportToExcel}
                disabled={loading || contacts.length === 0}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <FaFileExcel className="w-5 h-5 mr-2" />
                Exportar a Excel
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Municipio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Registro</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr><td colSpan="5" className="px-6 py-4 text-center">Cargando...</td></tr>
                ) : error ? (
                  <tr><td colSpan="5" className="px-6 py-4 text-center text-red-600">{error}</td></tr>
                ) : contacts.length === 0 ? (
                  <tr><td colSpan="5" className="px-6 py-4 text-center">No hay contactos registrados</td></tr>
                ) : getCurrentPageContacts().map((contact) => (
                  <tr key={contact.id}>
                    <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm font-medium text-gray-900">{contact.name}</div></td>
                    <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{contact.phone}</div></td>
                    <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{contact.municipality}</div></td>
                    <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{new Date(contact.created_at).toLocaleDateString()}</div></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDeleteClick(contact)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                        title="Eliminar contacto"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Paginación */}
            {!loading && contacts.length > ROWS_PER_PAGE && (
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">
                      Mostrando {((currentPage - 1) * ROWS_PER_PAGE) + 1} a {Math.min(currentPage * ROWS_PER_PAGE, contacts.length)} de {contacts.length} registros
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <IoChevronBackOutline className="w-5 h-5" />
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg ${
                            currentPage === page
                              ? 'bg-[#2A8892] text-white'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <IoChevronForwardOutline className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog />
    </div>
  );
};

export default AdminPage;
