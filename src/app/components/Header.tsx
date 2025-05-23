export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black text-white border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Marca */}
        <h1 className="text-2xl font-bold">PolarSun</h1>

        {/* Navegación */}
        <nav className="space-x-6 hidden md:flex text-sm font-medium">
          <a href="#" className="hover:text-gray-300 transition">Inicio</a>
          <a href="#" className="hover:text-gray-300 transition">Colección</a>
          <a href="#" className="hover:text-gray-300 transition">Contacto</a>
        </nav>

        {/* Iconos */}
        <div className="flex items-center gap-4">
          <button className="hover:text-gray-300 transition" aria-label="Cuenta">👤</button>
          <button className="hover:text-gray-300 transition" aria-label="Favoritos">❤️</button>
          <button className="hover:text-gray-300 transition" aria-label="Carrito">🛒</button>
        </div>
      </div>
    </header>
  );
}
