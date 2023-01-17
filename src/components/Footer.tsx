import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from 'App/AppContext';

const F = {
  Container: styled.div<{ isMobile: boolean }>`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.75rem;
    padding-right: ${({ isMobile }) => (isMobile ? '1.5rem' : '1rem')};
    z-index: 1;
  `,
  Text: styled.p`
    transition: color 0.5s linear;
    color: ${({ theme }) => theme.tertiaryTextColor};
  `,
  Link: styled.a`
    transition: color 0.5s linear;
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryTextColor};
  `,
};

const Footer: React.FC = () => {
  const { isMobile, theme } = useContext(AppContext);

  return (
    <F.Container isMobile={isMobile}>
      <F.Text
        data-v2="footer"
        theme={theme}
        aria-label="Based on website designed and built by Adam Alston"
      >
        {'Based on '}
        <F.Link
          data-v2="creator"
          theme={theme}
          href="https://www.adamalston.com"
          aria-label="Adam's website"
          title="A link to Adam's personal website"
        >
          {'Adam Alston\'s site'}
        </F.Link>
        {!isMobile && (
          <>
            {' | '}
            <F.Link
              data-v2="source"
              theme={theme}
              href="https://github.com/adamalston/v2/"
              aria-label="Source code"
              title="View this website's source code in GitHub"
            >
              {'Adam Alston\'s site\'s Source'}
            </F.Link>
          </>
        )}
      </F.Text>
    </F.Container>
  );
};

export default Footer;
