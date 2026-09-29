import { Box, Grid, HStack, VStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import COLORS from '@/assets/colors';
import FONTS from '@/assets/fonts';
import { Text } from '@/components/core/text';
import { FOOTER } from '../content';
import { InstagramIcon } from '../icons/instagram';
import { SectionContainer } from '../section-container';
import { WhatsAppIcon } from '../icons/whatsapp';
import LANDING from '../tokens';
import { FooterColumn } from './footer-column';
import { FooterLink } from './footer-link';
import { SocialIconLink } from './social-icon-link';

const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
} as const;

/**
 * Dark closing footer: brand block, address, contact links and social buttons
 * in a four-column grid, then a hairline bottom bar with the copyright and the
 * closing tagline.
 */
export const SiteFooter = () => {
  const t = useTranslations();

  return (
    <Box
      as="footer"
      id="footer"
      bg={LANDING.ink}
      color={LANDING.cream}
      pt="96px"
      pb="40px"
    >
      <SectionContainer>
        <Grid
          templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1.4fr 1fr 1fr 1fr' }}
          gap={{ base: '40px', md: '56px' }}
          pb="80px"
        >
          <VStack align="stretch" gap="18px">
            <Box letterSpacing=".44em" textTransform="uppercase">
              <Text font={FONTS.T1.T30px.Light} color={COLORS.Text.FgInverse}>
                {FOOTER.brand}
              </Text>
            </Box>
            <Box letterSpacing=".26em" textTransform="uppercase" opacity={0.6}>
              <Text font={FONTS.T1.T10px.Light} color={COLORS.Text.FgInverse}>
                {t(FOOTER.tagline)}
              </Text>
            </Box>
          </VStack>

          <FooterColumn label={t(FOOTER.address.label)}>
            <Text font={FONTS.T1.T13px.Light} color={COLORS.Text.FgInverse}>
              {FOOTER.address.lines.map((line, index) => (
                <span key={line}>
                  {t(line)}
                  {index < FOOTER.address.lines.length - 1 && <br />}
                </span>
              ))}
            </Text>
          </FooterColumn>

          <FooterColumn label={t(FOOTER.contact.label)}>
            <FooterLink href={FOOTER.contact.phoneHref}>{FOOTER.contact.phone}</FooterLink>
            <FooterLink href={FOOTER.contact.emailHref}>{FOOTER.contact.email}</FooterLink>
          </FooterColumn>

          <FooterColumn label={t(FOOTER.follow.label)}>
            <HStack gap="14px">
              {FOOTER.follow.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <SocialIconLink key={social.label} label={social.label} href={social.href}>
                    <Icon />
                  </SocialIconLink>
                );
              })}
            </HStack>
          </FooterColumn>
        </Grid>

        <HStack
          justify="space-between"
          gap="20px"
          pt="28px"
          borderTop="1px solid"
          borderColor={LANDING.hairlineOnDark}
          letterSpacing=".24em"
          textTransform="uppercase"
          opacity={0.5}
        >
          <Text font={FONTS.T1.T9px.Light} color={COLORS.Text.FgInverse}>
            {FOOTER.copyright}
          </Text>
          <Text font={FONTS.T1.T9px.Light} color={COLORS.Text.FgInverse}>
            {t(FOOTER.closingLine)}
          </Text>
        </HStack>
      </SectionContainer>
    </Box>
  );
};

export default SiteFooter;
