# MCEN 5045 Reverse Engineering Report

**Document Type:** PDF Report

---

Reverse Engineering of a KMM Portable Car Vacuum

Pablo Argandona
Vaikunth Keshav Krishnan
Randy Peterson
Eric Vasquez

MCEN 5045: Design for Manufacturability
Dan Riffell

‭ rgandona, Krishnan, Peterson,‬
A
‭Vasquez‬

‭MCEN 5045‬

‭10/16/2024‬

‭Table of Contents‬
‭ able‬‭of‬‭Figures‬‭..............................................................................................................................‬‭3‬
T
‭Table‬‭of‬‭Tables‬‭................................................................................................................................‬‭4‬
‭Executive‬‭Summary‬‭.......................................................................................................................‬‭5‬
‭Product‬‭Description‬‭.......................................................................................................................‬‭6‬
‭Black‬‭and‬‭Glass‬‭Box‬‭Diagrams‬‭.....................................................................................................‬‭7‬
‭Gantt‬‭Chart‬‭....................................................................................................................................‬‭8‬
‭Fishbone‬‭Diagram‬‭..........................................................................................................................‬‭9‬
‭Patent‬‭Search‬‭................................................................................................................................‬‭10‬
‭Design‬‭Documentation‬‭.................................................................................................................‬‭12‬
‭Full‬‭Assembly‬‭View‬‭...................................................................................................................‬‭17‬

‭Design‬‭Changes‬‭............................................................................................................................‬‭17‬
‭Bill‬‭of‬‭Materials‬‭for‬‭Redesign‬‭...................................................................................................................‬‭23‬

‭ FA‬‭Analysis‬‭&‬‭Comparison‬‭......................................................................................................‬‭23‬
D
‭Materials‬‭Analysis‬‭........................................................................................................................‬‭27‬
‭Manufacturing‬‭Analysis‬‭..............................................................................................................‬‭34‬
‭Economic‬‭Analysis‬‭.......................................................................................................................‬‭36‬
‭Professional,‬‭Ethical,‬‭and‬‭Safety‬‭Issues‬‭.....................................................................................‬‭44‬
‭Conclusions‬‭...................................................................................................................................‬‭46‬
‭Appendix‬‭.......................................................................................................................................‬‭47‬

‭2‬

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Table of Figures
Figure 1: KMM Handheld Vacuum Cleaner with Attachments…………………………….6
Figure 2: Black Box Diagram………………………………………………………………7
Figure 3: Glass Box Diagram……………………………………………………………….8
Figure 4: Gantt Chart………………………………………………………………………..8
Figure 5: Fishbone Diagram………………………………………………………………...10
Figure 6: Sketch from US Patent #01059569B2……………………………………………11
Figure 7: Sketch from US Patent #008549704B2…………………………………………..12
Figure 8: Assembly CAD Models ………………………………………………………….17
Figure 9: Charging Base Redesign comparison…………………………………………….18
Figure 10: Original Blower Screen Subassembly…………………………………………..19
Figure 11: Blower Screen Redesign ………………………………………………………..19
Figure 12: Modification Right Side Housing……………………………………………….20
Figure 13: Modification Housing Left Side ………………………………………………21
Figure 14: Original Collection Bin ……………………………………………………….22
Figure 15: Modified Collection Bin ………………………………………………………22
Figure 16: Examples of Clear Electronics ………………………………………………..28
Figure 17: Left and Right Side Housings ………………………………………………..29
Figure 18: Ashby Chart for Fracture Toughness and Elastic Modulus …………………..30
Figure 19: Approximate material cost comparison between material types ……………..30
Figure 20: Collection Bin …………………………………………………………………31
Figure 21: CAD model of Motor Cap …………………………………………………….32
Figure 22: Ashby Chart for Yield Strength and Elastic Modulus …………………………33
Figure 23: Candidate manufacturing processes based on batch size ……………………..35
Figure 24: KMM Vacuum Battery Warning ……………………….……………………..45
Figure 25: Part Complexity classification ………………………………………………..47
Figure 26: Ability of Manufacturing Processes to produce shapes ………………………47

3

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Table of Tables
Table 1: Product Decomposition………………………………………………….………….13
Table 2: Redesign Bill of Materials………………………………………………….……….23
Table 3: Initial DFA Analysis…………………………………………………….…………..24
Table 4: Final DFA Analysis………………………………………………….………………25
Table 5: Weighted property index for Vacuum Housing………………….…………………..31
Table 6: Weighted property index for Collection Bin…………………….…………………..32
Table 7: Weighted Property index for Motor Caps……………………….…………………..33
Table 8: Unit Cost Analysis……………………………………………….………………….38
Table 9: OME Analysis………………………………………………………………………40
Table 10: Stock Parts…………………………………………………………………………42
Table 11: Break-Even Analysis………………………………………………………………42
Table 12: Summary of Cost Estimates……………………………………………………….44

4

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Executive Summary
This comprehensive report examines the reverse engineering of a handheld wireless vacuum, a
common household device aimed at providing convenient and efficient cleaning solutions. The
analysis begins with an exploration of the economic driving factors influencing the product's
design and manufacturing decisions. By understanding these financial motivations and
limitations, we gain insight into the cost constraints and market demands that shape the vacuum's
development.
Material selection is scrutinized to assess the strengths and weaknesses of the components used
in the vacuum. This section highlights how the choice of materials impacts the device's
performance, durability, and overall user experience. Through this analysis, we identify
opportunities for improvement in material efficiency and cost-effectiveness.
A thorough investigation into the design flaws of the handheld vacuum reveals critical areas
where the current model falls short. These flaws are documented with detailed observations,
providing a foundation for potential enhancements. The discussion covers mechanical, electrical,
and ergonomic aspects, ensuring a holistic evaluation of the device.
The report culminates in a redesign section that focuses on producing a vacuum with enhanced
suction power, improved ease of manufacturing, and better material selection. Using data from
our material analysis, we propose alternative materials that offer superior performance and
durability. The redesign also considers manufacturing processes that can streamline production
and reduce costs, thereby making the new model more economically viable.
In addition, the report outlines the steps involved in defining the system plant and selecting an
appropriate controller for the vacuum. This phase is crucial for ensuring that the new design
operates efficiently and meets performance standards. Our team has scheduled the first test of the
redesigned system in two weeks, with plans for iterative refinement based on test results.

5

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Product Description
The KMM Handheld Vacuum Cleaner is a cordless, rechargeable battery operated vacuum
cleaner that can also act as a blower. Users activate the vacuum by pressing the power button.
This activates the internal motor, and air is pulled in the nozzle on the front of the vacuum, and
simultaneously blown out of a nozzle with a screen at the back of the vacuum. There is no speed
or direction control.
The vacuum is shown with its attachments and charging cable in Figure 1. The intake nozzle of
the vacuum is combined with the collection bin. A filter inside the collection bin prevents dirt
and debris from being pulled inside of the vacuum. The collection bin can be easily removed and
emptied by twisting it to unlock and pulling it off the front. The attachments simply slide over
the nozzle at the front of the collection bin, or inside of the blower nozzle at the back of the
device. The internal battery can be recharged by connecting an included USB-C cable to the
charging port at the bottom of the handle.
The overall dimensions of the vacuum (with the collection bin attached) are 8.28 x 6.69 x 2.36
inches, with an overall weight of 0.73 pounds. Similar products generally cost somewhere
between $30 and $100. The KMM Vacuum is listed at $43.99 on Amazon, near to the low end of
the handheld cordless vacuum price range.

Figure 1: KMM Handheld Vacuum Cleaner with Attachments
This product was chosen for reverse engineering because of its simple construction and customer
reviews that consistently describe a few of the same issues, such as poor suction, short product

6

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

life, dirt and debris falling out of the collection bin, and a few other issues. We also set the goal
of reducing the number of parts needed and to improve the assembly process.

Black and Glass Box Diagrams
As part of the analysis into the core functions of the vacuum, we generated a Black Box and
Glass Box Diagram to break down the inputs and outputs of the overall device and some of its
internal components. The vacuum’s main inputs are electricity from a USB-C cable, inputs to a
push button, and air flowing into the nozzle of the vacuum. After the vacuum is activated, it
outputs air from the blower opening at the back of the vacuum, vibrations, sound, a small amount
of heat, and light from an LED near the power button. A black box diagram that shows the inputs
and outputs is shown in Figure 2.

