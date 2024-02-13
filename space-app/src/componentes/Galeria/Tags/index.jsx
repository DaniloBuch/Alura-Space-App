import styled from "styled-components";
import tags from "./tags.json";
import { useState } from "react";

const MenuTag = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  margin-top: 56px;
  margin-bottom: 39px;
`;

const TextoTag = styled.p`
  font-size: 24px;
  line-height: 29px;
  color: #d9d9d9;
`;

const BotaoTag = styled.button`
  color: #fff;
  background-color: rgba(217, 217, 217, 0.3);
  cursor: pointer;
  padding: 10px 8px;
  height: 49px;
  font-size: 24px;
  line-height: 29px;
  ${(props) =>
    props.$ativo
      ? "border: 2px solid #c98cf1 "
      : "border: 2px solid transparent"};
  border-radius: 10px;

  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = ({ setTag }) => {
  const [botaoAtivo, setBotaoAtivo] = useState(null);

  return (
    <MenuTag>
      <TextoTag>Busque por tags:</TextoTag>
      {tags.map((tag) => (
        <BotaoTag
          onClick={() => setTag(tag.tag)}
          key={tag.id}
          $ativo={tag.id === botaoAtivo}
        >
          {tag.titulo}
        </BotaoTag>
      ))}
    </MenuTag>
  );
};

export default Tags;
