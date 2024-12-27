# Project-Management-System
<h2 align="left"> Introduction:</h2>

A Project Management System (PMS) is a Combining all the tools supposed to maximize team cooperation, task management, and project administration. This system guarantees output, openness, and success in reaching goals by letting users properly plan, run, and track their actions. By means of new technology, the PMS fosters responsibility, simplifies difficult jobs, and offers real-time project progress analysis.

<h2 align="left">Key Features :</h2>

- **User Management**
    - Administrator, manager, team player role-based access control for User Management ; activity records and complete progress monitoring abound in user accounts.
    - Anyone can use safe login and dashboards.
    - User accounts including thorough activity logs .
    - safe authentication..
- **Task Management**
    - Good task management calls for efficient assignment, job generation, workflow control, and prioritizing. Clearly specify task control.
    - Tracking status with deadlines, reminders, to-do, completed, in progress.
    - Work dependencies provide, in some sense, appropriate project sequencing.
- **Project Organization**
    - This project organization compiles resources and documentation particular to every project.
    - Tools for real-time sharing of updates, files, and comments for collaboration
- **Report Generation**
    - Automated performance and progress report generating is ****Report generating.
    - Exportable records for the distribution among interested parties for knowledge sharing.

<h2 align="left"> Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left"> Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

<h2 align="left">Library:</h2>

- body-parser
- cors
- dotenv
- express
- mongoose
- nodemon

<h2 align="left">Database Structure</h2>

The platform will require a relational database to manage User master, task , organzation , project and report . Below is a proposed database structure with the key tables.

<h3 align="left">Tables:</h3>
---

### a) user master

| **Field Name** | **Type** |
| --- | --- |
| firstname | String |
| lastname | String |
| email | String |
| passsword | String |
| role | enum: ["admin","developer"] |

### b) task

| **Field Name** | **Type** |
| --- | --- |
| name | String |
| startdate | enum: ["Good", "Very Good", "Excellent"], |
| enddate | Date |
| assignto | Ref. Object → user_master |
| status | enum: ["To Do","In Progress","Open","Done","Closed"] |

### c) Organization

| **Field Name** | **Type** |
| --- | --- |
| name | String |
| member | Ref. Object → user_master |

### d) project

| **Field Name** | **Type** |
| --- | --- |
| name | String |
| admin | Ref. Object → user_master |
| task | Ref. Object → task |
| organization | Ref. Object → organization |

### e) report

| **Field Name** | **Type** |
| --- | --- |
| project | Ref. Object → project |
| hoursSpent | Number |
| tasksGenerated | Number |
| tasksCompleted | Number |
| peopleAssigned | Number |

<h2 align="left"> Use Cases: </h2>

- **Task Assignment and Tracking**
    - Assign team members projects and track straight away.
    - Check if your priorities and reminders enable you to meet objectives.
- **Streamlined Collaboration**
    - Streamlined Collaboration** lets team members file-share and use integrated chat systems.
    - Transparency with included project data helps.
- **Project Planning and Organization**
    - Projects under **Project Management and Organization** use correct deadlines, benchmarks, and job dependencies.
    - Link all tools and modifications to a project to one central location for simple access.
- **Performance Monitoring and Reporting**
    - Track team and individual performance with **Performance Monitoring and Reporting** keeping in mind big data volumes.
    - Create and distribute reports to let relevant people know.
- **Improved Decision-Making**
    - Using data-driven insights, find problems and maximize resources to show better choice of solution.
    - Planning and better priorities will help to increase output.
- **Time and Resource Management**
    - ensure effective utilization of resources by means of their distribution.
    - Change plans and proactive surveillance help to reduce delays.

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>

<h2 align="left">🐦 Connect With Me:</h2>
<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>


I hope you like the project. Thanks for reading :)
