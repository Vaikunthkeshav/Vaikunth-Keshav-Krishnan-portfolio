// Enhanced Portfolio Script with Professional Modal System
// Complete version with Smart Concussion Detection Helmet project added
// UPDATED (Oct 27, 2025): Applied requested fixes (see change log at bottom)

// Enhanced Projects Data with Your Actual Projects
const projectsData = [
    {
        id: 1,
        title: "Cacao Winnowing Machine with Integrated Vacuum",
        shortDescription: "Designed cost-effective cacao winnower with integrated vacuum blower for chocolate producers.",
        image: "assets/images/Chocolate Winnower/19.png", // FIX: correct hero image path & extension
        imageGallery: [
            {
                src: "assets/images/Chocolate Winnower/15.png",
                caption: "Process flow diagram showing the winnowing operation with integrated vacuum system for separating husks from nibs"
            },
            {
                src: "assets/images/Chocolate Winnower/11.png",
                caption: "3D CAD assembly model of the complete winnowing machine design"
            },
            {
                src: "assets/images/Chocolate Winnower/12.png",
                caption: "Exploded view showing individual components and assembly sequence"
            },
            {
                src: "assets/images/Chocolate Winnower/13.png",
                caption: "Cross-sectional view highlighting the internal airflow and separation mechanism"
            },
            {
                src: "assets/images/Chocolate Winnower/16.png",
                caption: "Detailed component breakdown with material specifications and manufacturing processes"
            },
            {
                src: "assets/images/Chocolate Winnower/17.png",
                caption: "Engineering drawings with dimensions and geometric tolerances for manufacturing"
            },
            {
                src: "assets/images/Chocolate Winnower/18.png",
                caption: "Material selection analysis using Ashby charts for optimal component properties"
            },
            {
                src: "assets/images/Chocolate Winnower/19.png",
                caption: "Cost analysis breakdown showing competitive pricing compared to market alternatives"
            },
            {
                src: "assets/images/Chocolate Winnower/20.png",
                caption: "Manufacturing process flowchart detailing SLS printing and assembly procedures"
            },
            {
                src: "assets/images/Chocolate Winnower/43.png",
                caption: "Performance testing results showing separation efficiency and throughput data"
            },
                        {
                src: "assets/images/Chocolate Winnower/45.png",
                caption: "Asby Chart for Material Selection"
            }
        ],
        technologies: ["SolidWorks", "Material Selection", "DFM", "SLS Manufacturing", "Ashby Charts"],
        category: "Product Design",
        date: "August 2024 - December 2024",
        team: "Team Project (Argandona, Krishnan, Peterson, Vasquez)",
        overview: `
            <p>Developed an innovative cacao winnowing machine with integrated vacuum blower as part of the MCEN 5045 Design for Manufacturability course. The project aimed to create a cost-effective solution that surpasses existing market alternatives while providing unique functionality absent in current offerings.</p>
            <p>The primary objective was to design a winnower that is not only more affordable but also uniquely equipped with a built-in vacuum system. This integration significantly enhances the separation efficiency by effectively removing lighter husks from heavier cacao nibs, ensuring a cleaner and more precise winnowing operation.</p>
        `,
        technical: `
            <div class="project-section">
                <h3>Problem Statement and Design Approach</h3>
                <p>Chocolate winnowing is a critical step in chocolate production that separates cacao nibs from husks after roasting. Traditional manual winnowing methods are time-consuming and inefficient for small-scale chocolate makers. This project aimed to design and manufacture an automated winnowing machine to improve efficiency while maintaining quality separation.</p>

                <div class="project-image">
                    <img src="assets/images/Chocolate Winnower/15.png" alt="Process Flow Diagram">
                    <p style="font-style: italic;"><strong>Process Flow Diagram:</strong> Comprehensive winnowing operation showing the integrated vacuum system for separating husks from nibs. The gravity-assisted design optimizes material flow while ensuring efficient husk removal.</p>
                </div>
                <div class="project-image">
                    <img src="assets/images/Chocolate Winnower/12.png" alt="Glass Box Diagram">
                     <p style="font-style: italic;">Glass Box Diagram</p> 
                </div>

                
<h3>Material Selection and Engineering Analysis</h3>
<p>The design process utilized systematic material selection methodology with Ashby charts evaluating Young's modulus, density, and cost criteria. Strategic material choices balanced mechanical performance, cost constraints, and food safety requirements.</p>


<div class="project-image">
    <img src="assets/images/Chocolate Winnower/45.png" alt="Asby Chart for Material Selection">
    <p>Strength vs. Density Ashby chart highlighting material trade-offs.</p>
</div>

<h4>Final Component Materials</h4>
<ul>
  <li><strong>Polypropylene (PP):</strong> Blower housing and bins — low cost, good mechanical strength.</li>
  <li><strong>301 Stainless Steel:</strong> Platform — excellent rigidity and structural integrity.</li>
  <li><strong>Polyethylene (PE):</strong> Separator column — balanced stiffness, hardness, and food safety.</li>
  <li><strong>Polystyrene (PS):</strong> Impeller — high stiffness and durability.</li>
</ul>
<h3>Manufacturing and Cost Optimization</h3>
                <p>The manufacturing approach utilized Selective Laser Sintering (SLS) for polymer components and laser cutting for stainless steel housing. The design features electronic speed control for the vacuum motor, gravity-fed operation, and integrated collection system.</p>

                <div class="project-image">
                    <img src="assets/images/Chocolate Winnower/19.png" alt="3D CAD Assembly">
                    <p style="font-style: italic;"><strong>Complete CAD Assembly:</strong> Detailed 3D model showing the integrated winnowing machine design with all components. The assembly demonstrates compact footprint and efficient material flow paths for small-scale chocolate production.</p>
                </div>

                <div class="project-image">
                    <h3>Cost Estimate Summary</h3>
                    <table style="width:65%; border-collapse: collapse; margin: 1rem auto; text-align: center; font-size: 0.95rem; color: var(--text-primary);">
                        <thead style="background-color: #f4b400; color: #000;">
                            <tr>
                                <th style="border: 1px solid #555; padding: 10px;">PART NO.</th>
                                <th style="border: 1px solid #555; padding: 10px;">Original</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="background-color:#111;">
                                <td style="border: 1px solid #555; padding: 10px;">Unit Cost ($)</td>
                                <td style="border: 1px solid #555; padding: 10px;">$107.80</td>
                            </tr>
                            <tr style="background-color:#1a1a1a;">
                                <td style="border: 1px solid #555; padding: 10px;">OME ($)</td>
                                <td style="border: 1px solid #555; padding: 10px;">$550.07</td>
                            </tr>
                            <tr style="background-color:#111;">
                                <td style="border: 1px solid #555; padding: 10px;">Stock Parts ($)</td>
                                <td style="border: 1px solid #555; padding: 10px;">$27.79</td>
                            </tr>
                            <tr style="background-color:#f7f7f7; color:#000; font-weight:bold;">
                                <td style="border: 1px solid #555; padding: 10px;">Overall Selling Price ($)</td>
                                <td style="border: 1px solid #555; padding: 10px;">$441.80</td>
                            </tr>
                            <tr style="background-color:#f7f7f7; color:#000; font-weight:bold;">
                                <td style="border: 1px solid #555; padding: 10px;">Break-Even Quantity</td>
                                <td style="border: 1px solid #555; padding: 10px;">420</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="text-align:center; font-size:0.9rem; color:var(--text-secondary); margin-top:0.5rem; font-style: italic;">
                        Summary of cost estimates showing detailed cost breakdown and break-even analysis for the Cacao Winnowing Machine.
                    </p>
                </div>

                <h3>Design Features and Innovation</h3>
                <ul>
                    <li><strong>Integrated Vacuum System:</strong> Unique built-in vacuum feature absent in current market offerings</li>
                    <li><strong>Modular Design:</strong> Easy maintenance access and component replacement capability</li>
                    <li><strong>Variable Speed Control:</strong> Accommodates different bean varieties and processing requirements</li>
                    <li><strong>Food Safety Compliance:</strong> All materials selected meet food-grade requirements</li>
                </ul>
            </div>
        `,
        results: `
            <ul>
                <li><strong>Cost Achievement:</strong> Final unit price of $441.80, making it highly competitive compared to existing market alternatives</li>
                <li><strong>Efficiency Improvement:</strong> Integrated vacuum system provides superior separation efficiency compared to traditional winnowers</li>
                <li><strong>Market Differentiation:</strong> Unique built-in vacuum feature sets it apart from all current market offerings</li>
                <li><strong>Scalability:</strong> Design suitable for small-scale chocolate producers to moderate-sized processing facilities</li>
                <li><strong>User Experience:</strong> Reduced manual intervention and increased overall throughput with user-friendly operation</li>
            </ul>
        `,
        reportLink: "assets/docs/Final Project Report-MCEN 5045.pdf",
        githubLink: "https://github.com/yourusername/cacao-winnowing-machine"
    },
    {
        id: 2,
        title: "CFD Heat Sink Optimization: Natural Convection Analysis",
        shortDescription: "Computational fluid dynamics study optimizing heat sink fin configuration achieving 62% heat transfer improvement using monolithic coupling approach.",
        image: "assets/images/cfd/domain_diagram.png",
        imageGallery: [
            {
                src: "assets/images/cfd/mesh_6fins.png",
                caption: "6-fin configuration mesh with coarse spacing (17.8mm) showing isolated boundary layer development"
            },
            {
                src: "assets/images/cfd/mesh_10fins.png",
                caption: "Optimal 10-fin configuration mesh (9.3mm spacing) with refined boundary layer resolution achieving y+ < 1"
            },
            {
                src: "assets/images/cfd/mesh_13fins.png",
                caption: "13-fin configuration mesh with tight spacing (6.5mm) demonstrating merged boundary layer conditions"
            },
            {
                src: "assets/images/cfd/vel_10fins.png",
                caption: "Velocity magnitude contours for optimal 10-fin configuration showing strong convective flow with maximum velocity of 3.1e-02 m/s"
            },
            {
                src: "assets/images/cfd/temp_10fins.png",
                caption: "Temperature distribution for 10-fin configuration displaying effective heat dissipation from 353K base to 293K ambient"
            },
            {
                src: "assets/images/cfd/press_10fins.png",
                caption: "Pressure field contours showing natural convection-driven flow patterns in the optimal fin configuration"
            },
            {
                src: "assets/images/cfd/10fins_velocity_t1.png",
                caption: "Transient velocity field at t=1s showing initial flow development in the 10-fin configuration"
            },
            {
                src: "assets/images/cfd/10fins_velocity_t5.png",
                caption: "Velocity field at t=5s demonstrating boundary layer growth and flow establishment"
            },
            {
                src: "assets/images/cfd/10fins_velocity_t25.png",
                caption: "Steady-state velocity field at t=25s showing fully developed natural convection patterns"
            },
            {
                src: "assets/images/cfd/boundary_layer_interaction.png",
                caption: "Boundary layer interaction analysis illustrating optimal spacing where thermal boundary layers just begin to interact at the base plate"
            }
        ],
        technologies: ["ANSYS Fluent", "CFD Analysis", "Python", "Monolithic Coupling", "Boussinesq Approximation"],
        category: "Computational Analysis",
        date: "January 2025 - May 2025",
        team: "Team Project: Surya Sharon Raj Goda, Saravana Kumar Kodakinti Prakash, Anoop Subramanya, K. Vaikunth Keshav",
        overview: `
            <p>Conducted comprehensive computational fluid dynamics analysis to optimize passive heat sink design for electronic cooling applications as part of MCEN 4231/5231 Computational Fluid Dynamics course at University of Colorado Boulder.</p>
            <p>The study investigated natural convection heat transfer performance across three fin array configurations (6, 10, and 13 fins) to determine optimal spacing that maximizes heat transfer while minimizing material usage. Used advanced monolithic coupling approach with Boussinesq approximation to solve coupled Navier-Stokes and energy equations.</p>
            <div class="project-images" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
                <div>
                    <img src="assets/images/cfd/mesh_6fins.png" alt="6 Fins Mesh" style="width: 100%; border-radius: 8px;">
                    <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">6 Fins Mesh</p>
                </div>
                <div>
                    <img src="assets/images/cfd/mesh_10fins.png" alt="10 Fins Mesh" style="width: 100%; border-radius: 8px;">
                    <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">10 Fins Mesh (Optimal)</p>
                </div>
                <div>
                    <img src="assets/images/cfd/mesh_13fins.png" alt="13 Fins Mesh" style="width: 100%; border-radius: 8px;">
                    <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">13 Fins Mesh</p>
                </div>
            </div>
            <p style="text-align: center; font-size: 0.9rem; color: var(--text-secondary);">Computational mesh configurations for three fin array designs</p>
        `,
        technical: `
            <ul>
                <li><strong>CFD Methodology:</strong> Monolithic coupling scheme combining velocity, pressure, and temperature function spaces for unified solution</li>
                <li><strong>Governing Equations:</strong> Coupled Navier-Stokes and energy equations with Boussinesq approximation for natural convection</li>
                <li><strong>Boundary Conditions:</strong>
                    <ul>
                        <li>Heated fin surfaces: Constant temperature 80°C</li>
                        <li>Open boundaries: Zero heat flux, open velocity conditions</li>
                        <li>No-slip conditions on fin and base surfaces</li>
                        <li>Initial ambient temperature: 30°C</li>
                    </ul>
                </li>
                <li><strong>Configuration Analysis:</strong> Systematic comparison of fin spacings:
                    <ul>
                        <li>Configuration A (6 fins): 17.8mm spacing - Isolated boundary layers</li>
                        <li>Configuration B (10 fins): 9.3mm spacing - Interacting boundary layers (optimal)</li>
                        <li>Configuration C (13 fins): 6.5mm spacing - Merged boundary layers</li>
                    </ul>
                </li>
                <li><strong>Advanced Analysis:</strong> Rayleigh number characterization (Ra<sub>S</sub>) showing optimal range of 1×10³ to 3×10³</li>
            </ul>
            <div class="project-images">
                <h4 style="margin-top: 1.5rem; margin-bottom: 1rem;">Steady-State Results Comparison</h4>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <img src="assets/images/cfd/vel_6fins.png" alt="6 Fins Velocity" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">6 Fins - Velocity Field</p>
                    </div>
                    <div>
                        <img src="assets/images/cfd/vel_10fins.png" alt="10 Fins Velocity" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">10 Fins - Velocity Field</p>
                    </div>
                    <div>
                        <img src="assets/images/cfd/vel_13fins.png" alt="13 Fins Velocity" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">13 Fins - Velocity Field</p>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <img src="assets/images/cfd/temp_6fins.png" alt="6 Fins Temperature" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">6 Fins - Temperature</p>
                    </div>
                    <div>
                        <img src="assets/images/cfd/temp_10fins.png" alt="10 Fins Temperature" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">10 Fins - Temperature</p>
                    </div>
                    <div>
                        <img src="assets/images/cfd/temp_13fins.png" alt="13 Fins Temperature" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">13 Fins - Temperature</p>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <img src="assets/images/cfd/press_6fins.png" alt="6 Fins Pressure" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">6 Fins - Pressure Field</p>
                    </div>
                    <div>
                        <img src="assets/images/cfd/press_10fins.png" alt="10 Fins Pressure" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">10 Fins - Pressure Field</p>
                    </div>
                    <div>
                        <img src="assets/images/cfd/press_13fins.png" alt="13 Fins Pressure" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">13 Fins - Pressure Field</p>
                    </div>
                </div>
            </div>
        `,
        results: `
            <ul>
                <li><strong>Optimal Configuration Identified:</strong> 10-fin design achieved highest heat transfer rate of <strong>4.62W</strong></li>
                <li><strong>Performance Improvement:</strong> 
                    <ul>
                        <li>62% higher heat transfer than 6-fin configuration (2.85W)</li>
                        <li>18% superior performance compared to 13-fin design (3.92W)</li>
                    </ul>
                </li>
                <li><strong>Key Finding:</strong> Optimal heat transfer occurs when boundary layers just begin to interact (Ra<sub>S</sub> ≈ 2.03×10³)</li>
                <li><strong>Flow Physics Insights:</strong>
                    <ul>
                        <li>6-fin: Strong convection but reduced surface area</li>
                        <li>10-fin: Optimal balance of airflow and heat transfer surface</li>
                        <li>13-fin: High surface area but poor airflow due to merged boundary layers</li>
                    </ul>
                </li>
                <li><strong>Engineering Impact:</strong> Demonstrated that increasing fin count beyond optimal spacing reduces performance</li>
                <li><strong>Validation:</strong> Results align with Bar-Cohen and Rohsenow theoretical models for natural convection</li>
            </ul>
            <div class="project-images">
                <h4 style="margin-top: 1.5rem; margin-bottom: 1rem;">Transient Analysis - 10 Fins Configuration</h4>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                    <div>
                        <img src="assets/images/cfd/10fins_velocity_t1.png" alt="10 Fins t=1s" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">Velocity at t=1s</p>
                    </div>
                    <div>
                        <img src="assets/images/cfd/10fins_velocity_t5.png" alt="10 Fins t=5s" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">Velocity at t=5s</p>
                    </div>
                    <div>
                        <img src="assets/images/cfd/10fins_velocity_t25.png" alt="10 Fins t=25s" style="width: 100%; border-radius: 8px;">
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">Velocity at t=25s (Steady)</p>
                    </div>
                </div>
                <div style="margin-bottom: 1.5rem; display: flex; flex-direction: column; align-items: center;">
                    <img src="assets/images/cfd/boundary_layer_interaction.png" alt="Boundary Layer Interaction" style="width: 40%; max-width: 300px; border-radius: 8px;">
                    <p style="text-align: center; font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.5rem;">Boundary layer interaction analysis showing optimal spacing in 10-fin configuration</p>
                    <div style="background: var(--card-bg); padding: 1rem; border-radius: 8px; margin-top: 1rem; border-left: 3px solid var(--primary);">
                        <h5 style="margin-bottom: 0.5rem; color: var(--primary);">Boundary Layer Physics</h5>
                        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary);">
                            The diagram illustrates the critical boundary layer development between adjacent fins. As heated air rises along the fin surfaces, thermal boundary layers form and grow. The spacing between fins (S) determines the flow regime:
                        </p>
                        <ul style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.5rem;">
                            <li><strong>Wide spacing (6 fins, S=17.8mm):</strong> Boundary layers remain isolated with fully developed flow between fins - strong convection but limited surface area</li>
                            <li><strong>Optimal spacing (10 fins, S=9.3mm):</strong> Boundary layers just begin to interact at the isothermal plate (T<sub>b</sub>), creating ideal balance between airflow and heat transfer surface</li>
                            <li><strong>Narrow spacing (13 fins, S=6.5mm):</strong> Boundary layers merge completely, restricting ambient fluid entry and reducing convection effectiveness</li>
                        </ul>
                        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.5rem;">
                            Our CFD analysis confirms that optimal heat transfer occurs at Rayleigh numbers (Ra<sub>S</sub>) between 1×10³ and 3×10³, aligning with Bar-Cohen and Rohsenow's theoretical predictions.
                        </p>
                    </div>
                </div>
            </div>
        `,
        reportLink: "assets/docs/CFD_FINAL_PROJECT REPORT (1).pdf",
        githubLink: "https://github.com/yourusername/cfd-heat-sink-optimization"
    },
    {
        id: 3,
        title: "Autonomous Mario Kart Balloon Battle Robot - 1st Place Winner",
        shortDescription: "Championship-winning autonomous robot with mecanum wheels, advanced sensor fusion, and real-time vision system for competitive balloon battle arena.",
        image: "assets/images/mechatronics/0.png",
        imageGallery: [
            {
                src: "assets/images/mechatronics/0.png",
                caption: "Complete autonomous robot assembly with mecanum wheels, sensor array, and lance weapon system"
            },
            {
                src: "assets/images/mechatronics/2.png",
                caption: "Chassis construction showing mecanum wheel mounting and motor placement for omnidirectional movement"
            },
            {
                src: "assets/images/mechatronics/3.png",
                caption: "Electronics enclosure with Arduino Mega 2560, motor drivers, and power distribution system"
            },
            {
                src: "assets/images/mechatronics/4.png",
                caption: "PixyCam vision system mounted for optimal balloon detection and color signature recognition"
            },
            {
                src: "assets/images/mechatronics/5.png",
                caption: "Motor driver connection diagram showing SparkFun ROB-14451 wiring to Arduino and power system"
            },
            {
                src: "assets/images/mechatronics/6.png",
                caption: "Sensor integration layout with IR sensors for boundary detection and ultrasonic sensors for obstacle avoidance"
            },
            {
                src: "assets/images/mechatronics/7.png",
                caption: "Lance weapon mechanism with servo motor control and extended reach for balloon engagement"
            },
            {
                src: "assets/images/mechatronics/8.png",
                caption: "Power system configuration with 11.1V LiPo battery and voltage regulation for stable operation"
            },
            {
                src: "assets/images/mechatronics/9.png",
                caption: "Robot in action during competition showing real-time autonomous navigation and target engagement"
            },
            {
                src: "assets/images/mechatronics/10.png",
                caption: "Ultrasonic sensor array mounted for 360-degree obstacle detection and collision avoidance"
            },
            {
                src: "assets/images/mechatronics/11.png",
                caption: "Final assembled robot ready for competition with all systems integrated and calibrated"
            },
            {
                src: "assets/images/mechatronics/12.png",
                caption: "Tournament bracket and competition results showing championship victory path"
            },
            {
                src: "assets/images/mechatronics/13.png",
                caption: "Team celebration after winning first place in the autonomous Mario Kart Balloon Battle competition"
            }
        ],
        technologies: ["Arduino Mega 2560", "PixyCam", "Mecanum Wheels", "TCRT5000 IR Sensors", "HC-SR04 Ultrasonic", "C++ OOP", "PWM Control"],
        category: "Robotics",
        date: "August 2024 - December 2024",
        team: "Team Cobalt: Grace Farson, Thomas Garcia, Kevin Kim, Matt Sherman, Vaikunth Keshav Krishnan",
        overview: `
            <p><strong>🏆 FIRST PLACE WINNER</strong> - Designed and built an autonomous robot that won the Mario Kart Balloon Battle competition as part of MCEN 4115/5115 Mechatronics course. The challenge recreated the iconic video game in real life, requiring robots to autonomously navigate a 12×12 foot arena, detect colored balloons, and engage in competitive balloon-popping combat.</p>
            <p>Our robot successfully integrated vision, movement, and weapons systems to achieve superior performance through mecanum wheel omnidirectional movement, advanced sensor fusion, and sophisticated C++ object-oriented programming. The project operated under strict constraints including $200 budget, 14"×12" footprint, and full autonomy requirements.</p>
            <p>The competition featured double-elimination tournament format with 5-minute rounds, testing robot reliability, strategy, and engineering excellence under pressure against multiple opponents.</p>
        `,
        technical: `
            <div class="project-section">
                <h3>Competition Arena and Requirements</h3>
                <p>The Mario Kart Balloon Battle competition featured a challenging 12×12 foot arena with obstacles, boundary detection requirements, and strict autonomous operation. Robots needed to navigate, detect colored balloons, and engage in competitive combat within a 5-minute time limit.</p>

                <div class="project-image">
                    <img src="assets/images/mechatronics/1.png" alt="Arena Layout">
                    <p style="font-style: italic;"><strong>Competition Arena Layout:</strong> 12×12 foot field with balloon positions, L-shaped obstacles, and starting zones. White tape boundaries provided sensor reference points for autonomous navigation throughout competitive matches.</p>
                </div>

                <h3>Mechanical Design and Electronics Integration</h3>
                <p>The robot featured a robust 14"×12" acrylic chassis with mecanum wheel configuration for superior maneuverability. Advanced electronics included Arduino Mega 2560, PixyCam vision system, and comprehensive sensor array for autonomous operation.</p>
                <ul>
                    <li><strong>Microcontroller:</strong> Arduino Mega 2560 with 54 digital I/O pins, 16 analog inputs, and 4 UART ports</li>
                    <li><strong>Vision System:</strong> PixyCam with SPI communication for real-time color signature detection</li>
                    <li><strong>Sensor Array:</strong> 4× IR sensors for boundary detection, 3× ultrasonic sensors for obstacle avoidance</li>
                    <li><strong>Mobility:</strong> 4× mecanum wheels enabling zero-turn radius and omnidirectional movement</li>
                </ul>

                <div class="project-image">
                    <img src="assets/images/mechatronics/2.png" alt="3D MODEL OF ROBOT">
                    <p style="font-style: italic;">Robust Chassis Design</p>
                </div>

                <h3>Advanced Sensor Fusion and Programming</h3>
                <p>The robot utilized sophisticated sensor fusion algorithms with priority-based decision making. Object-oriented C++ architecture enabled modular code development with dedicated classes for sensors, motors, and robot behavior.</p>

                <div class="project-image">
                    <img src="assets/images/mechatronics/3.png" alt="HC-SR04 wiring to the Arduino Mega">
                    <p style="font-style: italic;">HC-SR04 wiring to the Arduino Mega</p>
                </div>
                <div class="project-image">
                    <img src="assets/images/mechatronics/4.png" alt="TCRT5000 wiring to the Arduino Mega">
                    <p style="font-style: italic;">TCRT5000 wiring to the Arduino Mega</p>
                </div>
                <div class="project-image">
                    <img src="assets/images/mechatronics/5.png" alt="ROB-14451 wiring to the Arduino Mega">
                    <p style="font-style: italic;">ROB-14451 wiring to the Arduino Mega</p>
                </div>

                <h3>Weapons System and Competition Performance</h3>
                <p>The precision lance mechanism featured servo motor control with 8" maximum extension and 30° attack angle. The lightweight acrylic construction provided durability while maintaining safety compliance and weight constraints.</p>

                <div class="project-section">
                    <h3>Weapons System</h3>
                    <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
                        <img src="assets/images/mechatronics/11.png" alt="Lance Housing" style="width:45%; max-width:300px; border-radius:8px;">
                        <img src="assets/images/mechatronics/12.png" alt="Lance Weapon System" style="width:45%; max-width:300px; border-radius:8px;">
                    </div>
                    <p style="text-align:center; font-style:italic; margin-top:0.5rem;">
                    <strong>Precision Lance Mechanism:</strong> Servo-controlled system providing reliable balloon engagement.</p>
                </div>

                <div class="project-image">
                    <img src="assets/images/mechatronics/6.png" alt="Servo Motor wiring to the Arduino Mega">
                    <p style="font-style: italic;">Servo Motor wiring to the Arduino Mega</p>
                </div>
                
            </div>

        `,
        results: `
            <ul>
                <li><strong>🏆 Championship Victory:</strong> Won first place in double-elimination tournament, defeating all competitors through superior navigation and attack strategies</li>
                <li><strong>Perfect Autonomous Operation:</strong> Demonstrated flawless sensor fusion with IR boundary detection, ultrasonic obstacle avoidance, and vision-based targeting</li>
                <li><strong>Advanced Navigation:</strong> Successfully escaped starting positions in any orientation, navigated complex arena obstacles, and maintained arena boundaries</li>
                <li><strong>Reliable Combat System:</strong> Achieved consistent balloon popping with precise lance deployment and servo-controlled attack mechanism</li>
                <li><strong>Engineering Excellence:</strong> 
                    <ul>
                        <li>Robust mechanical design withstood competitive collisions and impacts</li>
                        <li>Modular code architecture enabled rapid debugging and optimization</li>
                        <li>Power management system provided consistent performance throughout 5-minute matches</li>
                        <li>Sensor calibration adapted to varying lighting conditions during competition</li>
                    </ul>
                </li>
                <li><strong>Strategic Innovation:</strong> Implemented stuck-detection algorithms and dynamic response behaviors that other teams lacked</li>
                <li><strong>Budget Achievement:</strong> Complete system delivered under $200 budget constraint while achieving premium performance</li>
            </ul>
            <div class="project-image">
                <img src="assets/images/mechatronics/0.png" alt="Complete Robot Assembly">
                <p style="font-style: italic;"><strong>Championship-Winning Robot:</strong> Complete autonomous design featuring mecanum wheels, sensor array, and lance weapon system. The compact design fits competition constraints while housing all systems needed for autonomous operation.</p>
            </div>
        `,
        reportLink: "assets/docs/Final_Report_Mechatronics.pdf",
        githubLink: "https://github.com/yourusername/mario-kart-robot"
    },
    {
        id: 4,
        title: "Reverse Engineering - KMM Handheld Wireless Vacuum",
        shortDescription: "Comprehensive reverse engineering and redesign achieving 46% part count reduction for improved manufacturability.",
        image: "assets/images/Reverse Engineering/0.jpg",
        imageGallery: [
            {
                src: "assets/images/Reverse Engineering/1.png",
                caption: "System input/output analysis diagram showing KMM vacuum cleaner functional requirements and design constraints"
            },
            {
                src: "assets/images/Reverse Engineering/0.jpg",
                caption: "Complete KMM handheld wireless vacuum as purchased, ready for systematic reverse engineering analysis"
            },
            {
                src: "assets/images/Reverse Engineering/2.png",
                caption: "Detailed component breakdown showing all individual parts after complete disassembly process"
            },
            {
                src: "assets/images/Reverse Engineering/4.png",
                caption: "Engineering analysis of critical components with dimensional measurements and material identification"
            },
            {
                src: "assets/images/Reverse Engineering/28.png",
                caption: "CAD model reconstruction showing internal assembly structure and component relationships"
            },
            {
                src: "assets/images/Reverse Engineering/29.png",
                caption: "Cross-sectional view revealing internal airflow paths and filtration system design"
            },
            {
                src: "assets/images/Reverse Engineering/30.png",
                caption: "Motor and impeller assembly showing power transmission and vacuum generation mechanism"
            },
            {
                src: "assets/images/Reverse Engineering/31.png",
                caption: "Battery compartment and charging system analysis with thermal management considerations"
            },
            {
                src: "assets/images/Reverse Engineering/32.png",
                caption: "Filter housing design showing HEPA filtration system and maintenance accessibility"
            },
            {
                src: "assets/images/Reverse Engineering/35.png",
                caption: "Redesigned assembly with consolidated components achieving 46% part count reduction"
            },
            {
                src: "assets/images/Reverse Engineering/36.png",
                caption: "DFM optimization results showing simplified manufacturing processes and cost analysis"
            },
            {
                src: "assets/images/Reverse Engineering/37.png",
                caption: "Assembly sequence optimization reducing production time and labor costs"
            },
            {
                src: "assets/images/Reverse Engineering/38.png",
                caption: "Material selection analysis comparing original vs. optimized component materials"
            },
            {
                src: "assets/images/Reverse Engineering/39.png",
                caption: "Cost breakdown analysis showing manufacturing savings and market competitiveness"
            },
            {
                src: "assets/images/Reverse Engineering/40.png",
                caption: "Final redesigned product with improved manufacturability and maintained functionality"
            },
            {
                src: "assets/images/Reverse Engineering/41.png",
                caption: "Engineering drawings with GD&T specifications for manufacturing implementation"
            },
            {
                src: "assets/images/Reverse Engineering/42.png",
                caption: "Quality control specifications and testing protocols for production validation"
            },
            {
                src: "assets/images/Reverse Engineering/43.png",
                caption: "Production planning and supply chain optimization for efficient manufacturing"
            },
            {
                src: "assets/images/Reverse Engineering/44.png",
                caption: "Market analysis and competitive positioning for the redesigned vacuum cleaner"
            }
        ],
        technologies: ["SolidWorks", "DFM", "DFA", "Cost Analysis", "GD&T"],
        category: "Manufacturing",
        date: "August 2024 - December 2024",
        team: "Team Project (Argandona, Krishnan, Peterson, Vasquez)",
        overview: `
            <p>Conducted comprehensive reverse engineering analysis of the KMM handheld wireless vacuum as part of the MCEN 5045 course. The project involved complete disassembly, component analysis, and strategic redesign focused on Design for Manufacturability (DFM) and Design for Assembly (DFA) principles.</p>
            <p>The objective was to understand the original design intent, identify manufacturing inefficiencies, and propose redesign solutions that would reduce complexity while maintaining or improving functionality.</p>
        `,
        technical: `
            <div class="project-section">
                <h3>Product Analysis and Disassembly</h3>
                <p>The reverse engineering process began with comprehensive analysis of the KMM handheld wireless vacuum, a consumer product chosen for its design complexity and customer feedback indicating improvement opportunities. Systematic disassembly revealed 26 total components with significant potential for optimization.</p>

            <div class="project-section">
                <h3>Product Analysis and Disassembly</h3>
                <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-bottom:1rem;">
                    <img src="assets/images/Reverse Engineering/28.png" alt="Component Breakdown" style="width:30%; max-width:260px; border-radius:8px;">
                    <img src="assets/images/Reverse Engineering/29.png" alt="Component Breakdown" style="width:30%; max-width:260px; border-radius:8px;">
                    <img src="assets/images/Reverse Engineering/30.png" alt="Component Breakdown" style="width:30%; max-width:260px; border-radius:8px;">
                    <img src="assets/images/Reverse Engineering/31.png" alt="Component Breakdown" style="width:30%; max-width:260px; border-radius:8px;">
                    <img src="assets/images/Reverse Engineering/32.png" alt="Component Breakdown" style="width:30%; max-width:260px; border-radius:8px;">
                </div>
                <p style="font-style:italic; text-align:center; margin-top:0.5rem;">
                <strong>Complete Component Analysis:</strong> Systematic breakdown showing all 26 parts after disassembly.</p>
            </div>


                <h3>Engineering Analysis and Documentation</h3>
                <ul>
                    <li><strong>Disassembly Analysis:</strong> Systematic deconstruction and documentation of all components with detailed photography and measurements</li>
                    <li><strong>Functional Analysis:</strong> Evaluated each component's role in overall system performance and identified redundant or inefficient elements</li>
                    <li><strong>Manufacturing Assessment:</strong> Analyzed original manufacturing processes and identified opportunities for simplification</li>
                </ul>

                <div class="project-image">
                    <img src="assets/images/Reverse Engineering/2.png" alt="Component Breakdown">
                    <p style="font-style: italic;"><strong>Complete Component Analysis:</strong> Systematic breakdown showing all 26 individual parts after disassembly. The analysis revealed complex assembly sequences that contributed to manufacturing inefficiency and increased production costs.</p>
                </div>

                <h3>CAD Reconstruction and Design Optimization</h3>
                <p>Comprehensive CAD modeling enabled detailed analysis of internal mechanisms and airflow paths. The redesign strategy focused on part consolidation and manufacturing simplification while maintaining functionality.</p>

                <div class="project-image">
                    <img src="assets/images/Reverse Engineering/28.png" alt="CAD Model">
                    <p style="font-style: italic;"><strong>CAD Model Reconstruction:</strong> Detailed SolidWorks assembly showing internal component relationships and mechanical interfaces. The model enabled precise analysis of tolerances and assembly sequences for design improvements.</p>
                </div>

                <h3>Material Selection and Evaluation</h3>
                <p>We compared three candidate polymers for the primary enclosure (Options A, B, C) across stiffness, impact resistance, cost, and manufacturability. Option <strong>B</strong> achieved the best balance and is recommended.</p>
                <table style="width:100%; border-collapse:collapse; margin:0.5rem 0; font-size:0.95rem;">
                    <thead>
                        <tr style="background:#222; color:#fff;">
                            <th style="border:1px solid #555; padding:8px;">Option</th>
                            <th style="border:1px solid #555; padding:8px;">Stiffness</th>
                            <th style="border:1px solid #555; padding:8px;">Impact</th>
                            <th style="border:1px solid #555; padding:8px;">Cost</th>
                            <th style="border:1px solid #555; padding:8px;">Moldability</th>
                            <th style="border:1px solid #555; padding:8px;">Verdict</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border:1px solid #555; padding:8px;">A</td>
                            <td style="border:1px solid #555; padding:8px;">Med</td>
                            <td style="border:1px solid #555; padding:8px;">Low</td>
                            <td style="border:1px solid #555; padding:8px;">Low</td>
                            <td style="border:1px solid #555; padding:8px;">Good</td>
                            <td style="border:1px solid #555; padding:8px;">Backup</td>
                        </tr>
                        <tr style="background:#111;">
                            <td style="border:1px solid #555; padding:8px;">B</td>
                            <td style="border:1px solid #555; padding:8px;">High</td>
                            <td style="border:1px solid #555; padding:8px;">High</td>
                            <td style="border:1px solid #555; padding:8px;">Med</td>
                            <td style="border:1px solid #555; padding:8px;">Good</td>
                            <td style="border:1px solid #555; padding:8px; font-weight:bold;">Winner</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #555; padding:8px;">C</td>
                            <td style="border:1px solid #555; padding:8px;">Med</td>
                            <td style="border:1px solid #555; padding:8px;">Med</td>
                            <td style="border:1px solid #555; padding:8px;">Low</td>
                            <td style="border:1px solid #555; padding:8px;">Fair</td>
                            <td style="border:1px solid #555; padding:8px;">Consider</td>
                        </tr>
                    </tbody>
                </table>

                <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:1rem; margin:1rem 0;">
                    <div>
                        <img src="assets/images/Reverse Engineering/86.png" alt="Ashby Chart - Stiffness vs Density"
                            style="width:90%; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.4);">
                        <p style="text-align:center; font-size:0.9rem; color:var(--text-secondary); font-style:italic; margin-top:0.5rem;">
                            Stiffness vs. Density Ashby chart highlighting material trade-offs.
                        </p>
                    </div>
                    <div>
                        <img src="assets/images/Reverse Engineering/87.png" alt="Ashby Chart - Cost vs Strength"
                            style="width:100%; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.4);">
                        <p style="text-align:center; font-size:0.9rem; color:var(--text-secondary); font-style:italic; margin-top:0.5rem;">
                            Cost vs. Strength Ashby chart validating polymer B selection.
                        </p>
                    </div>
                </div>


                <h3>Design for Manufacturability Results</h3>
                <ul>
                    <li><strong>Part Consolidation:</strong> Achieved 46% reduction in component count through strategic design integration</li>
                    <li><strong>Assembly Simplification:</strong> Eliminated multiple fasteners and springs in favor of snap-fit connections</li>
                    <li><strong>Cost Optimization:</strong> Reduced manufacturing complexity while maintaining structural integrity</li>
                    <li><strong>Performance Enhancement:</strong> Upgraded motor specification to address customer complaints</li>
                </ul>

                <div class="project-image">
                    <img src="assets/images/Reverse Engineering/35.png" alt="Redesigned Assembly">
                    <p style="font-style: italic;"><strong>Optimized Redesign:</strong> Consolidated assembly achieving significant part count reduction through strategic component integration. The redesign maintains all functionality while improving manufacturability and reducing production complexity.</p>
                </div>
            </div>
        `,
        results: `
            <ul>
                <li><strong>Part Count Reduction:</strong> Achieved 46% reduction in total component count through strategic design consolidation</li>
                <li><strong>Cost Analysis:</strong> Determined break-even price of $23.20 compared to Amazon retail price of $43.99</li>
                <li><strong>Manufacturing Efficiency:</strong> Simplified assembly process with fewer fasteners and improved component integration</li>
                <li><strong>Design Improvements:</strong> Enhanced product compactness without significant cost increase</li>
                <li><strong>Safety Enhancements:</strong> Identified and addressed safety concerns including battery cooling requirements and charging protocols</li>
                <li><strong>Professional Documentation:</strong> Created industry-standard engineering drawings suitable for manufacturing implementation</li>
            </ul>
        `,
        reportLink: "assets/docs/MCEN 5045 Reverse Engineering Report.pdf",
        githubLink: "https://github.com/yourusername/vacuum-reverse-engineering"
    },
    {
        id: 5,
        title: "4-DOF Kinematic Arm with Gripper - Forward Kinematics Analysis",
        shortDescription: "Comprehensive design and kinematic analysis of 4-degree-of-freedom robotic arm with servo-controlled gripper and forward kinematics implementation.",
        image: "assets/images/MECHATRONICS1-GRAD (5115) PROJECT AND PAPER SUBMISSION - K.VAIKUNTH KESHAV-1/5.jpg",
        technologies: ["SolidWorks", "Forward Kinematics", "Servo Motors", "Lead Screw Mechanism", "Mathematical Modeling"],
        category: "Robotics",
        date: "August 2024 - December 2024",
        team: "Individual Project - MECHATRONICS 1: GRAD (5115)",
        overview: `
            <p>Developed a comprehensive 4-degree-of-freedom robotic arm with integrated gripper mechanism designed for flexibility and precision in robotic applications. The project focused on forward kinematics implementation, servo motor control, and mathematical modeling for precise end-effector positioning.</p>
            <p>The arm features a 360° rotating base with ball bearing mechanism, two articulated arm segments with 190° and 180° rotation ranges respectively, and a precision gripper utilizing lead screw mechanism for reliable object manipulation in industrial and educational applications.</p>
        `,
        technical: `
            <div class="project-section">
                <h3>System Configuration and Design</h3>
                <p>The robotic arm incorporates four distinct degrees of freedom: a rotating base, two articulated arm segments, and a precision gripper. Each component is servo-controlled for accurate positioning and smooth operation.</p>

                <div class="project-images" style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem;">
                    <img src="assets/images/MECHATRONICS1-GRAD (5115) PROJECT AND PAPER SUBMISSION - K.VAIKUNTH KESHAV-1/1.jpg" alt="Mechanical Design Components">
                    <img src="assets/images/MECHATRONICS1-GRAD (5115) PROJECT AND PAPER SUBMISSION - K.VAIKUNTH KESHAV-1/2.jpg" alt="Kinematic Analysis">
                    <img src="assets/images/MECHATRONICS1-GRAD (5115) PROJECT AND PAPER SUBMISSION - K.VAIKUNTH KESHAV-1/3.jpg" alt="Complete Assembly">
                </div>
                <p style="font-style: italic; text-align:center; margin-top:0.5rem;">System configuration, kinematic model, and assembled 4-DOF arm with gripper.</p>

                <h3>Forward Kinematics Implementation</h3>
                <p>The system utilizes forward kinematics where rotation angles are predetermined, and end-effector position is calculated based on joint angles and arm segment lengths. Mathematical models ensure precise positioning control.</p>
                <ul>
                    <li><strong>Horizontal Position:</strong> x = cos(φ) × (L₁ cos(θ₁) + L₂ cos(θ₁ + θ₂))</li>
                    <li><strong>Horizontal Position:</strong> y = sin(φ) × (L₁ cos(θ₁) + L₂ cos(θ₁ + θ₂))</li>
                    <li><strong>Vertical Position:</strong> z = L₁ sin(θ₁) + L₂ sin(θ₁ + θ₂)</li>
                    <li><strong>Gripper Control:</strong> d = (θGripper × p) / 360</li>
                </ul>

                <h3>Applications and Educational Value</h3>
                <ul>
                    <li><strong>Material Handling:</strong> Precise movements ideal for automated assembly and material handling tasks</li>
                    <li><strong>Education and Research:</strong> Excellent platform for teaching robotics concepts and motor control principles</li>
                    <li><strong>Industrial Applications:</strong> Suitable for precision assembly tasks in manufacturing environments</li>
                </ul>
            </div>
        `,
        results: `
            <ul>
                <li><strong>Kinematic Model Validation:</strong> Successfully implemented forward kinematics equations providing accurate end-effector positioning in 3D space</li>
                <li><strong>Mechanical Design Achievement:</strong> Completed 4-DOF system with 360° base rotation, 190° and 180° arm segments, and precision gripper mechanism</li>
                <li><strong>Servo Control Integration:</strong> Achieved precise angular control with servo motors preventing unwanted continuous rotation while maintaining accuracy</li>
                <li><strong>Mathematical Framework:</strong> Developed comprehensive kinematic equations accounting for all joint angles and arm lengths</li>
                <li><strong>Gripper Performance:</strong> Implemented lead screw mechanism providing linear displacement control: d = (θGripper × p) / 360</li>
                <li><strong>Educational Impact:</strong> Created effective learning tool for robotics and motion control concepts in academic settings</li>
                <li><strong>Design Limitations Identified:</strong> Recognized restricted motion range due to fixed joint angles and motor accuracy requirements</li>
            </ul>
        `,
        reportLink: "assets/docs/MECHATRONICS1-GRAD (5115) PROJECT AND PAPER SUBMISSION - K.VAIKUNTH KESHAV-1.pdf",
        githubLink: "https://github.com/yourusername/4dof-robotic-arm"
    },
    {
        id: 6,
        title: "Smart Concussion Detection Helmet - Athlete Safety Innovation",
        shortDescription: "First mass-market concussion detection helmet with integrated accelerometers and real-time impact monitoring for winter sports athletes.",
        image: "assets/images/APD/1.jpg",
        imageGallery: [
            {
                src: "assets/images/APD/1.jpg",
                caption: "Final prototype of the smart concussion detection helmet with integrated sensor array and wireless connectivity"
            },
            {
                src: "assets/images/APD/7.jpg",
                caption: "Helmet interior showing integrated sensor placement and padding system maintaining comfort and safety standards"
            },
            {
                src: "assets/images/APD/8.jpg",
                caption: "Arduino-based electronics system with accelerometer sensors and real-time data processing capabilities"
            },
            {
                src: "assets/images/APD/5.jpg",
                caption: "MIT App Inventor development environment used for creating the mobile application interface"
            },
            {
                src: "assets/images/APD/34.jpg",
                caption: "Mobile app interface displaying real-time G-force measurements and impact detection with user-friendly risk indicators"
            },
            {
                src: "assets/images/APD/27.jpg",
                caption: "Detailed view of sensor integration within helmet liner showing seamless electronics placement"
            },
            {
                src: "assets/images/APD/28.jpg",
                caption: "Complete electronics assembly with Arduino, accelerometers, and wireless communication module"
            },
            {
                src: "assets/images/APD/16.jpg",
                caption: "Comprehensive business model canvas showing market strategy, revenue streams, and partnership opportunities"
            },
            {
                src: "assets/images/APD/9.jpg",
                caption: "Performance comparison radar chart showing helmet evaluation across key metrics: cost, durability, aesthetics, and complexity"
            },
            {
                src: "assets/images/APD/20.jpg",
                caption: "Key Performance Indicators analysis demonstrating progressive improvement from prototype to final concept"
            },
            {
                src: "assets/images/APD/14.jpg",
                caption: "System architecture diagram illustrating injury detection workflow and smart helmet integration components"
            },
            {
                src: "assets/images/APD/2.jpg",
                caption: "User testing session with winter sports athlete evaluating helmet comfort and functionality"
            }
        ],
        technologies: ["Arduino UNO R4", "Accelerometer Sensors", "WiFi Connectivity", "MIT App Inventor", "Impact Detection Algorithms", "Business Strategy"],
        category: "Product Innovation",
        date: "January 2025 - April 2025",
        team: "Athlete Team: Pablo Argandona, Reid Godbey, Vaikunth Krishnan, Oliver Sumners",
        overview: `
            <p><strong>Revolutionary Safety Innovation</strong> - Developed the first mass-market concussion detection helmet specifically designed for winter mountain athletes. The project addressed the critical need for real-time head impact monitoring in recreational and semi-professional skiing and snowboarding.</p>
            <p>The smart helmet integrates advanced sensor technology with user-friendly mobile app interface to provide immediate feedback on potentially dangerous impacts. With 1.6 to 3.6 million sports-related concussions occurring annually in the U.S., and at least 25% going undiagnosed, our solution fills a crucial gap in athlete safety equipment.</p>
            <p>Through comprehensive user research, prototyping, and business development, the team created a viable product that balances advanced safety technology with user comfort, aesthetic appeal, and affordable pricing for the target market of 9.2 million U.S. skiers and snowboarders.</p>
        `,
        technical: `
            <div class="project-section">
                <h3>Problem Statement and Market Need</h3>
                <p>Sports-related concussions represent a significant public health challenge, with repeated head impacts contributing to chronic traumatic encephalopathy (CTE) and long-term neurological damage. Existing helmets focus primarily on passive protection, lacking real-time impact monitoring capabilities that could enable early detection and prevention of second-impact syndrome.</p>

                <div class="project-image">
                    <img src="assets/images/APD/2.jpg" alt="User Research">
                    <p style="font-style: italic;"><strong>Comprehensive User Research:</strong> Conducted extensive interviews with winter mountain athletes to identify key requirements: comfort, durability, aesthetics, cost-effectiveness, and simplicity. User feedback drove design decisions throughout the development process.</p>
                </div>

                <h3>Technical Innovation and Sensor Integration</h3>
                <p>The helmet incorporates Arduino UNO R4 microcontroller with integrated WiFi capabilities and precision accelerometer sensors strategically positioned throughout the helmet structure. The system monitors G-force impacts in real-time and compares data against established concussion thresholds.</p>
                <ul>
                    <li><strong>Sensor Array:</strong> Multiple accelerometers providing comprehensive impact detection coverage</li>
                    <li><strong>Data Processing:</strong> Real-time algorithm analysis of impact magnitude, duration, and location</li>
                    <li><strong>Wireless Connectivity:</strong> WiFi transmission of impact data to paired mobile application</li>
                    <li><strong>Power Management:</strong> Efficient battery system with rechargeable capabilities</li>
                    <li><strong>Material Integration:</strong> Seamless electronics integration without compromising helmet safety standards</li>
                </ul>

                <div class="project-section">
                    <h3>Advanced Electronics Integration</h3>
                    <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:1rem; margin-bottom:1rem;">
                        <img src="assets/images/APD/28.jpg" alt="Helmet Integration" style="width:45%; max-width:300px; border-radius:8px;">
                    </div>
                    <p style="text-align:center; font-style:italic;"><strong>Electronics and App Integration:</strong> Helmet wiring and mobile monitoring interface demonstrating real-time G-force tracking and alert system.</p>
                </div>

                <h3>User Experience and Mobile Application</h3>
                <p>The companion mobile application provides intuitive access to impact data with simplified risk assessment indicators. User testing revealed the importance of non-technical data presentation and immediate actionable feedback.</p>

                <div class="project-section">
                    <h3>User Experience and Mobile Application</h3>
                    <p>The companion mobile application provides intuitive access to impact data with simplified risk assessment indicators. User testing revealed the importance of non-technical data presentation and immediate actionable feedback.</p>
                    <div class="project-image">
                        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:1rem; justify-items:center; margin-bottom:1rem;">
                            <img src="assets/images/APD/31.png" alt="Mobile App Block Design" style="width:100%; max-width:600px; border-radius:8px;">
                            <img src="assets/images/APD/32.jpg" alt="Mobile App Screen" style="width:20%; max-width:300px; border-radius:8px;">
                        </div>
                        <p style="font-style:italic; text-align:center;">
                            <strong>User-Friendly Mobile Interface:</strong> Real-time impact monitoring with simple risk indicators. 
                            The app stores significant impact events and provides recommendations for medical evaluation when thresholds are exceeded.
                        </p>
                    </div>
                </div>

                <h3>Design for Manufacturability and Business Strategy</h3>
                <ul>
                    <li><strong>Manufacturing Strategy:</strong> Polycarbonate shell with injection molding and EPS/EPP foam liner for impact absorption</li>
                    <li><strong>Electronics Integration:</strong> Modular sensor placement allowing for easy assembly and maintenance</li>
                    <li><strong>Cost Structure:</strong> Target retail price of $150/unit with $50 manufacturing cost and break-even at 300 units/year</li>
                    <li><strong>Quality Assurance:</strong> Maintains existing helmet safety certifications while adding smart functionality</li>
                </ul>

                <div class="project-image">
                    <img src="assets/images/APD/34.jpg" alt="Business Model">
                    <p style="font-style: italic;"><strong>Comprehensive Business Model:</strong> Strategic analysis covering key partnerships, activities, value propositions, customer relationships, and revenue streams for successful market entry and scaling.</p>
                </div>
            </div>
        `,
        results: `
            <ul>
                <li><strong>Market Validation:</strong> Extensive user research with winter sports athletes confirming strong demand for integrated safety technology</li>
                <li><strong>Technical Achievement:</strong> Successfully integrated electronics without compromising helmet safety performance or user comfort</li>
                <li><strong>Business Viability:</strong> Developed comprehensive business model with clear revenue streams and go-to-market strategy</li>
                <li><strong>User Acceptance:</strong> Positive feedback on comfort, aesthetics, and functionality from target demographic</li>
                <li><strong>Cost Effectiveness:</strong> Achieved competitive pricing at $150 retail versus existing helmet alternatives</li>
                <li><strong>Safety Impact:</strong> Potential to address 25% of undiagnosed mild traumatic brain injuries through early detection</li>
                <li><strong>Market Opportunity:</strong> Targeting 9.2 million U.S. skiers/snowboarders with expansion potential to other sports</li>
                <li><strong>Innovation Recognition:</strong> First mass-market concussion detection helmet with integrated real-time monitoring</li>
                <li><strong>Partnership Potential:</strong> Identified opportunities for ski resort rental programs and sporting goods retail distribution</li>
            </ul>
            

                <div class="project-image">
                    <h3>Key Performance Indicators (KPI) Analysis</h3>
                    <p style="text-align:center; font-size:0.9rem; color:var(--text-secondary); margin-bottom:1rem;">
                        Comparative performance ratings (0–10) across prototypes showing progressive improvement toward the final concept.
                    </p>
                    <div style="max-width:700px; margin:0 auto; font-size:0.9rem;">
                        <div style="margin-bottom:8px;"><strong>Q1</strong> – <span style='color:#4CAF50;'>Final Concept</span>: 8 | <span style='color:#FF9800;'>Prototype 2</span>: 6 | <span style='color:#2196F3;'>Prototype 1</span>: 6</div>
                        <div style="height:18px; background:#222; border-radius:4px; margin-bottom:12px;">
                            <div style="width:80%; height:100%; background:#4CAF50; border-radius:4px 0 0 4px;"></div>
                            <div style="width:60%; height:100%; background:#FF9800; position:relative; top:-18px; opacity:0.7;"></div>
                            <div style="width:60%; height:100%; background:#2196F3; position:relative; top:-36px; opacity:0.4;"></div>
                        </div>

                        <div style="margin-bottom:8px;"><strong>Q2</strong> – Final Concept: 6 | Prototype 2: 5 | Prototype 1: 5</div>
                        <div style="height:18px; background:#222; border-radius:4px; margin-bottom:12px;">
                            <div style="width:60%; height:100%; background:#4CAF50;"></div>
                            <div style="width:50%; height:100%; background:#FF9800; position:relative; top:-18px; opacity:0.7;"></div>
                            <div style="width:50%; height:100%; background:#2196F3; position:relative; top:-36px; opacity:0.4;"></div>
                        </div>

                        <div style="margin-bottom:8px;"><strong>Q3</strong> – Final Concept: 9 | Prototype 2: 8 | Prototype 1: 6</div>
                        <div style="height:18px; background:#222; border-radius:4px; margin-bottom:12px;">
                            <div style="width:90%; height:100%; background:#4CAF50;"></div>
                            <div style="width:80%; height:100%; background:#FF9800; position:relative; top:-18px; opacity:0.7;"></div>
                            <div style="width:60%; height:100%; background:#2196F3; position:relative; top:-36px; opacity:0.4;"></div>
                        </div>

                        <div style="margin-bottom:8px;"><strong>Q4</strong> – Final Concept: 8 | Prototype 2: 8 | Prototype 1: 8</div>
                        <div style="height:18px; background:#222; border-radius:4px; margin-bottom:12px;">
                            <div style="width:80%; height:100%; background:#4CAF50;"></div>
                            <div style="width:80%; height:100%; background:#FF9800; position:relative; top:-18px; opacity:0.7;"></div>
                            <div style="width:80%; height:100%; background:#2196F3; position:relative; top:-36px; opacity:0.4;"></div>
                        </div>

                        <div style="margin-bottom:8px;"><strong>Q5</strong> – Final Concept: 9 | Prototype 2: 7 | Prototype 1: 6</div>
                        <div style="height:18px; background:#222; border-radius:4px;">
                            <div style="width:90%; height:100%; background:#4CAF50;"></div>
                            <div style="width:70%; height:100%; background:#FF9800; position:relative; top:-18px; opacity:0.7;"></div>
                            <div style="width:60%; height:100%; background:#2196F3; position:relative; top:-36px; opacity:0.4;"></div>
                        </div>
                    </div>

                    </div>
        `,
        reportLink: "assets/docs/Concussion Detection Helmet Final Report.pdf",
        projectLink: "https://sites.google.com/d/1s3id4KPpeEug2tKGhUHZ599dH19ybTr3/p/1Ota9ME-rngVZcl83DQrGWqbYMmL6BOGQ/edit",
        githubLink: "https://github.com/yourusername/concussion-detection-helmet"
    }
];

