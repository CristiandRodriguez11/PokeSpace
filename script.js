/**
 * Interactive JavaScript
 * Código profesional con interactividad avanzada para el sitio web
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos los componentes interactivos
    initSectionTransitions();
    enhanceWorkSection();
    initInteractiveBallGame();
    setupContactSection();
});

/**
 * Configura transiciones suaves entre secciones
 */
function initSectionTransitions() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener el ID de la sección objetivo
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (!targetSection) return;
            
            // Desactivar todos los elementos del menú y activar el actual
            document.querySelectorAll('.menu-item').forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            this.classList.add('active');
            
            // Ocultar todas las secciones con una transición suave
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
            });
            
            // Mostrar la sección seleccionada con una transición suave
            setTimeout(() => {
                targetSection.classList.add('active');
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0)';
            }, 300);
            
            // Actualizar la URL sin recargar la página
            history.pushState(null, null, `#${targetId}`);
        });
    });
    
    // Añadir estilos para las transiciones
    const transitionStyles = document.createElement('style');
    transitionStyles.textContent = `
        .section {
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .section:not(.active) {
            display: none;
        }
        
        .section.active {
            display: block;
        }
    `;
    document.head.appendChild(transitionStyles);
}

/**
 * Mejora la sección de trabajo con descripciones y efectos personalizados
 */
