# MECHATRONICS 1: GRAD (5115) PROJECT AND PAPER SUBMISSION
## 4-DOF KINEMATIC ARM WITH GRIPPER
**K.VAIKUNTH KESHAV**

---

## Introduction

This project aims to develop a robotic arm with four degrees of freedom, designed for flexibility and precision in robotic applications. The arm features a 360° rotating base enabled by a ball bearing mechanism and controlled by a servo motor that responds to input signals. It is composed of two segments: the first arm, with a 190° range of rotation, and the second arm, with a 180° range of rotation, both powered by individual servo motors. At the end of the arm, a gripper adds an extra degree of freedom, utilizing a lead screw mechanism driven by a servo motor to achieve precise and reliable gripping.

## Overview

In this design, servo motors are utilized for the robotic arm to limit its rotation to specific angles, preventing continuous 360° rotation. Servo motors are chosen for their ease of control when rotating to a precise angle. This mechanism is an example of **Forward Kinematics**, where the rotation angles are predetermined. The position of the arm is calculated based on the set rotation angles and the arm lengths. The microcontroller (IC) directs the servo motors using these fixed angles, and the position of the end effector is determined by the combination of these angles and the arm segment lengths.

## System Configuration

### Degrees of Freedom (DOF) and Components:

**Base:** Provides a single degree of freedom (DOF) with 360° rotation, enabling full rotational movement.

**Arm 1:** Offers 1 DOF, allowing independent movement of the first arm segment.

**Arm 2:** Also provides 1 DOF, with its motion controlled by Arm 1, affecting the second segment's position.

**Gripper:** Equipped with 1 DOF, utilizing a lead screw mechanism that controls the opening and closing of the gripper.

### Key Parameters:

- **L₁:** The length of the first arm segment.
- **L₂:** The length of the second arm segment.
- **φ:** The rotational angle of the base (ranging from 0° to 360°).
- **θ₁:** The rotational angle of Arm 1 (ranging from 0° to 190°).
- **θ₂:** The rotational angle of Arm 2, relative to Arm 1 (ranging from 0° to 180°).

## Mechanical Design

| Part | Dimension | Angle of Rotation |
|------|-----------|-------------------|
| Base | Diameter 4 Inches | 360° (φ) |
| Arm1 | Length (L₁): 6.65 inches, Width: 1.65 inches, Extrusion Thickness: 0.5 inches | 190° (θ₁) |
| Arm2 | Length (L₂): ~4.72 inches, Width: 2.5 inches, Includes cut sections for servo motors and lead screw | 180° (θ₂) |
| Gripper | Dimensions dependent on the gripping mechanism | ~45° (Gripper arm rotation) |

## Kinematic Equation

### Forward Kinematics

Forward kinematics calculates the position of the end-effector (gripper) in 3D space based on the given angles of the joints. The system's kinematic behavior is determined by the angles at each joint and the lengths of the arm segments.

### Equations:

**Horizontal Position along x,y:**

**x = cos(φ) × (L₁ cos(θ₁) + L₂ cos(θ₁ + θ₂))**

**y = sin(φ) × (L₁ cos(θ₁) + L₂ cos(θ₁ + θ₂))**

Where:
- sin(φ): Movement Along x direction
- cos(φ): Movement Along y direction
- L₁ cos(θ₁) = Horizontal Reach of First Arm
- L₂ cos(θ₁ + θ₂): Horizontal Reach of Second Arm

**Vertical Position along z:**

**z = L₁ sin(θ₁) + L₂ sin(θ₁ + θ₂)**

Where:
- L₁ sin(θ₁): Movement of First Arm in Vertical Direction
- L₂ sin(θ₁ + θ₂): Movement of Second Arm in Vertical Direction

θ₁, θ₂ represent the rotation angles of the first and second arms, respectively. The second arm's movement can be influenced by the first arm's rotation.

## Gripper

The gripper operates independently and adds functionality without influencing the calculated positions of the end-effector.

**The Linear displacement of Gripper Can be expressed as:**

**d = (θGripper × p) / 360**

Where:
- **d:** Linear Displacement of Fingers
- **θGripper:** Rotation Angle of Servo motor Driving Lead Screw
- **p:** Pitch of Lead Screw (Distance per Revolution)

## Applications

The kinematic design of this robotic arm makes it versatile for various applications, including:

- **Material Handling and Assembly:** The system's precise movements are ideal for automated material handling and precision assembly tasks, although the fixed joint angles may restrict its operational flexibility.

- **Education and Research:** It is an excellent tool for teaching motor control and robotics concepts in academic settings.

## Drawbacks of This Machine

- **Restricted Motion Range:** Fixed joint angles limit the arm's ability to perform a full range of tasks.

- **Motor Accuracy:** Any deviations in servo motor accuracy can impact performance, particularly in operations requiring precise movements.

- **Gripper Capacity:** The gripper's effectiveness can vary based on the size and weight of the object it is handling.

## Conclusion

A 4-DOF robotic arm was designed using forward kinematics, with the equations for motion thoroughly defined. The application of forward kinematics allows for accurate positioning and operation of the gripper, ensuring reliable performance. This design is well-suited for industrial tasks and serves as an effective learning tool in educational settings for robotics and motion control.