# CFD FINAL PROJECT REPORT (1)

**Document Type:** PDF Report

---

University of Colorado Boulder
Department of Mechanical Engineering

MCEN 4231/5231: Spring 2025
Computational Fluid Dynamics

Optimizing Heat Transfer in Heat Sink Fin Arrays
Using Computational Fluid Dynamics
MCEN 4231/5231 Term Project
Department of Mechanical Engineering
University of Colorado Boulder
Submitted by: Surya Sharon Raj Goda, Saravana Kumar Kodakinti Prakash,
Anoop Subramanya, K. Vaikunth Keshav
Date: May 6, 2025
Abstract
This study investigates the optimal fin configuration for passive heat sinks using
computational fluid dynamics (CFD). Natural convection heat transfer was simulated
in three different fin array configurations (6, 10, and 13 fins) to determine the optimal
spacing that maximizes heat transfer while minimizing material usage. A monolithic
coupling approach with the Boussinesq approximation was employed to solve the coupled Navier-Stokes and energy equations. Results demonstrate that an optimal fin
spacing exists that balances increased surface area with sufficient space for convection
currents. The 10-fin configuration achieved the highest heat transfer rate, 62% higher
than the 6-fin arrangement and 18% higher than the 13-fin design. This work provides
practical insights for thermal management in electronic components and demonstrates
the effectiveness of the monolithic coupling approach for simulating natural convection
problems.

1

Introduction

Thermal management is essential in modern electronics, as device performance, reliability,
and longevity depend on effective heat dissipation. Passive cooling components like heat
sinks with fin arrays are widely used due to their ability to enhance convective heat transfer
by increasing surface area. In natural convection scenarios, they offer added advantages by
eliminating moving parts, thus improving system reliability.
Fin array performance is influenced by buoyancy-driven flow and thermal boundary layer
development, with key parameters including fin height, thickness, and spacing. When fins are
too close, boundary layer merging restricts airflow, reducing efficiency. Conversely, excessive
spacing lowers surface area, limiting heat dissipation. Optimal design, therefore, requires a
balance.
Foundational studies by Bar-Cohen and Rohsenow proposed optimal fin spacing models for
natural convection, while Elenbaas introduced empirical correlations for heat transfer in
finned systems. However, precise prediction of fluid-thermal interactions remains complex.
This study uses Computational Fluid Dynamics (CFD) to simulate natural convection in fin
arrays of varying configurations (6, 10, and 13 fins). The goal is to identify an arrangement
that maximizes heat transfer while minimizing material usage, providing valuable insights
for efficient passive cooling design.
1

University of Colorado Boulder
Department of Mechanical Engineering

MCEN 4231/5231: Spring 2025
Computational Fluid Dynamics

2

Numerical Method and Simulation Design

2.1

Numerical Method

The governing equations for this problem include the conservation of mass, momentum, and
energy equations, coupled through the Boussinesq approximation:
∇ · u = 0 (Mass balance)

∂u
+ (u · ∇)u = µ∇2 u − ∇p + b (Momentum balance)
ρ
∂t


∂T
ρcv
+ u · ∇T = K∇2 T + R (Energy balance)
∂t


(1)
(2)
(3)

The body force term incorporates the Boussinesq approximation:
b = [1 − β(T − T0 )]g

(4)

The coupling between the equations occurs in two directions:
1. The velocity field influences the convective heat transfer in the energy equation.
2. The temperature field influences the body force term in the momentum equation.
Two key dimensionless parameters characterize the flow:
gβ(Ts − T∞ )S 3
Rayleigh number based on spacing: RaS =
Pr
ν2
gβ(Ts − T∞ )L3
Rayleigh number based on height: RaL =
Pr
ν2

(5)
(6)

Prandtl number:
Pr =

µ
ρK

(7)

We employed a unified monolithic coupling approach, creating a mixed function space:
W =U ¹P ¹T

(8)

For temporal discretization, we used the θ-method with θ = 0.5 (Crank–Nicolson scheme).
To address instabilities in advection-dominated flows and satisfy the LBB condition, we
implemented SUPG and PSPG stabilization techniques.

2

University of Colorado Boulder
Department of Mechanical Engineering
2.2

MCEN 4231/5231: Spring 2025
Computational Fluid Dynamics

Simulation Design

Three different configurations were simulated, varying the number of fins while maintaining
the same base dimensions:
Parameter
Number of fins
Fin spacing (mm)
Fin height (cm)
Fin thickness (mm)
Base width (cm)
Domain height (cm)

Configuration A

Configuration B

Configuration C

6
17.8
2.4
5.0
14.0
4.0

10
9.3
2.4
5.0
14.0
4.0

13
6.5
2.4
5.0
14.0
4.0

Table 1: Geometric parameters for the different fin configurations

