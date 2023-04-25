import { useState } from "react";
import { Card, TextContainer, Text, List, Listbox } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";

export function ProductsCard() {
  const emptyToastProps = { content: null };
  const [isLoading, setIsLoading] = useState(true);
  const [toastProps, setToastProps] = useState(emptyToastProps);
  const fetch = useAuthenticatedFetch();

  const {
    data,
    refetch: refetchProductCount,
    isLoading: isLoadingCount,
    isRefetching: isRefetchingCount,
  } = useAppQuery({
    url: "/api/products",
    reactQueryOptions: {
      onSuccess: () => {
        setIsLoading(false);
      },
    },
  });

  const toastMarkup = toastProps.content && !isRefetchingCount && (
    <Toast {...toastProps} onDismiss={() => setToastProps(emptyToastProps)} />
  );

  return (
    <>
      {toastMarkup}
      <Card title="Products" sectioned>
        <Listbox accessibilityLabel="List of all products">
          {!isLoading &&
            data.map(item => {
              console.log(item);
              return (
                <Listbox.Option key={item.id} value={item.id}>
                  {item.title}
                </Listbox.Option>
              );
            })}
          {isLoading && <Listbox.Loading accessibilityLabel="Loading" />}
        </Listbox>
      </Card>
    </>
  );
}