Figure 2: Black Box Diagram of KMM Vacuum Cleaner
After analyzing the device from the outside, the vacuum was opened to determine which internal
components used each of the inputs and where the outputs came from. Inside of the vacuum,
there is a battery, DC electric motor, two LEDs (one near the power button; one near the
charging port), a vacuum impeller, and a latching button switch. When the USB-C cable is
plugged into the charging port, the LED closest to it flashes to indicate that it is charging the
battery. After the switch is activated, the battery provides power to the DC motor and the LED
near the power button. The motor drives the vacuum impeller, which pulls air in through the
intake nozzle and pushes it out of the blower screen at the back of the device. A summary of the
inputs and outputs for each of the main internal components were recorded in the Glass Box
Diagram shown in Figure 3.

7

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Figure 3: Glass Box Diagram of KMM Vacuum Cleaner

Gantt Chart

Figure 4: Gantt Chart
The successful completion of any team project hinges on effective planning and regular progress
reviews to ensure tasks are completed satisfactorily and on time. Given the duration and the
complexity of the reverse engineering process, our team initially devised a comprehensive
execution plan, as outlined in Figure 4. This plan was visualized through a Gantt chart, which
illustrated the timeline and the sequential tasks necessary for project completion.
After identifying all required tasks, our group allocated specific responsibilities to each team
member, ensuring accountability and clarity. The Gantt chart not only displayed the start and end
dates for each task but also helped us maintain our schedule and quickly identify any delays. It
included scheduled team meetings, typically initiated at the commencement of significant tasks,

8

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

to discuss required actions and review completed work. These meetings facilitated ongoing
progress, ensuring tasks met both quality and timeliness standards.
By adhering to the Gantt chart devised at the project's onset, we aimed to fulfill all necessary
steps for the successful reverse engineering of the vacuum. The structured timeline provided by
the Gantt chart was instrumental in keeping the team focused and on track, fostering continuous
progress towards our project goals.

Fishbone Diagram
The Fishbone Diagram shown in Figure 5 was created to analyze the Vacuum based on how each
of its major components fit into assemblies. The Left Side Housing was chosen as the base part
because most of the parts can be installed from the top down into this part. The main
subassembly inside the vacuum consists of the circuitry and control components that drive the
impeller. Most of the remaining components make up the housing assembly, which includes the
Blower Screen Subassembly. The three components in the Blower Screen Subassembly can be
put together separately before being installed in the base part, so they were assumed to be a
single subassembly.
The Air Flow Components are parts that influence the movement of air within the vacuum based
on their geometry. The collection bin and blower screen are included in other assemblies, but are
also included here as they also make up the main inlet and outlet for the vacuum and blower. The
impeller is the main component that influences airflow, excluding the motor that drives it. The
Air filter prevents dust and debris from entering the main body of the vacuum (and potentially
being blown out of the vacuum), but it also impedes air flow. These components were separated
from the others as they uniquely influence the vacuum’s capability compared to other parts.

9

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Figure 5: Fishbone Diagram of KMM Vacuum Cleaner

Patent Search
In order to better understand the design criteria for the original design as well as draw inspiration
to base our redesigns of the KMM Vacuum Cleaner a patent search of similar products was
conducted.
The patent US010433687B2 describes a product similar to the KMM Vacuum in the design idea
of a pistol grip for a handheld vacuum instead of the traditional handheld vacuum design which
more often than not has a handle at the top and is held as you would a leaf blower. This design
feature gives the consumer a more natural feel when using the vacuum and the ability to reach
tighter places. A major difference between the KMM vacuum and the one described in this
patent is how both approach dust collection. The KMM vacuum uses a detachable bin that is
mounted onto the vacuum housing, the patent describes a cyclonic separating unit that is part of
the housing and uses a snap-fit latch to be cleaned out. This feature could serve as inspiration for
a part reduction, however its complexity is a deterrent.

10

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Figure 6: Sketch from US Patent #01059569B2
Another patent that served as a benchmark for the KMM vacuum was US008549704B2. This
patent depicts a vacuum with an external bin for dust collection that uses a HEPA filter as a
primary filter. The major difference is the addition of a filter cleaning device that is supposed to
dislodge particles attached to the filter while the vacuum is being used, providing the user with
the opportunity of using the vacuum for longer periods without having to remove the dust bin to
clean out the filter. A drawing of the described filter cleaning part is shown below.

11

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Figure 7: Sketch from US Patent #008549704B2

Design Documentation
After settling on reverse engineering the KMM car vacuum, one of the first steps we took was to
take the vacuum apart, to examine the number of parts and potential for redesign. The vacuum
had a total of 26 with 20 of them being unique parts. The team drafted a fishbone diagram seen
above in Figure 5 with 3 assemblies and 1 minor subassembly.
The disassembly process showed the team the fallacies that the original design had in terms of
design for manufacturability and assembly. The housing was held together by 6 screws that were
difficult to set upon reassembly. The design of the housing's inner walls was very complex with
groves that held the components in place but also groves that held no real purpose. The button
had a spring and a cover that would shoot out when the top side of the housing was removed
meaning they would have to be held down during assembly. The decomposition offered a lot of
ideas for part reduction later discussed in the DFA analysis. The full part by part product
decomposition is detailed below in Table 1.
12

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Table 1: Product Decomposition

Product Decomposition
Design Organization: MCEN 5045
Product Decomposed: KMM Car Vacuum

Date: 10/14/2024

Description This is a portable battery-powered car vacuum.

How it works: The vacuum functions by pressing a button that activates a small electric
motor that drives an impeller that generates a suction force that is meant to pick up
small debris and dust. The dust is collected in a removable collection bin.
Parts:
Part #

Part Name

# Req’d

Material

RP001

Blower Screen
Locking Clip

1

ABS

RP002

Power Button
Cover

1

ABS

Injection
Molding

RP003

Dust Collection
Bin

1

PC
(Polycarbonate)

Injection
Molding

13

Mfg
Process
Injection
Molding

Image

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

RP004

Base Charging
and LED Mount

1

ABS

Injection
Molding

RP005

Blower Screen

1

ABS

Injection
Molding

RP006

O-Ring Clip

1

ABS

Injection
Molding

RP008

Impeller

1

ABS

Injection
Molding

RP009

Housing (Right
Half)

1

ABS

Injection
Molding

RP010

Air Filter

1

Various
Materials

Off The
Shelf

RP011

Housing (Left
Part)

1

ABS

Injection
Molding

RP012

Rubber Motor
Cap

2

EVA

Injection
Molding

RP014

Blower Screen
Retaining Ring

1

ABS

Injection
Molding

RP015

Power Button

1

Various
Materials

Off The
Shelf

14

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

RP017

Power Button
Spring

1

Spring Steel

Coiling

RP018

XV LiPo Battery

1

Lithium-Ion
Polymer

Off The
Shelf

RP019

Motor

1

Various
Materials

Off The
Shelf

RP020

LED Cover

1

ABS

Injection
Molding

RP021

Screws

6

Steel

Thread
Rolling

RP022

LED

1

Various
Materials

Off The
Shelf

RP023

Charging Circuit
Board

1

Various
Materials

Off the
Shelf

15

Argandona, Krishnan, Peterson,
Vasquez

Disassembly:
Step #

MCEN 5045

Procedure

Part #s
removed

1

Twist the collection bin off the housing, the air
filter is pulled off the collection bin, and the
O-ring is pulled off.

RP003, RP006,
RP010

2

The screws are unscrewed and pulled apart;
the blower screen subassembly is pulled off
the housing.

RP009, RP014,
RP005, RP001

3

The blower screen subassembly is taken apart
by unclipping the retaining ring from the
blower screen clip.

RP001, RP005,
RP014

4

Remove Electronics.

RP004, RP008,
RP015, RP018,
RP019, RP022,
RP023

5

Remove the impeller, and motor caps from the
motor. The impeller was glued to the motor
shaft had to be cut out.

RP008, RP012

6

Remove the charging port board from the
charging base.

RP004, RP023

7

Remove the power button cover, LED cover,
and spring from the housing.

RP002, RP020,
RP017

16

10/16/2024

Image

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Full Assembly View
Figure 8 shows two CAD models of the assembly. A drawing of the assembly is also included in
the appendix.

Figure 8: Assembly CAD Models

Design Changes
Power Button Part Reduction
The original design for the power button of the vacuum consisted of an analog button that was
completely inside the housing, a spring placed on top of it, and an injection molded cover with
the power symbol that the user would press to turn the vacuum on and off. As stated in the
product decomposition section, the cover and spring had to be held down when assembled. The
team's solution was to remove the cover and spring from the design altogether and modify the
housing design so that the user could press the analog button to turn the vacuum on and off.
Collection cavity resizing

LED Part Reduction
The LED and LED cover were completely removed from our redesigned vacuum due to being a
no-value-added feature. When using the vacuum the placement and size of the LED causes the
user to completely cover the light that it is emitting. A positioning change was considered,