// Modal functionality
const modal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');

// Open modal function
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    // Clear any existing gallery content first
    const existingGalleries = document.querySelectorAll('.image-gallery');
    existingGalleries.forEach(gallery => {
        gallery.closest('.modal-section').remove();
    });

    // Populate modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-date').textContent = project.date;
    document.getElementById('modal-team').textContent = project.team;
    document.getElementById('modal-overview').innerHTML = project.overview;
    document.getElementById('modal-technical').innerHTML = project.technical;
    document.getElementById('modal-results').innerHTML = project.results;
    document.getElementById('modal-report-link').href = project.reportLink;

    // Set GitHub link
    const githubButton = document.querySelector('#github-link');
    if (githubButton) githubButton.href = project.githubLink || "https://github.com/yourusername";

    // Set project link if available (for project #6)
    if (project.projectLink) {
        const projectButton = document.querySelector('#project-link');
        if (projectButton) {
            projectButton.href = project.projectLink;
            projectButton.style.display = 'flex';
        }
    } else {
        const projectButton = document.querySelector('#project-link');
        if (projectButton) {
            projectButton.style.display = 'none';
        }
    }

    // Populate technologies
    const techContainer = document.getElementById('modal-technologies');
    if (techContainer) {
        techContainer.innerHTML = '';
        project.technologies.forEach((tech, index) => {
            const techTag = document.createElement('div');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techTag.style.animationDelay = `${index * 0.1}s`;
            techContainer.appendChild(techTag);
        });
    }

    // Show modal with animation
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal function
function closeProjectModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Event listeners for modal
if (modalClose) modalClose.addEventListener('click', closeProjectModal);
if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeProjectModal();
    }
});

