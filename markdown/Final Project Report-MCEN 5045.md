# Final Project Report MCEN 5045

**Document Type:** PDF Report

---

Final Design Project: Chocolate Winnowing Machine

Pablo Argandona
Vaikunth Keshav Krishnan
Randy Peterson
Eric Vasquez

MCEN 5045: Design for Manufacturability
Dan Riffell

December 02, 2024

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Table of Contents
Table of Figures.............................................................................................................................. 3
Table of Tables................................................................................................................................3
Executive Summary....................................................................................................................... 4
Introduction....................................................................................................................................5
Market Analysis............................................................................................................................. 7
Product Description..................................................................................................................... 11
Design Development.....................................................................................................................14
DFA Analysis................................................................................................................................ 18
Functional Analysis......................................................................................................................20
Error Proofing..............................................................................................................................20
Insertion........................................................................................................................................ 21
Secondary Operations................................................................................................................. 22
Tertiary Operation.......................................................................................................................22
Material Analysis......................................................................................................................... 23
Manufacturing Process Analysis................................................................................................ 25
Economic Analysis....................................................................................................................... 27
Professional, Ethical, and Safety Issues..................................................................................... 37
Conclusion.................................................................................................................................... 39
Acknowledgements...................................................................................................................... 40
References..................................................................................................................................... 41
Appendix.......................................................................................................................................43
Engineering Drawings................................................................................................................. 45

2

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Table of Figures
Figure 1: Peanut shells and husks compared to Cacao Fruit……………………………… 5
Figure 2: Roasted Cacao Beans……………………………………………………………… 5
Figure 3: Cacao husks and Cacao Nibs……………………………………………………... 6
Figure 4: Sylph Winnower ...………………………………………………………………… 8
Figure 5: Cocoatown Basic (left) and Deluxe (right) Winnower…………………………... 8
Figure 6: Aether Winnower………………………………………………………………….. 9
Figure 7: Sketch from US Patent # 9,426,942……………………………………………… 10
Figure 8: Drawing from US Patent #762,705……………………………………………….. 11
Figure 9: Cacao winnowing machine Black Box Diagram………………………………… 12
Figure 10: Cacao winnowing machine Glass Box Diagram……………………………….. 12
Figure 11: Fishbone Diagram………………………………………………………………... 13
Figure 12: Gantt Chart………………………………………………………………………. 14
Figure 13: Concept Development Sketch…………………………………………………… 15
Figure 14: First Concept Draft Model………………………………………………………. 16
Figure 15: Example Cyclone Sediment Filter………………………………………………. 16
Figure 16: Revised Concept Model…………………………………………………………. 17
Figure 17: Final Concept Model…………………………………………………………….. 18
Figure 18: Ashby Chart ……………………………………………………………………... 30

Table of Tables
Table 1: DFA Complexity Factor Results…………………………………………………… 19
Table 2: Functional Analysis Result ………………………………………………………... 20
Table 3: Insertion Index Result……………………………………………………………… 21
Table 4: Secondary Operations Index………………………………………………………. 22
Table 5: Unit Cost Analysis 1……………………………………………………………….. 32
Table 6: Unit Cost Analysis 2……………………………………………………………….. 33
Table 7: Approximate Order of Magnitude Estimate 1…………………………………… 34
Table 8: Approximate Order of Magnitude Estimate 2…………………………………… 34
Table 9: Stock Parts Cost Summary………………………………………………………… 34
Table 10: Break Even Analysis Estimates 1………………………………………………… 35
Table 11: Break Even Analysis Estimates 2………………………………………………… 35
Table 12: Summary of Economic Analysis…………………………………………………. 36

3

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Executive Summary
The design project aimed to develop an innovative cacao winnower with an integrated
vacuum blower, providing a cost-effective solution that surpasses existing market alternatives.
The primary objective was to create a winnower that is not only more affordable but also
uniquely equipped with a built-in vacuum, a feature absent in current market offerings. Through
careful consideration of materials and manufacturing processes, the project achieved both
performance and economic objectives.
Material selection was a critical aspect of the design process, utilizing an Ashby chart to
evaluate and identify the optimal materials for each component based on criteria such as Young's
modulus, density, and cost. Polypropylene (PP) was selected for the blower housing and
collection bins due to its low cost and suitable mechanical properties. The platform for mounting
components utilized 301 stainless steel, chosen for its cost-effectiveness, appropriate density, and
satisfactory structural integrity. The separator column was made from polyethylene (PE), which
provided an excellent balance of stiffness, hardness, and cost, while also being dishwasher and
food safe. The impeller was constructed from polystyrene (PS) for its high stiffness and
durability. The manufacturing processes involved Selective Laser Sintering (SLS) for the PP, PE,
and PS components, and laser cutting for the 301 stainless steel housing.
The integrated vacuum blower significantly enhances the separation efficiency by
effectively removing lighter husks from the heavier cacao nibs, ensuring a cleaner and more
precise separation process. This feature, unique to our design, sets it apart from other winnowers
on the market. By streamlining the winnowing process, the integrated vacuum blower reduces
manual intervention and increases overall throughput, leading to higher productivity. The
design’s user-friendly nature ensures that operators can quickly and efficiently manage the
winnowing process with minimal downtime.
The comprehensive approach to material selection and manufacturing resulted in a cacao
winnower that not only meets but exceeds performance expectations. The unit price of $441.80
makes it a highly competitive option, providing a cheaper alternative with superior functionality.
This design sets a new standard for winnowing solutions in the industry, offering a versatile and
valuable tool for cacao producers, from small-scale farmers to larger processing facilities. This
innovative approach not only supports the needs of various stakeholders but also demonstrates a
significant advancement in cacao processing technology, ensuring reliability, efficiency, and cost
savings.

4

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Introduction
In the process of preparing chocolate, cacao beans are separated from the cacao fruit,
fermented, dehydrated, roasted, and crushed before being ground into fine powders used in
chocolate production. The individual cacao beans are covered in a thin husk that must be
removed before the crushed mixture is used in chocolate. Removing the husk improves the
quality and flavor of the chocolate produced.
For comparison, the thin red husk that covers a peanut inside of its shell is similar in size
and weight to the husk of a cacao bean. Cacao fruits are about 12 inches long by 4 inches wide,
and can have 20 to 50 cacao beans inside a single fruit. An open cacao fruit is shown alongside
an image of crushed peanuts for comparison in Figure 1. The beans are initially coated in a slimy
white substance that is gradually reduced into a thin husk through the fermenting, dehydrating,
and roasting processes. Cacao beans after the roasting process are shown in Figure 2. These
beans are then crushed into small pieces known as nibs. At this stage, the nibs are still mixed
with the thin shells that encase them.

Figure 1: Peanut shells and husks compared to Cacao Fruit [1]

Figure 2: Roasted Cacao Beans [2]
5

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Winnowing is a method of separating heavier components in a mixture from lighter
components using wind or other air currents. This is an important step in the processing of many
dry goods, such as grain, because it allows chaff and other contaminants to be removed from the
desired product. Cacao nibs are much heavier compared to the cacao husks, so this technique is
often used to filter the mixture. The outer shell of the cacao fruit is similar in density to the cacao
nibs, but the outer shell’s size makes it easy to separate by hand before this step. The final
outputs of this process are the separated shells and nibs shown in Figure 3.

