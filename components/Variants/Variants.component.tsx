import {
  VariantCard,
  VariantHeader,
  VariantTextBody,
  VariantTextHeadline2,
  VariantTextHeadline3,
  VariantIcon1,
  VariantIcon2,
  VariantIcon3,
  VariantPrice,
  VariantHeaderInfo,
  VariantInner,
  VariantInfo,
  VariantLine,
  VariantStyled,
  VariantBackground,
  VariantButton,
} from './Variants.styles';

export const Variant = () => {
  return (
    <VariantStyled>
      <VariantBackground>
        <VariantButton variants="outlined" color="#0B65C6">
          Заказать
        </VariantButton>
      </VariantBackground>
      <VariantCard>
        <VariantHeader>
          <VariantHeaderInfo>
            <VariantIcon1></VariantIcon1>
            <VariantTextHeadline3 variants="headline3">Bitcoin</VariantTextHeadline3>
          </VariantHeaderInfo>
          <VariantHeaderInfo>
            <VariantIcon2></VariantIcon2>
            <VariantTextBody variants="body">12 месяцев</VariantTextBody>
          </VariantHeaderInfo>
        </VariantHeader>
        <VariantInner>
          <VariantPrice>
            <VariantTextBody variants="body">от</VariantTextBody>
            <VariantTextHeadline2 variants="headline2">36.27$</VariantTextHeadline2>
          </VariantPrice>
          <VariantPrice>
            <VariantTextBody variants="body">от</VariantTextBody>
            <VariantTextHeadline2 variants="headline2">1 Gh/s</VariantTextHeadline2>
          </VariantPrice>
          <VariantLine />
          <VariantInfo>
            <VariantIcon3></VariantIcon3>
            <VariantTextBody as="div" variants="body">
              Плата за обслуживание включена в аренду
            </VariantTextBody>
          </VariantInfo>
        </VariantInner>
      </VariantCard>
    </VariantStyled>
  );
};