17

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

however, it was not pursued because it would complicate the housing design and wiring
arrangement.

Charging Base Reduction
The original base cap was designed to accommodate both a charging port and an indicator LED.
To streamline the electronics and reduce the complexity of the base cap's geometry, the indicator
LED was removed. This simplification not only reduced the number of electronic components
needed but also made the design more straightforward. Furthermore, the upper surface of the
base cap was extended to incorporate a press-fit lip. This modification enhanced the overall
structural integrity by ensuring a secure fit for the housing, thus eliminating the need for
additional fasteners. The redesign aimed to achieve a more efficient, easier-to-manufacture
component without compromising functionality or reliability.

Figure 9: Original charging base (left) vs. new charging base (right)

Motor selection
The biggest complaint was the issue of low suction. This issue was tackled by identifying that
the 380/385SH DC motor is the superior alternative. This motor was chosen due to its ability to
provide 14,800 RPM, an increase of 8,300 rpm over the previous motor, significantly enhancing
the vacuum's performance. Implementing this motor requires no changes to the existing housing
as the motor only varies in its length by 0.12 inches. This change boosts the vacuum's efficiency
and performance.

18

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Blower Screen Integration
The Blower Screen was re-designed to eliminate the need for the Blower Screen Retaining Ring
and Locking Clip. and reduce the complexity of the screen itself. In the original design, the
retaining ring and the locking clip primarily exist to attach the Blower Screen to the vacuum
housing. A ring molded in the blower screen interfaces with a circular rib inside of the vacuum
housing. This ring can be expanded and fit into a groove in the housing wall, eliminating the
need for 2 extra parts while still providing an attachment point for the removable nozzles that
come with the vacuum. The nozzle attachments are slightly flexible, and are held inside of the
main cylindrical portion of the blower screen by friction. All existing attachments will still
function with the revised screen.
The original blower screen subassembly and the re-designed blower screen are shown in Figure
X and Y.

Figure 10: Original Blower Screen Subassembly

Figure 11: Blower Screen redesign

19

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Simplification of Outer Shells
Instead of using screws, our team opted for cantilever snap-fits like the one shown in Figures A
and B. This choice enhances the product's user-friendliness, as snap-fits allow for easier
assembly and disassembly compared to traditional screws. From a manufacturing perspective,
this approach also results in cost savings, increasing overall profitability.

Figure 12: Modified Right Side Housing

20

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Figure 13: Modified Housing Left Side

Increasing Length of Collection Bin
The collection bin is compact, and our team believes this helps reduce the amount of dust
buildup within the component. To improve its capacity and functionality, we decided to increase
the size of the collection bin. This change offers additional benefits, such as reducing the
frequency of emptying the bin, which enhances user convenience. The redesign aims to improve
the overall efficiency of the vacuum by increasing dust-holding capacity while minimizing any
impact on the vacuum's performance and suction power.

21

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

Figure 14: Original Collection Bin

Figure 15: Modified Collection Bin

22

10/16/2024

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Bill of Materials for Redesign
Table 2: Redesign Bill of Materials

DFA Analysis & Comparison
After having completed a product decomposition and established the design changes. A DFA
analysis was conducted on the original design and the redesigned products to help illustrate the
quantitative effects that the redesign choices had.

23

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

Table 3: Initial DFA Analysis

24

10/16/2024

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Table 4: Final DFA Analysis

DFA Complexity Factor
The original design by KMM had 26 components and those components had 103 interfaces. This
led to a design for assembly complexity factor of 51.74 not a high factor by any means but one
the team felt could be improved on. In our redesigned model the team managed to bring down
the number of parts to 14 and the number of interfaces to 43, which led to a complexity factor of
26.19 a number that surpassed our set target.

Functional Analysis
The theoretical minimum part count established by the team that is necessary to have a
functioning vacuum was 9 components. The practical number of components to have a vacuum
that is marketable and comfortable to use was 12. Comparing these numbers to the original
component count, the theoretical efficiency was 34.6% and the practical efficiency was 46.2%.
The team originally set the target to be 60% and 75% for theoretical and practical efficiency
respectively. The redesigned model was successful in both of these goals achieving 64.3% and
85.7% theoretical and practical efficiencies respectively in the functional analysis portion of the
DFA analysis.

25

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Error Proofing
Approximately 15% of the total parts like the two rubber motor caps, power button spring,
blower retaining ring, and LED cover are liable to be omitted during assembly and not be noticed
until testing and inspection. 26% of the total number of parts can be assembled the wrong way
around. After redesigns the rubber motor caps are the only unique part that can be omitted. The
motor, battery, and impeller can still be assembled the wrong way around. This brought the
error-proofing index from 1.22 to 0.44.

Handling
The small spring that loads the power button cover and the screws can be tangled and are small
enough that are prone to be dropped when being handled. The O-ring, retaining ring, and LED
can be considered fragile components. Totaling 7 components out of the 9 theoretical minimum
parts equaling a 0.78 handling index. Since the redesigns eliminate the spring, screws, and
consolidate the retaining ring into the blower screen it brings down the handling index to 0.11.

Insertion
The original design only had 3 insertion and alignment issues for assembly. The screws are not
self-locating and are inserted into small indents on the housing making it difficult to insert them.
The spring is the cause of the majority of the insertion issues it has to be held down and is
resistant to insertion. The redesigned model eliminates both of these components bringing the
insertion index down from 0.33 to 0.

Secondary Operations
The original design requires the housing to be screwed together. To remove this secondary
operation, the redesign holds the top of the housing with the O-ring and the bottom charging base
was changed to a snap-fit lid to hold the bottom of the housing together. All the electronic
components are soldered together; the elimination of the LED is the only reduction in electronic
components made in the redesign. Some components are spray-painted for the sake of aesthetics
the team decided to keep this process; however, some of the parts were eliminated or
consolidated onto other parts like the power button cover, and blower screen retaining ring. The
secondary operations index was reduced from 1.22 to 0.67.

26

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Materials Analysis
Many of the components in the KMM Vacuum are made of polymer materials. There are 4 main
materials used. The Collection Bin is made of a clear polymer with a smoky-gray color, and the
electric motor that drives the impeller is supported by 2 soft rubber-like rings that reduce
vibrations. The main housing halves and blower screen are both made out of an opaque blue
plastic with a matte finish. The remaining plastic components are made of opaque black plastics
with a slightly more lustrous finish. Any exterior surfaces of any black plastic components were
painted with a metallic bronze color for aesthetic purposes. The electronic components,
fasteners, and Power Button Spring are not included in this material selection analysis, as they
are likely either off-the-shelf components or custom manufactured by a subcontractor.

Environment and Loading Assumptions
To begin, a few assumptions were made about the vacuum and the environment it operates in.
Since the vacuum is a small, handheld device that is not intended to impart force onto other
objects, it is not expected to experience significant loads. However, it may be dropped on hard
surfaces from distances of up to 6 feet, so the materials selected should be resistant to fracture.
Many plastics and polymers would fit this criteria.
The vacuum is battery operated and marketed as a “car vacuum”, so it is likely that users will
leave the vacuum in their car for cleaning small messes. As such, the vacuum could experience
temperatures up to 140℉ as the car heats under the sun. The melting point of most plastics are
well beyond this threshold, but the material used should stay rigid up to 150℉ to prevent any
issues from arising, especially over time.
The average lifecycle of a vacuum cleaner is 5-10 years, so it is anticipated that the vacuum will
not experience more than 20,000 activations throughout its lifecycle. 20,000 uses equates to over
5 uses per day for 10 years; a duty cycle which seems unlikely. Generally speaking, the vacuum
is not expected to experience any drastic loads or conditions, so the primary driver of material
selection for all parts will be the material cost.

Material Selections
When it is feasible to do so, standardizing materials across an assembly can lead to great
benefits. Simplified supply chains, material inspection procedures, and easier material storage
can all be realized by selecting consistent materials. For this reason, one of the goals in material
selection is to use as few different materials as possible. The original designers of the KMM
vacuum used 3 different types of plastic, one of which was transparent. The only transparent part
27

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

was the dust collection bin, and it was likely made this way so that the user can see how full the
bin is. This is a good design choice, so this part should be made out of a clear material.
The distinction between the other two types of plastic is less obvious. There is no apparent
difference in the loads or conditions experienced by the two different types of parts, so it was
decided that a simplified design should only use one type of plastic. The Left and Right Vacuum
housing are the most exposed to the elements, most likely to experience loads or impacts, and
largest out of all components in the assembly, so it was assumed that any material suitable for
these components would also be suitable for the remaining parts.
The other plastic components could theoretically be made out of the same clear material that the
collection bin is made of. Clear electronics like those shown in Figure 13 were first used in
prisons in the 1970s and 1980s to prevent contraband from being smuggled into prisons, but also
became common in the public market in the 1990s and early 2000s. However, as computers and
other devices saw more widespread adoption, design trends changed and these styles of devices
fell out of favor with consumers. For this reason, the remaining components should not be made
of clear material to prevent the vacuum from appearing ”old” or “outdated”.