Figure 3: Cacao husks [3] (left) and Cacao nibs [4] (right)
Chocolate produced at industrial scale uses large machines very similar to those used to
clean grain and other dry goods. When hobbyists make chocolate at home, the batch sizes are
generally small enough that the husks can be separated by hand or by dropping the mixture in
front of a fan without creating a significant mess. Artisan chocolatiers and small candy stores
that make their own chocolate fall into an unfortunate middle ground where the batch sizes are
too large for the “at-home” methods, but are not large enough to justify the expense of industrial
scale machines. Some devices are designed to meet this particular need, but they are generally
very rudimentary and expensive for the materials they use. We decided to design a new machine
that meets this need while minimizing cost. To minimize the overall part count and complexity,
the project is limited to a winnowing machine that takes in a crushed nib and shell mixture and
separates the two components.

6

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Goals
The goal for this project was to lower the barrier to entry into craft chocolate making, as
you will see in the market analysis the existing products are on average well above $1000. This
product aims to stay below that threshold by minimizing the complexity of the design. We strive
to achieve this by reducing the number of manufacturing processes utilized to create the product,
minimizing part count, and standardizing materials used wherever possible. Additionally, the
design should be simple enough that a customer can assemble and maintain it. The ease of
assembly is important because it can greatly reduce shipping costs, and the ease-of-maintenance
aspect seems lacking from competitors' designs.

Market Analysis
Target Market
The target market for the cacao winnowing machine described in this report is the middle
ground between hobbyists making chocolate at home and industrial-scale production of
chocolate. Industrial scale chocolate producers may still be interested in the device to prepare
and test smaller batches of new recipes. According to IBISWorld.com, there were an estimated
3,206 chocolate production businesses in the US in 2023 [5]. Assuming that there is a similar
number of chocolate production businesses per capita in Canada and Mexico, there are an
additional estimated 1,600 chocolate shops across the US, Canada, and Mexico that may be
interested in the machine this report describes.

Existing Products
We conducted an analysis of winnowing machines that are already commercially
available to develop design criteria and set economic targets. One of the first devices we came
across was the Sylph Winnower, sold by Chocolate Alchemy (shown in Figure 4). The design is
very simple and incorporates mostly off-the-shelf components. The mixture of cacao nibs and
husks is poured into a food-safe PVC pipe network that is connected to a 5 gallon bucket. The lid
of the bucket has an attachment point for a standard 2” vacuum hose. The manufacturer
recommends a 6.5 hp Shop Vac for use with this winnower (sold separately). The air flow and
negative pressure caused by the vacuum is controlled by a metal cover that pivots over an
opening in the lid, allowing more air to enter the system. The price of this device is $285, and it
is estimated that it can process 1 lb/min of roasted and crushed cacao beans.

7

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Figure 4: Sylph Winnower
The next devices we analyzed were the Cocoatown Basic Winnower and Deluxe
Winnowers, shown in Figure 5. Both devices are primarily made of stainless steel and are rated
to process 20-50 lbs of cracked cacao beans in a single pass with a loss rate of less than 0.05%.
Additionally, the stainless steel column is described by the manufacturer as “elegant” and
suitable for display in front of customers and demonstrations of the winnowing process. The
primary design difference between the two is that the basic winnower incorporates an off-the
shelf vacuum to separate the husks and a valve to alter air flow, but the Deluxe version uses an
integrated vacuum with electronic speed control to control the internal flow rate. The basic
version has a sale price of $1,950 and the deluxe is listed for $2,250.

Figure 5: Cocoatown Basic (left) and Deluxe (right) Winnower

8

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

The last device we analyzed was the Aether Winnower, also from Chocolate Alchemy
(shown in Figure 6). The design is hand-built from stainless steel, food-safe PVC, and clear
polycarbonate in the husk collection chamber. The unique feature of this device is that it is also
designed to crack roasted cacao beans using a Champion Juicer (sold separately). This device
also requires the user to purchase a 6.5 hp Shop Vac to use, and has an estimated processing rate
of 55-65 lbs per hour. The Aether Winnower is listed for $2,650 (plus $250-$400 in shipping in
the US).

Figure 6: Aether Winnower
Across all of these devices, there are a few common trends. Many of the winnowers
offered by Chocolate Alchemy are very simple in their construction, and appear easy to replicate
with common hardware store components. Another common trend is the need for an external
vacuum or other device to separate husks and nibs. The prices appear high for the size of the
devices and the materials used, but the target market for these devices is generally very small. It
is likely, if not outright stated, that the parts used in many of these winnowers are hand made for
each order, driving up the production cost. All components that interact with the mixture directly
are made of food safe materials.

Patent Search
Winnowing is a very old technique of separating chaff from grain. There are records
dating back to at least 1500 BC of farmers winnowing grain in ancient Egypt [10], and the
process is likely as old as agriculture itself. Winnowing was traditionally done by hand, with
workers throwing baskets of grain into the air and relying on wind to carry away the lighter
chaff. Machines for winnowing first appeared in Scotland in 1737, and further improved during
the Industrial Revolution. Many modern patents surrounding the winnowing process surround
mechanisms inside of combine harvesters.

9

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

US Patent # 9,426,943 (sketch shown in Figure 7, dated August 2016) describes a series
of oscillating and vibrating pans used to keep grain and chaff suspended in an airstream as they
move rearward in the combine. After being separated from the Straw, the grain falls from the
oscillating thresher pan (labeled 228) onto the cascade pan (250). A fan generates an airstream
that blows away the chaff and directs the grain to fall onto the sieve (251). A second airstream to
separate any additional chaff. A second sieve under 251 further filters the grain before it falls in a
collection pan. This patent specifically covers the use of vibrating rubber sheets (284 and 288) to
keep the grain suspended in front of the airstream for longer, ideally forcing more chaff to be
blown away before the grain falls through the sieves as normal.

Figure 7: Sketch from US Patent # 9,426,943 [8]
US patent # 762,705 (filed in June 1904) describes a machine that combines the crushing
(or nibbing), grading, and winnowing process. The crushed beans are raised by an endless bucket
elevator (labeled as 11) and poured through a duct (12) into a rotating grader (14). The beans and
husks pass through the grader and fall into another duct (17) which directs them to the
winnowing chamber (15). The fan (23) creates a vacuum inside the winnowing chamber that
pulls the lighter shells out of the mixture, and the cacao nibs ultimately fall out of the machine
through the openings at 22. While the main goal of this machine is to reduce the cost and floor
space of the entire cacao handling process, its approach to winnowing is unique in that it uses a
vacuum to remove the husks instead of blowing air through the mixture.

10

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Figure 8: Drawing from US Patent #762,705 [9]

Product Description
From our analysis of existing winnowing machines, the basic requirements and design
space started to take shape. Before developing specific concepts or mechanisms to satisfy the
requirements, the inputs, outputs, and basic functions of the device were broken down into their
basic forms.

Black and Glass Box Diagrams
The system is limited to the winnowing process, so the main inputs will be a mixture of
crushed cacao beans and husks. An air current can be used to separate the lighter cacao husks
from the nibs when the mixture is falling or suspended in the air. To further refine the inputs and
outputs of the system, a Black Box diagram, shown in Figure 9, was generated that broke down
the inputs and outputs of a machine that would be able to effectively separate the mixture.

11

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Figure 9: Cacao Winnowing Machine Black Box Diagram
The Black Box Diagram was further refined into a Glass Box diagram, shown in Figure
10. The motor is powered after a switch is activated, and the motor’s speed is controlled by an
off the shelf potentiometer. The motor drives an impeller that creates an air current that flows
through the separator column. While this air current is flowing, the Cacao mixture will be
dropped into the separator as well. The air current will carry the husks into a separate duct in the
separator while the nibs fall through the column into a collection bin. The motor will release
some amount of sound, vibrations, and heat. These byproducts are not essential, but are mostly
unavoidable.

