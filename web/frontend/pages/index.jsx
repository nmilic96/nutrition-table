import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section oneThird>
          <ProductsCard />
        </Layout.Section>
        <Layout.Section oneHalf>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