Figure 16: Examples of clear electronics

Finally, the rings that support the motor are made from a black, flexible material. This part
reduces vibrations felt by the user and prevents the plastic columns that support the motor from
slowly wearing down the columns. This material should be flexible enough that it conforms to

28

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

the shape of the motor and support pillars while under a slight amount of tension to keep it
wrapped around the motor. The material should also have a moderate hardness. It should be rigid
enough that it effectively damps vibrations, but also soft enough to deform to the parts it
interfaces with.

Left and Right Side Housings
The main function of these components is to contain or provide a mounting point for the rest of
the components. They are the largest parts in the entire assembly, and will likely experience the
largest loads of the entire assembly. Both housing halves are shown in Figure 14.

Figure 17: Left and Right Side Housings (PN:RP011 (left), RP009 (right))
Since the housing is also the part that is most likely to crack if dropped, an Ashby chart that plots
Fracture toughness and Elastic Modulus was used to identify candidate materials. Hardness was
chosen for analysis because it can influence how resistant a material is to scratching. Fewer
scratches means there will be fewer opportunities for cracks to propagate. This chart is shown in
Figure 15. The handle can be approximated as a beam under bending limited by displacement, so
a material index of M = K2/E was chosen. As a result, ABS, PP, PTFE, and PC were identified as
candidate materials. A weighted material index was then used to down-select from these
materials.

29

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Figure 18: Ashby Chart for Fracture Toughness and Elastic Modulus

Figure 19: Approximate material cost comparison between material types
We analyzed the Elastic Modulus, Shore D hardness, Fracture Toughness, and cost of each
material. The cost was estimated using the relative comparison chart shown in Figure 16, and the
material properties were gathered from various sources; primarily MatWeb. The results of this
weighted analysis are shown in Table 5. The properties were weighted as follows: Elastic
modulus, 10%; Hardness, 10%; Cost, 50%, Fracture Toughness, 20%. PP failed the initial
30

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

go/no-go check because it begins to soften at about 150℉, and may fail early if left in a hot
environment. ABS ended up with the highest property index, and was selected as the best
material for the vacuum. The material cost is low and the properties are suitable for the
application.
Table 5: Weighted property index for Vacuum Housing

Collection Bin
The collection bin (shown in Figure 17) is the only part of the entire assembly made of a clear
substance. This allows users to see how full the collection bin is, and if it is properly removing
debris. It interfaces with both of the housings and is held on by two small locking lugs. The
Collection Bin is also an exterior part and is subject to the same environment as the housing, and
must be resistant to cracking or shattering when dropped. For this reason, the same Ashby Chart
and material index was used to identify materials for the Collection bin.

Figure 20: Collection bin (PN: RP003)
PMMA, ABS, PTFE and PC were identified as candidate materials. All metals were excluded
automatically because the part needs to be clear. The same properties assessed for the vacuum
housing were gathered for these 4 materials and assessed at the same weights in another
weighted property, and the results are shown in Table 5. While ABS is included in both tables,
31

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

the properties are different when applied to the collection bin. This is because ABS is opaque by
default, but can be made transparent by adding Methyl Methacrylate (MMA) to the ABS as it is
being processed. Doing so changes the properties of the material, increases cost, and
manufacturing complexity.
Table 6: Weighted property index for Collection Bin

Based on the results in Table 6, PC is the best material for the Collection bin, followed by
PMMA.

Motor Caps
A CAD model of the motor cap is shown in Figure 18. There are 2 motor caps used in the
assembly, one at the front and back of the motor. They wrap around the diameter of the motor
and reduce vibrations to the rest of the assembly. The caps were modeled as a spring based on
how they interact with the motor and support pillars, so a material index of σf2/Eρ was selected
and plotted on the Ashby chart shown in Figure 19.

Figure 21: CAD model of Motor Cap

32

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Figure 22: Ashby Chart for Yield Strength and Elastic Modulus
Figure FFF identifies some EVA, Silicone Elastomers, and cork as candidates. The Elastic
Modulus, Shore D hardness, and cost per pound were measured and assessed in a weighted
property index shown in Table 7 The elastic modulus was weighted at 10%, the Shore hardness
at 20%, and the cost at 70%. The weighted property index identifies EVA as the superior material
of those considered.
Table 7: Weighted Property index for Motor Caps

In summary, the results of the material selection analysis show that ABS should be chosen for all
opaque plastic parts, PC should be used for the collection bin, and EVA should be used for the
motor caps.

33

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Manufacturing Analysis
Most of the unique components of the KMM vacuum are made of some form of plastic or
polymer. Mold lines can be found on almost all of the original parts, meaning they were most
likely injection molded. However, manufacturing analysis will still be completed to ensure that
the most efficient process is selected. Our manufacturing analysis will be limited to the Right and
Left side Housings (part number RP011 (left), and RP009 (right)). These are the largest and most
complex parts in the entire assembly, and their manufacturing cost will likely drive the total
manufacturing cost the most.

Manufacturing Assumptions
Data Available from Amazon indicated that the KMM Car Vacuum was selling approximately
10,000 units per month worldwide. Assuming that this vacuum is produced and sold for
approximately 5 years before being replaced by an improved model, the total production run can
be estimated at 600,000 units. The sale price of each vacuum is around $45. The two halves need
to be highly standardized, and any two halves from a batch need to be able to fit together. These
attributes indicate that a high-volume repetitive manufacturing operation would be ideal.
ABS was chosen as the material for these parts. Not only does it meet the required properties at a
low cost, but ABS is also a commonly available, easy to manufacture material. There should be
no difficulty in finding alternate sources of supply if needed.

Manufacturing Process Selection
With assumptions in place, candidate manufacturing processes can be identified. Figure UUU
plots a few different manufacturing processes with their economical batch sizes. Based on the
batch size alone, Extrusion, Blow Molding, and Injection molding stand out as candidates for
manufacturing polymer parts. However, there are a few other polymer processing techniques that
should be considered, like vacuum casting and compression molding. Vacuum casting is
generally used for small production volumes, or to rapidly produce parts that will later be
injection molded. Based on the expected production volume, this process can be eliminated.
Manufacturing processes are also limited by the types of geometry they can produce. Figure
ABC and ABC1 in the appendix show which manufacturing processes can handle certain
geometries. The alignment ribs, grooves, and screw alignment pillars make it so the housings are
best described as an S4 part. Extrusion is not viable because the housings do not have a uniform
cross section. Blow molding might work for the exterior surfaces, but would likely not work for
the internal ribs. Injection and compression molding could be used to make the required shape.
34

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Figure 23: Candidate manufacturing processes based on batch size
Fundamentally, injection and compression molding are similar processes. In both cases, liquid
plastic is forced into a negative mold of the intended part. The methods by which the plastic is
forced are different. Compression molding uses high pressure to push heated material, while
injection molding uses a long screw to compress and inject liquid plastic. The high pressure
involved with compression molding could present a safety concern, and may also lead to
deformation of small features. Injection molding is also a very low-waste process. This results in
less material used, and the used material can be re-used in the molding process, resulting in less
waste lost to the environment. Compression molding leads to more waste as more overflow is
needed to completely fill a mold. This material can be recycled, but risks being contaminated and
thrown away. To reduce material cost and mitigate potential environmental impacts, Injection
molding should be used to manufacture the left and right side housings.
The batch size for most of the plastic parts in the assembly is expected to be the same size as the
batch for the housings. For process and material handling standardization purposes, injection
molding should be selected for all plastic parts in the assembly.

35

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Economic Analysis
Understanding the design complexity, manufacturing process, and weight helps in obtaining an
accurate cost estimate. A detailed cost analysis must be conducted for each part, with the depth
of the analysis depending on the shape, design complexity, and size of the product.

Injection Molding
Most components in our part are injection molded. The cost of injection molding depends mostly
on the mass of the product and complexity of Design. A steel mold is used for manufacturing.
Due to the complexity of the process the price of each part is reduced if it is manufactured on a
large scale.
The following equations and assumptions were used for obtaining Unit Cost:
A. Material Cost:

B. Labour Cost:

Labour Cost ($/lb)∶ $25 /Hour
Production Run (Units/hr)∶ The production rate depends on the complexity and size of the
product. For a more complex and large product like RP011, the production rate is around 30
parts/ hour and for RP003, which is considerably less complex, the rate is 50 parts/hour.
C. Tooling Cost:

36

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Cost of Tooling($): Tooling cost depends on the complexity and Production rate. Based on
these factors the tooling costs range between 10,000 to 60,000. For RP003, the cost is
estimated to be 20,000 based on the complexity, Production rate and size of the product. For
RP011 it is estimated to be around 50,000 based on the same factors.
Life of Tooling (Cost/lb)∶A steel mold usually lasts for 500,000 units.
Production Run (No. of Parts)∶ Using the market estimate from Amazon around 10,000
units are bought a year we assumed a production run of 250,000 units.
D. Equipment Cost:

Capital Cost ($): An Injection molding machine for a production run of this size costs
around $100,000.
Capital Write-off Time: Assuming 5 years, 40 hours per week, 3 shifts per day, and 50
weeks per year.
Load Fraction: We assume there is one operator per machine.
Load Sharing Factor: We assume one machine per part.
E. Overhead Cost (COH):

37

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Overhead Hourly Rate∶ $50 / Hour
F. Total Unit Cost :
The Total Unit Cost ( CU) is the sum of all these costs :

A comprehensive unit cost analysis was conducted for both the original and redesigned
equipment. The table below provides detailed information used in the cost estimation process.
Grey-shaded cells in the table indicate the unit cost estimates that were calculated using the
equations mentioned earlier.
Table 8: Unit Cost Analysis

38

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

Redesign:

39

10/16/2024

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Order of Magnitude(OME) Estimates:
This method was employed to roughly guess the price of each component using the 1:3:9 rule.
The Material Cost, Manufacturing Cost, and Selling Price were calculated based on the Cost of
Material (cost/lb), Mass of Material (m), and Fraction of Material lost in scrap using the
following equations:
Material Cost ($)=Cost of Material (CM )(cost/lb) + Labour Cost (CL) ($/hr)
Manufacturing Cost ($) = 3 ×Material Cost($)
Selling Price ($) =9 ×Material Cost($)
Table 9: OME Analysis

40

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Redesign:

Stock Parts
This product consists of 6 stock parts, which are common components such as springs, batteries,
screws, etc. These parts can be procured from manufacturers that produce them in large
quantities. Since these materials are available in standardized sizes and specifications, producing
them in-house would incur excess costs, making purchasing the more cost-effective option.

41

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Table 10: Stock Parts

Resdesign:

Break-Even Product:
The analysis was carried out to determine the price at which each component should be sold in
order to cover the cost of Manufacturing.

Table 11: Break-Even Analysis

42

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

Redesign:

43

10/16/2024

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

A table summarizing the Costs incurred for the Original and Redesigned Product is given below.
Table 12: Summary of Cost Estimates

The product's listed price on Amazon is $43.99, so the production cost should be lower than that.
Our analysis shows that the break-even price for the product is $23.20. This implies that the
company is achieving a profit, assuming these materials were used.
The redesigns made the product more compact and did not significantly reduce the overall cost.
The power button cover (with a unit cost of $0.772), the power button spring (costing $0.94), and
the screws (costing $0.48) were removed. The Blower Screen Locking Clip and Retaining Ring
were combined resulting in the entity Blower Screen.

Professional, Ethical, and Safety Issues
Safety Concerns with Initial Design
The main safety concern that exists with the KMM Vacuum is any harmful emissions or fires that
could result from improper handling of the battery. One of the pictures included on the vacuum’s
Amazon page includes a caption that states the device should not be charged for 10 minutes after
use to allow the battery to cool. This warning is shown in Figure 24. Ideally, the circuitry would
be designed such that this is not an issue. Not only is this an unnecessary issue to have in the first
place, notifying the user of it in a picture on a website or a line in the user manual is not
sufficient. A warning should be molded in the plastic next to the charging port to ensure users are
aware of this constraint.

44

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

This Vacuum is also specifically marketed as a “Car Vacuum Cleaner”, and there is a high
probability that some users will simply keep the vacuum in their car. On hot, sunny days, the
inside temperature of a car can easily pass 100°F in less than half an hour. While LiPo batteries
have an operating temperature range of about 0-140°F, the combination of a hot car and heating
from use may present an issue for some users.

Figure 24: KMM Vacuum Battery Warning

Ethical Concerns
The primary ethical concern with the KMM Vacuum is more so a concern with KMM as a
company. Very little visibility is provided into the company. A country of origin is difficult to
locate, but the country of origin for many products listed on the company website is China. The
address listed on the company’s website is 221B, Baker Street, Marylebone, London NW1 6XE,
United Kingdom. 221B Baker Street is the fictional address of Sherlock Holmes, and the address
listed is the location of the Sherlock Holmes Museum in London. The phone number provided is
also not reachable. Even the meaning of the letters “KMM” is difficult to determine. Given the
lack of available information and visibility into the company’s supply chain, manufacturing
processes, and the low prices of the 110 different vacuum cleaners listed for sale on the company
website, it seems likely that KMM exploits the low labor costs and lack of regulations in China
to sell products at the lowest possible cost. KMM is also likely not the manufacturer or designer
of these products, but rather a distributor or reseller. The overall lack of transparency exhibited
by KMM presents a red flag to consumers and potential collaborators alike.

45

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

10/16/2024

Conclusions
This reverse engineering project provides an extensive examination of a handheld vacuum,
beginning with a detailed analysis of its design purpose and user intent. The project then
advances to the deconstruction phase, where each component of the vacuum was meticulously
modeled and evaluated. These parts underwent rigorous assessments focusing on several critical
aspects, including manufacturability, material selection, economic feasibility, and assembly
efficiency.
Through this deconstruction, a thorough understanding of the product's design and functionality
was achieved. Each part's design and material choices were scrutinized to determine their impact
on overall performance and production costs. The insights gained from these assessments were
pivotal in identifying areas for improvement.
Following the comprehensive analysis, the project transitioned into the redesign phase,
addressing significant customer concerns. These concerns were primarily centered around
enhancing the vacuum’s collection bin capacity and improving suction strength. The redesign
aimed to meet these demands while also simplifying the manufacturing process. This was
accomplished by reducing the number of components and optimizing the geometry to facilitate
easier and more cost-effective production. Additionally, the redesigned vacuum incorporated
improved materials, further enhancing its durability and performance.
Overall, the project not only succeeded in refining the handheld vacuum's design to better meet
user needs but also achieved a more efficient and economical manufacturing process. The result
is a product that combines enhanced functionality with streamlined production, offering both
superior performance and greater cost savings.

46

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

Appendix

Figure 25: Part Complexity classification.

47

10/16/2024

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

Figure 26: Ability of Manufacturing Processes to produce shapes

48

10/16/2024

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

Original Assembly Drawings

49

10/16/2024

6

5

4

3

2
REV.

DESCRIPTION

A

INITIAL DRAWING

1
DATE
10/15/2024

A

A

B

B

C

C

D

D

DESCRIPTION

KMM VACUUM FULL ASSEMBLY
PN

N/A

REV

SHEET

A

PROPRIETARY AND CONFIDENTIAL

6

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

2

1 of 2

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE
PROPERTY OF . ANY REPRODUCTION IN
PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS
PROHIBITED.

1

6

5

4

3

2

1

A

A

B

B

C

C

UNIVERSITY OF COLORADO

D

DESCRIPTION

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

KMM VACUUM FULL ASSEMBLY
PN

N/A

REV

SHEET

A

PROPRIETARY AND CONFIDENTIAL

6

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

2

2 of 2

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE
PROPERTY OF . ANY REPRODUCTION IN
PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS
PROHIBITED.

1

D

6

5

4

3

2

1

A

A
.07

.21

A

B

R.03

.07

R.03

B

.05

.07

.16

.15

.07

C

C
R.03

.116

.238

R.03

.47
1.06

1.23

1.29

1.45

1.47

D

DETAIL A
SCALE 4 : 1

1.94

TOLERANCES
UNLESS
NOTED:
UNITS: Inches

X.X
X.XX
X.XXX
X.X

DESCRIPTION

FINISH

PN

KMM Blower Screen Locking Clip

RP001

Matte

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

D

MATERIAL

ABS

6

0.05
0.01
0.001

PROPRIETARY AND
CONFIDENTIAL

SHEET

REV

A

1 of 1

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

2

1

6

5

4

A

3

2

1

A

.040
.318
.064

B

.001

.464

.001

.384

.001

B

.222

.098

C

A

.155
DETAIL B
SCALE 6 : 1

.098

C

.068
B
.584
.585

.473
.156
.089

A

D

.682

SECTION A-A
SCALE 3 : 1

.209

