import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { Card } from "ui/Card";

import * as S from "./styles";

export const MapCard = () => {
  return (
    <S.Wrapper>
      <Card>
        <S.Title variant="h2">Заполните платежные данные</S.Title>
        <S.Text variant="subtitle1">
          Укажите информацию о банковской карте, чтобы сделать заказ.
        </S.Text>
        <Button
          to="/profile"
          component={Link}
          variant="contained"
          color="primary"
        >
          Перейти в профиль
        </Button>
      </Card>
    </S.Wrapper>
  );
};
