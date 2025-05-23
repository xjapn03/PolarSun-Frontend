export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4">PolarSun</h2>
          <p className="text-gray-400">Gafas premium diseñadas para destacar.</p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Enlaces</h3>
          <a href="#" className="text-gray-300 hover:text-white transition">Inicio</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Catálogo</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Contacto</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Cuenta</a>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Síguenos</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">📸</a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">🐦</a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">📘</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} PolarSun. Todos los derechos reservados.
      </div>
    </footer>
  );
}
