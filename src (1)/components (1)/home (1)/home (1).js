import Header from "../../components/header/header"
import BasicCard from "../cards/basic-card";

export default function Home() {
  return (
    <>
      <Header />
      <div class="row">
        <BasicCard title="Card" descricao="Um card é um contêiner de conteúdo flexível e extensível. Possui opções de cabeçalho e rodapé, 
        uma ampla variedade de conteúdo, cores de fundo contextuais e opções de exibição poderosas. Este é um basic card" />
        <BasicCard title="React" descricao="React JS é uma biblioteca JavaScript para criar interfaces de usuário ou UI (User Interface).
         Por ser uma biblioteca front-end, um de seus objetivos é facilitar a conexão entre as diferentes partes da página." />
      </div>
    </>

  );
}