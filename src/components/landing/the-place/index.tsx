import { Box, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import FONTS from "@/assets/fonts";
import { Text } from "@/components/core/text";
import { PLACE } from "../content";
import { SplitSection } from "../split-section";

/**
 * "01 — The Place": a narrow eyebrow + heading column beside a wider column of
 * three body paragraphs telling the house's story.
 */
export const ThePlace = () => {
  const t = useTranslations();

  return (
    <SplitSection
      id="place"
      pt="140px"
      pb="40px"
      label={t(PLACE.label)}
      aside={
        <Box letterSpacing=".06em">
          <Text font={FONTS.T1.T40px.ExtraLight}>{t(PLACE.heading)}</Text>
        </Box>
      }
    >
      <VStack align="stretch" gap="26px" pt="6px">
        {PLACE.paragraphs.map((paragraph) => (
          <Box key={paragraph} maxW="52ch" letterSpacing=".02em">
            <Text font={FONTS.T1.T14px.Light}>{t(paragraph)}</Text>
          </Box>
        ))}
      </VStack>
    </SplitSection>
  );
};

export default ThePlace;