Figure 10: Cacao Winnowing Machine Glass Box Diagram

12

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Fishbone Diagram
The fishbone diagram for the cacao winnower project outlines three primary branches:
Electronics, Housing, and Vacuum Blower. Each branch is critical to the overall functionality and
efficiency of the design. The Electronics branch includes components such as the BLDC motor,
potentiometer, power switch, and DC power adapter, which collectively manage the electrical
control and power distribution necessary for the winnower's operation. The Housing branch
comprises the structural elements, including the left base, right base, legs, and separator column,
providing the foundational support and stability needed to accommodate the various components
and ensure the machine's integrity. The Vacuum Blower branch features the impeller, blower
housing left, blower housing right, and blower standoff, which are integral to creating the
necessary airflow for effective separation of cacao nibs from husks. Together, these components
form a cohesive and efficient system that enhances the winnowing process, ensuring a superior
and cost-effective solution for cacao producers.

Figure 11: Fishbone Diagram

Gantt Chart
To ensure that our project remained on schedule and all tasks were completed in a timely
manner, we utilized a Gantt chart. This tool allowed us to effectively plan, coordinate, and
monitor the various stages of the project, providing a clear visual representation of the timeline
and dependencies. By regularly updating and referring to the Gantt chart, we were able to

13

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

identify potential bottlenecks, allocate resources efficiently, and maintain a steady progression
towards our project milestones. The Gantt chart was instrumental in keeping the team organized
and ensuring that we met our deadlines.

Figure 12: Gantt Chart

Design Development
Concept Development
At the start of the project, the goal was to create an all-in-one winnowing machine that
would take in full, un-crushed roasted cacao beans. The project scope was eventually reduced to
only the winnowing process. Figure 13 shows a sketch of the original concept development. The
different critical functions were separated into simplified glass boxes to help choose methods for
accomplishing each step. It was initially decided that the design would leverage gravity to pass
the cacao mixture in front of a vacuum that would pull the husks away. Because the crushing step
was placed outside the scope of the design, there was no need to lift the crushed mixture to the
top of the collection bin. The mixture could be fed directly into the top of the separating area,
eliminating the need for an additional function and mechanism.
The design also needs to incorporate some sort of control to raise or lower the power of
the vacuum or blower used to filter the husks from the mixture. Many similar products on the
market use mechanical valves to tune the amount of air let into the system, while others use
electronics to control the speed of the vacuum/blower motor. It was decided that electronic speed
control would be more repeatable and easier to use than a mechanical valve, as the results of
“turning up” the motor are likely more obvious to the user. Increasing the speed of the motor will
increase the air speed in the system, ideally causing more husks to be removed. To properly tune
the machine for a particular mixture of cacao nibs and husks, a human operator will need to add

14

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

a mixture to the machine with the motor set at a specific speed, then assess the contents of the
cacao nibs and husk collection bins. If there are too many husks in the nib collection bin, the
motor speed should be increased to create a stronger air stream. If there are too many nibs in the
husk collection bin, the speed should be reduced. Different cacao grinding tools and techniques
may result in slightly different mixtures, so this process may need to be repeated for different
mixtures. An electronic speed control dial will make it easier for users to quickly return the
motor to a known speed for a particular mixture.

Figure 13: Concept Development Sketch

First Concept
The first draft implementation of this concept is displayed in Figure 14. A mixture of
Cacao nibs and husks fills a hopper on top of the assembly. A simple valve prevents the mixture
from falling before the vacuum is activated. The mixture falls from the hopper into a
converging-diverging nozzle into the Separator Column, and passes a junction where the husks
are pulled from the mixture by a vacuum. The cacao nibs are comparatively much heavier than
the cacao husks and are much harder for the vacuum to redirect, so they continue falling into the
collection bin. The nozzle ensures that there is empty space in the separator column for the husks
to move through and into the cyclone filter. This filter was inspired by a cyclone sediment filter,
often used for things like sawdust in wood workshops. An example of a cyclone filter is shown
in Figure 15. A vacuum on top of the cyclone (not pictured in Figure 14 or 15) pulls in a mixture
of air and light particles from a duct that is tangent to the cylindrical walls of the cyclone. The
particles strike the inside walls as they swirl around the cyclone, causing them to lose their
momentum and ultimately fall into the collection bin at the base. The air is pulled out of the
cyclone through a column in the center. Using a cyclone filter rather than a traditional mesh filter

15

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

prevents the filter from being plugged and stopping air from flowing. Allowing continuous air
flow is critical for a winnowing machine, because the air flow drives the separating process.

Figure 14: First Concept Draft Model

Figure 15: Cyclone Sediment Filter [6]

Revised Concept
The first draft of the design would have required a large number of parts, and some of
them may have been difficult to manufacture. The second draft of the design, shown in Figure 16
has a number of changes incorporated that make it much simpler. Firstly, the hopper on top of the
device was eliminated. The cacao mixture would likely fall through the converging/diverging
nozzle within a few minutes, almost as fast as the mixture can be added to the hopper. If so, the
mixture can be fed into a funnel on the top of the separator column by a human operator or an
interface with a cacao bean crushing machine without making the overall process significantly
slower or manually intensive. Additionally, the vacuum was removed in favor of a blower. Using
a blower to push the husks out of the cacao mixture eliminates the need for the cyclone filter, as
16

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

there is no risk of the husks getting pulled into a vacuum impeller. However, the cacao husks
need to be pushed into a sealed container or into a mesh filter to prevent them from scattering
around the working area. Using a blower increases the complexity of the junction in the separator
column, but the two curved ducts can be identical, duplicated parts. The changes overall result in
a significant part reduction and reduces the overall complexity of the design.

Figure 16: Revised Concept Model

Final Concept
To reduce the complexity of the separator column and ducts, it was decided that the
separator column and ducting assembly should be replaced with fewer parts. Additionally, due to
the small market for chocolate winnowing machines, the parts should be able to be manufactured
with low-volume production methods. This design is intended to reduce the number of secondary
manufacturing processes necessary to produce the parts. The updated design is shown in Figure
17. A cover with integrated snap fits latches over the main separator column. This removable
cover makes it easier for users to open the assembly for cleaning or any other maintenance. The
separator column fits flush against the base and is attached by snap rivets that can be installed by
hand. By opening the separator column directly into the collection bins, the amount of dust and
husks that will be blown around the work area is reduced. A perforated sheet is also included to
17

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

reduce the likelihood that any cacao pieces will fall into the blower duct. This concept reduces
the separator column to 2 parts, the column and its cover, while still allowing a blower to
separate the mixture.

Figure 17: Final Concept Model

DFA Analysis
During the design process, a major consideration was the product’s design for assembly;
this meant an emphasis on reducing parts by minimizing the number of fasteners used and using
snap-fits. A DFA analysis entails comparing various design iterations to display a quantitative
improvement made through design changes. The two design iterations used in the DFA analysis
were based on the final concept detailed above with the major difference being the choice of
fastener used to hold the separator housing and blower stand to the base. This choice affected the
DFA complexity factor, functional analysis, insertion index, and secondary operations index. All
of these effects will be discussed further in this section. Fastener choice did not have any effect
on the error proofing and handling index.

18

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

