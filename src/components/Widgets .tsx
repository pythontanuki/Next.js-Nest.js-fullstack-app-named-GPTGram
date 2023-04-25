import { AccountBar } from "@/components/AccountBar";
import { VStack } from "@chakra-ui/react";

const Widgets = () => {
  return (
    <VStack>
      <AccountBar
        accountImage={{ id: 1, url: "Mbappe.jpeg" }}
        userName="taichi_130710"
        displayName="あらきたいち"
      />
      <AccountBar
        accountImage={{ id: 2, url: "Mbappe.jpeg" }}
        userName="imada_130710"
        displayName="いまだかける"
      />
      <AccountBar
        accountImage={{ id: 3, url: "Mbappe.jpeg" }}
        userName="minagawa_130710"
        displayName="みながわけい"
      />
      <AccountBar
        accountImage={{ id: 3, url: "Mbappe.jpeg" }}
        userName="nagari_130710"
        displayName="ながさきりお"
      />
    </VStack>
  );
};

export default Widgets;