Figure 1: Computational domain showing the fin array configuration with dimensions: total
width 14 cm, total height 4 cm, fin height 2.4 cm, and fin thickness 5 mm. The mesh shows
triangular elements with refinement near fin surfaces.
The rectangular domain (14 cm × 4 cm) contains vertically-aligned fins (height 2.4 cm,
thickness 5 mm) extending from the bottom surface. Using Gmsh, we created an unstructured triangular mesh with:
• Fin surface mesh size: 0.3 mm (for precise resolution of boundary layer effects)
• Non-fin surface mesh size: 2.5 mm (for computational efficiency in regions of less
complex flow)
Element counts increased with fin density, ranging from 45,000 elements (6 fins) to 75,000
elements (13 fins).

(a) Mesh for 6 fins

(b) Mesh for 10 fins

(c) Mesh for 13 fins

Figure 2: Computational meshes for different fin configurations
3

University of Colorado Boulder
Department of Mechanical Engineering

MCEN 4231/5231: Spring 2025
Computational Fluid Dynamics

The following boundary conditions were applied:
• Bottom surface and fins: No-slip condition (u = 0) and constant temperature (T =
80C or 353K)
• Left, right, and top boundaries: Open boundary conditions for velocity and zero heat
flux (∇T · n = 0)
• Initial condition: Fluid at rest (u = 0) and ambient temperature (T = 30C or 303K)
The physical and numerical parameters used in the simulations are summarized below:
Parameter
Physical properties
Prandtl number
Rayleigh number
Viscosity
Thermal conductivity
Specific heat capacity
Thermal expansion coefficient
Gravitational acceleration
Numerical parameters
Time step size
Total simulation time
θ parameter
Newton solver tolerance

Value

Units

0.7215
5.69 × 108
1.847 × 10−5
0.02772
720
1/328
9.81

kg/(m·s)
W/(m·K)
J/(kg·K)
K−1
m/s2

0.0275
5
0.5
10−7

s
s
-

Table 2: Physical and numerical parameters used in the simulations
The implementation utilized the DOLFINx library with a Newton solver and GMRES
linear solver with LU preconditioner. The simulations were parallelized using MPI, with
each simulation running on 4 processing cores.

4

University of Colorado Boulder
Department of Mechanical Engineering

3

MCEN 4231/5231: Spring 2025
Computational Fluid Dynamics

Results

(a) Velocity magnitude, 6
fins

(b) Velocity magnitude, 10
fins

(c) Velocity magnitude, 13
fins

(d) Pressure field, 6 fins

(e) Pressure field, 10 fins

(f) Pressure field, 13 fins

(g) Temperature field, 6 fins

(h) Temperature field, 10
fins

(i) Temperature field, 13
fins

Figure 3: Simulation results at steady state (t = 5s) for different fin configurations: velocity
magnitude fields (top row), pressure fields (middle row), and temperature fields (bottom
row)
Figure 3 presents the pressure, velocity, and temperature fields for all three fin configurations
at steady state (t = 5s). Key observations:
• Configuration A (6 fins):
– Minimal pressure gradients across domain
– Strong convection currents due to wide fin spacing
– Effective cooling between fins but reduced overall heat dissipation
5

University of Colorado Boulder
Department of Mechanical Engineering

MCEN 4231/5231: Spring 2025
Computational Fluid Dynamics

• Configuration B (10 fins):
– Moderate pressure gradients creating optimal flow conditions
– Well-developed convection currents
– Efficient heat transfer with good penetration of cooler air
• Configuration C (13 fins):
– High pressure gradients between tightly spaced fins
– Weak convection currents due to merged boundary layers
– Higher average temperatures between fins from restricted airflow
3.1

Temporal Evolution of Flow Patterns

Figure 4 shows the evolution of the flow field for the 10-fin configuration at three different
time steps (t = 1s, t = 2.5s, and t = 5s).

(a) t = 1s

(b) t = 2.5s

(c) t = 5s

Figure 4: Time evolution of flow field for the 10-fin configuration showing pressure (top row),
velocity magnitude (middle row), and temperature (bottom row)
Initially (t = 1s), heat conduction dominates, with minimal pressure gradients and thermal boundary layers forming around the fins. As time progresses, buoyancy forces become
more significant, and convection currents develop, accompanied by increasing pressure variations. By t = 2.5s, clear pressure gradients and thermal plumes are visible above the fin
array. At t = 5s, a quasi-steady state is reached with fully developed pressure, velocity, and
temperature fields.
3.2

Heat Transfer Performance

The heat transfer rate was calculated by integrating the conductive heat flux across the fin
surfaces. Table 3 presents the steady-state heat transfer rates for different fin configurations.
Each fin has a thickness of 5 mm.

6

University of Colorado Boulder
Department of Mechanical Engineering
Configuration
A
B
C

MCEN 4231/5231: Spring 2025
Computational Fluid Dynamics

Number of Fins

Fin Spacing (mm)

Heat Transfer Rate (W)

6
10
13

17.8
9.3
6.5

2.85
4.62
3.92

