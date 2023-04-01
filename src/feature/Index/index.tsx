import { Center, Text } from '@chakra-ui/react';

import Layout from '@/layout/layout';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <Center w="full" h="full" color="black.text.dark" fontWeight="bold">
        <Text>開発頑張ろう！！</Text>
      </Center>
    </Layout>
  );
};

export default IndexPage;
