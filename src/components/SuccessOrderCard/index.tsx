import { Button } from "@mui/material";

import * as S from "./styles";

export const SuccessOrderCard = ({
  makeAnotherOrder,
}: {
  makeAnotherOrder: () => void;
}) => {
  return (
    <>
      <S.Title>Order placed</S.Title>
      <S.Text>
        Your taxi is already on its way to you. Will arrive in about 10 minutes.
      </S.Text>
      <Button variant="contained" color="primary" onClick={makeAnotherOrder}>
        make one more order
      </Button>
    </>
  );
};
