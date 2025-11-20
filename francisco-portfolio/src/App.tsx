// ...existing code...
import { useState, useEffect, useRef } from 'react';
import { Play, X, ArrowRight, Star, TrendingUp, Users, CheckCircle, Twitter, Mail, Send, Loader2, MessageCircle, Download, Film } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Descomenta cuando actives el envío real

// --- ASSETS & DATA CONFIGURATION ---
const ASSETS = {
  clients: [
    { id: 1, name: 'Mara Pérez', role: '+1.5M Followers', img: '/mara foto de perfil.jpg', loading: 'lazy' as const },
    { id: 2, name: 'Paco Benítez', role: '+3.5M Followers', img: '/IMG_6399.jpg', loading: 'lazy' as const },
    { id: 3, name: 'Lorenzo Pérez', role: '+200k Followers', img: '/lorenzo-122-Edit.jpg', loading: 'lazy' as const },
    { id: 4, name: 'Karina Fischel', role: '+100k Followers', img: '/FOTOALEF231270032.jpg', loading: 'lazy' as const },



  ],
  portfolio: [
    { 
      id: 1, 
      title: 'Liderazgo & Hacks', 
      views: '850K+', 
      cover: '/9 portada-Cover.jpg',
      videoSrc: '/After9_optimized.mp4',
      videoType: 'local', 
    },
    { 
      id: 2, 
      title: 'Relaciones', 
      views: '450K+', 
      cover: '/14 portada-Cover.jpg',
      videoSrc: '/After14_optimized.mp4', 
      videoType: 'local',
    },
    { 
      id: 3, 
      title: 'Charlas TEDx', 
      views: '1.2M+', 
      cover: '/16 portada-Cover.jpg',
      videoSrc: '/After16_optimized.mp4',
      videoType: 'local',
    },

    { 
      id: 4, 
      title: 'Mindset & Productividad', 
      views: '620K+', 
      cover: '/19 portada-Cover.jpg', 
      videoSrc: '/After19_optimized.mp4', //
      videoType: 'local',
    }
  ],
  stats: [
    { label: 'Vistas Generadas', value: '+100M', icon: <Users className="w-6 h-6 text-cyan-400" /> },
    { label: 'Clientes Satisfechos', value: '100%', icon: <CheckCircle className="w-6 h-6 text-purple-400" /> },
    { label: 'Años de Experiencia', value: '+3', icon: <Star className="w-6 h-6 text-emerald-400" /> },
  ],
 process: [
    {
      id: 1,
      step: '01',
      title: 'Brief Inicial',
      description: 'Hablamos sobre tu visión, objetivos y el estilo de contenido que querés lograr, para crear un plan claro y alineado con tu marca.',
      icon: 'MessageCircle' // Representa conversación
    },
    {
      id: 2,
      step: '02',
      title: 'Recepción del Material',
      description: 'Coordinamos la entrega de tus clips, assets y referencias para preparar todo el contenido previo a la edición.',
      icon: 'Download' // Representa descarga/recepción
    },
    {
      id: 3,
      step: '03',
      title: 'Edición & Producción',
      description: 'Me encargo de todo el proceso: selección de tomas, corte dinámico, color, subtítulos, diseño sonoro, efectos y optimización para retención.',
      icon: 'Film' // Representa edición de video
    },
    {
      id: 4,
      step: '04',
      title: 'Revisión & Entrega',
      description: 'Refino el video a través de tus revisiones y te entrego la pieza final lista para publicar en TikTok, Reels o Shorts.',
      icon: 'CheckCircle' // Representa completado
    }
  ]
};
  

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
      <a 
        href="#hero" 
        className="text-xl md:text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity duration-300 cursor-pointer"
      >
        Francisco <span className="text-cyan-400">Monetti</span>
      </a>
      <div className="hidden md:flex items-center gap-4">
        <a 
          href="#hero" 
          className="px-5 py-2 rounded-full text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/15"
        >
          Inicio
        </a>
        <a 
          href="#contact" 
          className="px-5 py-2 rounded-full text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/15"
        >
          Contacto
        </a>
        <a 
          href="#work" 
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        >
          Portfolio
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Disponible para nuevos proyectos</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
        Edición Short-Form que <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Domina el Algoritmo
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Transformo tus clips crudos en activos digitales de alto rendimiento. 
        Estética impecable, retención optimizada y narrativa visual.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="#work" 
          className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-cyan-500/25 text-center"
        >
          Ver Portafolio
        </a>
        <a 
          href="#contact" 
          className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
        >
          Pedir Cotización <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-24 border-y border-white/5 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-lg md:text-xl text-gray-400 uppercase tracking-widest mb-16 font-semibold">Creadores que confían en mi trabajo</p>
      
      <div className="flex flex-wrap justify-center gap-12 md:gap-20">
        {ASSETS.clients.map((client) => (
          <div key={client.id} className="group flex flex-col items-center">
            <div className="relative mb-7">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              <img 
                src={client.img} 
                alt={client.name}
                loading="lazy"
                decoding="async"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover scale-110 border-2 border-white/10 group-hover:border-cyan-400 transition-colors duration-300"
              />
            </div>
            <h3 className="text-white font-medium text-xl mb-2">{client.name}</h3>
            <p className="text-sm text-gray-500">{client.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Detectar cuando la sección entra en el viewport para animar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Se activa cuando el 20% es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="results" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-cyan-950/5 to-black"
    >
      {/* Efectos de luz de fondo - Similar al componente Process */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header con animación de entrada */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">
            Impacto Medible
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Resultados que hablan
          </h2>
        </div>
        
        {/* Grid de estadísticas con efectos avanzados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ASSETS.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="relative group"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${idx * 0.15}s both` : 'none'
              }}
            >
              {/* Borde con degradado animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              {/* Tarjeta principal */}
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                
                {/* Icono con efecto glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-black to-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>

                {/* Valor numérico grande */}
                <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-cyan-400 mb-3 tracking-tighter">
                  {stat.value}
                </h3>
                
                {/* Label descriptivo */}
                <p className="text-gray-400 font-medium text-lg group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>

                {/* Línea decorativa inferior */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animación CSS personalizada */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
const Process = () => {
  // Función helper para obtener el icono correcto
  const getIcon = (iconName: string) => {
    const icons = {
      MessageCircle: <MessageCircle className="w-8 h-8" />,
      Download: <Download className="w-8 h-8" />,
      Film: <Film className="w-8 h-8" />,
      CheckCircle: <CheckCircle className="w-8 h-8" />
    };
    return icons[iconName as keyof typeof icons];
  };

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
      {/* Efecto de luz de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Mi Proceso</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Cómo Funciona
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un proceso simple y profesional diseñado para entregar videos de alto impacto que conectan con tu audiencia.
          </p>
        </div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ASSETS.process.map((step, index) => (
            <div 
              key={step.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                
                {/* Número del paso */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icono */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {getIcon(step.icon)}
                </div>

                {/* Contenido */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Línea conectora (oculta en mobile y última card) */}
              {index < ASSETS.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-cyan-500/25"
          >
            Empecemos tu Proyecto <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

// VideoModal y VideoItem eliminados porque no se usaban en el árbol de componentes

// Componente optimizado para cargar videos de forma eficiente
const OptimizedVideo = ({ src, isPlaying, onClose }: { src: string; isPlaying: boolean; onClose: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      // Cargar y reproducir el video solo cuando se necesita
      videoRef.current.load();
      videoRef.current.play().catch(err => console.log('Video play error:', err));
    }
  }, [isPlaying]);

  if (!isPlaying) return null;

  return (
    <div className="relative w-full h-full bg-black">
      <video 
        ref={videoRef}
        src={src}
        preload="metadata"
        className="w-full h-full object-contain"
        controls 
        playsInline
        controlsList="nodownload"
      />
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
      >
        <X size={20} className="text-white" />
      </button>
    </div>
  );
};

// ...existing code...
const Portfolio = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null); // ID del video que se está reproduciendo

  const toggleVideo = (videoId: number) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null); // Si ya está reproduciéndose, lo pausa
    } else {
      setPlayingVideo(videoId); // Reproduce el video clickeado
    }
  };

  return (
    <section id="work" className="py-24 bg-black relative overflow-hidden">
      {/* Efecto de fondo sutil */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Portfolio Destacado</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Mis Ediciones</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          De contenido crudo a piezas listas para publicar.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Así es como convierto tus clips en videos profesionales.
          </p>
        </div>

        {/* Grid de videos - Mostrar TODOS los 4 videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ASSETS.portfolio.map((item, idx) => (
              <div 
                key={item.id} 
                className="group relative cursor-pointer rounded-3xl overflow-hidden aspect-[9/14] border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Video Player o Portada */}
                {playingVideo === item.id ? (
                  // Video reproduciéndose con componente optimizado
                  item.videoType === 'youtube' ? (
                    <div className="relative w-full h-full bg-black">
                      <iframe
                        src={`${item.videoSrc}?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1&vq=hd1080&hd=1&quality=hd1080`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title={item.title}
                        style={{ border: 'none' }}
                        loading="eager"
                        width="1080"
                        height="1920"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingVideo(null);
                        }}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
                      >
                        <X size={20} className="text-white" />
                      </button>
                    </div>
                  ) : (
                    <OptimizedVideo 
                      src={item.videoSrc} 
                      isPlaying={playingVideo === item.id}
                      onClose={() => setPlayingVideo(null)}
                    />
                  )
                ) : (
                  // Portada (cuando NO está reproduciéndose)
                  <>
                    {item.cover ? (
                      <img 
                        src={item.cover} 
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                        <div className="text-center">
                          <Film className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                          <span className="text-gray-600 font-bold text-sm">Video Preview</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    
                    {/* Botón de Play en el centro */}
                    <div 
                      onClick={() => toggleVideo(item.id)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-white/20 group-hover:scale-110 transition-transform shadow-2xl shadow-cyan-500/50">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Información del video */}
                    <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 font-medium">
                        <TrendingUp size={16} />
                        {item.views} Vistas
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
      </div>
      
      {/* Animación CSS personalizada */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle'); 

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // Enviar con EmailJS
    emailjs.sendForm(
      'service_4nid8rb',
      'template_03u34ph',
      form.current!,
      '1tamOzY7qKmP3DlJb'
    )
    .then(() => {
        setStatus('success');
        form.current?.reset();
        
        // Volver a estado inicial después de 3 segundos
        setTimeout(() => setStatus('idle'), 3000);
    })
    .catch(() => {
        setStatus('error');
        
        // Volver a estado inicial después de 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <footer id="contact" className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para escalar <br /> 
            <span className="text-cyan-400">tu contenido?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            No dejes que tus ideas mueran en el borrador. Hablemos de cómo convertir tu visión en resultados medibles.
          </p>

          <div className="space-y-6">
            <a href="mailto:fran.monetti03@gmail.com" className="flex items-center gap-4 text-white group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                <Mail size={20} />
              </div>
              <span className="font-medium text-lg">fran.monetti03@gmail.com</span>
            </a>
            
            <a href="https://x.com/FranMonetti" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                <Twitter size={20} />
              </div>
              <span className="font-medium text-lg">@FranMonetti</span>
            </a>
          </div>
        </div>


        <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Tu Nombre</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Francisco Monetti"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Tu Email</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="hola@ejemplo.com"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Mensaje</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600 resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending' || status === 'success'}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                status === 'success' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/20'
              }`}
            >
              {status === 'sending' ? (
                <Loader2 className="animate-spin" />
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={20} /> Mensaje Enviado
                </>
              ) : (
                <>
                  Enviar Mensaje <Send size={18} />
                </>
              )}
            </button>
            {status === 'error' && <p className="text-red-400 text-sm text-center mt-2">Hubo un error. Intenta de nuevo.</p>}
          </form>
        </div>


      </div>
      
      <div className="text-center mt-20 pt-8 border-t border-white/5">
        <p className="text-gray-600 text-sm">© 2025 Francisco Monetti. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default function App() {
  // Smooth scroll fix for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans">
      <Navbar />
      <Hero />
      <SocialProof />
      <Stats />
      <Portfolio />
      <Process />
      <ContactSection />
    </div>
  );
}
