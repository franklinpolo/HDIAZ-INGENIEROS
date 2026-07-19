/* ==================================================
   HDIAZ INGENIEROS
   ANIMACIONES Y FUNCIONALIDADES
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================================
       ESTILOS DE ANIMACIÓN GENERADOS DESDE JAVASCRIPT
    ============================================== */

    const estilosAnimaciones = document.createElement("style");

    estilosAnimaciones.textContent = `

        /* Navbar cuando se hace scroll */

        .navbar-principal {
            transition:
                min-height 0.35s ease,
                background-color 0.35s ease,
                box-shadow 0.35s ease,
                padding 0.35s ease;
        }

        .logo-empresa {
            transition:
                width 0.35s ease,
                transform 0.35s ease;
        }

        .navbar-principal.navbar-scroll {
            min-height: 92px;
            background-color: rgba(255, 255, 255, 0.97);
            box-shadow: 0 10px 35px rgba(7, 26, 61, 0.14);
            backdrop-filter: blur(14px);
        }

        .navbar-principal.navbar-scroll .logo-empresa {
            width: 115px;
        }


        /* Estado inicial de los elementos animados */

        .reveal-elemento {
            opacity: 0;
            transition:
                opacity 0.85s ease,
                transform 0.85s cubic-bezier(0.2, 0.7, 0.2, 1);
            will-change: opacity, transform;
        }

        .reveal-arriba {
            transform: translateY(55px);
        }

        .reveal-izquierda {
            transform: translateX(-65px);
        }

        .reveal-derecha {
            transform: translateX(65px);
        }

        .reveal-escala {
            transform: scale(0.88);
        }

        .reveal-activo {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }


        /* Panel Nosotros */

        .nosotros-panel {
            transition:
                transform 0.45s ease,
                box-shadow 0.45s ease;
        }

        .nosotros-panel:hover {
            transform: translateY(-8px);
            box-shadow: 0 38px 85px rgba(7, 26, 61, 0.30);
        }


        /* Icono principal del panel */

        .panel-icono-principal {
            position: relative;
            overflow: hidden;
        }

        .panel-icono-principal::after {
            content: "";
            position: absolute;
            top: -70%;
            left: -80%;
            width: 55%;
            height: 230%;
            background: rgba(255, 255, 255, 0.45);
            transform: rotate(25deg);
            transition: left 0.65s ease;
        }

        .nosotros-panel:hover .panel-icono-principal::after {
            left: 145%;
        }


        /* Tarjetas Misión, Visión y Valores */

        .tarjeta-identidad {
            position: relative;
            overflow: hidden;
        }

        .tarjeta-identidad::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(
                90deg,
                #f0b93f,
                #dca528
            );
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
        }

        .tarjeta-identidad:hover::before {
            transform: scaleX(1);
        }

        .identidad-icono {
            transition:
                transform 0.4s ease,
                background-color 0.4s ease,
                color 0.4s ease;
        }

        .tarjeta-identidad:hover .identidad-icono {
            transform: rotate(-7deg) scale(1.12);
            background-color: #f0b93f;
            color: #071a3d;
        }


        /* Botones */

        .btn-cotizacion,
        .btn-hero-principal,
        .btn-hero-secundario,
        .btn-nosotros {
            position: relative;
            overflow: hidden;
        }

        .btn-cotizacion::before,
        .btn-hero-principal::before,
        .btn-nosotros::before {
            content: "";
            position: absolute;
            top: 0;
            left: -120%;
            width: 65%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.45),
                transparent
            );
            transform: skewX(-20deg);
            transition: left 0.65s ease;
        }

        .btn-cotizacion:hover::before,
        .btn-hero-principal:hover::before,
        .btn-nosotros:hover::before {
            left: 145%;
        }


        /* Movimiento suave del fondo del Hero */

        .hero-principal {
            animation: movimientoFondo 18s ease-in-out infinite alternate;
        }

        @keyframes movimientoFondo {

            from {
                background-position: 48% center;
            }

            to {
                background-position: 54% center;
            }

        }


        /* Movimiento del fondo circular de Nosotros */

        .panel-fondo {
            animation: circuloFlotante 7s ease-in-out infinite;
        }

        @keyframes circuloFlotante {

            0%,
            100% {
                transform: translate(0, 0) rotate(0deg);
            }

            50% {
                transform: translate(-18px, 16px) rotate(12deg);
            }

        }


        /* Navegación activa */

        .navbar-principal .nav-link.seccion-activa {
            color: #dca528;
        }

        .navbar-principal .nav-link.seccion-activa::after {
            width: 100%;
        }


        /* Responsive */

        @media (max-width: 991px) {

            .navbar-principal.navbar-scroll {
                min-height: 78px;
            }

            .navbar-principal.navbar-scroll .logo-empresa {
                width: 95px;
            }

            .hero-principal {
                animation: none;
            }

        }


        /* Accesibilidad */

        @media (prefers-reduced-motion: reduce) {

            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }

            .reveal-elemento {
                opacity: 1 !important;
                transform: none !important;
            }

        }

    `;

    document.head.appendChild(estilosAnimaciones);


    /* ==============================================
       NAVBAR AL HACER SCROLL
    ============================================== */

    const navbar = document.querySelector(".navbar-principal");

    const controlarNavbar = () => {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 60) {
            navbar.classList.add("navbar-scroll");
        } else {
            navbar.classList.remove("navbar-scroll");
        }

    };

    controlarNavbar();

    window.addEventListener("scroll", controlarNavbar, {
        passive: true
    });


    /* ==============================================
       ELEMENTOS QUE SE ANIMARÁN AL APARECER
    ============================================== */

    const gruposAnimados = [

        {
            selector: ".nosotros-contenido",
            animacion: "reveal-izquierda",
            retraso: 0
        },

        {
            selector: ".nosotros-panel",
            animacion: "reveal-derecha",
            retraso: 120
        },

        {
            selector: ".nosotros-item",
            animacion: "reveal-arriba",
            retraso: 100
        },

        {
            selector: ".tarjeta-identidad",
            animacion: "reveal-arriba",
            retraso: 150
        },

        {
            selector: ".titulo-temporal",
            animacion: "reveal-escala",
            retraso: 0
        }

    ];


    gruposAnimados.forEach((grupo) => {

        const elementos = document.querySelectorAll(grupo.selector);

        elementos.forEach((elemento, indice) => {

            elemento.classList.add(
                "reveal-elemento",
                grupo.animacion
            );

            elemento.style.transitionDelay =
                `${indice * grupo.retraso}ms`;

        });

    });


    /* ==============================================
       INTERSECTION OBSERVER
    ============================================== */

    const observadorAnimaciones = new IntersectionObserver(
        (entradas, observador) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("reveal-activo");

                    observador.unobserve(entrada.target);

                }

            });

        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -60px 0px"
        }
    );


    document
        .querySelectorAll(".reveal-elemento")
        .forEach((elemento) => {

            observadorAnimaciones.observe(elemento);

        });


    /* ==============================================
       MENÚ ACTIVO SEGÚN LA SECCIÓN
    ============================================== */

    const secciones = document.querySelectorAll("main section[id]");

    const enlacesMenu = document.querySelectorAll(
        ".navbar-principal .nav-link"
    );


    const observadorSecciones = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (!entrada.isIntersecting) {
                    return;
                }

                const idSeccion = entrada.target.getAttribute("id");

                enlacesMenu.forEach((enlace) => {

                    enlace.classList.remove(
                        "active",
                        "seccion-activa"
                    );

                    const destino = enlace.getAttribute("href");

                    if (destino === `#${idSeccion}`) {

                        enlace.classList.add(
                            "active",
                            "seccion-activa"
                        );

                    }

                });

            });

        },
        {
            threshold: 0.35
        }
    );


    secciones.forEach((seccion) => {

        observadorSecciones.observe(seccion);

    });


    /* ==============================================
       CERRAR MENÚ MÓVIL AL SELECCIONAR UNA OPCIÓN
    ============================================== */

    const menuPrincipal = document.querySelector("#menuPrincipal");

    const enlacesNavegacion = document.querySelectorAll(
        "#menuPrincipal a"
    );


    enlacesNavegacion.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            if (!menuPrincipal) {
                return;
            }

            const instanciaMenu =
                bootstrap.Collapse.getInstance(menuPrincipal);

            if (instanciaMenu) {
                instanciaMenu.hide();
            }

        });

    });


    /* ==============================================
       EFECTO SUAVE EN LOS ICONOS DE SERVICIOS
    ============================================== */

    const serviciosPanel = document.querySelectorAll(".panel-servicio");

    serviciosPanel.forEach((servicio) => {

        servicio.addEventListener("mouseenter", () => {

            const icono = servicio.querySelector(".panel-icono");

            if (icono) {
                icono.style.transform = "rotate(-6deg) scale(1.12)";
            }

        });

        servicio.addEventListener("mouseleave", () => {

            const icono = servicio.querySelector(".panel-icono");

            if (icono) {
                icono.style.transform = "rotate(0deg) scale(1)";
            }

        });

    });

});