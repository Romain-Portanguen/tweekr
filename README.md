<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">Tweek'r</h1>
</p>
<p align="center">
    <em>Create and share tweets</em>
</p>
<p align="center">
	<!-- Shields.io badges not used with skill icons. --><p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=react,ts">
	</a></p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [📍 Overview](#-overview)
- [🧩 Features](#-features)
- [🗂️ Repository Structure](#️-repository-structure)
- [📦 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#️-installation)
  - [📑 Configuration](#-configuration)
  - [🤖 Usage](#-usage)
- [🎗 License](#-license)
</details>
<hr>

## 📍 Overview

Tweekr simplifies the creation of personalised tweets thanks to Mistral's AI. </br>
This means that users can easily produce content tailored to specific themes. </br>
Tweekr improves user engagement through interactive features and strengthens community participation through links to social platforms. This makes it a valuable tool for those looking to improve their interactions on social networks.

---

## 🧩 Features

|     | Feature           | Description                                                                                                                                                                                                 |
|-----|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project follows a modern React architecture, leveraging TypeScript for type safety, and modular component design for UI construction. It enables a dynamic, user-friendly web application.              |
| 🔩  | **Code Quality**  | The code adheres to best practices with clear structure and naming conventions. The use of TypeScript enhances readability and maintainability, promoting a consistent coding style throughout the project. |
| 📄  | **Documentation** | Documentation is present with metadata in files like `package.json`. However, further user guides or API documentation could enhance understanding and onboarding for new developers.                       |
| 🔌  | **Integrations**  | Integrates with Mistral AI for tweet generation, supporting user-defined themes and tones. Utilizes React libraries and hooks to enhance functionality and user interaction.                                |
| 🧩  | **Modularity**    | Codebase is highly modular, with reusable components for UI elements like buttons, forms, and loading indicators. This promotes maintainability and ease of updates or changes.                             |
| 🧪  | **Testing**       | Uses `jest` and `@testing-library/react` for unit and integration testing, ensuring code reliability and performance through automated tests.                                                               |
| ⚡️  | **Performance**   | Optimized for speed with effective state management and minimal re-renders. Appropriate use of hooks and components enhances responsiveness and resource usage.                                             |
| 🛡️ | **Security**      | Implements best practices for security such as validation and access control via form management. However, further layers such as user authentication could enhance data protection.                        |
| 📦  | **Dependencies**  | Key dependencies include React, TypeScript, styled-components, and testing libraries such as Jest. These libraries support efficient development and component styling.                                     |
| 🚀  | **Scalability**   | Designed to accommodate increased user traffic through modular components and state management practices, allowing for smooth performance scaling as the user base grows.                                   |

---

## 🗂️ Repository Structure

```sh
└── tweekr/
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── App.tsx
    │   ├── components
    │   ├── hooks
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   ├── services
    │   ├── styles
    │   └── utils
    └── tsconfig.json
```

---

## 📦 Modules

<details closed><summary>src.utils</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                                                          |
|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [cleanResponse.ts](https://github.com/Romain-Portanguen/tweekr/blob/master/src/utils/cleanResponse.ts) | Cleanses API responses by removing unwanted characters, enhancing data integrity and readability within the application. This utility plays a vital role in ensuring that the data processed in the Tweekr repository is clean and usable, thus supporting the overall architectures reliability and efficiency. |

</details>

<details closed><summary>src.styles</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [globals.ts](https://github.com/Romain-Portanguen/tweekr/blob/master/src/styles/globals.ts) | Defines global styles and design tokens for the Tweekr application, establishing consistent visual themes such as colors and font sizes. Facilitates responsive design through breakpoints, enhancing user experience across devices while promoting a cohesive aesthetic throughout the apps various components and layouts. |

</details>

<details closed><summary>src.components</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                   |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Hero.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/Hero.tsx)                 | Showcases a prominent hero section, inviting users to generate tweets with Mistral IA. It features a call-to-action button that directs users to the projects GitHub page, enhancing community engagement and visibility within the broader architecture of the Tweekr application.                                                                       |
| [DotLoader.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/DotLoader.tsx)       | Provides a visually engaging loading indicator through animated dots, enhancing user experience during data fetching or processing in the application. As a reusable component, it integrates seamlessly within the architecture, promoting consistency and style across various sections of the Tweekr project.                                          |
| [Hamburger.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/Hamburger.tsx)       | Enhances user interaction by providing a visually appealing and functional hamburger menu component. This feature integrates seamlessly with the larger architecture, supporting dropdown functionality and user logout while maintaining a responsive design, contributing to the overall usability and aesthetics of the application.                   |
| [Step.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/Step.tsx)                 | Creates a reusable Step component that enhances user experience by visually organizing content into labeled sections. Designed for flexibility, it adapts to modal displays and facilitates easy navigation, aligning with the repository’s goal of delivering a structured and interactive application interface.                                        |
| [ActionButton.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/ActionButton.tsx) | Facilitates user interaction through a customizable action button component, enhancing the applications UI. It allows integration of icons and click handling, promoting a consistent design language while ensuring responsiveness and accessibility, aligning seamlessly with the overall structure and user experience goals of the Tweekr repository. |
| [Footer.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/Footer.tsx)             | Establishes a visually appealing footer that enhances user experience by providing essential links and information about the project. It connects users to social media profiles while reinforcing branding through attribution, aligning with the repositorys overall goal of creating an accessible and engaging application.                           |
| [Header.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/Header.tsx)             | Creates a visually appealing and functional header component for the Tweekr app, fostering a user-friendly interface. Integrating an icon and title alongside a responsive hamburger menu, it enhances navigation while aligning with the overall architecture that prioritizes accessibility and design consistency.                                     |
| [DropdownMenu.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/DropdownMenu.tsx) | Enhances user experience by providing a responsive dropdown menu component that displays action items like logout. Integrates seamlessly within the application’s architecture by leveraging styled-components for styling, ensuring consistent design, and facilitating user interactions in a clean and accessible manner.                              |
| [Modal.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/Modal.tsx)               | Facilitates user interactions by providing a versatile modal component, enhancing the user experience within the Tweekr application. It allows for easy display of content, ensuring that critical information is presented clearly while maintaining a sleek design and responsive behavior.                                                             |
| [Form.tsx](https://github.com/Romain-Portanguen/tweekr/blob/master/src/components/Form.tsx)                 | Facilitates user interaction by providing a structured interface for generating tweets based on user-defined themes and tones. Integrates validation for daily limits, displays loading states, and enables text copying, enhancing the overall user experience within the broader architecture of the Tweekr application.                                |

</details>

<details closed><summary>src.hooks</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                     |
|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [useTypingEffect.ts](https://github.com/Romain-Portanguen/tweekr/blob/master/src/hooks/useTypingEffect.ts) | Facilitates a typing animation effect, enhancing user engagement by dynamically displaying text. Integrated within the Tweekr repository, this hook allows components to create an appealing presentation of information, contributing to an interactive user experience aligned with the overall architectures focus on responsive and interactive design. |
| [useDailyToken.ts](https://github.com/Romain-Portanguen/tweekr/blob/master/src/hooks/useDailyToken.ts)     | Manage daily token usage effectively within the Tweekr application by tracking and updating the number of tokens utilized. It ensures users are informed when they reach the defined limit, fostering a seamless experience while integrating with local storage for persistent state management.                                                           |

</details>

<details closed><summary>src.services</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [mistralService.ts](https://github.com/Romain-Portanguen/tweekr/blob/master/src/services/mistralService.ts) | Facilitates dynamic tweet generation by interfacing with the Mistral AI service, allowing users to obtain personalized tweets based on themes and desired vibes. This functionality enhances the applications interactivity, aligning seamlessly with the overall goal of creating an engaging social media experience within the repository. |

</details>

---

## 🚀 Getting Started

**System Requirements:**

* **TypeScript**: `version x.y.z`

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the tweekr repository:
>
> ```console
> $ git clone https://github.com/Romain-Portanguen/tweekr
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd tweekr
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

### 📑 Configuration

>To use Tweek'r and generate tweets, it's important to have a Mistral API key. You can refer to the [official documentation](https://docs.mistral.ai/) to do this.
>Once you have generated your API key, start by creating an `.env` file and adding the entry `REACT_APP_MISTRAL_API_KEY` to it. Once this is done, tweet generation will be possible. The app relies on the `open-mixtral-8x7b` model, but you are free to modify this value to the model of your choice by editing this line:
>
>`const model = 'open-mixtral-8x7b';`
>
>Have fun!

### 🤖 Usage

<h4>From <code>source</code></h4>

> Run tweekr using the command below:
> ```console
> $ npm start
> ```

---

## 🎗 License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.