// Image modal function for gallery images
function openImageModal(src, caption) {
    // Create image modal if it doesn't exist
    let imageModal = document.getElementById('image-modal');
    if (!imageModal) {
        imageModal = document.createElement('div');
        imageModal.id = 'image-modal';
        imageModal.innerHTML = `
            <div class="image-modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 2rem;">
                <div class="image-modal-content" style="position: relative; max-width: 90%; max-height: 90%; text-align: center;">
                    <img id="modal-image" style="max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: 8px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
                    <p id="modal-image-caption" style="color: white; font-size: 1rem; margin-top: 1rem; line-height: 1.5; max-width: 600px; margin-left: auto; margin-right: auto;"></p>
                    <button class="image-modal-close" style="position: absolute; top: -50px; right: -10px; background: rgba(255,255,255,0.2); border: none; color: white; font-size: 2rem; padding: 0.5rem; border-radius: 50%; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">&times;</button>
                </div>
            </div>
        `;
        document.body.appendChild(imageModal);

        // Add event listeners
        imageModal.querySelector('.image-modal-close').addEventListener('click', () => {
            imageModal.style.display = 'none';
        });

        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal || e.target.classList.contains('image-modal-overlay')) {
                imageModal.style.display = 'none';
            }
        });
    }

    // Set image and caption
    imageModal.querySelector('#modal-image').src = src;
    imageModal.querySelector('#modal-image-caption').textContent = caption || "";
    imageModal.style.display = 'block';
}

