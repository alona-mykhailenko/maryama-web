import { Box, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import FONTS from "@/assets/fonts";
import { Text } from "@/components/core/text";
import { FAQ } from "../content";
import { SplitSection } from "../split-section";
import { FaqList } from "./faq-list";

export const Faq = () => {
  const t = useTranslations();

  const items = FAQ.items.map((item) => ({
    question: t(item.question),
    answer: t(item.answer),
  }));

  return (
    <SplitSection
      id="faq"
      pt="100px"
      pb="130px"
      label={t(FAQ.label)}
      aside={
        <VStack align="stretch" gap="26px">
          <Box letterSpacing=".06em">
            <Text font={FONTS.T1.T34px.ExtraLight}>
              {t(FAQ.heading)}
            </Text>
          </Box>
          <Box maxW="26ch" opacity={0.65}>
            <Text font={FONTS.T1.T13px.Light}>
              {t(FAQ.note)}
            </Text>
          </Box>
        </VStack>
      }
    >
      <FaqList items={items} />
    </SplitSection>
  );
};

export default Faq;
