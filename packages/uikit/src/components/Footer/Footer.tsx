import React from "react";
import styled from "styled-components";
import { darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Text } from "../Text";
import { StyledFooter, StyledIconMobileContainer, StyledSocialLinks, StyledToolsContainer } from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import { LogoWithTextIcon, ArrowForwardIcon, LogoIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

const StyledLink = styled("a")`
  display: flex;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  align-items: center;
  .icon {
    width: 160px;
    display: flex;
    .icon-image {
      width: 32px;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const MenuItem: React.FC<FooterProps> = ({
  // items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  buyWKDLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          {/* {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : darkColors.text}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))} */}
          <Box display={["none", null, "block"]}>
            <StyledLink as="a" href="/" aria-label="WKDSwap home page">
              <Flex className="icon" alignItems="center" height="32px">
                <LogoIcon height="32px" className="icon-image" />
                <Text bold color="primary" marginLeft={1}>
                  WKDSwap
                </Text>
              </Flex>
            </StyledLink>
          </Box>
        </Flex>
        <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color={darkColors.textSubtle as keyof Colors}
              dropdownPosition="top-right"
            />
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Button
              as="a"
              href="https://wakandaswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
            >
              {buyWKDLabel}
            </Button>
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