TOLERANCES
UNLESS
NOTED:
UNITS: Inches

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

0.05
0.01
0.001

D

MATERIAL

DESCRIPTION

FINISH

PN

KMM Vacuum Power Button

RP002

Paint

5

.721

.209

Thermoplastic

6

.209

PROPRIETARY AND
CONFIDENTIAL

SHEET

REV

A

1 of 1

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

2

1

2.36

.01 T

AK

3.50

4.50

.10 T
.13

AJ

1.00

.25
.50

2.60
2.70
2.80

DETAIL AJ
SCALE 1 : 1

AP

AH

OD
1.00
NOZZLE 2T

AH
AP

20°

10.85°

SECTION AH-AH

ID
.80
NOZZLE
2.36
FRUSTUM

.80

2.60
FRUSTUM
OD 2.70
CUT SECTION
ID
2.60
CUT SECTION
OD

2.80

30°

R1.35
OD OF KEYWAY CUT

R1.38
ID OF KEYWAY CUT
DETAIL AP
SCALE 1 : 1
TOLERANCES
X.X
0.05
UNLESS
X.XX
0.01
NOTED:
X.XXX 0.001
UNITS:

X.X

MATERIAL

DESCRIPTION

THERMOPLASTIC

KMM BLOWER DUST COLLECTION BIN

FINISH

PN

PROPRIETARY AND
CONFIDENTIAL

SOLIDWORKS Educational Product. For Instructional Use Only.

DETAIL AK
SCALE 1 : 1

RP003

REV

A

SHEET

1 of 1

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

1.69

1.18

1.69

.10
R.05
.24

R.70

.13

.05

.10

R.65
.16

.10
K
B

.16

.10
.10

.12

DETAIL A
SCALE 2 : 1

.05
.10

.18
.47

.16
.70

.21

.13

K
A

.05

.05

.10

DETAIL B
SCALE 2 : 1

1.40
.06 .47

TOLERANCES
UNLESS
NOTED:
UNITS:

X.X
X.XX
X.XXX
X.X

MATERIAL

.07

SECTION K-K

Thermoplastic

FINISH

.39 Paint

PROPRIETARY AND
CONFIDENTIAL

SOLIDWORKS Educational Product. For Instructional Use Only.

0.05
0.01
0.001
DESCRIPTION

KMM Base Charging and LED Mount
PN

RP004

REV

A

SHEET

1 of 1

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

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
9/16/2024

+.00
.08 - .02

A

A

94.6°
2X .77

.63

+.03
.08 - .01

B

B

6X .10

R.07
6X .10

.05±.01
1.45±.01

C

C

+.02
.22 - .05

+.01
1.80 - .02
TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427
DESCRIPTION

FINISH

PN

BLOWER SCREEN
RP005

MATTE

5

UNIVERSITY OF COLORADO

MATERIAL

ABS

6

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

2 0.1

1

D

6

5

4

3

2

1

A

A
1.58
R.02±.01

+.03
.05 - .01
D

R.02±.01

B

B

TYP R.010
DETAIL D
SCALE 4 : 1

SECTION C-C

+.01
.16 - .02

+.02
.05 - .01

C

C
C

C
.29±.01

+.01
.19 - .02

DETAIL A
SCALE 4 : 1

A

TOLERANCES
UNLESS
NOTED:

D

UNITS:INCHES

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

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

BLOWER SCREEN
RP005

MATTE

5

UNIVERSITY OF COLORADO

MATERIAL

ABS

6

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

D

6

5

4

3

2

1

1.37±.01

A

A

H

.53

.45

1.30
SECTION G-G

45°

R.13

B

B

.057
.041
+.003
.019 - .010
.041
G

G

DETAIL H
SCALE 4 : 1

C

C

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

RP005

MATTE

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

BLOWER SCREEN

ABS

6

UNIVERSITY OF COLORADO

0.1
0.02
0.005

REV

SHEET

3 of 4

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

1

.90±.01
.73±.01

A

A
.61±.01
.44±.01

NOTE: CIRCULAR HOLES IN SCREEN GO THROUGH ALL SURFACES

B

B

1.19±.01
1.02±.01
SECTION K-K

C

C

K

K

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

RP005

MATTE

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

BLOWER SCREEN

ABS

6

UNIVERSITY OF COLORADO

0.1
0.02
0.005

REV

SHEET

4 of 4

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

D

8

7

6

5

4

3

2

1
REVISIONS

ZONE

REV.

DESCRIPTION

DATE

APPROVED

A

Initial Prototype

9/17/2024

A

A

.112 .004

B

B

.0235 .003
2.520 .004

4X 60° 1

C

2.455 .004

C

+.0040
2.3300 - .0009

D

D

E

E

TOLERANCES
UNLESS
NOTED:

F

UNITS:

0.1
X.X
X.XX
0.02
X.XXX 0.003
X.X 1

MATERIAL

DESCRIPTION

FINISH

PN

O-Ring Clip

ABS

RP006

MATTE

8

7

6

SOLIDWORKS Educational Product. For Instructional Use Only.

5

4

3

F

REV

SHEET

1 of 3

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

8

7

6

5

4

3

2

1

A

A

.0795 .003

A
B

B

.067

A
SECTION A-A
SCALE 3 : 1

DETAIL B
SCALE 6 : 1

B

.084 .003

C

C

A

.195 .003

D

E

D

E

DETAIL A
SCALE 7 : 1

TOLERANCES
UNLESS
NOTED:

F

UNITS:

X.X
0.1
X.XX
0.02
X.XXX 0.003
X.X 1

MATERIAL

DESCRIPTION

FINISH

PN

O-Ring Clip

ABS

RP006

MATTE

8

7

6

SOLIDWORKS Educational Product. For Instructional Use Only.

5

4

3

F

REV

SHEET

2 of 3

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

8

7

6

5

4

3

2

1

A

A

.400 .003

.078 .003

SECTION B-B
SCALE 3 : 1

B

B

+.0030
2.3300 - .0009

2.283 .0009
B

C

C

DETAIL B
SCALE 6 : 1

B

B

D

D

E

E

TOLERANCES
UNLESS
NOTED:

F

UNITS:
MATERIAL

X.X
0.1
0.02
X.XX
X.XXX 0.003
X.X 1

PN

FINISH

RP006

MATTE

8

7

6

5

4

3

DESCRIPTION

O-Ring Clip

ABS

SOLIDWORKS Educational Product. For Instructional Use Only.

F

REV

SHEET

3 of 3

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
REVISIONS

ZONE

A

.89

REV.

DESCRIPTION

DATE

A

Initial Draft

9/17/2024

APPROVED

A

.84

1.70

.320
.150

B

B

C

C
.28

.04

.04

.10
TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

111 ENGINEERING DRIVE
BOULDER, CO. 80309-0427
DESCRIPTION

FINISH

PN

REV

RP008

A

Impeller

MATTE

5

UNIVERSITY OF COLORADO

MATERIAL

ABS

6

.1
.02
.005

PROPRIETARY AND
CONFIDENTIAL

SHEET

1 of 2

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

2

1

D

6

5

4

3

2

1

A

A

A

A

B

B

B

B
.058

2.

82°

C

1

.39

C

1.
NOTES:
1) FAN BLADES START ON THE TOP OF THE
BASE AND EXTEND TO THE BOTTOM OF
THE ROOF
2) FAN BLADES ARE IDENTICAL AND
EVENLY DISTRIBUTED AROUND THE
CIRCUMFRENCE.
3)BLADES ARE CONSTRUCTED USING
EDGE POINTS CONECTED WITH AN ARC
WITH RADIUS 1.05 INCHES

.071
SECTION A-A

SECTION B-B

TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

D

111 ENGINEERING DRIVE
BOULDER, CO. 80309-0427
DESCRIPTION

FINISH

PN

REV

RP008

A

Impeller

MATTE

5

UNIVERSITY OF COLORADO

MATERIAL

ABS

6

.1
.02
.005
.1

PROPRIETARY AND
CONFIDENTIAL

SHEET

2 of 2

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

2

1

3.55

REV

DESCRIPTION

DATE

A

INITIAL DRAWING

9/18/2024

BT
2.40

TRUE R.10

H
F

B

.50

TRUE R1.25
BY

.07

E

.50

.05

R.10

.02
NOTE B

TRUE R.10

TRUE R1.25

DETAIL BY
SCALE 1 : 2

.30

R.63
Plane2@3DSketch3
BT

Plane2@3DSketch3

Plane2@3DSketch3

DETAIL H
SCALE 1 : 2

.53

.55
.14

R.03

BH
.06

.14
DETAIL BJ
SCALE 1 : 2

TRUE R.75

BH
BJ

