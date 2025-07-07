# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS librar
- [Material UI](https://mui.com/) - React UI library
- [Styled Components](https://styled-components.com/) - For styles
- [VS Code](https://code.visualstudio.com/) - Code editor
- [MacBook Pro](https://www.apple.com/br/macbook-pro/) - Laptop

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

## Descrição dos Diretórios e Arquivos

```
my-react-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── icon-arcade.svg
│   │   │   ├── icon-advanced.svg
│   │   │   └── icon-pro.svg
│   │   └── fonts/
│   ├── components/         # Componentes reutilizáveis e de UI
│   │   ├── common/         # Componentes genéricos
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── index.ts        # Exporta o Button
│   │   │   │   └── Button.styled.ts
│   │   │   └── Card/
│   │   │       ├── Card.tsx
│   │   │       ├── index.ts        # Exporta o Card
│   │   │       └── Card.styled.ts
│   │   ├── form/           # Componentes específicos de formulário
│   │   │   ├── InputField/
│   │   │   │   ├── InputField.tsx
│   │   │   │   ├── index.ts
│   │   │   │   └── InputField.styled.ts
│   │   │   └── CheckboxField/
│   │   │       ├── CheckboxField.tsx
│   │   │       ├── index.ts
│   │   │       └── CheckboxField.styled.ts
│   │   └── layout/         # Componentes de layout
│   │       ├── Navbar/
│   │       │   ├── Navbar.tsx
│   │       │   ├── index.ts
│   │       │   ├── Navbar.styled.ts
│   │       │   └── StepList/       # Sub-componente ou dados específicos do Navbar
│   │       │       └── stepsData.ts
│   │       ├── MobileNavbar/      # Se for um componente separado do Navbar
│   │       │   ├── MobileNavbar.tsx
│   │       │   ├── index.ts
│   │       │   └── MobileNavbar.styled.ts
│   │       └── Header/
│   │           ├── Header.tsx
│   │           ├── index.ts
│   │           └── Header.styled.ts
│   ├── contexts/
│   │   ├── FormContext.ts
│   │   └── FormProvider/           # O Provider como um componente
│   │       ├── FormProvider.tsx
│   │       └── index.ts            # Exporta o FormProvider
│   ├── data/
│   │   ├── plansData.ts
│   │   └── addOnsData.ts
│   ├── hooks/
│   │   ├── useForm.ts
│   │   ├── useIsMobile.ts
│   │   └── useAuth.ts
│   ├── pages/              # Páginas da aplicação (geralmente componentes de rota)
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   ├── index.ts
│   │   │   └── Home.styled.ts
│   │   └── MultiStepForm/  # Página/Componente principal do formulário de múltiplas etapas
│   │       ├── MultiStepForm.tsx
│   │       ├── index.ts            # Exporta o MultiStepForm
│   │       ├── MultiStepForm.styled.ts
│   │       └── steps/              # Sub-componentes das etapas do formulário
│   │           ├── PersonalInfoForm/
│   │           │   ├── PersonalInfoForm.tsx
│   │           │   ├── index.ts
│   │           │   └── PersonalInfoForm.styled.ts
│   │           ├── PlansSection/
│   │           │   ├── PlansSection.tsx
│   │           │   ├── index.ts
│   │           │   └── PlansSection.styled.ts
│   │           ├── AddOns/
│   │           │   ├── AddOns.tsx
│   │           │   ├── index.ts
│   │           │   └── AddOns.styled.ts
│   │           └── Summary/
│   │               ├── Summary.tsx
│   │               ├── index.ts
│   │               └── Summary.styled.ts
│   ├── services/
│   │   └── api.ts
│   ├── styles/
│   │   ├── theme.ts
│   │   └── global.css
│   ├── utils/
│   │   ├── priceUtils.ts
│   │   └── helpers.ts
│   ├── types/
│   │   ├── index.ts
│   │   ├── form.ts
│   │   └── common.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── MultiStep.tsx       # O componente container principal (ou AppRoutes.tsx)
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