DFA Complexity Factor
The first iteration called for the use of bolts, washers, and nuts as the fasteners of choice,
this added 14 nuts and bolts respectively, and 22 washers which made the fasteners alone 68% of
the total number of parts of the entire product. The group agreed that this was a poor design
choice and argued for the use of snap-fits incorporated directly into the design of the separator
housing and blower stand to eliminate the need for external fasteners. However, incorporating
snap-fits was ultimately chosen against due to the additional complexity it would add to the
already complex model of the separator housing. Instead, The group decided to use plastic snap
rivets, adding only 14 parts to the design. These snap rivets can be installed by hand, but require
a tool for removal. The results of this analysis are seen below in Figure 18, the original design
consisted of 73 parts, 142 interfaces with a complexity factor of 101.81, with the choice of snap
rivets all of those design characteristics were approximately halved to 37 parts, 86 interfaces
with a complexity factor 56.41.

Table 1: DFA Complexity Factor Results

19

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Functional Analysis
The functional analysis revealed the efficiency improvements that the choice to use snap
rivets in the overall design had. Theoretically, a winnower could consist only of 4 parts; a blower
in itself a theoretical 3 part minimum, and a collection bin to hold the desired nibs with the husks
flying in all directions. To have a winnower that separates the nibs from the husks in a closed
environment and keeps the husks from flying everywhere the practical minimum part count was
set at 11 parts. This meant that the original nuts and bolts option had a theoretical efficiency of a
mere 5.5% and a practical efficiency of 15.1%. The snap rivets option doubled the efficiency
having 10.8% and 29.7% theoretical and practical efficiency respectively.

Table 2: Functional Analysis Result

Error Proofing
As stated above, the error proofing index was not changed by the fastener choice.
However, it was not null as several parts could be omitted or assembled in the incorrect
direction. 8 potential errors were registered by the team leading to the error proofing index to be
2.00.

20

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Handling
The handling index was the smallest registered in the DFA analysis for this product at
only 0.25 for both design iterations. The sole potential problem that the team could envision was
the fragility of the Blower Clips that hold the blower housing together due to the small size and
material of this component.

Insertion
Although the assembly step of inserting the blower stand and separator column is likely
to be passed down to the customer to minimize shipping volume the insertion index must be
considered. The customer would want a product that is simple to assemble, the first option
requires the washer and nut at the bottom of the assembly to be held while the bolt is being
screwed, and if the collection bins are already inserted into the base, the space is obstructed to
conduct this step. The snap rivets avoid both of these problems, however there might be insertion
resistance due to the nature of the snap-fit. This results in the first option having an insertion
index of 3.25 and the second option having an insertion index of 2.50.

Table 3: Insertion Index Result

21

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Secondary Operations
As mentioned before the fastening of the base to the blower stand and separator will be
left to the customer, however secondary operations that require a tool need to be considered since
the tool will either need to be supplied adding cost to the product or expect for the customer to
have their own which for our target audience of chocolatiers this might not be the case. The first
option requires screwing a bolt into a nut 8 times which leads to a secondary operation index of
3.25 compared to the snap rivets option with an index of 2.75 since the snap rivets can be pushed
in by hand.

Table 4: Secondary Operations Index

Tertiary Operation
To ensure that the plastic components of the cacao winnower meet FDA food safety
standards for commercial use, a tertiary operation involving the application of Max CLR
food-safe epoxy will be conducted. Max CLR is an FDA-compliant, food-safe epoxy that
provides a durable, non-toxic coating, making it suitable for use in food processing equipment.
After the initial manufacturing process, each plastic component, including those made from
Polypropylene (PP), Polyethylene (PE), and Polystyrene (PS), will undergo a thorough cleaning
to remove any residues. Following this, the eoxy will be evenly applied to the surface of each

22

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

component, ensuring complete coverage. Once applied, the epoxy will cure according to the
manufacturer’s specifications, resulting in a hard, glossy finish that is both food-safe and
resistant to wear and tear. This additional step is crucial in guaranteeing that all plastic parts of
the winnower comply with stringent food safety regulations, thereby ensuring the equipment is
safe for commercial use in the cacao processing industry.

Material Analysis
This part of the report provides an overview of the material selection process for various
designed components, including a vacuum blower housing, a platform for component mounting
and structural support, collection bins, a separator column, and an impeller. The criteria for
selection included factors such as Young's modulus, density, cost, and specific application
requirements. The selected materials were chosen based on their performance across these
criteria, ensuring they meet the specific needs of each project.

Blower Housing
Criteria and Weighting
The selection criteria for the blower housing of a vacuum included Young's modulus,
density, and cost. Among these, the cost of the material was given the highest weight, followed
by density and Young's modulus. This prioritization ensured that the chosen material would be
cost-effective while still providing the necessary structural properties.

Selected Material: Polypropylene (PP)
Polypropylene (PP) was selected as the optimal material for the blower housing. PP
offers a balanced combination of low cost, suitable density, and satisfactory Young's modulus. Its
cost-effectiveness ensures budget efficiency, while its physical properties provide the necessary
structural integrity and lightweight characteristics. This makes PP an excellent choice for the
blower housing, aligning well with the project requirements.

Boxes (Main Housing)

23

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Criteria and Weighting
For the design project involving the creation of a platform to mount components and
provide structural support, the selection criteria were based on Young's modulus, density, and the
cost of a 12" by 12" plate. The cost of the material was weighted the highest, followed by density
and Young's modulus.

Selected Material: 301 Stainless Steel
301 stainless steel was chosen as the optimal material for the platform. The selection was
driven by its cost-effectiveness, suitable density, and satisfactoryYoung's modulus. This
combination ensures that the platform is both economical and capable of providing the necessary
structural support and stability required for the project.

Collection Bins
Criteria and Motivation
The material selection for collection bins was highly motivated by the cheapness of the
material. The criteria also included density and Young's modulus to ensure practicality and
performance.

Selected Material: Polypropylene (PP)
Polypropylene (PP) was selected for the collection bins due to its low cost, low density,
and average Young's modulus. These characteristics make the bins lighter and easier to handle
while ensuring they are economical and practical for everyday use. PP’s suitability for
Stereolithography (SLS) 3D printing also adds to its efficiency in production.

Separator Column
Criteria and Weighting
For the separator column, the criteria included Young's modulus, Rockwell hardness, and
cost, with the material needing to be dishwasher safe and food safe. The material selection was
weighted with cost as the highest priority, followed by density and Young's modulus.

24

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Selected Material: Polyethylene (PE)
Polyethylene (PE) was chosen as the optimal material for the separator column. PE
offered higher than average scores in Young's modulus, Rockwell hardness, and cost when
compared to alternatives such as ABS, PS, 304 Stainless Steel, and 356 Aluminum. PE’s
attributes of being dishwasher safe and food safe were crucial for the application, ensuring
reliability and compliance with the project’s safety and functionality requirements.

Impeller
Criteria and Performance
The material for the impeller was selected based on its Young's modulus and Rockwell
hardness. The goal was to find a material that provided high stiffness and resistance to wear.

Selected Material: Polystyrene (PS)
Polystyrene (PS) was selected for the impeller due to its high Young's modulus and
Rockwell hardness, indicating excellent stiffness and structural integrity. These properties are
critical for efficient impeller performance and durability under operational conditions. PS’s
suitability for SLS 3D printing further enhances its practicality for production.
The material selection for each designed component was meticulously evaluated based on
specific criteria relevant to their applications. The chosen materials—Polypropylene (PP), 301
Stainless Steel, Polyethylene (PE), and Polystyrene (PS)—provide a balanced combination of
cost-effectiveness, structural integrity, and compliance with specific requirements. These
selections ensure that the project will meet the performance goals while remaining economical
and practical for production.