.20

R1.00

BK
SECTION BH-BH

R.10

SECTION BT-BT

DETAIL E
SCALE 1 : 2

.99

.06

R.46

.64
NOTES:

.10

.60

DETAIL BK
SCALE 1 : 2
.06

R.10

.18

.14

TOLERANCES
UNLESS
NOTED:

DETAIL B
SCALE 1 : 2

DETAIL F
SCALE 1 : 2
SOLIDWORKS Educational Product. For Instructional Use Only.

+

A)TOLERANCE FOR INJECTION MOUNDING IS - 0.5
B) CUT TO ATTACH IT TO THE EXTRUDED SECTION OF THE LEFT SIDE

UNITS:

X.X
X.XX
X.XXX
X.X

0.1
0.03
0.005

MATERIAL

DESCRIPTION

THERMOPLASTIC

KMM HOUSING (RIGHT HALF)

FINISH

PN

INJECTION MOULDING
PROPRIETARY AND
CONFIDENTIAL

SHEET

REV

RPOO9

A

1 of 2

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

R.10
2.29
2.20 3.55
1.49
AN

3.00
2.80

TRUE R1.50

SECTION AG-AG
AG

AG

SECTION Y-Y

TRUE R1.40

Plane2@3DSketch3
Plane2@3DSk

TRUE R1.30
Y

Y

AB

TRUE R1.40

Plane2@3DSketch3

BC

AE

TRUE R.10

.20
TRUE R.10
.35

+.003
.050 - .003
KEY

.20

.20
.99

.15

DETAIL AE
SCALE 1 : 2

R.10

DETAIL AN
SCALE 1 : 2
+.003
TRUE R1.310 - .003
KEY

TRUE R.50

TRUE R1.30
DETAIL AB
SCALE 1 : 2

DETAIL BC
SCALE 1 : 2

SOLIDWORKS Educational Product. For Instructional Use Only.

TOLERANCES
UNLESS
NOTED:
UNITS:

X.X
X.XX
X.XXX
X.X

0.1
0.03
0.005

MATERIAL

DESCRIPTION

THERMOPLASTIC

KMM HOUSING (RIGHT HALF)

FINISH

PN

INJECTION MOULDING
PROPRIETARY AND
CONFIDENTIAL

RPOO9

REV

A

SHEET

2 of 2

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

U
.02

DC

R .50

BF

REVISIONS TABLE
S.NO
DESCRIPTION
REV NO.
1
INITIAL DRAWING
A
2
GD&T ADDED
B
.21

.28

BF

DATE
09.23.2024
09.25.2024
.31

.20

.13
.70
.60
CL

AT
.08

4.88

DETAIL CL
SCALE 1 : 1
(TOP VIEW)

R.63
5.11

.03
.60
1.00

SECTION U-U

.98

DETAIL AT
SCALE 1 : 1
.02

DETAIL CC
SCALE 1 : 1

U

NOTES :
•
DETAIL DC DISPLAYS THE EXTRUTION OF 0.1 INCHES. THIS ACTS A KEYWAY TO JOIN
LEFT AND RIGHT SIDE OF THE VACUUM HOUSING (PART RP009).
•
DETAIL CL, AT AND CC ARE MAIN INTERFACING FEATURES .IT IS THE HOUSING FOR
THE POWER BUTTON (PART RP002).

CC

TOLERANCES
UNLESS
NOTED:
UNITS: INCHES

X.X
X.XX
X.XXX
X.X

0.1
0.03
0.005

.60

MATERIAL

DESCRIPTION

THERMOPLASTIC

KMM VACUUM HOUSING(LEFT SIDE)

SECTION BF-BF

FINISH

PN

N/A

PROPRIETARY AND
CONFIDENTIAL

SOLIDWORKS Educational Product. For Instructional Use Only.

REV

RP011 B

SHEET

1 of 5

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

CE

.50

.50

2.40

R.10

T
2.60

R 1.30
R 1.15

R .05

.05
R.10

.20
5.11
4.94

4.41

1.00
R.10

2.00

.32

CE
SECTION CE-CE

1.19 .99

CV
CV

TOLERANCES
UNLESS
NOTED:
UNITS: INCHES

DETAIL T
SCALE 1 : 1
SOLIDWORKS Educational Product. For Instructional Use Only.

X.X
X.XX
X.XXX
X.X

0.1
0.03
0.005

MATERIAL

DESCRIPTION

THERMOPLASTIC

KMM VACUUM HOUSING(LEFT SIDE)

FINISH

PN

N/A

PROPRIETARY AND
CONFIDENTIAL

RP011

REV

B

SHEET

2 of 5

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

CW

.20

.10

DB

R .10

.35

SECTION DA-DA
SCALE 1 : 1

.25
DA

DETAIL DB
SCALE 2 : 1
DA

DETAIL CW
SCALE 1 : 1

TOLERANCES
UNLESS
NOTED:
UNITS:INCHES

X.X
X.XX
X.XXX
X.X

MATERIAL

DESCRIPTION

THERMOPLASTIC

KMM VACUUM HOUSING(LEFT SIDE)

FINISH

PN

N/A

PROPRIETARY AND
CONFIDENTIAL

SOLIDWORKS Educational Product. For Instructional Use Only.

0.1
0.03
0.005

REV

RP011 B

SHEET

3 of 5

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

BH
BL
.79
BE

.65
.63
.62

.20

R .40

.15

.23

BD
.60
R .75
.41

SECTION BH-BH
.15 SCALE 1 : 1
BH

BL
R .40
BP

BP

DETAIL BE
SCALE 1 : 1

SECTION BL-BL
SCALE 1 : 1

R1.00
R.95

.06
.54

.07

NOTES :
•
DETAIL 'BE' IS A MAIN INTERFACING FEATURES .IT IS THE HOUSING FOR THE MOTOR.
•
SECTION BP-BP IS THE HOUSING FOR BASE CHARGING(PART RP004, RP009).
TOLERANCES
UNLESS
NOTED:

1.56

.10
SECTION BP-BP

SOLIDWORKS Educational Product. For Instructional Use Only.

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

0.1
0.03
0.005

MATERIAL

DESCRIPTION

THERMOPLASTIC

KMM VACUUM HOUSING(LEFT SIDE)

FINISH

PN

N/A

PROPRIETARY AND
CONFIDENTIAL

REV

RP011 B

SHEET

4 of 5

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

6X .18
0.005 H

2.20
.34

+.003
.020 - .003

K

+.005
R.090 - .005

.50

.25

+.005
.060 - .005

CN.95

CM

DETAIL CM
SCALE 1 : 1

CF
2.30
.48

.17

.29
H

1.45

1.30
DETAIL CF
SCALE 1 : 1

.02
.66

DETAIL CN
SCALE 2 : 1

NOTES :
•
DETAIL 'CF' IS A MAIN INTERFACING FEATURES .IT IS THE HOUSING FOR THE BATTERY.
•
DETAIL 'CM' IS ALSO A MAIN INTERFACING FEATURE. IT NEEDS TO BE IN-LINE WITH THE
HOLES IN THE RIGHT SIDE OF THE VACUUM HOUSING.THIS INTURN ASSURES A PROPER
HOUSING OF THE PRODUCTS (WITH PART RP009).
•
BY FIXING DATUM H WE MEASURE THE POSITION OF BOLT OF DIA 0.18.NOW BY
FIXING THAT AS DATUM K, WE MEASURE THE ALIGNMENT OF THE ARRAY OF BOLTS.
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

THERMOPLASTIC

KMM VACUUM HOUSING(LEFT SIDE)

FINISH

PN

N/A

PROPRIETARY AND
CONFIDENTIAL

SOLIDWORKS Educational Product. For Instructional Use Only.

0.1
0.03
0.005

REV

RP011 B

SHEET

5 of 5

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

6

5

4

3

2

1

REV.

DESCRIPTION

DATE

A

INITIAL DRAWING

9/22/2024

A

A

.22

1.27

.89

A

A

B

B

C

C
.37
NOTES:
1.
The lip that fixes the position of the cap in
reference to the DC motor is a key feature. This lip
should be measure to a thickness of at least 0.04
inches.
2.
The thickness of the wall is another key feature
that stablizes the position of the motor. The
thickness should be inspected to have a
minimum size of 0.07 inches.

.06

SECTION A-A
R.04

.10

.09

TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

1111 ENGINEERING DRIVE
BOULDER, CO. 80309-0427
DESCRIPTION

FINISH

PN

RUBBER MOTOR CAP

RP012

MATTE

5

UNIVERSITY OF COLORADO

MATERIAL

RUBBER

6

0.5
0.02
0.001

PROPRIETARY AND
CONFIDENTIAL

