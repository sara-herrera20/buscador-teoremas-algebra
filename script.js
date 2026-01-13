// Estructura de los teoremas con sus propiedades y fórmulas en LaTeX
// NOTA: Para fórmulas en una línea (inline), usa $formula$. Para fórmulas separadas (display), usa $$formula$$.
const teoremas = [
    {
        numero: "Teorema 1.1",
        nombre: "Sistemas de Ecuaciones Lineales Homogéneas",
        contenido: "Todo sistema de ecuaciones lineales homogéneas que tiene más incógnitas que ecuaciones tiene infinidad de soluciones.",
        formulas: [],
        demostracion: null
    },
    {
        numero: "Teorema 1.2",
        nombre: "Propiedades de la Traza",
        contenido: "Si $A$ y $B$ son matrices cuadradas $n\\times n$ y si $k \\in \\mathbb{R}$, entonces:",
        formulas: [
            "$$\\mathrm{tr}(A+B) = \\mathrm{tr}(A) + \\mathrm{tr}(B)$$",
            "$$\\mathrm{tr}(kA) = k\\mathrm{tr}(A)$$"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 1.3",
        nombre: "Propiedades de las Operaciones con Matrices (Parte I)",
        contenido: "Sea $A, B$ y $C$ matrices cuyos tamaños permiten las operaciones abajo enunciadas y $m, n$ escalares. Entonces se cumple:",
        formulas: [
            "$$A+B = B+A$$ (Conmutatividad de la Suma)",
            "$$A+(B+C) = (A+B)+C$$ (Asociatividad de la Suma)",
            "$$A(B+C) = AB+AC$$ (Distributividad a la izquierda)",
            "$$(A+B)C = AC+BC$$ (Distributividad a la derecha)",
            "$$(m+n)A = mA+nA$$ (Distributividad escalar)",
            "$$m(A+B) = mA+mB$$ (Distributividad escalar)",
            "$$(mA)B = A(mB) = mAB$$ (Asociatividad escalar)",
            "$$m(nA) = (mn)A$$ (Asociatividad escalar)"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 1.4",
        nombre: "Propiedades de las Matrices Cero",
        contenido: "Propiedades de las matrices cero:",
        formulas: [
            "$$A+0 = A$$",
            "$$A+(-A) = A-A = 0$$",
            "$$0A = 0$$",
            "$$A0 = 0$$"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 1.5",
        nombre: "Forma Escalonada Reducida de una Matriz Cuadrada",
        contenido: "Sea $A$ una matriz cuadrada $n \\times n$ y sea $R$ la forma escalonada reducida de $A$, entonces o $R$ tiene por lo menos un renglón de ceros o $R$ es la matriz identidad $I_n$.",
        formulas: [],
        demostracion: "Si $R$ no tiene renglones de ceros al momento de recorrer la matriz $R$ de arriba hacia abajo, los unos principales se encuentran en la diagonal principal, de modo que $R$ es la matriz identidad."
    },
    {
        numero: "Teorema 1.6",
        nombre: "Unicidad de la Matriz Inversa",
        contenido: "Sea $A$ una matriz invertible. Si $B$ y $C$ son inversas de $A$, se debe tener que: $C=B$.",
        formulas: [
            "Demostración: Como $B$ es una inversa de $A$, $AB = I$ y $BA = I$. Si multiplicamos $AB = I$ por $C$ a la izquierda: $C(AB) = CI$. Por el Teorema 1.3, $C(A)B = C$. Si $C$ también es una inversa de $A$, entonces $CA=I$, por lo que $(CA)B = IB = B$. Sustituyendo, $C=B$."
        ],
        demostracion: null // La demostración se incorporó en 'formulas' por su formato
    },
    {
        numero: "Teorema 1.7",
        nombre: "Inversa de una Matriz $2\\times2$",
        contenido: "Sea $A$ una matriz cuadrada $2\\times2$ como $A=\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$. Si $ad-bc \\neq 0$, entonces $A$ es invertible y su inversa es:",
        formulas: [
            "$$A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 1.8",
        nombre: "Inversa del Producto de Matrices",
        contenido: "Si $A$ y $B$ son matrices invertibles del mismo tamaño, entonces $AB$ también es invertible y su inversa es:",
        formulas: [
            "$$(AB)^{-1} = B^{-1}A^{-1}$$"
        ],
        demostracion: "La demostración se basa en verificar que $(AB)(B^{-1}A^{-1}) = I$ y $(B^{-1}A^{-1})(AB) = I$. $$(AB) (B^{-1}A^{-1}) = A(B B^{-1}) A^{-1} = A I A^{-1} = A A^{-1} = I$$ Y también $$(B^{-1}A^{-1}) (AB) = B^{-1} (A^{-1} A) B = B^{-1} I B = B^{-1} B = I$$"
    },
    {
        numero: "Teorema 1.9",
        nombre: "Invertibilidad y Producto",
        contenido: "Sea $A$ y $B$ matrices cuadradas del mismo tamaño. Si $AB$ es invertible, entonces, tanto $A$ como $B$ deben ser invertibles.",
        formulas: [],
        demostracion: null
    },
    {
        numero: "Teorema 1.10",
        nombre: "Criterio de Inversa por un Lado",
        contenido: "Sea $A$ una matriz cuadrada de tamaño $n\\times n$. Si $B$ es una matriz cuadrada, del mismo tamaño que $A$, tal que $AB=I$ o $BA=I$, entonces $A$ es invertible y $B=A^{-1}$." ,
        formulas: [
            "Si $AB=I$, entonces $A$ es invertible y $B=A^{-1}$",
            "Si $BA=I$, entonces $A$ es invertible y $B=A^{-1}$"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 1.11",
        nombre: "Propiedades de la Transpuesta",
        contenido: "Sea $A$ y $B$ matrices cuyos tamaños permitan las operaciones abajo enunciadas y sea $k \\in \\mathbb{R}$:",
        formulas: [
            "$$((A)^T)^T = A$$",
            "$$(A+B)^T = A^T + B^T$$",
            "$$(AB)^T = B^T A^T$$",
            "$$(kA)^T = k A^T$$"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 1.12",
        nombre: "Leyes de los Exponentes para Matrices",
        contenido: "Sea $A$ una matriz cuadrada y $r, s \\in \\mathbb{N}$. Esto se cumple:",
        formulas: [
            "$$A^r A^s = A^{r+s}$$",
            "$$ (A^r)^s = A^{rs} $$"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 1.13",
        nombre: "Propiedades de la Inversa (Parte II)",
        contenido: "Sea $A$ una matriz cuadrada e invertible y sea $n \\in \\mathbb{N}$, también, sea $k \\in \\mathbb{R}$, con $k\\neq 0$. Esto se cumple:",
        formulas: [
            "$$((A^{-1})^{-1}) = A$$",
            "$$(A^n)^{-1} = (A^{-1})^n$$",
            "$$(kA)^{-1} = \\frac{1}{k} A^{-1}$$"
        ],
        demostracion: "Demostración de $$(kA)^{-1} = \\frac{1}{k} A^{-1}$$: Se verifica que $(kA) (\\frac{1}{k} A^{-1}) = I$. $$(kA) \\frac{1}{k} A^{-1} = (k \\frac{1}{k}) (A A^{-1}) = 1 I = I$$"
    },
    {
        numero: "Teorema 1.14",
        nombre: "Inversa de la Transpuesta",
        contenido: "Si $A$ es una matriz cuadrada e invertible, entonces su $A^T$ también es invertible y:",
        formulas: [
            "$$(A^T)^{-1} = (A^{-1})^T$$"
        ],
        demostracion: "Se verifica que $(A^{-1})^T A^T = I$ y $A^T (A^{-1})^T = I$. $$(A^{-1})^T A^T = (A A^{-1})^T = (I)^T = I$$ Y también $$A^T (A^{-1})^T = (A^{-1} A)^T = (I)^T = I$$"
    },
    {
        numero: "Teorema 1.15",
        nombre: "Matrices Elementales y Operaciones de Renglón",
        contenido: "Sea $A$ una matriz de tamaño $m\\times n$ y sea $E$ una matriz elemental, que se obtiene al aplicar cierta operación elemental por renglón a la matriz identidad $I_m$. Entonces, la matriz $EA$ es la matriz que se obtiene al aplicar directamente la misma operación elemental por renglón a la matriz $A$.",
        formulas: [
             "Operación elemental por renglón | Operación elemental inversa",
             "--- | ---",
             "$R_i \\to R_i + cR_j$ | $R_i \\to R_i - cR_j$",
             "$R_i \\to cR_i$ | $R_i \\to \\frac{1}{c} R_i$",
             "$R_i \\leftrightarrow R_j$ | $R_i \\leftrightarrow R_j$"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 1.16",
        nombre: "Invertibilidad de Matrices Elementales",
        contenido: "Toda matriz elemental es invertible y su inversa es también una matriz elemental. ",
        formulas: [
            "Sea $E$ la matriz elemental y $E_0$ la matriz elemental que se obtiene al aplicar la operación elemental inversa a $I_n$. Luego: $E E_0=I$ y $E_0 E=I$. Por el Teorema 1.10, $E$ y $E_0$ son invertibles y son inversas entre sí."
        ],
        demostracion: null
    },
    {
        numero: "Teorema 1.17",
        nombre: "Proposiciones Equivalentes de Invertibilidad",
        contenido: "Sea $A$ una matriz cuadrada tamaño $n\\times n$, entonces las siguientes proposiciones son equivalentes, es decir, todas son verdaderas o todas son falsas:",
        formulas: [
            "a) $A$ es invertible.",
            "b) El sistema de ecuaciones lineales homogéneas $A\\vec{x} = \\vec{0}$ solo tiene solución trivial.",
            "c) La forma escalonada reducida de $A$ es $I_n$.",
            "d) $A$ puede expresarse como un producto de matrices elementales."
        ],
        demostracion: "Se demuestra la equivalencia con la cadena de implicaciones: a) $\\to$ b), b) $\\to$ c), c) $\\to$ d) y d) $\\to$ a). Por ejemplo, a) $\\to$ b): Si $A$ es invertible, al multiplicar $A\\vec{x} = \\vec{0}$ por $A^{-1}$ a la izquierda, se obtiene $A^{-1}(A\\vec{x}) = A^{-1}\\vec{0}$, lo que implica $I\\vec{x} = \\vec{0}$, o $\\vec{x} = \\vec{0}$ (solución trivial)."
    },
    {
        numero: "Teorema 1.18",
        nombre: "Solución de Sistema Lineal con Matriz Invertible",
        contenido: "Sea $A$ una matriz cuadrada $n\\times n$ y sea $\\vec{b}$ una matriz $n\\times 1$. Si $A$ es invertible, entonces el sistema $A\\vec{x}=\\vec{b}$ tiene solución única, a saber:",
        formulas: [
            "$$\\vec{x}= A^{-1} \\vec{b}$$"
        ],
        demostracion: "Se verifica que $\\vec{x}= A^{-1} \\vec{b}$ es solución: $A(A^{-1} \\vec{b})= (A A^{-1})\\vec{b}=I\\vec{b} = \\vec{b}$. Para la unicidad, sea $\\vec{x}_1$ otra solución, $A\\vec{x}_1 = \\vec{b}$. Multiplicando por $A^{-1}$ a la izquierda: $A^{-1}(A\\vec{x}_1) = A^{-1}\\vec{b}$, resultando $I\\vec{x}_1 = A^{-1}\\vec{b}$, por lo que $\\vec{x}_1 = A^{-1}\\vec{b}$ y la solución es única."
    },
    // --- PARCIAL 2: DETERMINANTES ---
    {
        numero: "Teorema 2.1",
        nombre: "Determinante de la Transpuesta",
        categoria: "Determinantes",
        contenido: "Si $A$ es una matriz $n \\times n$, su determinante es igual al de su transpuesta.",
        formulas: ["$$|A| = |A^T|$$"],
        demostracion: null
    },
    {
        numero: "Teorema 2.2",
        nombre: "Renglón o Columna de Ceros",
        categoria: "Determinantes",
        contenido: "Si una matriz cuadrada $A$ tiene una fila o columna de ceros, su determinante es 0.",
        formulas: ["$$\\text{det}(A) = 0$$"],
        demostracion: null
    },
    {
        numero: "P. Fundamental 1",
        nombre: "Renglones Iguales",
        categoria: "Determinantes",
        contenido: "Si un determinante tiene dos renglones o columnas iguales, es igual a cero.",
        formulas: [],
        demostracion: null
    },
    {
        numero: "Teorema 2.3",
        nombre: "Inversa mediante Adjunta",
        categoria: "Determinantes",
        contenido: "Si $\\text{det}(A) \\neq 0$, entonces $A$ es invertible y su inversa es:",
        formulas: ["$$A^{-1} = \\frac{1}{\\text{det}(A)} \\text{adj}(A)$$"],
        demostracion: null
    },
    {
        numero: "Teorema 2.4",
        nombre: "Regla de Cramer",
        categoria: "Determinantes",
        contenido: "Para un sistema $A\\vec{x}=\\vec{b}$ con $\\text{det}(A) \\neq 0$, la solución para cada incógnita es:",
        formulas: ["$$x_j = \\frac{\\text{det}(A_j)}{\\text{det}(A)}$$"],
        demostracion: "$A_j$ se obtiene al sustituir la columna $j$ de $A$ por el vector $\\vec{b}$."
    },
    {
        numero: "Teorema 2.5",
        nombre: "Matrices Triangulares",
        categoria: "Determinantes",
        contenido: "El determinante de una matriz triangular es el producto de los elementos de su diagonal principal.",
        formulas: ["$$\\text{det}(A) = a_{11} \\cdot a_{22} \\dots a_{nn}$$"],
        demostracion: null
    },
    {
        numero: "Teorema 2.6",
        nombre: "Operaciones Elementales",
        categoria: "Determinantes",
        contenido: "Efecto en el determinante:",
        formulas: [
            "a) Intercambio: $\\text{det}(B) = -\\text{det}(A)$",
            "b) Multiplicación por $k$: $\\text{det}(B) = k \\cdot \\text{det}(A)$",
            "c) Suma de múltiplo: $\\text{det}(B) = \\text{det}(A)$"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 2.10",
        nombre: "Invertibilidad y Determinante",
        categoria: "Determinantes",
        contenido: "$A$ es invertible si y solo si su determinante es diferente de cero.",
        formulas: ["$$A \\text{ es invertible} \\iff \\text{det}(A) \\neq 0$$"],
        demostracion: null
    },
    {
        numero: "Teorema 2.12",
        nombre: "Determinante del Producto",
        categoria: "Determinantes",
        contenido: "El determinante del producto de dos matrices es el producto de sus determinantes.",
        formulas: ["$$\\text{det}(AB) = \\text{det}(A) \\cdot \\text{det}(B)$$"],
        demostracion: null
    },
    {
        numero: "Teorema 2.13",
        nombre: "Determinante de la Inversa",
        categoria: "Determinantes",
        contenido: "Si $A$ es invertible, el determinante de su inversa es el recíproco de su determinante.",
        formulas: ["$$\\text{det}(A^{-1}) = \\frac{1}{\\text{det}(A)}$$"],
        demostracion: null
    },
    {
        numero: "Formulario FMMI",
        nombre: "Propiedades de la Adjunta",
        categoria: "Determinantes",
        contenido: "Propiedades útiles para exámenes:",
        formulas: [
            "$$|kA| = k^n |A|$$",
            "$$|\\text{adj}(A)| = |A|^{n-1}$$",
            "$$\\text{adj}(\\text{adj}(A)) = |A|^{n-2} A$$"
        ],
        demostracion: null
    },

    // --- PARCIAL 2: ESPACIOS VECTORIALES ---
    {
        numero: "Teorema 2.16",
        nombre: "Criterio de Subespacio",
        categoria: "Espacios Vectoriales",
        contenido: "$W$ es subespacio de $V$ si cumple:",
        formulas: [
            "a) $\\vec{u}, \\vec{v} \\in W \\implies \\vec{u} + \\vec{v} \\in W$",
            "b) $\\vec{u} \\in W, k \\in F \\implies k\\vec{u} \\in W$"
        ],
        demostracion: null
    },
    {
        numero: "Teorema 2.18",
        nombre: "Conjunto Solución Homogéneo",
        categoria: "Espacios Vectoriales",
        contenido: "El conjunto solución de un sistema $A\\vec{x}=\\vec{0}$ siempre es un subespacio de $\\mathbb{R}^n$.",
        formulas: [],
        demostracion: null
    },
    {
        numero: "Teorema 2.19",
        nombre: "Combinaciones Lineales",
        categoria: "Espacios Vectoriales",
        contenido: "El conjunto de todas las combinaciones lineales de $S$ es el subespacio más pequeño que contiene a $S$.",
        formulas: [],
        demostracion: null
    },

    // --- PARCIAL 2: INDEPENDENCIA Y BASES ---
    {
        numero: "Teorema 2.22",
        nombre: "Vectores en R^n",
        categoria: "Independencia y Bases",
        contenido: "En $\\mathbb{R}^n$, si un conjunto tiene más de $n$ vectores, entonces es Linealmente Dependiente (L.D.).",
        formulas: [],
        demostracion: null
    },
    {
        numero: "Teorema 2.24",
        nombre: "Wronskiano",
        categoria: "Independencia y Bases",
        contenido: "Para funciones diferenciables, si el Wronskiano es diferente de cero, las funciones son Linealmente Independientes (L.I.).",
        formulas: ["$$W(f_1, \\dots, f_n) \\neq 0 \\implies L.I.$$"],
        demostracion: null
    },
    {
        numero: "Teorema 2.25",
        nombre: "Unicidad de la Base",
        categoria: "Independencia y Bases",
        contenido: "Si $B$ es base de $V$, cada vector de $V$ se expresa de forma única como combinación lineal de los vectores de la base.",
        formulas: [],
        demostracion: null
    },
    {
        numero: "Teorema 2.27",
        nombre: "Tamaño de la Base",
        categoria: "Independencia y Bases",
        contenido: "Todas las bases de un espacio vectorial de dimensión finita tienen exactamente el mismo número de vectores.",
        formulas: [],
        demostracion: null
    },
    {
        numero: "Teorema 2.29",
        nombre: "Atajo de Dimensión n",
        categoria: "Independencia y Bases",
        contenido: "En un espacio de dimensión $n$, un conjunto de exactamente $n$ vectores es base si es L.I. o si genera el espacio.",
        formulas: [],
        demostracion: null
    },
    {
        numero: "Teorema 2.31",
        nombre: "Dimensión del Subespacio",
        categoria: "Independencia y Bases",
        contenido: "Si $W$ es subespacio de $V$, entonces $\\text{dim}(W) \\leq \\text{dim}(V)$. Si las dimensiones son iguales, $W=V$.",
        formulas: [],
        demostracion: null
    }
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const statsEl = document.getElementById('stats');

// Mostrar total de teoremas
function updateStats() {
    statsEl.innerText = `${teoremas.length} Teoremas en la base de datos`;
}

// Función para asignar color por categoría
function getCategoryClass(cat) {
    const maps = {
        "Matrices": "cat-matrices",
        "Determinantes": "cat-determinantes",
        "Espacios Vectoriales": "cat-espacios",
        "Independencia y Bases": "cat-independencia",
        "Invertibilidad": "cat-matrices"
    };
    return maps[cat] || "";
}

function search() {
    const query = searchInput.value.trim().toLowerCase();
    resultsContainer.innerHTML = '';

    if (query === "") {
        resultsContainer.innerHTML = `
            <div class="initial-message">
                <p>Escribe el número del teorema o conceptos clave (ej: "inversa", "cramer") para buscar.</p>
            </div>
        `;
        return;
    }

    const filtered = teoremas.filter(t => {
        const text = `${t.numero} ${t.nombre} ${t.contenido} ${t.categoria}`.toLowerCase();
        return text.includes(query);
    });

    if (filtered.length === 0) {
        resultsContainer.innerHTML = `<p class="initial-message">No se encontraron teoremas para "${query}"</p>`;
        return;
    }

    filtered.forEach(t => {
        const card = document.createElement('div');
        card.className = 'teorema-card';

        const formulasHTML = t.formulas.map(f => `<div class="formula-block">${f}</div>`).join('');
        const proofHTML = t.demostracion ? `
            <div class="proof-section">
                <h3>Nota / Demostración</h3>
                <p>${t.demostracion}</p>
            </div>
        ` : '';

        card.innerHTML = `
            <div class="card-header">
                <span class="teorema-num">${t.numero}</span>
                <span class="teorema-cat ${getCategoryClass(t.categoria)}">${t.categoria}</span>
            </div>
            <h2>${t.nombre}</h2>
            <p>${t.contenido}</p>
            ${formulasHTML}
            ${proofHTML}
        `;
        resultsContainer.appendChild(card);
    });

    // Indicar a MathJax que re-procese las fórmulas
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise([resultsContainer]);
    }
}

searchInput.addEventListener('input', search);
window.onload = () => {
    updateStats();
    search();
};
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

// Función para escapar caracteres HTML especiales (útil pero opcional aquí)
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(m) {
        return ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[m];
    });
}

// Función principal de búsqueda
function searchTheorems() {
    const query = searchInput.value.trim().toLowerCase();
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

    if (query.length === 0) {
        resultsContainer.innerHTML = '<p class="initial-message">Comienza a escribir para buscar los teoremas.</p>';
        return;
    }

    const filteredTheorems = teoremas.filter(teorema => {
        // Concatenar campos clave para la búsqueda
        const searchableText = `${teorema.numero} ${teorema.nombre} ${teorema.contenido} ${teorema.demostracion || ''}`.toLowerCase();
        
        // Buscar por coincidencia del número de teorema O por cualquier palabra clave
        return searchableText.includes(query);
    });

    if (filteredTheorems.length === 0) {
        resultsContainer.innerHTML = '<p class="initial-message">No se encontraron teoremas que coincidan con su búsqueda.</p>';
        return;
    }

    // Generar el HTML para cada teorema encontrado
    filteredTheorems.forEach(teorema => {
        let formulasHTML = '';
        if (teorema.formulas.length > 0) {
            formulasHTML = teorema.formulas.map(formula => 
                `<div class="formula-block"><p>${formula}</p></div>`
            ).join('');
        }

        let demostracionHTML = '';
        if (teorema.demostracion) {
            demostracionHTML = `
                <div class="proof-section">
                    <h3>Demostración:</h3>
                    <p>${teorema.demostracion}</p>
                </div>
            `;
        }

        const teoremaCard = `
            <div class="teorema-card">
                <h2>${teorema.numero}: ${teorema.nombre}</h2>
                <p>${teorema.contenido}</p>
                ${formulasHTML}
                ${demostracionHTML}
            </div>
        `;
        resultsContainer.innerHTML += teoremaCard;
    });

    // Indicar a MathJax que re-procese las nuevas fórmulas añadidas al DOM
    if (window.MathJax) {
        MathJax.typesetPromise([resultsContainer]).catch((err) => console.log('MathJax Error:', err));
    }
}
searchInput.addEventListener('input', searchTheorems);
document.addEventListener('DOMContentLoaded', searchTheorems);