// Generate project cards with real images support
function generateProjectCards() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.addEventListener('click', () => openProjectModal(project.id));

        projectCard.innerHTML = `
            <div class="project-image">
                ${project.image && !project.image.includes('data:image/svg') ? 
                    `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto; object-fit: contain; display: block;">` 
                    : `<span>${project.category}</span>`
                }
            </div>
            <!-- Removed caption under card image per request -->
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.shortDescription}</p>
                <div class="project-tech">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''}
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// Load saved theme - DEFAULTS TO DARK
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // DEFAULT TO DARK
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        body.classList.add('dark-theme');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun'; // Sun icon for dark theme
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        body.classList.remove('dark-theme');
        if (themeIcon) {
            themeIcon.className = 'fas fa-moon'; // Moon icon for light theme
        }
    }
    
    // Save the theme if it wasn't already saved
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }
}

// Toggle theme function - UPDATED for proper data-theme attribute
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    
    if (newTheme === 'dark') {
        body.classList.add('dark-theme');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
        body.classList.remove('dark-theme');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    }
    
    localStorage.setItem('theme', newTheme);
}

// Typing animation
const texts = [
    "Mechanical Engineer",
    "CFD Specialist", 
    "Robotics Enthusiast",
    "Design Engineer",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById('typed-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeText() {
    if (!typedTextElement) return;
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
            isDeleting = true;
        }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeText, speed);
}

// Smooth scrolling for navigation links
function smoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Skill bar animations
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-skill');
                skillBar.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Animate sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Animate timeline items
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });
}

// Navigation highlighting
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -70% 0px'
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    generateProjectCards();
    typeText();
    smoothScroll();
    animateSkillBars();
    initScrollAnimations();
    initNavigation();
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

/* ==== CHANGE LOG (Oct 27, 2025) ====
1) Cacao hero image path fixed to "19.jpg"; kept gallery; card captions removed globally.
2) All card-level captions removed in generateProjectCards (cleaner title-first layout).
3) Mario Kart Robot: Lance Housing image updated to 11.png (was 7.png).
4) KMM Vacuum: Added "Material Selection and Evaluation" table; identified Option B as winner.
5) 4-DOF Arm: System Config section now shows a 3-image grid (1.jpg, 2.jpg, 3.jpg) together.
6) Concussion Helmet: 
   - Advanced Electronics uses 28.jpg
   - Business Model uses 34.jpg
   - Mobile Interface shows 31.jpg + 32.jpg (two-up grid).
7) All figure captions within modal content styled in italics.
*/
