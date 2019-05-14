```jsx
<Card bg="#f5f5f5" p={4}>
  <Box mb={6}>
    <Heading tag="h3" size="3">
      Меню-аккордеон
    </Heading>
  </Box>
  <Accordion
    items={[
      {
        title: 'Заголовок 1',
        content: (
          <Paragraph size="m">
            Для элементов рубрикации рекомендуем использовать стиль текста Body
            M 500 (Normal). Для основного текста — Body M 300 (Normal) в черном
            цвете.
          </Paragraph>
        ),
      },
      {
        title: 'Заголовок 2',
        content: (
          <Paragraph size="m">
            Для элементов рубрикации рекомендуем использовать стиль текста Body
            M 500 (Normal). Для основного текста — Body M 300 (Normal) в черном
            цвете.
          </Paragraph>
        ),
      },
      {
        title: 'Заголовок 3',
        content: (
          <Paragraph size="m">
            Для элементов рубрикации рекомендуем использовать стиль текста Body
            M 500 (Normal). Для основного текста — Body M 300 (Normal) в черном
            цвете.
          </Paragraph>
        ),
      },
    ]}
  />
</Card>
```