function enhanceWorkSection() {
    // Datos de los proyectos
    const projects = [
        {
            title: "Interactive Stadium",
            description: "Un impresionante estadio con arenas de competición y estructuras modernas. Diseñado para albergar eventos competitivos con capacidad para más de 1,000 asistentes simultáneos.",
            image: "https://i.imgur.com/IHI7EAk.png",
            tags: ["Arena", "Competitive", "Modern"]
        },
        {
            title: "Medieval Kingdom",
            description: "Un elaborado reino medieval con castillo y aldea. Incluye marketplace, sistemas de quest, calabozos secretos y arquitectura detallada de la época.",
            image: "https://media.discordapp.net/attachments/980983394844438598/1364313652835909724/untitl2222234ed.png?ex=6809379a&is=6807e61a&hm=70522f3c2eb0eecaac2c19adea703fc127a034fedaaa4d49321f763b136a604c&=&format=webp&quality=lossless&width=1454&height=818",
            tags: ["Castle", "Village", "Medieval"]
        },
        {
            title: "Futuristic Hub",
            description: "Un centro de servidor futurista con sistemas de teletransporte. Optimizado para altos volúmenes de tráfico con zonas temáticas y efectos visuales únicos.",
            image: "https://i.imgur.com/axpGCuv.jpeg",
            tags: ["Sci-fi", "Hub", "Teleportation"]
        },
        {
            title: "Fantasy Island",
            description: "Una isla paradisíaca flotante con elementos mágicos. Presenta cascadas de energía, criaturas místicas y biomas personalizados con vegetación exótica.",
            image: "https://i.imgur.com/uO4BLVs.jpeg",
            tags: ["Floating", "Magic", "Paradise"]
        },
        {
            title: "Adventure Map",
            description: "Un mapa de aventura personalizado con puzles y desafíos. Ofrece más de 20 horas de gameplay con narrativa ramificada y tesoros escondidos.",
            image: "https://media.discordapp.net/attachments/980983394844438598/1364313653540814928/untitl34234234e34234d.png?ex=6809379a&is=6807e61a&hm=bc1f0cffec2c993b9ec821e6a753fe9e573ccc2cfc3e62155f4c4bb1ada11286&=&format=webp&quality=lossless&width=1454&height=818",
            tags: ["Adventure", "Puzzles", "Quests"]
        },
        {
            title: "Challenge Course",
            description: "Una serie de desafíos temáticos con pruebas únicas. Cada zona representa un ambiente diferente con pruebas de habilidad escalables.",
            image: "https://i.imgur.com/efPjhEZ.png",
            tags: ["Challenges", "Courses", "Skills"]
        }
    ];
    
    // Obtener la sección de trabajo
    const workGrid = document.querySelector('.work-grid');
    if (!workGrid) return;
    
    // Limpiar el contenido existente
    workGrid.innerHTML = '';
    
    // Añadir cada proyecto con detalles mejorados
    projects.forEach(project => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        
        workItem.innerHTML = `
            <div class="work-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="work-overlay">
                    <div class="tag-container">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="work-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        
        // Añadir interactividad
        workItem.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        workItem.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
        
        workGrid.appendChild(workItem);
    });
    
    // Añadir estilos CSS mejorados para la sección de trabajo
    const workStyles = document.createElement('style');
    workStyles.textContent = `
        .work-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }
        
        .work-item {
            background: #FFFFFF;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease;
            height: 100%;
        }
        
        .work-image {
            position: relative;
            overflow: hidden;
            height: 200px;
        }
        
        .work-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .work-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 15px;
        }
        
        .tag-container {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-bottom: 10px;
        }
        
        .project-tag {
            background: rgba(255, 255, 255, 0.9);
            color: #333;
            padding: 4px 8px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
        }
        
        .work-info {
            padding: 20px;
        }
        
        .work-info h3 {
            margin-top: 0;
            font-size: 18px;
            color: #333;
        }
        
        .work-info p {
            color: #666;
            font-size: 14px;
            line-height: 1.5;
        }
        
        .work-item.active {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        
        .work-item.active .work-image img {
            transform: scale(1.05);
        }
        
        .work-item.active .work-overlay {
            opacity: 1;
        }
    `;
    document.head.appendChild(workStyles);
}

/**
 * Inicializa el nuevo juego interactivo con una bola grande que empuja cubos pequeños
 */
function initInteractiveBallGame() {
    // Crear el área de juego en todas las secciones
    const sections = document.querySelectorAll('.section');
    const sectionIds = [];
    
    sections.forEach(section => {
        // Guardar el ID para referencia
        sectionIds.push(section.id);
        
        // Crear contenedor de juego si no existe
        let gameContainer = section.querySelector('.ball-game-container');
        
        if (!gameContainer) {
            gameContainer = document.createElement('div');
            gameContainer.className = 'ball-game-container';
            gameContainer.id = `game-container-${section.id}`;
            
            // Añadir contenedor al inicio de la sección
            section.insertBefore(gameContainer, section.firstChild);
        }
        
        // Configurar el contenedor
        gameContainer.style.width = '100%';
        gameContainer.style.height = '300px';
        gameContainer.style.position = 'relative';
        gameContainer.style.overflow = 'hidden';
        gameContainer.style.borderRadius = '10px';
        gameContainer.style.backgroundColor = '#1a1a1a';
        gameContainer.style.marginBottom = '30px';
        gameContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    });
    
    // Estilos globales para el juego
    const gameStyles = document.createElement('style');
    gameStyles.textContent = `
        .ball-game-container {
            perspective: 800px;
        }
        
        .player-ball {
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #3498db, #2980b9);
            box-shadow: 0 0 20px rgba(52, 152, 219, 0.6);
            z-index: 10;
            transition: transform 0.1s ease-out;
            will-change: transform;
        }
        
        .cube {
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.3s ease;
            will-change: transform;
        }
        
        .cube-trail {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.1);
            opacity: 0;
            z-index: 5;
            transition: opacity 0.5s ease;
        }
    `;
    document.head.appendChild(gameStyles);
    
    // Inicializar los juegos para cada sección
    sectionIds.forEach(sectionId => {
        initSectionGame(sectionId);
    });

    function initSectionGame(sectionId) {
        const container = document.getElementById(`game-container-${sectionId}`);
        if (!container) return;
        
        // Crear la bola del jugador
        const playerBall = document.createElement('div');
        playerBall.className = 'player-ball';
        playerBall.style.left = '50%';
        playerBall.style.top = '50%';
        playerBall.style.transform = 'translate(-50%, -50%)';
        container.appendChild(playerBall);
        
        // Crear cubos
        const cubes = [];
        const numCubes = 40; // Número de cubos
        const cubeSize = 30; // Tamaño de los cubos
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
        
        for (let i = 0; i < numCubes; i++) {
            const cube = document.createElement('div');
            cube.className = 'cube';
            
            // Posición inicial aleatoria
            const x = Math.floor(Math.random() * (container.offsetWidth - cubeSize));
            const y = Math.floor(Math.random() * (container.offsetHeight - cubeSize));
            
            cube.style.left = `${x}px`;
            cube.style.top = `${y}px`;
            
            // Color aleatorio con efecto de gradiente
            const colorIndex = Math.floor(Math.random() * colors.length);
            const color = colors[colorIndex];
            cube.style.backgroundColor = color.replace(')', ', 0.5)').replace('rgb', 'rgba');
            cube.style.boxShadow = `0 0 15px ${color.replace(')', ', 0.3)').replace('rgb', 'rgba')}`;
            
            // Rotación aleatoria inicial
            const rotation = Math.random() * 360;
            cube.style.transform = `rotate(${rotation}deg)`;
            
            // Velocidad y dirección aleatorias para movimiento autónomo
            const speed = Math.random() * 0.5 + 0.2;
            const direction = Math.random() * Math.PI * 2;
            
            // Guardar propiedades en el objeto para uso posterior
            cube.dataset.x = x;
            cube.dataset.y = y;
            cube.dataset.speed = speed;
            cube.dataset.direction = direction;
            cube.dataset.rotation = rotation;
            
            // Añadir al contenedor y al array
            container.appendChild(cube);
            cubes.push(cube);
        }
        
        // Variables para el seguimiento del cursor
        let mouseX = container.offsetWidth / 2;
        let mouseY = container.offsetHeight / 2;
        let ballX = container.offsetWidth / 2;
        let ballY = container.offsetHeight / 2;
        let trailCubes = [];
        
        // Manejar movimiento del mouse
        container.addEventListener('mousemove', function(e) {
            const rect = container.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });
        
        // Función para crear el efecto de estela
        function createTrail(x, y) {
            const trail = document.createElement('div');
            trail.className = 'cube-trail';
            trail.style.left = `${x - 10}px`; // Centrar la estela
            trail.style.top = `${y - 10}px`;
            container.appendChild(trail);
            
            // Mostrar con un retraso para crear efecto de "aparición"
            setTimeout(() => {
                trail.style.opacity = '0.6';
            }, 10);
            
            // Ocultar y eliminar después de un tiempo
            setTimeout(() => {
                trail.style.opacity = '0';
                setTimeout(() => {
                    if (trail.parentNode) {
                        trail.parentNode.removeChild(trail);
                    }
                }, 500);
            }, 500);
            
            return trail;
        }
        
        // Actualizar el juego en cada frame
        function update() {
            // Mover la bola del jugador hacia el cursor con suavidad
            const ballSpeed = 0.1;
            ballX += (mouseX - ballX) * ballSpeed;
            ballY += (mouseY - ballY) * ballSpeed;
            
            // Aplicar la posición de la bola
            playerBall.style.left = `${ballX}px`;
            playerBall.style.top = `${ballY}px`;
            playerBall.style.transform = 'translate(-50%, -50%) scale(1)';
            
            // Crear efecto de estela de la bola ocasionalmente
            if (Math.random() > 0.85) {
                createTrail(ballX, ballY);
            }
            
            // Radio de colisión
            const ballRadius = 25; // La mitad del diámetro de la bola
            
            // Mover y verificar colisiones con cada cubo
            cubes.forEach((cube, index) => {
                let x = parseFloat(cube.dataset.x);
                let y = parseFloat(cube.dataset.y);
                let speed = parseFloat(cube.dataset.speed);
                let direction = parseFloat(cube.dataset.direction);
                let rotation = parseFloat(cube.dataset.rotation);
                
                // Calcular el centro del cubo
                const cubeX = x + cubeSize / 2;
                const cubeY = y + cubeSize / 2;
                
                // Calcular la distancia entre la bola y el cubo
                const dx = ballX - cubeX;
                const dy = ballY - cubeY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Si hay colisión, alejar el cubo de la bola
                if (distance < ballRadius + cubeSize / 2) {
                    // Ángulo de empuje
                    const pushAngle = Math.atan2(dy, dx);
                    
                    // Fuerza de empuje basada en la cercanía
                    const pushForce = 15 * (1 - distance / (ballRadius + cubeSize / 2));
                    
                    // Empujar el cubo
                    x -= Math.cos(pushAngle) * pushForce;
                    y -= Math.sin(pushAngle) * pushForce;
                    
                    // Actualizar la dirección basada en el ángulo de empuje
                    direction = pushAngle + Math.PI;
                    
                    // Aumentar la velocidad temporalmente
                    speed = Math.min(speed + 0.5, 2.0);
                    
                    // Efecto visual de impacto
                    cube.style.transform = `rotate(${rotation}deg) scale(1.2)`;
                    cube.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
                    
                    // Restaurar el estilo después de un tiempo
                    setTimeout(() => {
                        cube.style.transform = `rotate(${rotation}deg) scale(1)`;
                        cube.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.2)';
                    }, 200);
                } else {
                    // Movimiento autónomo lento de los cubos
                    x += Math.cos(direction) * speed;
                    y += Math.sin(direction) * speed;
                    
                    // Rotación continua lenta
                    rotation += speed * 0.5;
                    cube.style.transform = `rotate(${rotation}deg)`;
                    
                    // Cambiar de dirección aleatoriamente
                    if (Math.random() < 0.01) {
                        direction = Math.random() * Math.PI * 2;
                    }
                    
                    // Disminuir la velocidad gradualmente
                    speed = Math.max(speed * 0.99, 0.2);
                }
                
                // Mantener los cubos dentro del contenedor
                if (x < 0) {
                    x = 0;
                    direction = Math.PI - direction;
                }
                if (x > container.offsetWidth - cubeSize) {
                    x = container.offsetWidth - cubeSize;
                    direction = Math.PI - direction;
                }
                if (y < 0) {
                    y = 0;
                    direction = -direction;
                }
                if (y > container.offsetHeight - cubeSize) {
                    y = container.offsetHeight - cubeSize;
                    direction = -direction;
                }
                
                // Actualizar la posición del cubo
                cube.style.left = `${x}px`;
                cube.style.top = `${y}px`;
                
                // Actualizar los datos del cubo
                cube.dataset.x = x;
                cube.dataset.y = y;
                cube.dataset.speed = speed;
                cube.dataset.direction = direction;
                cube.dataset.rotation = rotation;
                
                // Efecto de brillo cuando se acerca la bola
                if (distance < ballRadius + cubeSize / 2 + 50) {
                    const glow = 1 - (distance - (ballRadius + cubeSize / 2)) / 50;
                    cube.style.boxShadow = `0 0 ${10 + glow * 10}px rgba(255, 255, 255, ${0.2 + glow * 0.3})`;
                }
            });
            
            // Llamar a la próxima actualización
            requestAnimationFrame(update);
        }
        
        // Iniciar el bucle de actualización
        update();
    }
}

/**
 * Configura la sección de contacto con enlaces a redes sociales
 */
function setupContactSection() {
    // Verificar si existe la sección de contacto
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;
    
    // Crear el contenedor para las redes sociales
    const socialContainer = document.createElement('div');
    socialContainer.className = 'social-links';
    
    // Configurar los enlaces de redes sociales
    const socialLinks = [
        { name: 'Discord', icon: 'discord-icon', url: 'https://discord.gg/yGgHrnS2' },
        { name: 'Twitter', icon: 'twitter-icon', url: 'https://x.com/PokeSpace_1' },
        { name: 'Instagram', icon: 'instagram-icon', url: 'https://www.instagram.com/pokespacemc/' }
    ];
    
 // Crear enlaces de redes sociales
 socialLinks.forEach(social => {
    const link = document.createElement('a');
    link.className = `social-link ${social.icon}`;
    link.href = social.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.title = `Síguenos en ${social.name}`;
    
    link.innerHTML = `
        <div class="social-icon"></div>
        <span class="social-name">${social.name}</span>
    `;
    
    socialContainer.appendChild(link);
});

// Añadir el contenedor al final de la sección de contacto
contactSection.appendChild(socialContainer);

// Crear estilos para las redes sociales
const socialStyles = document.createElement('style');
socialStyles.textContent = `
    .social-links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 50px;
        padding: 20px 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .social-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #333;
        transition: transform 0.3s ease, color 0.3s ease;
    }
    
    .social-link:hover {
        transform: translateY(-5px);
        color: #5865F2;
    }
    
    .social-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-size: 30px;
        background-position: center;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        transition: background-color 0.3s ease;
    }
    
    .social-name {
        font-weight: bold;
        font-size: 14px;
    }
    
    /* Iconos de redes sociales */
    .discord-icon .social-icon {
        background-color: #5865F2;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.608 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1634-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/></svg>');
    }
    
    .twitter-icon .social-icon {
        background-color: #1DA1F2;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>');
    }
    
    .instagram-icon .social-icon {
        background-color: #E4405F;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>');
    }
    
    /* Efecto hover por red social */
    .discord-icon:hover {
        color: #5865F2;
    }
    
    .twitter-icon:hover {
        color: #1DA1F2;
    }
    
    .instagram-icon:hover {
        color: #E4405F;
    }
`;
document.head.appendChild(socialStyles);
}