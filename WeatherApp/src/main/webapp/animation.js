/**
 * 
 */
// Set up the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("background"), alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Add Earth
        const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
        const earthMaterial = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/earth_atmos_2048.jpg"),
        });
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earth);

        // Add Sun
        const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.position.set(15, 15, -20);
        scene.add(sun);

        // Add Moon
        const moonGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        const moonMaterial = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/moon_1024.jpg"),
        });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.position.set(-10, -5, -15);
        scene.add(moon);

        // Add stars
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
        const starVertices = [];

        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starVertices.push(x, y, z);
        }

        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(ambientLight, pointLight);

        // Camera position
        camera.position.z = 30;

        // Animation state
        let isPaused = false;

        // Animation loop
        function animate() {
            if (!isPaused) {
                earth.rotation.y += 0.001; // Rotate the Earth
                moon.rotation.y += 0.002; // Rotate the Moon
                sun.rotation.y += 0.0005; // Rotate the Sun
                moon.position.x = 10 * Math.cos(Date.now() * 0.001); // Orbit animation
                moon.position.z = 10 * Math.sin(Date.now() * 0.001); // Orbit animation
            }
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        // Pause and resume animation on mouse events
        document.addEventListener('mousedown', () => (isPaused = true));
        document.addEventListener('mouseup', () => (isPaused = false));
        document.addEventListener('touchstart', () => (isPaused = true));
        document.addEventListener('touchend', () => (isPaused = false));

        // Handle window resizing
        window.addEventListener("resize", () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });