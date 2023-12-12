import { Header, Sidebar, Post } from "../src/components";
import { PostType } from "../src/components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/silvasabrina.png",
      name: "Sabrina Mendes",
      role: "Analista de Dados",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de adicionar mais um projeto ao meu portfólio de desenvolvimento! 🚀 Desta vez, apresento o CipherVault, uma aplicação de segurança robusta para armazenamento de senhas e informações sensíveis. 🔐",
      },
      { type: "link", content: "jane.design/ciphervault" },
    ],
    publishedAt: new Date("2023-10-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/BrunoSobralDEV.png",
      name: "Bruno Sobral",
      role: "Desenvolvedor FullStack",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Empolgado em compartilhar meu mais recente trabalho de programação! 🚀 Apresento a vocês o StreamFlow, um sistema de gestão de conteúdo eficiente e intuitivo. 🌐",
      },
      { type: "link", content: "jane.design/streamflow" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts &&
            posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
        </main>
      </div>
    </>
  );
};