Table 3: Heat transfer performance for different fin configurations
These results demonstrate that heat transfer is governed by two competing effects:
buoyancy-driven enhancement with increasing fin number, and flow disruption due to excessive friction when fins are too closely spaced. Configuration B, with 10 fins, achieves the
highest heat transfer rate—62% higher than Configuration A and 18% higher than Configuration C.
3.3

Boundary Layer Interaction

Analysis of the velocity profiles between fins provides insight into the boundary layer development and interaction. As shown in Figure 5, boundary layers develop at the lower end of
fin surfaces and eventually merge if the spacing is sufficiently small.

Figure 5: Velocity profiles between fins showing boundary layer interaction
The Rayleigh number based on fin spacing (RaS ) characterizes this behavior:
Configuration
A
B
C

Fin Spacing (mm)

Computed RaS

Flow Regime

17.8
9.3
6.5

1.42 × 104
2.03 × 103
6.94 × 102

Isolated boundary layers
Interacting boundary layers
Merged boundary layers

Table 4: Rayleigh numbers based on fin spacing and corresponding flow regimes
Our results indicate that optimal heat transfer occurs when RaS is approximately in the
range of 1 × 103 to 3 × 103 , which corresponds to Configuration B in our study.

7

University of Colorado Boulder
Department of Mechanical Engineering

4

MCEN 4231/5231: Spring 2025
Computational Fluid Dynamics

Discussion

Simulation results confirm an optimal fin spacing that maximizes natural convection by
balancing surface area and airflow.
Key observations:
• Configuration A (6 fins): Wide spacing allows strong airflow but limits heat transfer
due to reduced surface area.
• Configuration C (13 fins): High surface area but suffers from poor airflow as boundary layers merge, lowering heat transfer.
• Configuration B (10 fins): Achieves the best performance by enabling partial
boundary layer interaction with sufficient airflow and surface area.
These results align with the model proposed by Bar-Cohen and Rohsenow, which predicts
optimal heat transfer when boundary layers just begin to interact .

5

Conclusion

This study investigated the natural convection heat transfer performance of heat sink fin
arrays using computational fluid dynamics. The main conclusions are:
• Optimal fin spacing maximizes heat transfer by balancing surface area and airflow.
Configuration B (10 fins) performed best, achieving a heat transfer rate:
– 62% higher than Configuration A (6 fins), and
– 18% higher than Configuration C (13 fins).
• Thermal boundary layer interaction is a key factor. Optimal heat transfer occurs
when adjacent boundary layers just begin to interact, typically at a spacing-based
Rayleigh number (RaS ) between 1 × 103 and 3 × 103 .
• The monolithic coupling approach effectively captured the interaction between
fluid flow and heat transfer, validating its use for natural convection simulations.
• These findings have practical implications for heat sink design in electronics, emphasizing the importance of optimizing fin spacing rather than simply increasing fin
count.

8

University of Colorado Boulder
Department of Mechanical Engineering

MCEN 4231/5231: Spring 2025
Computational Fluid Dynamics

References
[1] Bar-Cohen, A., and Rohsenow, W.M., “Thermally Optimum Spacing of Vertical, Natural Convection Cooled, Parallel Plates,” Journal of Heat Transfer, Vol. 106, pp. 116-123,
1984.
[2] Donea, J., and Huerta, A., “Finite Element Methods for Flow Problems,” John Wiley
& Sons, 2003.
[3] Bejan, A., “Convection Heat Transfer,” 4th Edition, John Wiley & Sons, 2013.
[4] Elenbaas, W., “Heat Dissipation of Parallel Plates by Free Convection,” Physica, Vol.
9, No. 1, pp. 1-28, 1942.
[5] Zienkiewicz, O.C., Taylor, R.L., and Nithiarasu, P., “The Finite Element Method for
Fluid Dynamics,” 7th Edition, Butterworth-Heinemann, 2014.
[6] Tezduyar, T.E., “Stabilized Finite Element Formulations for Incompressible Flow Computations,” Advances in Applied Mechanics, Vol. 28, pp. 1-44, 1991.
[7] Logg, A., Mardal, K.A., and Wells, G.N., “Automated Solution of Differential Equations
by the Finite Element Method: The FEniCS Book,” Springer, 2012.
[8] Yazicioglu, A.G., and Yüncü, H., “Optimum Fin Spacing of Rectangular Fins on a
Vertical Base in Free Convection Heat Transfer,” Heat and Mass Transfer, Vol. 44, pp.
11-21, 2007.
[9] Culham, J.R., and Muzychka, Y.S., “Optimization of Plate Fin Heat Sinks Using Entropy Generation Minimization,” IEEE Transactions on Components and Packaging
Technologies, Vol. 24, No. 2, pp. 159-165, 2001.
[10] Incropera, F.P., Dewitt, D.P., Bergman, T.L., and Lavine, A.S., “Fundamentals of Heat
and Mass Transfer,” 7th Edition, John Wiley & Sons, 2011.

9

