import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";
import bgVideo from "../assets/videoBg.mp4";

const LandingHerreria = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const proyectos = [
    {
      titulo: "Portones Corredizos",
      descripcion:
        "Diseño y fabricación de portones automatizados de alta resistencia",
      imagen:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    },
    {
      titulo: "Rejas de Seguridad",
      descripcion: "Rejas personalizadas para máxima protección y estética",
      imagen:
        "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    },
    {
      titulo: "Estructuras Metálicas",
      descripcion: "Construcción de estructuras para techos, entrepisos y más",
      imagen:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    },
    {
      titulo: "Barandas y Escaleras",
      descripcion: "Barandas de hierro forjado y escaleras metálicas a medida",
      imagen:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      titulo: "Cerramientos Perimetrales",
      descripcion: "Soluciones completas para cerrar y proteger espacios",
      imagen:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    },
    {
      titulo: "Herrería Industrial",
      descripcion: "Proyectos industriales de gran escala y complejidad",
      imagen:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    },
  ];

  const valores = [
    {
      icono: <Clock className="w-8 h-8" />,
      titulo: "Puntualidad",
      descripcion: "Cumplimos con los plazos de entrega acordados",
    },
    {
      icono: <Award className="w-8 h-8" />,
      titulo: "Calidad Premium",
      descripcion: "Materiales de primera calidad y acabados perfectos",
    },
    {
      icono: <Users className="w-8 h-8" />,
      titulo: "A Medida",
      descripcion: "Cada proyecto adaptado a tus necesidades específicas",
    },
    {
      icono: <CheckCircle className="w-8 h-8" />,
      titulo: "Experiencia",
      descripcion: "Más de 15 años construyendo confianza",
    },
  ];

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Overlay blur cuando el menu mobile está abierto */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden transition-all duration-400 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(12px);
          }
        }
      `}</style>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                IRON<span className="text-neutral-400">WORKS</span>
              </h1>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-neutral-200 hover:text-white transition-colors text-sm font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-neutral-200 hover:text-white transition-colors text-sm font-medium"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("valores")}
                className="text-neutral-200 hover:text-white transition-colors text-sm font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-neutral-200 hover:text-white transition-colors text-sm font-medium"
              >
                Contacto
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden bg-neutral-900/95 backdrop-blur-md transition-all duration-400 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {isMenuOpen && (
              <>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="block w-full text-left text-neutral-200 hover:text-white py-3 px-4 transition-all duration-200 animate-[slideIn_0.3s_ease-out]"
                  style={{
                    animationDelay: "0ms",
                    opacity: 0,
                    animation: "slideIn 0.3s ease-out 0ms forwards",
                  }}
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("proyectos")}
                  className="block w-full text-left text-neutral-200 hover:text-white py-3 px-4 transition-all duration-200"
                  style={{
                    opacity: 0,
                    animation: "slideIn 0.3s ease-out 0.1s forwards",
                  }}
                >
                  Proyectos
                </button>
                <button
                  onClick={() => scrollToSection("valores")}
                  className="block w-full text-left text-neutral-200 hover:text-white py-3 px-4 transition-all duration-200"
                  style={{
                    opacity: 0,
                    animation: "slideIn 0.3s ease-out 0.2s forwards",
                  }}
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block w-full text-left text-neutral-200 hover:text-white py-3 px-4 transition-all duration-200"
                  style={{
                    opacity: 0,
                    animation: "slideIn 0.3s ease-out 0.3s forwards",
                  }}
                >
                  Contacto
                </button>
              </>
            )}
          </div>
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Construcción en Hierro
            <br />
            de Alta Calidad
          </h2>
          <p className="text-xl md:text-2xl text-neutral-300 mb-10 font-light">
            Portones, rejas, estructuras metálicas y soluciones a medida para tu
            proyecto
          </p>
          <button
            onClick={() => scrollToSection("contacto")}
            className="bg-white text-neutral-900 px-8 py-4 text-lg font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Solicitar Presupuesto
          </button>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Nuestros Proyectos
            </h3>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Cada trabajo refleja nuestro compromiso con la excelencia y el
              detalle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-neutral-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-neutral-900 mb-2">
                    {proyecto.titulo}
                  </h4>
                  <p className="text-neutral-600">{proyecto.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section id="valores" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Por Qué Elegirnos
            </h3>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Comprometidos con la excelencia en cada detalle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="text-center p-8 bg-neutral-800/50 hover:bg-neutral-800 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 group-hover:bg-white/20 transition-colors">
                  {React.cloneElement(valor.icono, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>
                <h4 className="text-2xl font-bold mb-3">{valor.titulo}</h4>
                <p className="text-neutral-400">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Contactanos
            </h3>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Estamos listos para hacer realidad tu proyecto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-1">
                    Teléfono
                  </h4>
                  <p className="text-neutral-600">+54 9 11 1234-5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-1">
                    Email
                  </h4>
                  <p className="text-neutral-600">info@ironworks.com.ar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-1">
                    Ubicación
                  </h4>
                  <p className="text-neutral-600">Buenos Aires, Argentina</p>
                </div>
              </div>

              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 text-white px-8 py-4 font-semibold hover:bg-green-700 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows="4"
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-neutral-900 text-white py-4 font-semibold hover:bg-neutral-800 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 IronWorks. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingHerreria;