REV

SHEET

A

1 of 1

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

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
B

0.02 M

DESCRIPTION
INITIAL DRAWING
REPLACED NOTES WITH GD&T INFORMATION

DATE
9/21/2024
9/24/2024

A B C

.06

A

1

A

2.01±.01
1.91±.01
1.71 THRU ALL

.90

B

B
.85

B
0.02 M

C

A B C
.08

C

C

0.01

0.005 A

A

NOTES:
1.
MIDDLE DIAMETER (Ø1.91) SHOWN IN TOP VIEW MUST FIT
INSIDE OF HOLE AT BACK OF VACUUM OUTER SHELL (PARTS
RP 009 AND RP011).

2X .5

69°

D

TOLERANCES
UNLESS
NOTED:

.09
.08±.01

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

5

SOLIDWORKS Educational Product. For Instructional Use Only.

4

DESCRIPTION

FINISH

PN

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427

BLOWER SCREEN RETAINING RING

ABS

3

UNIVERSITY OF COLORADO

MATERIAL

RP014

MATTE, PAINTED

6

0.1
0.02
0.005

PROPRIETARY AND
CONFIDENTIAL

REV

B

SHEET

1 of 2

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

2

D

6

5

4

3

2

1

+.02
.08 - .01

.15

A

A

.05
+.03
1.79 - .01
SECTION B-B

DETAIL D
SCALE 4 : 1

0.01 C

B

D

B

.09
+.02
.04 - .00

.05
B

B
C

.15
DETAIL C
SCALE 4 : 1

C

C

NOTES:
1.
GROOVE SHOWN IN DETAIL C IS MAIN INTERFACING FEATURE. IT ALIGNS WITH RIB
ON BLOWER SCREEN (PART NUMBER RP005) TO CONTROL ORIENTATION OF RETAINING
RING.

C

2.
INNER DIAMETER OF RING SHOWN IN SECTION B INTERFACES WITH OUTER DIAMETER
OF BLOWER SCREEN (PART NUMBER RP005).

TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427
DESCRIPTION

FINISH

PN

BLOWER SCREEN RETAINING RING
RP014

MATTE, PAINTED

5

UNIVERSITY OF COLORADO

MATERIAL

ABS

6

0.1
0.02
0.005

PROPRIETARY AND
CONFIDENTIAL

REV

SHEET

2 of 2

B

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

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
10/1/2024

A

A

A

B

B

.34
.08

A

C

94°

C

.30
SECTION A-A

.025

NOTES:
1. STANDARD SPRING PITCH IS 0.08 INCHES. ENDS OF
SPRING ARE BENT FLAT AND CONTACT NEXT REVOLUTION
OF WIRE.
2. SPRING IS 6 REVOLUTIONS
TOLERANCES
UNLESS
NOTED:

D

UNITS:INCHES

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427
DESCRIPTION

FINISH

PN

POWER BUTTON SPRING

COLD DRAWN WIRE

5

UNIVERSITY OF COLORADO

MATERIAL

STEEL

6

0.1
0.02
0.005

RP017

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

8

7

6

5

4

3

2

1
REVISIONS

ZONE

.306

REV.

DESCRIPTION

DATE

APPROVED

A

Initial Drawing

10/1/2024

A

A
.044

.150

B

B

C

C

A

.388

.187

D

D
.150
.375

E

E
.194

0.004 A B

B

X.X
0.1
X.XX
0.02
0.004
X.XXX
UNITS: INCHES X.X 1
TOLERANCES
UNLESS
NOTED:

F

MATERIAL

DESCRIPTION

FINISH

PN

ABS

LED Cover

NONE

8

7

6

SOLIDWORKS Educational Product. For Instructional Use Only.

5

4

3

UNIVERSITY OF COLORADO
1111 ENGINEERING DRIVE
BOULDER, CO, 80309

RP020

REV

SHEET

1 of 1

A

PROPRIETARY AND THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.
CONFIDENTIAL

2

1

F

Argandona, Krishnan, Peterson,
Vasquez

MCEN 5045

Redesign Drawings

50

10/16/2024

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
Initial Drawing

DATE
10/6/2024

A

2X .35

2.60

B

6X .10

2X .35

B

6X .10

1.45

C

C

.75
R.10
.10
TOLERANCES
UNLESS
NOTED:

D

UNITS:INCHES

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427
DESCRIPTION

FINISH

PN

BLOWER SCREEN
RD005

MATTE

5

UNIVERSITY OF COLORADO

MATERIAL

ABS

6

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

D

6

5

4

A

3

2

1

A

.44±.01
.61±.01

2.30
1.75

.73±.01
.90±.01
NOTE: CIRCULAR HOLES IN SCREEN GO THROUGH ALL SURFACES
TYP R.02±.01

B

B

1.02±.01
SECTION B-B

C

A

B

1.19±.01

C

135°
B
.05±.01

A

1.30
SECTION A-A

TOLERANCES
UNLESS
NOTED:

D

UNITS: INCHES

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

1111 ENGINEERING DRIVE
BOULDER, CO, 80309-0427
DESCRIPTION

FINISH

PN

BLOWER SCREEN
RD005

MATTE

5

UNIVERSITY OF COLORADO

MATERIAL

ABS

6

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

D

REVISION TABLE
DESCRIPTION
INITIAL DRAWING

REVISION
A
B

DATE
09-11-2024

SUCTION HEAD LENGTH CHANGED

10-15-2024

G

K
1.03

.85

2.34

N

1.03

2.22

2.14

1.72

J

R1.11
G

1.72

2.34
5.00
.10

5.47

1.17

SECTION G-G

.85

1.03

.25
DETAIL J
SCALE 1 : 1

DETAIL K
SCALE 1 : 1

R1.11
R1.13

NOTES :
•
Usual tolerance for injection molding: ±0.005 inches.
•
Tolerance as mentioned in the title block unless specified separately.
•
Detail J is a main interfacing unit that acts as a keyway to the
housings ( RP009 and RP011).
TOLERANCES
UNLESS
NOTED:

23.88°

UNITS:

DETAIL N
SCALE 1 : 1
SOLIDWORKS Educational Product. For Instructional Use Only.

X.X
0.1
X.XX
0.01
X.XXX 0.005
X.X 0.1

MATERIAL

DESCRIPTION

THERMOPLASTIC

KMM BLOWER DUST COLLECTION BIN

FINISH

PN

N/A
PROPRIETARY AND
CONFIDENTIAL

RP003

REV

B

SHEET

1 of 1

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

6

5

4

3

2

1

1.80
1.60
1.20

A

1.80

1.00

A

.10
1.60

.10

.24
.05
.10

B

.16
.10

.13

1.30
C

C
B

.16
.10

A

.13

.47

.10

C

B

.05

.10

1.40

.10

DETAIL B

DETAIL A
.16

.47

.11

.13

C

.70

.21
.39

SECTION C-C
SCALE 1 : 1

D

TOLERANCES
UNLESS
NOTED:
UNITS: INCHES

X.X
X.XX
X.XXX
X.X

SOLIDWORKS Educational Product. For Instructional Use Only.

4

3

D

1111 ENGINEERING DRIVE
BOULDER, CO. 80309-0427
DESCRIPTION

FINISH

PN

KMM Base Charging and LED Mount
RD004

Paint

5

UNIVERSITY OF COLORADO

MATERIAL

Thermoplastic

6

0.1
0.02
0.005

PROPRIETARY AND
CONFIDENTIAL

SHEET

REV

1 of 1

A

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

2

1

REVISIONS TABLE
S.NO
DESCRIPTION
REV NO.
1
INITIAL DRAWING
A

DATE
10.15.2024

1.23
F

F

.28

.22

SECTION F-F

.22

NOTES :
•
Cantilever snap-fits were added, and the screw setup was removed. The rest of
the dimensions are the same. Please refer to drawings RP009 and RP011.
•
Section F-F specifies how the snap-fit will be assembled.
TOLERANCES
UNLESS
NOTED:
UNITS:
MATERIAL
FINISH

SECTION E-E
SCALE 1 : 2
SOLIDWORKS Educational Product. For Instructional Use Only.

X.X
X.XX
X.XXX
X.X

0.1
0.03
0.05

THERMOPLASTIC

N/A

PROPRIETARY AND
CONFIDENTIAL

DESCRIPTION

KMM HOUSING SNAP-FIT
PN

RP024

REV

A

SHEET

1 of 1

THE INFORMATION CONTAINED IN THIS DRAWING IS THE SOLE PROPERTY OF .
ANY REPRODUCTION IN PART OR AS A WHOLE WITHOUT WRITTEN PERMISSION IS PROHIBITED.