Manufacturing Process Analysis
Impeller
The impeller for the vacuum blower will be manufactured using Selective Laser Sintering
(SLS), a 3D printing technology that uses a high-power laser to sinter powdered material into
solid parts. The process begins with designing the impeller using CAD software, ensuring all
dimensions and specifications meet the design requirements. The design file is then uploaded to
25

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

the SLS printer, where a laser selectively fuses powdered Polystyrene (PS) layer by layer to form
the impeller. After printing, the impeller is cleaned to remove any excess powder and then
undergoes a post-processing step to enhance its mechanical properties.

Blower Housing
The blower housing, which consists of two parts (left and right), will also be
manufactured using SLS. Similar to the impeller, the housing components are designed using
CAD software and printed layer by layer using the SLS printer. Post-printing, the parts are
cleaned to remove any loose powder and then undergo a post-processing treatment to ensure
durability and precision. The two halves of the blower housing are then assembled together with
the impeller and secured in place using appropriate fasteners.

Separator Column
The separator column, integral to the housing, will be produced using SLS. This
component is designed with precise dimensions to fit seamlessly with other parts of the machine.
The SLS process ensures that the column is accurate and robust, providing the necessary
structural support and functionality. After printing and post-processing, the separator column is
inspected for any imperfections and then integrated into the main housing assembly.

Collection Bins
The collection bins are manufactured using Polypropylene (PP) due to its
cost-effectiveness and suitable mechanical properties. The bins are designed to be lightweight
and durable, ensuring ease of handling and longevity. The SLS process is used to print the bins,
with a focus on achieving precise dimensions and smooth surfaces. After printing, the bins
undergo post-processing and inspection to ensure they meet the design specifications and can
securely fit into the winnower assembly.

Vacuum Blower
The vacuum blower assembly includes the impeller, blower housing (left and right), and
blower standoff. Each component is designed to work in harmony to create the necessary airflow
for the winnowing process. The impeller and blower housings are printed using SLS, cleaned to
remove excess powder, and post-processed. The blower standoff, also produced via SLS, is
designed to provide the necessary spacing and support for the blower assembly. Once all

26

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

components are printed and processed, they are assembled together with precise alignment to
ensure optimal performance of the vacuum blower.

Boxes (Main Housing)
The boxes forming the main housing of the winnower are made from a sheet of 301
stainless steel (SS). The stainless steel sheet is first prepared by cleaning and ensuring it is free
from any contaminants. It is then laser cut to include all necessary holes and tabs required for the
design. Laser cutting provides high precision and clean edges, ensuring the boxes fit perfectly
into the overall assembly. After cutting, the pieces are inspected for accuracy and any sharp
edges are deburred. The stainless steel boxes are then assembled, providing a durable and
corrosion-resistant housing for the winnower.

Legs (Structural Support)
The legs of the machine are fabricated from 6061 aluminum (AL), a material known for
its strength and lightweight properties. Stock aluminum extrusions are used, which are cut to a
length of 8 inches using a precision saw. Two holes are then drilled into each leg for mounting
purposes. The aluminum legs are then inspected for any defects and prepared for assembly with
the main housing. This ensures that the machine has a stable and robust foundation, capable of
supporting all other components securely.
In conclusion, the manufacturing process for the vacuum winnower components involves
a combination of advanced 3D printing technologies like Selective Laser Sintering (SLS) and
traditional machining techniques. By using SLS for the majority of parts and laser cutting for the
stainless steel housing, the design achieves a balance of precision, durability, and
cost-effectiveness. The integration of these manufacturing methods ensures that the final product
meets all performance and structural requirements, providing a high-quality solution for cacao
winnowing.

Economic Analysis
Most components in our product are SLS printed, with a few exceptions, such as those that are
plasma cut and welded. The manufacturing costs of these processes largely depend on factors
like mass, design complexity, and the volume of products to be produced. These processes are
well-suited for low-scale manufacturing but are not ideal for mass production. Given that only

27

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

1000 units of these products are sold annually and based on data from the Fine Chocolate
Industry Association (FCIA), these were the most optimal manufacturing options.

UNIT COST ANALYSIS
The following equations and assumptions were used for obtaining Unit Cost:

1. Material Cost:

2. Labor Cost:

Labour Cost ($/lb)∶
● SLS Printing : $25 /Hour
● Plasma Cutting : $30/Hour
● Plasma Cutting and Welding(GMAW) : $35/Hour
Production Rate (Units/hr)∶
The production rate of parts depends largely on their size and complexity, with variations
based on the manufacturing process. Below is an analysis of the production rates for
various processes:
SLS Printing:
The production rate for SLS printing typically ranges from 20 to 30 parts per hour, which
is influenced by the complexity and size of the product. For example, components such as

28

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

W01 (Impeller) and W17 (Blower Clips) are relatively small but feature intricate
contours, resulting in slower production rates. On the other hand, larger components like
W05 (Separator Column), W06 (Separator Cover), and W07 (Collection Box) have lower
production rates due to their size and additional post-processing requirements.
Plasma Cutting and Welding:
Components like W11 and W12 are both plasma cut and welded, while W18 (Blower
Screen) is solely plasma cut. The production rate for these components is approximately
10 units per hour, which is influenced by the material properties. Stainless steel grades
SS301 and SS304, which are used for perforated sheets, take significantly longer to cut
compared to plastics. Additionally, the size and precision requirements for components
like W11, W12, and W19 further contribute to the reduced production efficiency.

3. Tooling Cost:

A. Cost of Tooling ($):
Below is an analysis of the Cost of Tooling($) for various processes:
SLS Printing:
SLS printing is generally considered a cost-effective process, particularly for
low-volume production. The primary costs involved include the resin and the
operation of the machine. The cost of resin is approximately $200, in addition to
the cost of the materials used for printing. This makes SLS printing an affordable
option, especially for small-scale or prototyping applications

29

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Plasma Cutting:
Plasma cutting is a more expensive process due to the specialized equipment
required to handle thicker materials such as stainless steel. The cost of tooling
setup for plasma cutting is estimated at approximately $3,000.
Welding:
The tooling costs for welding, particularly for Gas Metal Arc Welding (GMAW),
vary based on the size of the components being welded. The setup cost for
welding is typically around $2,000, influenced by the materials used and the
complexity of the welds required.
B. Life of Tooling (Cost/lb):
SLS Printing:
SLS printing does not require significant tooling aside from the 3D printer and
CAD file. Therefore, the tooling cost is typically listed as N/A. The production
process is mostly reliant on the use of digital models, making it a relatively
low-cost option in terms of tooling.
Plasma Cutting:
Plasma cutting tools have an estimated life of approximately 1,000 units. To meet
production demands, typically 3 sets of plasma cutting machines are required,
ensuring consistent operation and minimizing downtime.
Welding:
The life of welding tools is contingent upon the size and complexity of the
components being welded. Larger parts generally require more frequent tool
maintenance or replacement. The tooling life for welding is estimated based on
usage and the frequency of welding sessions required for each component.

Production Run (No. of Parts): Based on data from IBISWorld.com, approximately
1000 units of this machine are sold annually. Since the market for this product is

30

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

relatively stable without any drastic sales increases, we have assumed a production run of
3,000 units.

4. . Equipment Cost:

A. Capital Cost ($):
❖ SLS Printing: $5,500
❖ Plasma Cutting: $11,000
❖ Plasma Cutting and Welding (GMAW): $5,500

