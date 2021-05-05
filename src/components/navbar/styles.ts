import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em 8em;
  border-bottom: 2px solid var(--grey);

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 1em 1em;
  }
`;

export const Logo = styled.img``;

export const Icon = styled.a`
  text-decoration: none;
  color: var(--black);
  display: flex;
  position: relative;

  .shoppingBag {
    height: 25px;
    width: 25px;
  }
`;

export const Badge = styled.span`
  background: var(--blue);
  font-size: 0.8em;
  color: var(--white);
  border-radius: 50%;
  padding: 0 5px;
  text-align: center;
  position: absolute;
  bottom: -5px;
  right: -10px;
`;
