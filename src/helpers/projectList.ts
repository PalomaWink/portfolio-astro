import emBreve from '../../public/img/projetos/emBreve.webp'
import react from '../../public/img/tecnologias/react.svg'
import nextjs from '../../public/img/tecnologias/next-js.svg'
import typescript from '../../public/img/tecnologias/typescript.svg'
import javascript from '../../public/img/tecnologias/javascript.svg'
import redux from '../../public/img/tecnologias/redux.svg'
import tailwind from '../../public/img/tecnologias/tailwindcss.svg'
import jest from '../../public/img/tecnologias/jest.svg'
import eslint from '../../public/img/tecnologias/eslint.svg'
import testingLibrary from '../../public/img/tecnologias/testing-library.svg'
import nodejs from '../../public/img/tecnologias/node-js.svg'
import css from "../../public/img/tecnologias/css-3.svg";
import vercel from '../../public/img/tecnologias/vercel.svg'
import onlineStore from '../../public/img/projetos/online-store.png'


export const projectsData = [
  {
    title: "TrybeTunes",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Aplicação desenvolvida para ouvir e curtir suas músicas favoritas, utilizando a API do iTunes",
    technologies: [
      { name: "React", image: react },
      { name: "Tailwind CSS", image: tailwind },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
    ],
    githubUrl: "https://github.com/PalomaWink/Trybetunes",
    deployUrl: "",
  },
  {
    title: "Frontend Online Store",
    image: onlineStore,
    status: "Finalizado",
    description: "Aplicação desenvolvida utilizando a api do Mercado Livre",
    technologies: [
      { name: "React", image: react },
      { name: "CSS3", image: css },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
      { name: "Vercel", image: vercel },
    ],
    githubUrl: "https://github.com/PalomaWink/FrontEnd-Online-Store",
    deployUrl: "https://front-end-online-store-alpha.vercel.app",
  },
  {
    title: "TrybeWallet",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Aplicação desenvolvida utilizando Redux",
    technologies: [
      { name: "React", image: react },
      { name: "Tailwind CSS", image: tailwind },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
      { name: "Redux", image: redux },
      { name: "Testing Library", image: testingLibrary },
    ],
    githubUrl: "https://github.com/PalomaWink/TrybeWallet",
    deployUrl: "",
  },
  {
    title: "App de Receitas",
    image: emBreve,
    status: "Em desenvolvimento",
    description: "Aplicação desenvolvida em grupo consumindo multiplas APIs",
    technologies: [
      { name: "React", image: react },
      { name: "Tailwind CSS", image: tailwind },
      { name: "JavaScript", image: javascript },
      { name: "EsLint", image: eslint },
      { name: "Node.JS", image: nodejs },
      { name: "Testing Library", image: testingLibrary },
    ],
    githubUrl: "https://github.com/PalomaWink/Recipes-App",
    deployUrl: "",
  },
];