B. Capital Write-off Time:
Assuming 5 years, 40 hours per week, 3 shifts per day, and 50 weeks per year.
C. Load Fraction:
We assume one operator per machine.
D. Load Sharing Factor:
We assume one machine per part.

5. Overhead Cost (COH):

Overhead Hourly Rate∶ $50 / Hour

31

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

6. Total Unit Cost :
The Total Unit Cost ( CU) is the sum of all these costs :

A comprehensive unit cost analysis was conducted for the equipment. The table below
provides detailed information used in the cost estimation process. Grey-shaded cells in
the table indicate unit cost estimates that were calculated using the equations mentioned
earlier.

Table 5: Unit Cost Analysis 1
32

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Table 6: Unit Cost Analysis 2

Order of Magnitude(OME) Estimates:
This method was employed to roughly guess the price of each component using the 1:3:9 rule.
The Material Cost, Manufacturing Cost, and Selling Price were calculated based on the Cost of
Material (cost/lb), Mass of Material (m), and Fraction of Material lost in scrap using the
following equations:
Material Cost ($)=Cost of Material (CM )(cost/lb) + Labour Cost (CL) ($/hr)
Manufacturing Cost ($) = 3 ×Material Cost($)
Selling Price ($) =9 ×Material Cost($)

33

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Table 7: Approximate Order of Magnitude Estimate 1

Table 8: Approximate Order of Magnitude Estimate 2

Stock Parts:
This product consists of four stock parts, which are common components such as bolts, DC
motors, potentiometers, etc. These parts can be procured from manufacturers that produce them
in large quantities. Since these materials are available in standardized sizes and specifications,
producing them in-house would incur excess costs, making purchasing the more cost-effective
option.

Table 9: Stock Parts Cost Summary

34

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Break-Even Point
The analysis was carried out to determine the price at which each component should be sold in
order to cover the cost of Manufacturing.

Table 10: Break Even Analysis Estimates 1

Table 11: Break Even Analysis Estimates 2
35

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Summary
A table summarizing the Costs incurred for the product is given below.

Table 12: Summary of Economic Analysis

The product's listed price on the official website cocoatown.com is $2250. However, our
manufactured version achieves a Break-Even Quantity of 420 units at a selling price of $441.80
per unit, approximately $1808.2 less than the listed price. Despite the cost reduction, our product
maintains high-quality standards, making it competitive in the market. This pricing advantage
could expand accessibility, particularly in the household segment, potentially driving significant
sales growth.

Professional, Ethical, and Safety Issues
Initially, safety concerns such as sharp edges, pinching or crushing injuries, and hair or
loose clothing getting caught in moving parts surfaced. The main moving part is the blower
impeller, so the blower housing was designed to minimize the number and size of any openings
that could be used to access any possible points of injury. The blower housing was designed to
place the impeller over 3 inches away from any inlets, and openings in the housing are small
enough that the risk of injury is low. An operator could potentially catch their hand in the gap
between the collection bin and the base, but it is highly unlikely that the forces involved would
be significant enough to cause serious injury.

36

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

The major remaining safety concern with this device is the risk of inhaling airborne
particles. Even if small particles are made of non-toxic materials, inhaling particles as small as
2.5 micrometers has been linked to aggravated asthma, decreased lung function, and irritation of
the lungs and airway [7]. The particles from the cacao crushing process are much larger than
those that are associated with inhalation hazards, but it is possible that a small number of small
particles become airborne. Most of the air from the blower is directed downwards into collection
bins, and some particles could escape through small gaps in between the collection bins and
base. When the operator tunes the speed of the motor for optimal separation, they can also
observe if any particles escape and alter the motor’s speed accordingly.

37

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Conclusion
The design and development of the innovative cacao winnower with an integrated
vacuum blower have successfully met the objectives of providing a more cost-effective and
efficient solution compared to existing market alternatives. The unique integration of the vacuum
blower enhances the separation process, ensuring a cleaner and more precise winnowing
operation. This project highlights the potential for significant improvements in productivity and
cost savings for chocolate producers.
The integrated vacuum blower significantly improves the separation efficiency by
effectively removing lighter husks from the heavier cacao nibs, ensuring a cleaner and more
precise separation process. This feature, unique to our design, sets it apart from other winnowers
on the market. By streamlining the winnowing process, the integrated vacuum blower reduces
manual intervention and increases overall throughput, leading to higher productivity. The
design's user-friendly nature ensures that operators can quickly and efficiently manage the
winnowing process with minimal downtime.
This project demonstrates how thoughtful design and material selection can lead to
innovative solutions that address specific industry needs. Our cacao winnower with an integrated
vacuum blower is not only more affordable but also more efficient than existing market
alternatives. The combination of cost-effectiveness, structural integrity, and enhanced
functionality makes our design a valuable tool for improving cacao production processes. The
success of this project underscores the importance of multidisciplinary approaches in engineering
design, combining material science, mechanical design, and practical considerations to create
superior products.
Overall, this innovative approach not only supports the needs of small-scale chocolate
producers but also scales up to meet the demands of moderate sized processing facilities. The
winnower's design aligns with the goals of improving productivity, reducing costs, and
enhancing the quality of the final product. By providing a cheaper alternative with superior
functionality, our cacao winnower sets a new standard for winnowing solutions in the industry,
offering a versatile and valuable tool for the cacao production community.

38

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Acknowledgements
We would like to thank Mr. Dan Riffel for his guidance throughout the Fall 2024 semester. It has
been a great pleasure to learn from his experience.

39

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

References
[1] “Cacao Pod (Chocolate Fruit),” Specialty Food Source, 2024.
https://specialtyfoodsource.com/products/cacao-pod-chocolate-fruit?variant=45537756217602
[2] “Roasted Cacao Beans,” Maribea.
https://maribeacacao.com/shop-online/baking/roasted-cacao-beans/
[3] “Roasted CACAO SHELLS, Organic - Cocoa Chocolate Tea,” CynCraft, 2016.
https://cyncraft.com/products/roasted-cacao-shells-organic-cocoa-chocolate-tea-dark-delicious-a
nd-decadent
[4] “Amazon.com : Organic Cacao Nibs Raw Whole - Sweet Chocolate Beans - Dark Cocoa
Bean Cacao Nibs Sweet Organic Cocoa Nibs Cacoco Caocao Nib Coco Nibs Cacai Nibs Cacau
Nibs Cocao Nibbs Cacow Nibs: Grocery & Gourmet Food,” Amazon.com, 2024.
https://www.amazon.com/Cacao-Nibs-Raw-Whole-Organic/dp/B07V3TFNGQ
[5] “IBISWorld - Industry Market Research, Reports, and Statistics,” www.ibisworld.com, Nov.
04, 2024.
https://www.ibisworld.com/industry-statistics/number-of-businesses/chocolate-production-united
-states/
[6] “Cyclone Dust Collectors,” Imperial Systems, Inc.
https://www.isystemsweb.com/dust-collection-equipment/cyclone-dust-collectors/
[7] United States Environmental Protection Agency, “Health and Environmental Effects of
Particulate Matter (PM),” US EPA, Aug. 30, 2022.
https://www.epa.gov/pm-pollution/health-and-environmental-effects-particulate-matter-pm
[8] M. Bilde, “Combine Harvester Grain Cleaning Apparatus,” Aug. 30, 2016 Available:
https://patents.google.com/patent/US9426943B2/en?oq=US9426943
[9] S. Green, “Combined machine for nibbing, grading, and winnowing cocoa-beans or the
like.,” Jun. 14, 1904 Available:
https://patents.google.com/patent/US762705A/en?oq=US+762705

