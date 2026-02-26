import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

interface Props {
  inv_quantity: number;
  setCheckInAdjustment: (adjustment: number) => void;
}

const QuantityControl = ({ inv_quantity, setCheckInAdjustment }: Props) => {
  const [adjustment, setAdjustment] = useState(0);

  // ➕ Increment
  const increment = () => {
    setAdjustment(adjustment + 1);
  };

  // ➖ Decrement
  const decrement = () => {
    if (inv_quantity + adjustment > 0) {
      setAdjustment(adjustment - 1);
    }
  };

  const finalQuantity = inv_quantity + adjustment;
  setCheckInAdjustment(adjustment);

  return (
    <Flex direction="column" gap="2">

      {/* Adjustment Control */}
      <Flex align="center" gap="2">
        <Button size="1" color="red" onClick={decrement}>
          -
        </Button>

        <Text
          size="3"
          weight="medium"
          style={{ minWidth: 20, textAlign: "center" }}
        >
          {adjustment}
        </Text>

        <Button size="1" color="green" onClick={increment}>
          +
        </Button>
      </Flex>

      {/* Final Result */}
      <Text size="3" weight="bold">
        Final: {finalQuantity}
      </Text>

    </Flex>
  );
};

export default QuantityControl;