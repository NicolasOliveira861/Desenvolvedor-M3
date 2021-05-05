import React, { useState, useEffect } from "react";
import api from "../../services/api";
import {
  Container,
  OrderByButton,
  Catalog,
  CatalogItem,
  ItemImage,
  ItemTitle,
  ItemPrice,
  ItemInstallment,
  BuyButton,
} from "./styles";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <Container>
      <Navbar />

      <Catalog>{}</Catalog>
    </Container>
  );
}