40

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

[10] “Winnowing of the grain in the threshing floor. s.XIV BC. EGYPT. Luxor. Thebes. 18th
Dynasty. Painting that decorated the tomb of Menna, scribe of Thutmose IV. Egyptian art. New
Kingdom. Painting. ITALY. PIEDMONT. Turin. Egyptian Museum of Turin.,” SuperStock.
https://www.superstock.com/asset/winnowing-grain-threshing-floor-xiv-bc-egypt-luxor-thebes-th
/4435-3692

41

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Appendix

42

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Appendix 1 Material Selection Ashby Chart
For the material selection process, we initially utilized an Ashby chart to identify and
evaluate potential candidate materials. The Ashby chart is a valuable tool in materials science,
allowing us to plot and compare critical properties such as Young's modulus, density, and cost on
a single graph. This visual representation facilitated a systematic and informed approach to
material selection, enabling us to efficiently narrow down the list of materials that best met our
project's criteria. By using the Ashby chart, we ensured that our decisions were data-driven and
optimized for performance and cost-effectiveness. The Ashby chart used in our analysis will be
shown below.

Figure 18: Ashby Chart

43

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

12/12/2024

Engineering Drawings

44

8

7

6

5

4

3

2
REV.
A

1

DESCRIPTION
Initial Creation

DATE
12/1/2024

A

A

B

B

C

C

D

D

E

E

UNIVERSITY OF COLORADO

F
DESCRIPTION

1111 ENGINEERING DRIVE
BOULDER, CO 80309-0427

Assembly
PN

Asm-01

REV

SHEET

A

PROPRIETARY AND CONFIDENTIAL

8

7

6

SOLIDWORKS Educational Product. For Instructional Use Only.

5

4

3

2

1 of 2

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE
PROPERTY OF UNIVERSITY OF COLORADO. ANY REPRODUCTION IN
PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS
PROHIBITED.

1

F

8

7

6

5

4

3
PART NUMBER

DESCRIPTION

QTY.

1

W01

Impeller

1

2

W02

Brushless Motor

1

3

W03-A

Blower Housing Side A

1

4
5

W03-B
W04

Blower Housing Side B
Blower Clips

1
2

6

W05

Separator Column

1

7

W06

Separator Cover

1

8

W07

Collection Bin

1

9

W08

Female Power Adapter

1

10

W09

Potentiometer

1

11

W11

Base (Left)

1

12

W12

Base (Right)

1

13

W16

Blower Stand

1

14

W18

Blower Screen

1

15

W19

Snap Rivets

14

16

W20

Legs

6

17

W10

Switch

1

5
4
DETAIL A
SCALE 2 : 1

10
A

B

1

17

14

1

ITEM NO.

A

13

2

3

A

B

2

9

6

C

C

11

15

D

7

8

D

12

16

E

E

UNIVERSITY OF COLORADO

F
DESCRIPTION

1111 ENGINEERING DRIVE
BOULDER, CO 80309-0427

Assembly
PN

Asm-01

REV

SHEET

A

PROPRIETARY AND CONFIDENTIAL

8

7

6

SOLIDWORKS Educational Product. For Instructional Use Only.

5

4

3

2

2 of 2

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE
PROPERTY OF UNIVERSITY OF COLORADO. ANY REPRODUCTION IN
PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS
PROHIBITED.

1

F

6

5

4

3

2
REV.
A

A

1

DESCRIPTION
INIITAL DRAWING

DATE
111/20/2024

A

A
1.50
.30

B

B

.78

C

C

A

SECTION A-A

NOTE: 8 LARGE FINS AND 8 SMALL FINS.
DIMENSIONS FOR EACH FIN ARE TYPICAL FOR ALL SIMILAR FINS

.50

1.10

D

.41
.70

TOLERANCES
UNLESS
NOTED:
UNITS: INCHES

.10

5

SOLIDWORKS Educational Product. For Instructional Use Only.

DESCRIPTION

FINISH

PN

3

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

IMPELLER
W01

MATTE

4

UNIVERSITY OF COLORADO

0.1
0.02
0.005

MATERIAL

POLYPROPYLENE

4.00

6

X.X
X.XX
X.XXX
X.X

REV

SHEET

1 of 1

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

6

5

4

3

2
REV.
A

1

DESCRIPTION
INITIAL DRAWING

DATE
11/20/2024

2X .025±.002

A

A

3X .14±.01

2X .060±.005

B

B

.085±.005
.100±.005

C

C
.105±.005

.010±.002
.020

Inches
TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

MATERIAL

DESCRIPTION

FINISH

PN

W04

MATTE

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

BLOWER CLIP

POLYPROPYLENE

6

UNIVERSITY OF COLORADO

0.1
0.02
0.005

REV

SHEET

1 of 1

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

D

6

5

4

3

2
REV.
A

1

DESCRIPTION
INITIAL DRAWING

DATE
11/17/2024

.15±.01

A

A

1.85
1.44
3.56
6.45

B

B

45°

NOTE: EDGE RADIUS IS 0.10 INCHES UNLESS OTHERWISE SPECIFIED

C

8.2

C

6.21±.01
4.59±.01
2X .15±.01
2X 1.50
.99

.85

.89

.15

D

TOLERANCES
UNLESS
NOTED:
UNITS: INCHES

X.X
X.XX
X.XXX
X.X

MATERIAL

DESCRIPTION

FINISH

PN

W05

MATTE

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

SEPARATOR COLUMN

POLYETHYLENE

6

UNIVERSITY OF COLORADO

0.1
0.02
0.005

REV

SHEET

1 of 4

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

6

5

4

3

2

1

2X .19
2X .13

A

135°

A

NOTE: DIMENSIONS FOR SCREEN HOLDERS SHOWN IN DETAIL A ARE
TYP FOR BOTH HOLDERS

1.86
.27

B

B
.48

135°

.29

1.59

.07

1.05

DETAIL A
SCALE 1 : 1

A

163.86°

C

C
DETAIL B
SCALE 1 : 1

B
3.64

D

TOLERANCES
UNLESS
NOTED:

3.14

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

MATERIAL

DESCRIPTION

FINISH

PN

W05

MATTE

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

SEPARATOR COLUMN

POLYETHYLENE

6

UNIVERSITY OF COLORADO

0.1
0.02
0.005

REV

SHEET

2 of 4

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

6

5

4

3

2

1

2X .33
146°

A

92°

1.81
1.51

A

92°
2X .89±.03

2X .53

.03

D
146°

1.82

DETAIL C
SCALE 2 : 1

2.13

2X .33
.06

B
92°
1.63 1.31

B

C

DETAIL D
SCALE 2 : 1
1.01 1.32

92°

C

C

.201
2X .32

1.92

1.82

1.61

1.51
TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

2X 1.20±.01

5

SOLIDWORKS Educational Product. For Instructional Use Only.

2X 5.20±.01

4

DESCRIPTION

FINISH

PN

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

SEPARATOR COLUMN
W05

MATTE

3

UNIVERSITY OF COLORADO

0.1
0.02
0.005

MATERIAL

POLYETHYLENE

2X .40

6

X.X
X.XX
X.XXX
X.X

REV

SHEET

3 of 4

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

6

5

4

3

2

1

1.20

H

A

A

.20

.80
SECTION G-G

1.70

.25

