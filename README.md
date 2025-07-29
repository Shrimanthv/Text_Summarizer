# Text Summarizer

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Deployment on Streamlit](#deployment-on-streamlit)
- [Project Structure](#project-structure)
- [Bug / Feature Request](#bug--feature-request)
- [Future Scope](#future-scope)
- [Technology Used](#technology-used)
- [Author](#author)

---

## Overview

*Smart Task Summarizer + Tagger** is a full-stack AI-powered application designed to streamline task management by leveraging natural language understanding. Built using Google’s Gemini Pro large language model, the system intelligently processes unstructured task inputs to generate concise summaries, relevant context-based hashtags, and priority scores.

The application is structured with a React-based frontend and an Express.js backend, ensuring a responsive user interface and secure handling of API requests. Designed for teams, professionals, and productivity-focused users, this tool automates the manual effort involved in task categorization and prioritization, improving clarity and workflow efficiency.
---

## Features

🧰 Real-time task summarization

🌍 Gemini Pro integration (via secure backend)

🌐 Hashtag classification (e.g., #urgent, #design)

⬆️ Priority scoring from 1 to 5

💾 CSV export of processed task data

🎨 Responsive frontend UI with React

---


```
### Tech Stack
| Layer      | Tools Used                           |
| ---------- | ------------------------------------ |
| Frontend   | React                                |
| Backend    | Node.js, Express                     |
| AI Model   | Gemini Pro (Google Generative AI)    |
| SDK/API    | `@google/generative-ai`              |
| Deployment | Local (can extend to Render/Netlify) |


### Project Structure
``` bash
Task_summarizer/
├── backend/
│   ├── index.mjs
│   ├── .env
│   └── package.json
├── frontend/
│   ├── App.jsx
│   ├── index.js
│   └── package.json

```

## Bug / Feature Request
If you encounter any bugs or have suggestions for new features, please feel free to open an issue on the GitHub repository.

To report a bug:
Provide a clear description of the problem, steps to reproduce it, and any relevant screenshots or error messages.

To request a feature:
Describe the new functionality you'd like to see and explain how it would improve the project.

Your feedback helps improve AeroFare — thank you for contributing!

###  Future Scope
Add support for voice-based task input

Integrate OAuth for user login

Store task history in database

Improve tag accuracy with fine-tuning

Add analytics dashboard (task type trends, urgency heatmaps)

### Technology Used
<p align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="100" alt="React" /> &nbsp;&nbsp; <img src="https://nodejs.org/static/images/logo.svg" width="100" alt="Node.js" /> &nbsp;&nbsp; <img src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png" width="100" alt="Google Gemini" /> &nbsp;&nbsp; <img src="https://expressjs.com/images/express-facebook-share.png" width="100" alt="Express" /> </p>

## Author
Shrimanth V
Email: shrimanthv99@gmail.com
Feel free to reach out for any questions or collaboration!