1.70
DETAIL H
SCALE 1 : 1

B

G

B

G

+.00
4.98 - .02

4.20

C

E

.19
92°

92°

92°

144°
.03

.08

1.14

TOLERANCES
UNLESS
NOTED:

1.04

SECTION E-E

UNITS: INCHES

2X .33
DETAIL F
SCALE 2 : 1

6

5

SOLIDWORKS Educational Product. For Instructional Use Only.

NOTE: DIMENSIONS FOR SNAP FIT GROOVE SHOWN
IN DETAIL F ARE TYP FOR BOTH SIDES OF COLUMN

92°
F

D

C

E

4

3

X.X
X.XX
X.XXX
X.X

UNIVERSITY OF COLORADO

0.1
0.02
0.005

MATERIAL

DESCRIPTION

FINISH

PN

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

SEPARATOR COLUMN

POLYETHYLENE

W05

MATTE

REV

SHEET

4 of 4

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

6

5

4

3

2
REV.
A

1

DESCRIPTION
INITIAL DRAWING

DATE
11/17/2024

.82
R.20

A

A
.10

1.38

R.20

.10
8.0
6.16±.01

B

B

4.34±.01

4.33±.01
5.66±.01

C

C

4X .55
4X .20

E

.10

DETAIL E
SCALE 1 : 1
TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

MATERIAL

DESCRIPTION

FINISH

PN

W06

MATTE

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

SEPARATOR COLUMN COVER

POLYETHYLENE

6

UNIVERSITY OF COLORADO

0.1
0.02
0.005

REV

SHEET

1 of 2

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

6

5

4

3

2

120°

35°

A

1

A

2X 1.68
2X 1.25
45°

.55

+.01
.43±.01 .36 - .02
99°
+.02
.08 - .00

B

4.98

B

.13±.01

2X 3.40 4.20

DETAIL C
SCALE 3 : 1

C

C
NOTE: DIMENSIONS ON SNAP FIT SHOWN IN DETAIL C ARE
TYPICAL FOR ALL SNAP FITS.
92°

C

D

.10

.10
.14

TOLERANCES
UNLESS
NOTED:

DETAIL D
SCALE 3 : 1

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

MATERIAL

DESCRIPTION

FINISH

PN

W06

MATTE

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

SEPARATOR COLUMN COVER

POLYETHYLENE

6

UNIVERSITY OF COLORADO

0.1
0.02
0.005

REV

SHEET

2 of 2

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

REV.
A

DESCRIPTION
INIITAL DRAWING

DATE
11/17/2024

5.00

8.00

8.00
7.89
.08
.92

5.38
5.12

8.00

5.38
E

R2.00

+.5°
6° - .5°

E
SECTION E-E

8.00
R3.00

8.00

Notes:
•
The thickness of all walls is 0.08 inches unless specified.
TOLERANCES
UNLESS
NOTED:
UNITS: INCHES

X.X
X.XX
X.XXX
X.X

UNIVERSITY OF COLORADO

0.1
0.01
0.005
0.5

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

MATERIAL

DESCRIPTION

FINISH

PN

COLLECTION BIN

POLYPROPYLENE

.20

N/A

PROPRIETARY AND
CONFIDENTIAL

SOLIDWORKS Educational Product. For Instructional Use Only.

W07

REV

SHEET

A

1 of 1

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

6

5

4

3

+.02
.58 - .00

A

REV.
A

+.02
.58 - .00

2X .75

1

DESCRIPTION
INIITAL DRAWING

DATE
11/19/2024

A

3X .75
3X .33

2X 1.76
2X 1.16

1.04

2X 2.63

2X 4.25

B

2

3.75

4.00±.01

1.00
SCALE: 1:4

4.04

2X 4.75

B

7.04
1.00±.01

1.00

1.70
1.00

C

NOTES:
1. ALL CIRCULAR HOLE DIAMETERS ARE Ø 0.20 INCHES
UNLESS OTHERWISE SPECIFIED
2. STEEL THICKNESS IS 0.08 INCHES
3. DIMENSIONS FOR THREE RECTANGULAR HOLES ON RIGHT
AND LEFT SIDES OF BASE ARE SYMMETRIC
4. BEND RADIUS IS NOT CRITICAL, BUT MUST BE LESS THAN 0.25

.50±.01
+.00
.83 - .02

1.95

30°

TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

.42

6

SOLIDWORKS Educational Product. For Instructional Use Only.

4

X.X
X.XX
X.XXX
X.X

DESCRIPTION

FINISH

PN

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

LEFT TOP OF BASE
W11

MATTE

3

UNIVERSITY OF COLORADO

0.1
0.02
0.005

MATERIAL

301 STAINLESS STEEL

.42

5

C

REV

SHEET

1 of 1

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

6

5
+.02
.58 - .00

A

4

3

2
REV.
A

+.02
.58 - .00

1

DESCRIPTION
INITIAL DRAWING

DATE
11/19/2024

A

2X .75

3X .75

9.15

2.36

3X .33

1.81
1.04

B

SCALE: 1:4

1.00

3.98±.01

3.73

B

4.04

7.04
1.70

1.00±.01

9.08

1.00

C

C
1.00

.50±.01
1.50

+.00
.75 - .02

30°

NOTES:
1. ALL CIRCULAR HOLE DIAMETERS ARE Ø 0.20 INCHES
UNLESS OTHERWISE SPECIFIED
2. STEEL THICKNESS IS 0.08 INCHES
3. DIMENSIONS FOR THREE RECTANGULAR HOLES ON RIGHT
AND LEFT SIDES OF BASE ARE SYMMETRIC
4. BEND RADIUS IS NOT CRITICAL, BUT MUST BE LESS THAN 0.25

TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

MATERIAL

DESCRIPTION

FINISH

PN

301 STAINLESS STEEL

.42

.42

6

5

SOLIDWORKS Educational Product. For Instructional Use Only.

3

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

RIGHT TOP OF BASE
W12

MATTE

4

UNIVERSITY OF COLORADO

0.1
0.02
0.005

REV

SHEET

1 of 1

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

6

5

4

3

2
REV.
A

1

DESCRIPTION
INITIAL DRAWING

DATE
11/26/2024

A

A

.08

1.80

B

B

1.60

C

C
NOTE: SHEET IS CUT TO SPECIFIED SIZE FROM STAINLESS
STEEL MESH SHEET.
MCMASTER-CARR 85385T21
- MESH OF 0.08 INCH STAINLESS STEEL WIRE
- 0.253 INCH HOLES
- 58% OPEN AREA

TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

DESCRIPTION

FINISH

PN

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

BLOWER SCREEN
W18

AS STOCK

5

UNIVERSITY OF COLORADO

MATERIAL

304 STAINLESS STEEL

6

0.1
0.02
0.005

REV

SHEET

1 of 1

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

6

5

4

3

2
REV.
A

1

DESCRIPTION
INITIAL DRAWING

DATE
12/1/2024

R.05

A

A
A

1.00

R.05

1.00

R.10

DETAIL A
SCALE 1 : 1

B

B
.50

.50

.20
.20

C

C

7.75

8.50

7.75
NOTES: LEGS ARE CUT FROM 6061 ALUMINUM EXTRUSION
MCMASTERCARR ID 8982K39

TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

MATERIAL

DESCRIPTION

FINISH

PN

W20

MATTE

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

D

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

BASE LEG

6061 ALUMINUM

6

UNIVERSITY OF COLORADO

0.1
0.02
0.005

REV

SHEET

1 of 1

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

